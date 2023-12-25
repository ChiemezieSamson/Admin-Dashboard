import { SubmitButton } from '@/Components/Dashboard/SharedComponents/SharedComponents'
import { addProductSeleteOptionItems } from '@/Components/Data/Data'

const AddproductPage = () => {
  const selectItem = addProductSeleteOptionItems.map((item, index) => {return {id: index, value: item}})
  return (
    <div className='bgSoft px-5 py-7 rounded-lg mt-5'>
      <form className='grid grid-cols-2 gap-x-[2%]'>
        <input type="text" name="title" id="title" placeholder="title" required className='productForm'/>

        <select name="categories" id="categories" className='productForm'>
          <option value="general">Choose a Category</option>
          {selectItem.map(opt => {
            return (
              <option key={opt.id} value={opt.value} className="capitalize">{opt.value}</option>
            )
          })}
        </select>

        <input type="number" name="price" id="price" placeholder="price" className='productForm'/>
        <input type="number" name="stock" id="stock" placeholder="stock" className='productForm'/>
        <input type="text" name="color" id="color" placeholder="color" className='productForm'/>
        <input type="text" name="size" id="size" placeholder="size" className='productForm'/>
        <textarea name="description" id="description" rows={16} placeholder="Description" className='productForm col-span-2 resize-none'></textarea>
        <div>
          
        </div>
        <SubmitButton submitText={"Submit"}/>
      </form>
    </div>
  )
}

export default AddproductPage
