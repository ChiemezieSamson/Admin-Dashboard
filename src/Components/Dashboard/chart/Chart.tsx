"use client"
import { chartData } from '@/Components/Data/Data';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
  
  return (
    <div className='max-h-[470px] p-5 bgSoft rounded-lg mt-5'>
      <h2 className='textSoft font-extralight mb-5'>Weekly Recap</h2>
      <div>
        <ResponsiveContainer width="100%" height="90%" className="max-h-[400px]">
          <LineChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{background: "#151c2c", border: "none"}}/>
            <Legend />
            <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Chart
