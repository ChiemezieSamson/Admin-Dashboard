import { SubmitButton, UserProductImageComponnet } from "@/Components/Dashboard/SharedComponents/SharedComponents"
import avatar from "./../../../../../public/noavatar.png"
import { addProductSeleteOptionItems } from "@/Components/Data/Data"

const ProductViewPage = () => {
  const selectItem = addProductSeleteOptionItems.map((item, index) => {return {id: index, value: item}})
  return (
    <div className="grid grid-cols-4 gap-x-10 mt-5">
      <UserProductImageComponnet col="col-span-1" name="John Doe" avatar={avatar.src}/>
      <section className="col-span-3 bgSoft p-5 rounded-lg">
      <form className="">
          <label className="font-extralight" htmlFor="title">
            Title
            <input type="text" name="title" id="title" placeholder="John Doe" className="productForm"/>
          </label>

          <label className="font-extralight" htmlFor="price">
            Price
            <input type="text" name="price" id="price" placeholder="$49" className="productForm"/>
          </label>

          <label className="font-extralight" htmlFor="stock">
            Stock
            <input type="number" name="stock" id="stock" placeholder="32" className="productForm"/>
          </label>

          <label className="font-extralight" htmlFor="color">
            color
            <input type="text" name="color" id="color" placeholder="red" className="productForm"/>
          </label>

          <label className="font-extralight" htmlFor="size">
            Size
            <input type="number" name="size" id="size" className="productForm resize-none" placeholder="large" />
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

          <textarea name="description" id="description" rows={6} placeholder="Description" className='productForm col-span-2 resize-none'></textarea>

          <div className="mt-5">
            <SubmitButton submitText={"Update"}/>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ProductViewPage
