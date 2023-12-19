"use client"
import Image from "next/image"
import { transactionTableItems } from "@/Components/Data/Data"

const Transaction = () => {
  return (
    <div className="bgSoft rounded-lg p-5">
      <table className="w-full">
        <caption className="mb-5 font-extralight textSoft">Latest Transactions</caption>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>

        <tbody>       
          {transactionTableItems.map((transac) => {
          type color = string

          let stautusColor: color

            if (transac.status === "pending") {
              stautusColor = "bg-[#f7cb7375]"
            } else if (transac.status === "done") {
              stautusColor = "bg-[#afd6ee75]"
            } else {
              stautusColor = "bg-[#f7737375]"
            }

            return (
            <tr key={transac.id}>
              <td>
                <figure className="grid grid-flow-col max-w-[150px] items-center">
                  <Image src={transac.image} alt="" className="w-10 h-10 rounded-full"/>
                  <figcaption className="">John Doe</figcaption>
                </figure>
              </td>
              <td>
                <span className={`rounded p-1.5 text-sm text-white ${stautusColor}`}>
                  {transac.status}
                </span>
              </td>
              <td>{transac.date}</td>
              <td>{transac.amount}</td>
            </tr>
            )
          })}                  
        </tbody>
      </table>
    </div>
  )
}

export default Transaction
