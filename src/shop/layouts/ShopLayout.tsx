import { Outlet } from "react-router"
import { CustomHeader } from "../components/CustomHeader"
import { CustomFooter } from "../components/CustomFooter"

export const ShopLayout = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
        <CustomHeader />
        <main>
            <Outlet />
        </main>
        <CustomFooter />
    </div>
  )
}
