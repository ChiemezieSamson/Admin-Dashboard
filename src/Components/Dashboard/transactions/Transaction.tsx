"use client"
import Image from "next/image"
import avatar from "./../../../../public/noavatar.png"
import { transactionTableItems } from "@/Components/Data/Data"

const Transaction = () => {
  return (
    <div>
      <table>
        <caption>Latest Transactions</caption>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {transactionTableItems.map((transac) => {

             return (
              <>
                <td>
                  <figure>
                    <Image src={transac.image} alt="" className="w-10 h-10"/>
                    <figcaption>John Doe</figcaption>
                  </figure>
                </td>
                <td>{transac.status}</td>
                <td>{transac.date}</td>
                <td>{transac.amount}</td>
              </>
              )
            })}            
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction
