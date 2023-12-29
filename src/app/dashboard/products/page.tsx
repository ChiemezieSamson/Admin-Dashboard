import { AddNewButton, Search } from "@/Components/Dashboard/SharedComponents/SharedComponents"
import Pagination from "@/Components/Dashboard/pagination/Pagination"
import Products from "@/Components/Dashboard/products/Products"
import { fetchProducts } from "@/app/lib/mongoose/routes/productRoute"


const ProductPage = async ({searchParams}:{searchParams: any}) => {
  const product = searchParams?.product 
  const page: string = searchParams?.page
  const {products, totalProducts} = await fetchProducts({product, page})
  
  return (
    <div className="bgSoft p-5 rounded-lg mt-5">
      <div className="grid grid-flow-col items-center justify-between">
        <Search placeholder={"Search for a product..."}/>
        <AddNewButton url="products/add-new-products" text="Add New"/>
      </div>

      <div>
        <Products products={products}/>
      </div>

      <div className="mt-10">
        <Pagination count={totalProducts}/>
      </div>
    </div>
  )
}

export default ProductPage