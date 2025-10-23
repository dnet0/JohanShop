import { RouterProvider } from 'react-router'
import { appRouter } from './app.router'

export const ShopApp = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}
