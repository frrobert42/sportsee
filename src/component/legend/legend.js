import "./legend.css";
import PropTypes from "prop-types";

export default function LegendComponent(props) {
    let value = 0;
    if (props?.payload[0]?.payload?.value) value = props.payload[0].payload.value;
    return (
        <div className={"custom-legend-rating"}>
            <p className='text-black'>
                {value}%
            </p>
            <p className='text-gray-600'> de votre objectif</p>
        </div>
    )
}

LegendComponent.propTypes = {
    payload: PropTypes.array,
};
