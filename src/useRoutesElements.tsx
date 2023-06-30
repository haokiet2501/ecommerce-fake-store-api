import { useRoutes } from 'react-router-dom'
import { path } from './constant/path'
import ProductList from './pages/ProductList'

export default function useRouteElement() {
  const routesElements = useRoutes([
    {
      path: path.home,
      index: true,
      element: <ProductList />
    }
  ])
  return routesElements
}
