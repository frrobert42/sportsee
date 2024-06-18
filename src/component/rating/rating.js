'use client';
import "./rating.css";
import {Legend, RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";
import PropTypes from "prop-types";
import LegendComponent from "../legend/legend";

export default function Rating(props) {
    console.log(props);
    let todayScore = [
        {todayScore: props.todayScore || props.score * 100},
        {fill: "#ffffff00", todayScore: 100},
    ];

    return (
        <div className='rating'>
            <h3> Score </h3>
            <ResponsiveContainer width='100%' height='100%'>
                <RadialBarChart startAngle={90} endAngle={450} cx='50%' cy='50%' innerRadius={70} barSize={10}
                                outerRadius={120} data={todayScore}>
                    <RadialBar cornerRadius='50%' dataKey='todayScore' fill='#E60000'/>
                    <Legend content={LegendComponent}/>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}

Rating.propTypes = {
    todayScore: PropTypes.number,
    score: PropTypes.number,
};
