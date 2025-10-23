import { Button } from "@/components/ui/button"
import { Outlet } from "react-router"

export const ShopLayout = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
        ShopLayout
        <Outlet />
    </div>
  )
}
