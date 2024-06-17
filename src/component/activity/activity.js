'use client';
import "./activity.css";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import ActivityToolType from "../activity-tooltip/activity-tooltip";

export default function ActivityChart(data) {

    if (!data.activity.sessions) return (<></>);

    let dataWithIndex = data.activity.sessions.map((item, index) => {
        return {
            ...item,
            index: index + 1
        }
    });

    return (
        <div className='activity'>
            <div className={"flex flex-nowrap justify-between"}>
                <h3> Activité quotidienne </h3>
                <div className={"flex flex-row flex-nowrap"}>
                    <div className={"flex flex-row"}>
                        <span className={"icon weight"}/>
                        <span>Poids (kg)</span>
                    </div>
                    <div className={"flex flex-row"}>
                        <span className={"icon cal"}/>
                        <span>Calories brûlées (kCal)</span>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart width='835' height='320' data={dataWithIndex}>
                    <CartesianGrid strokeDasharray='3 3' vertical={false}/>
                    <XAxis dataKey='index' tickLine={false} axisLine={false}/>
                    <XAxis dataKey='calories' type='number' tickLine={false} axisLine={false}/>
                    <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false}
                           domain={['dataMin - 1', 'dataMax + 1']}/>
                    <YAxis dataKey={"calories"} type={"number"} yAxisId={"calorie"} hide/>
                    <Tooltip content={<ActivityToolType/>}/>
                    <Bar name='Poids (kg)' dataKey='kilogram' radius={[10, 10, 0, 0]} barSize={7} fill='#282D30'/>
                    <Bar name='Calories brûlées (kCal)' dataKey='calories' radius={[10, 10, 0, 0]} barSize={7}
                         yAxisId='calorie' fill='#E60000'/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
