import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { type FC } from "react";
import { useSearchParams } from "react-router";

interface Props {
  totalPages?: number,
}

export const CustomPagination: FC<Props> = ({ totalPages=0 }) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get('page') ?? 1;
  const page = isNaN(+queryPage) ? 1 : +queryPage;

  const handleChangePage = (page: number) => {
    if(page <= 1 && page > totalPages) return;
    setSearchParams(prev =>{
      prev.set('page', (page).toString());
      return prev
    });
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button 
      variant="outline" 
      size="sm" 
      disabled={page === 1 || totalPages === 0}
      onClick={() => handleChangePage(page - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
        Anteriores
      </Button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Button 
        key={index}
        variant={page === index + 1 ? "default" : "outline"} 
        size="sm"
        onClick={() => handleChangePage(index + 1)}

        >
          {index + 1}
        </Button>
      ))}


      <Button 
      variant="outline" 
      size="sm"
      disabled={page === totalPages || totalPages === 0}
      onClick={() => handleChangePage(page + 1)}
      >
        Siguiente
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
