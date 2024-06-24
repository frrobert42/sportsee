'use client';
import "./activity.css";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import ActivityToolType from "../activity-tooltip/activity-tooltip";

export default function ActivityChart(data) {

    let dataWithIndex = data?.activity?.sessions?.map((item, index) => {
        return {
            ...item,
            index: index + 1
        }
    });

    if (!data?.activity?.sessions) {
        dataWithIndex = [];
    }

    return (
        <div className='activity'>
            <div className={"flex flex-nowrap justify-between"}>
                <h3> Activité quotidienne </h3>
                <div className={"flex flex-row flex-nowrap"}>
                    <div className={"flex flex-row justify-center align-items-center"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                                  fill="#282D30"/>
                        </svg>
                        <span className={"activity-icon-legend"}>Poids (kg)</span>
                    </div>
                    <div className={"flex flex-row justify-center align-items-center cal-m"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
                                  fill="#E60000"/>
                        </svg>
                        <span className={"activity-icon-legend"}>Calories brûlées (kCal)</span>
                    </div>
                </div>
            </div>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart width='835' height='230' data={dataWithIndex}>
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
