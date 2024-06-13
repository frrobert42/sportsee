'use client';
import "./stats.css";
import PropTypes from "prop-types";

export default function Stats(props) {

    if (!props.stats) return (<></>);

    return (
        <div className={"stats text-center flex flex-row flex-nowrap"}>
            <img
                src={props.stats.icon}
                width={60}
                height={60}
                alt={props.stats.title}
            />
            <div className={"stats-content text-left"}>
                <h2>{props.stats.value + props.stats.unit}</h2>
                <p>{props.stats.title}</p>
            </div>
        </div>
    );
}

Stats.propTypes = {
    stats: PropTypes.object.isRequired,
};
