import "./legend.css";

export default function LegendComponent(props) {
    if (!props.payload[0]?.payload?.value) return (<></>);
    const value = props.payload[0].payload.value;
    return (
        <div className={"custom-legend-rating"}>
            <p className='text-black'>
                {value}%
            </p>
            <p className='text-gray-600'> de votre objectif</p>
        </div>
    )
}
