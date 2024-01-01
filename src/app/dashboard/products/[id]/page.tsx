import { SubmitButton, UserProductImageComponnet } from "@/Components/Dashboard/SharedComponents/SharedComponents"
import avatar from "./../../../../../public/noavatar.png"
import { addProductSeleteOptionItems } from "@/Components/Data/Data"
import { fetchSingleProduct } from "@/app/lib/actions/fetchSingleProduct/fetchSingleProduct";
import updateProduct from "@/app/lib/actions/updateProduct/updateProduct";

const ProductViewPage = async ({params}: {params: {id: string}}) => {
  const product: any | null = await fetchSingleProduct(params); 
  const selectItem = addProductSeleteOptionItems.map((item, index) => {return {id: index, value: item}})

  return (
    <div className="grid grid-cols-4 gap-x-10 mt-5">
      <UserProductImageComponnet col="col-span-1" name="John Doe" avatar={avatar.src} item={JSON.parse(JSON.stringify(product))}/>
      <section className="col-span-3 bgSoft p-5 rounded-lg">
        <form action={updateProduct}>
          <input type="hidden" name="_id" value={JSON.parse(JSON.stringify(product._id))}/>
          <label className="font-extralight" htmlFor="title">
            Title
            <input type="text" name="title" id="title" placeholder={JSON.parse(JSON.stringify(product.title))} className="productForm"/>
          </label>

          <label className="font-extralight" htmlFor="price">
            Price
            <input type="text" name="price" id="price" placeholder={JSON.parse(JSON.stringify(product.price))} className="productForm"/>
          </label>

          <label className="font-extralight" htmlFor="stock">
            Stock
            <input type="number" name="stock" id="stock" placeholder={JSON.parse(JSON.stringify(product.stock))} className="productForm"/>
          </label>

          <label className="font-extralight" htmlFor="color">
            color
            <input type="text" name="color" id="color" placeholder={JSON.parse(JSON.stringify(product.color))} className="productForm"/>
          </label>

          <label className="font-extralight" htmlFor="size">
            Size
            <input type="number" name="size" id="size" className="productForm resize-none" placeholder={JSON.parse(JSON.stringify(product.size))} />
          </label>

          <label className="font-extralight" htmlFor="categories">
            Categories
            <select name="categories" id="categories" className='productForm'>
              <option value="general">Choose a Category</option>
              {selectItem.map(opt => {
                return (
                  <option key={opt.id} value={opt.value} className="capitalize">{opt.value}</option>
                )
              })}
            </select>
          </label>

          <textarea name="description" id="description" rows={6} placeholder={JSON.parse(JSON.stringify(product.description))} className='productForm col-span-2 resize-none'></textarea>

          <div className="mt-5">
            <SubmitButton submitText={"Update"}/>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ProductViewPage
