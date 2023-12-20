
const Pagination = () => {
  return (
    <div className="p-2.5 grid grid-flow-col justify-between">
      <button className="px-2.5 py-1.5 cursor-pointer disabled:cursor-not-allowed">Previous</button>
      <button className="px-2.5 py-1.5 cursor-pointer disabled:cursor-not-allowed">Next</button>      
    </div>
  )
}

export default Pagination
