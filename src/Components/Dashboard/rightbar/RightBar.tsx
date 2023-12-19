"use client"

import { rightbarItems } from "@/Components/Data/Data"
import Image from "next/image"

const RightBar = () => {
  return (
    <div>
      {rightbarItems.map(item => {
        return (
          <div key={item.id}>
            <div>
              <Image src={item.image} alt="" className="object-fill"/>
            </div>
            <div>
              <span>{item.notifiation}</span>
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
              <p>
                {item.text}
              </p>
              <button>
                <span>{item.button?.icon}</span>
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
