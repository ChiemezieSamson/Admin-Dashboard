import Card from "@/Components/Dashboard/card/Card"
import Chart from "@/Components/Dashboard/chart/Chart"
import RightBar from "@/Components/Dashboard/rightbar/RightBar"
import Transaction from "@/Components/Dashboard/transactions/Transaction"

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-x-5 mt-5"> 
      {/* cards */}
      <div className="col-span-3 grid gap-5">
        <ul className="grid grid-cols-3 justify-between gap-5">
          <Card />
        </ul>
        <div>
          <Transaction />
          <Chart />
        </div>
      </div>


      {/* inner Side bar */}
      <div className="col-span-1">
        <RightBar />
      </div>
    </div>
  )
}

export default Dashboard