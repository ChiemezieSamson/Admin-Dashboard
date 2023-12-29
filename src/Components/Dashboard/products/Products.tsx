import { prodctsItem } from "@/Components/Data/Data"
import Image from "next/image"
import Link from "next/link"

const Products = ({products}: {products: any[] | undefined}) => {

  return (
    <table className="w-full">
      <caption className="mb-5 font-extralight textSoft">Latest Transactions</caption>
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>price</td>
          <td>Created At</td>
          <td>Stock</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody>
        {Array.isArray(products) && products.map(product => {

          return (
          <tr key={product._id}>
            <td>
              <figure className="grid grid-cols-3 max-w-[180px] items-center text-left">
                <Image src={product.image || prodctsItem[0].avatar} alt="" className="w-10 h-10 rounded-full col-span-1"/>
                <figcaption className="col-span-2">{product.title}</figcaption>
              </figure>
            </td>
            <td><span>{product.description}</span></td>
            <td><span>{product.price}</span></td>
            <td><span>{product.CreatedAt?.toString().slice(0, 16)}</span></td>
            <td><span>{product.stock}</span></td>
            <td>
              <div className="grid grid-flow-col gap-x-2.5 max-w-[90px]">
                <Link href={`/dashboard/products/${product.title}`}>
                  <button className="button px-2.5 py-1.5 bg-teal-500">View</button>
                </Link>
                
                <button className="button px-2.5 py-1.5 bg-red-500">Delete</button>                
              </div>
            </td>
          </tr>
          )
        })}          
      </tbody>
    </table>      
  )
}

export default Products