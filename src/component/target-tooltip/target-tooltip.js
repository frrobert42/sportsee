import "./target-tooltip.css";
import PropTypes from "prop-types";

export default function TargetToolType({active, payload}) {


    if (active && payload?.length) {
        return (
            <div className='custom-tooltip-target'>
                <p> {`${payload[0].value} min`}</p>
            </div>
        )
    }
}

TargetToolType.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
};
