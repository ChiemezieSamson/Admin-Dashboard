"use client"

import { rightbarItems } from "@/Components/Data/Data"
import Image from "next/image"

const RightBar = () => {
  return (
    <div className="fixed">
      {rightbarItems.map(item => {
        return (
          <div key={item.id} className="relative isolate bg-gradient-to-b from-[#182237] to-[#253352] p-5 m-5 rounded-lg">
            {item.image &&
              <div className="absolute right-0 bottom-0 w-1/2 h-1/2 -z-10">
                <Image src={item.image} alt=""  fill className="opacity-20 object-contain"/>
              </div>
            }
            <div className="grid gap-y-4">
              <span className="font-bold">{item.notifiation}</span>
              <h3 className="text-xs font-medium textSoft">{item.title}</h3>
              <span>{item.subtitle}</span>
              <p>
                {item.text}
              </p>
              <button type="button" className="max-w-[100px] text-white bg-[#5d57c9] button">
                <span className="text-xl">{item.button?.icon}</span>
                {item.button?.text}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RightBar
