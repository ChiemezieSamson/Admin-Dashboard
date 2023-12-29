"use client"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

const Pagination = ({count}: {count: number | undefined}) => {
  const searchParams = useSearchParams()
  const {replace} = useRouter()
  const pathname = usePathname()

  const page = searchParams.get("page")
  const pagenumber: number = page ? parseInt(page) : 1
  const _items_per_page = 2
  const params = new URLSearchParams(searchParams)

  const next = _items_per_page * (pagenumber - 1) +  _items_per_page < (count ? count : 3)
  
  const handleChangePage = (type: string): void => {

    if (page && type === "prev") {
      if (pagenumber > 2)  {
        const newPage = pagenumber - 1
        params.set("page", `${newPage}`)
        replace(`${pathname}?${params}`)
      } else {
        replace(`${pathname}`)
      }
    } else {
      const newPage = pagenumber + 1
      params.set("page", `${newPage}`)
      replace(`${pathname}?${params}`)
    }  
    
  }

  return (
    <div className="p-2.5 grid grid-flow-col justify-between">
      <button className="px-2.5 py-1.5 cursor-pointer disabled:cursor-not-allowed" disabled={!page} onClick={()=> handleChangePage("prev")}>Previous</button>
      <button className="px-2.5 py-1.5 cursor-pointer disabled:cursor-not-allowed" disabled={!next} onClick={()=> handleChangePage("next")}>Next</button>      
    </div>
  )
}

export default Pagination
