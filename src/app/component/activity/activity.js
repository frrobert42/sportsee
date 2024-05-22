'use client';
import "./activity.css";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis} from "recharts";

export default function ActivityChart(data) {

    if (!data) {
        data = [];
    }

    let dataWithIndex = data.activity.map((item, index) => {
        return {
            ...item,
            index: index + 1
        }
    });

    if (!dataWithIndex) {
        dataWithIndex = [];
    }

    console.log(data)

    return (
        <div className='activity'>
            <h3> Activité quotidienne </h3>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart width='835' height='320' data={dataWithIndex}>
                    <CartesianGrid strokeDasharray='3 3' vertical={false}/>
                    <XAxis dataKey='index' tickLine={false} axisLine={false}/>
                    <XAxis dataKey='calories' type='number' tickLine={false} axisLine={false}/>
                    <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false}
                           domain={['dataMin - 1', 'dataMax + 1']}/>
                    <YAxis dataKey='calories' type='number' yAxisId='calorie' hide/>

                    <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{marginTop: '-23px'}}
                            formatter={(value, entry, index) => <span className='text-color'>{value}</span>}/>
                    <Bar name='Poids (kg)' dataKey='kilogram' radius={[10, 10, 0, 0]} barSize={7} fill='#282D30'/>
                    <Bar name='Calories brûlées (kCal)' dataKey='calories' radius={[10, 10, 0, 0]} barSize={7}
                         yAxisId='calorie' fill='#E60000'/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
