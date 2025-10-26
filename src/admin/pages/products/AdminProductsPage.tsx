import { AdminTitle } from "@/admin/components/AdminTitle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router";
import { CustomPagination } from '../../../components/custom/CustomPagination';
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export const AdminProductsPage = () => {
  return (
    <>
    <div className ="flex justify-between items-center">
      <AdminTitle
        title="Detalles de Productos"
        subtitle="Administra la información detallada de tus productos."
      />
      <Link to="/admin/products/new">
        <Button>
          <PlusIcon/>
          Nuevo Producto
        </Button>
      </Link>

    </div>

      <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Inventario</TableHead>
            <TableHead>Tallas</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>
              <img
                src="http://placehold.co/250x250"
                alt="Product Image"
                className="w-20 h-20 object-cover rounded-md"
              />
            </TableCell>
            <TableCell>Product 1</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>Categoría 1</TableCell>
            <TableCell>100 stock</TableCell>
            <TableCell>XS, S, L</TableCell>
            <TableCell className="text-right">
              <Link to={`${"t-shirt-tesla"}`}>Editar</Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CustomPagination totalPages={10}/>
    </>
  );
};
