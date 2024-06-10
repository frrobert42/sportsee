'use client';
import "./rating.css";
import {Legend, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";

export default function Rating(props) {
    let todayScore = [
        {todayScore: props.todayScore || 75},
        {fill: "#ffffff00", todayScore: 100},
    ];

    return (
        <div className='rating'>
            <h3> Score </h3>
            <ResponsiveContainer width='100%' height='100%'>
                <RadialBarChart startAngle={90} endAngle={450} cx='50%' cy='50%' innerRadius={70} barSize={10}
                                outerRadius={120} data={todayScore}>
                    <RadialBar cornerRadius='50%' dataKey='todayScore' fill='#E60000'/>
                    <Legend content={
                        <>
                            <div className={"custom-legend-rating"}>
                                <p className='text-black'>
                                    75%
                                </p>
                                <p className='text-gray-600'> de votre objectif</p>
                            </div>
                        </>
                    }/>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}
