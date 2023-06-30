import { useRoutes } from 'react-router-dom'
import { path } from './constant/path'
import ProductList from './pages/ProductList'
import ProductsDetail from './pages/ProductDetail/ProductsDetail'

export default function useRouteElement() {
  const routesElements = useRoutes([
    {
      path: path.home,
      index: true,
      element: <ProductList />
    },
    {
      path: path.productId,
      element: <ProductsDetail />
    }
  ])
  return routesElements
}
