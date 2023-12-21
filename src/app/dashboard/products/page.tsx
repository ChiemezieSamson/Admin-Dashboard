import { AddNewButton, Search } from "@/Components/Dashboard/SharedComponents/SharedComponents"
import Pagination from "@/Components/Dashboard/pagination/Pagination"
import Products from "@/Components/Dashboard/products/Products"


const ProductPage = () => {
  return (
    <div className="bgSoft p-5 rounded-lg mt-5">
      <div className="grid grid-flow-col items-center justify-between">
        <Search placeholder={"Search for a product..."}/>
        <AddNewButton url="products" text="Add New"/>
      </div>

      <div>
        <Products />
      </div>

      <div className="mt-10">
        <Pagination />
      </div>
    </div>
  )
}

export default ProductPage