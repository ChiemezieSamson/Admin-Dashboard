"use Client"

import { cardItems } from "@/Components/Data/Data"

const Card = () => {
  return (
    <>
      {cardItems.map((card) => {
        return (
          <li key={card._id} className="cursor-pointer gap-5 grid grid-flow-col rounded-lg p-5 bgSoft w-full hover:bg-[#2e374a]">
            <span>
              {card.icon}
            </span>

            <div className="grid grid-flow-row gap-5">
              <h3>{card.title}</h3>
              <span className="text-2xl font-medium">{card.figure}</span>
              <p className="text-sm font-light">
                <span className="text-lime-600">{card.detail.percent}</span> {card.detail.text}
              </p>
            </div>
          </li>
        )
      })  
      }      
    </>
  )
}

export default Card
