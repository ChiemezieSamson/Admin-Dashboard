import { usersItem } from "@/Components/Data/Data"
import Image from "next/image"
import Link from "next/link"
import { MdSearch } from "react-icons/md"
import Avatar from "./../../../../public/noavatar.png"
import React from "react"


export const Search = ({placeholder}: {placeholder: string}) => ( <SearchInput placeholder={placeholder}/> )

export const SearchInput = ({placeholder}: {placeholder: string}) => {
  return (
    <div className="bg-[#2e374a] grid items-center grid-flow-col gap-x-2.5 rounded-lg p-2.5">
      <MdSearch />
      <input type="text" placeholder={placeholder} className="bg-transparent border-0 focus:border-0 outline-0 focus:outline-0 text-white"/>
    </div>
  )
}

export const AddNewButton = ({text, url}: {text: string, url: string}) => {

  return (
    <Link href={`/dashboard/${url}`}>
      <button className="p-2.5 max-w-[100px] text-white bg-[#5d57c9] button">{text}</button>
    </Link>
  )
}