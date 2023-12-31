"use client"
import Image from "next/image"
import Link from "next/link"
import { MdSearch } from "react-icons/md"
import React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"


export const Search = ({placeholder}: {placeholder: string}) => ( <SearchInput placeholder={placeholder}/> )

export const SearchInput = ({placeholder}: {placeholder: string}) => {
  const searchParams = useSearchParams()
  const {replace} = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((event: any) => {

    if (event.target.value && event.target.value.length > 2) {

      const params = new URLSearchParams(searchParams)
    
      params.set("product", event.target.value)
    
      replace(`${pathname}?${params}`)
    } else {
      replace(`${pathname}`)
    }

  }, 300)

  
  return (
    <div className="bg-[#2e374a] grid items-center grid-flow-col gap-x-2.5 rounded-lg p-2.5">
      <MdSearch />
      <input type="text" placeholder={placeholder} className="bg-transparent border-0 focus:border-0 outline-0 focus:outline-0 text-white" onChange={handleSearch}/>
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

export const SubmitButton = ({submitText}: {submitText: string}) => (<button type="submit" className='text-white bg-teal-500 button col-span-2'>{submitText}</button>)

export const UserProductImageComponnet = ({avatar, name, col, item}: {avatar: string, name: string, col: string, item: any}) => {
  return (
    <section className={`${col ? col : "col-span-1"} bgSoft p-5 rounded-lg font-bold textSoft h-max`}>
      <figure>
        <div className="w-full h-72 relative rounded-lg overflow-hidden mb-5">
          <Image src={JSON.parse(JSON.stringify(item.image)) || avatar} alt="" fill/>
        </div>
        <figcaption>{item.username ? JSON.parse(JSON.stringify(item.username)) : JSON.parse(JSON.stringify(item.title))}</figcaption>
      </figure>
    </section>
  )
}