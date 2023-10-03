import "./chart.scss"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,AreaChart,Area } from 'recharts';
import React, { PureComponent } from 'react';

const data =[
        {name:"january",Total:1200},
        {name:"febuary",Total:2100},
        {name:"march",Total:800},
        {name:"april",Total:1600},
        {name:"may",Total:900},
        {name:"june",Total:1700},
    
]

const Chart =()=>{
    return(
        <div className="chart">
        <div className="title">Last 6 months (revenue)</div>
        <ResponsiveContainer width="100%" aspect={2/1} className="chartGrid">
  <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#Total)" />
    {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
  </AreaChart>
</ResponsiveContainer>
</div>
    )
}
export default Chart