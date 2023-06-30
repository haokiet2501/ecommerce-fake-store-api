import http from 'src/utils/http'
// import { SuccessResponse } from 'src/types/utils.type'
import { Product } from 'src/types/product.type'

const URL = 'products'

const productApi = {
  getProducts() {
    return http.get<Product[]>(URL)
  },
  getProductDetail(id: string) {
    return http.get<Product>(`${URL}/${id}`)
  }
}

export default productApi
