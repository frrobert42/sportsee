import "./activity-tooltip.css";
import PropTypes from "prop-types";

export default function ActivityToolType({payload}) {

    if (!payload[0]?.value || !payload[1]?.value) return (<></>);

    return (
        <div className={"toolType"}>
            <p>{payload[0].value}kg</p>
            <p>{payload[1].value}Kcal</p>
        </div>
    );
}

ActivityToolType.propTypes = {
    payload: PropTypes.array,
};
