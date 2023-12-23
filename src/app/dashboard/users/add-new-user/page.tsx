import { addProductSeleteOptionItems } from '@/Components/Data/Data'

const AddproductPage = () => {
  const selectItem = addProductSeleteOptionItems.map((item, index) => {return {id: index, value: item}})
  return (
    <div className='bgSoft p-5 rounded-lg mt-5'>
      <form className='grid grid-cols-2 gap-x-[2%]'>
        <input type="text" name="username" id="username" placeholder="username" required className='productForm'/>
        <input type="email" name="email" id="email" placeholder="email" required className='productForm'/>
        <input type="password" name="password" id="password" placeholder="password" required className='productForm'/>
        <input type="tel" name="phone" id="phone" placeholder="phone" className='productForm'/>

        <select name="admin" id="admin" className='productForm'>
          <option value={0}>is Admin</option>
          <option value={1} className="capitalize">Yes</option>
          <option value={0} className="capitalize">No</option>
        </select>

        <select name="active" id="active" className='productForm'>
          <option value={1}>is Active</option>
          <option value={1} className="capitalize">Yes</option>
          <option value={0} className="capitalize">No</option>         
        </select>
        <textarea name="address" id="address" rows={16} placeholder="address" className='productForm col-span-2 resize-none'></textarea>
        <button type="submit" className='text-white bg-teal-500 button col-span-2'>Submit</button>
      </form>
    </div>
  )
}

export default AddproductPage
