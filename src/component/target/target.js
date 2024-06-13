'use client';
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import "./target.css";
import PropTypes from 'prop-types';

export default function Target(props) {

    if (!props.sessions) return (<></>);

    return (
        <div className='target'>
            <h3> Durée moyenne des sessions </h3>
            <ResponsiveContainer width='100%' height='100%' className={"px-0"}>
                <LineChart
                    width='258'
                    height='263'
                    data={props.sessions}
                    margin={{top: 5, right: 10, left: 10, bottom: 5}}
                >
                    <XAxis dataKey={'day'} stroke={'#FFFFFF'} opacity={0.5} tickLine={false} axisLine={false} />
                    <YAxis padding={{top: 50}} stroke={'#FFFFFF'} opacity={0.5} tickLine={false} axisLine={false} hide />
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
            <div className='custom-tooltip-target'>
                <p> {`${payload[0].value} min`}</p>
            </div>
        )
    }
    return null
}

Target.propTypes = {
    sessions: PropTypes.array.isRequired,
};
