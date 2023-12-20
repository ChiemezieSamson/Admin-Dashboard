import Image from "next/image"
import { MdSearch } from "react-icons/md"


export const Search = ({placeholder}: {placeholder: string}) => ( <SearchInput placeholder={placeholder}/> )

export const SearchInput = ({placeholder}: {placeholder: string}) => {
  return (
    <div className="bg-[#2e374a] grid items-center grid-flow-col gap-x-2.5 rounded-lg p-2.5">
      <MdSearch />
      <input type="text" placeholder={placeholder} className="bg-transparent border-0 focus:border-0 outline-0 focus:outline-0 text-white"/>
    </div>
  )
}