import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router";

export const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sizes = [
    { id: "xs", label: "XS" },
    { id: "s", label: "S" },
    { id: "m", label: "M" },
    { id: "l", label: "L" },
    { id: "xl", label: "XL" },
    { id: "xxl", label: "XXL" },
  ];

  // Handle Size Selection
  const selectSizes = searchParams.get("size")?.split(",") || [];
  const handleSelectSize = (sizeId: string) => {
    setSearchParams(prev => {
      const newSizes =selectSizes.includes(sizeId) 
      ? selectSizes.filter(size => size !== sizeId)
      : [...selectSizes, sizeId];

      prev.set("page", "1");
      prev.set("size", newSizes ? newSizes.join(",") : "");
      return prev;
    });
  }

  // Handle Price Range Selection

  const priceRange = searchParams.get("price") || "any";

  const handlePriceRangeChange = (price: string) => {
    setSearchParams(prev => {
      prev.set("page", "1");
      prev.set("price", price);
      return prev;
    });
  }

  return (
    <div className="w-64 space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-4">Filtros</h3>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h4 className="font-medium">Tallas</h4>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <Button
              key={size.id}
              onClick={() => handleSelectSize(size.id)}
              variant={selectSizes.includes(size.id) ? 'default' : 'outline'}
              size="sm"
              className="h-8"
            >
              {size.label}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="space-y-4">
        <h4 className="font-medium">Precio</h4>

        <RadioGroup 
        value={priceRange}
        onValueChange={handlePriceRangeChange}
        defaultValue=""
        className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
            value="any" 
            id="priceAny"
             />
            <Label htmlFor="priceAny" className="text-sm cursor-pointer">Cualquier precio</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0-50" id="price1" />
            <Label htmlFor="price1" className="text-sm cursor-pointer">$0 - $50</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="50-100" id="price2" />
            <Label htmlFor="price2" className="text-sm cursor-pointer">$50 - $100</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="100-200" id="price3" />
            <Label htmlFor="price3" className="text-sm cursor-pointer">$100 - $200</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="200+" id="price4" />
            <Label htmlFor="price4" className="text-sm cursor-pointer">$200+</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};
