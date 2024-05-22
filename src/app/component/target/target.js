'use client';
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import "./target.css";

export default function Target(props) {

    console.log(props.sessions);
    const xAxis = {
        // dataKey={'day'} stroke={'#FFFFFF'} opacity={0.5} tickLine={false} axisLine={false}
    };

    return (
        <div className='target bg-red-600'>
            <h3> Durée moyenne des sessions </h3>
            <ResponsiveContainer width='100%' height='100%' className={"px-0"}>
                <LineChart
                    width='258'
                    height='263'
                    data={props.sessions}
                    margin={{top: 5, right: 10, left: 10, bottom: 5}}
                >
                    <XAxis dataKey={'day'} stroke={'#FFFFFF'} opacity={0.5} tickLine={false} axisLine={false}></XAxis>
                    <YAxis padding={{top: 50}} stroke={'#FFFFFF'} opacity={0.5} tickLine={false} axisLine={false} hide></YAxis>
                    <Tooltip content={<TooltipTarget/>}/>
                    <Legend/>
                    <Line type='basis' dataKey='sessionLength' stroke='#FFFFFF' dot={false} strokeWidth={2}
                          legendType='none'/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

const TooltipTarget = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className='custom-tooltip-objectif'>
                <p> {`${payload[0].value} min`}</p>
            </div>
        )
    }
    return null
}
