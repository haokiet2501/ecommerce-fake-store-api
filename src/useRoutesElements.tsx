import { useRoutes } from 'react-router-dom'
import { path } from './constant/path'
import Product from './pages/Product'

export default function useRouteElement() {
  const routesElements = useRoutes([
    {
      path: path.home,
      index: true,
      element: <Product />
    }
  ])
  return routesElements
}
