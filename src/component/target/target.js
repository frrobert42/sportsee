'use client';
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import "./target.css";
import PropTypes from 'prop-types';
import TargetToolType from "../target-tooltip/target-tooltip";

export default function Target(props) {
    const formatData = props.sessions.map((data) => {

        switch (data.day) {
            case 1:
                return { ...data, day: "L" };
            case 2:
                return { ...data, day: "M" };
            case 3:
                return { ...data, day: "M" };
            case 4:
                return { ...data, day: "J" };
            case 5:
                return { ...data, day: "V" };
            case 6:
                return { ...data, day: "S" };
            case 7:
                return { ...data, day: "D" };
            default:
                return { ...data };
        }
    });

    if (!props.sessions || !formatData) return (<></>);

    return (
        <div className='target'>
            <h3> Durée moyenne des sessions </h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={formatData} strokeWidth={2}>
                    <XAxis
                        type="category"
                        dataKey="day"
                        tickLine={true}
                        stroke="red"
                        padding={{right:5, left:5}}
                        tick={{ fontSize: 12, stroke: "white", opacity: 0.8}}
                    />
                    <YAxis
                        dataKey="sessionLength"
                        domain={[0, "dataMax + 30"]}
                        hide={true}
                    />
                    <Tooltip content={<TargetToolType />} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.7)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

Target.propTypes = {
    sessions: PropTypes.array.isRequired,
};
