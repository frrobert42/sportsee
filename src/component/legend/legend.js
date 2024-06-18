import "./legend.css";

export default function LegendComponent(props) {
    if (!props) return (<></>);
    return (
        <div className={"custom-legend-rating"}>
            <p className='text-black'>
                75%
            </p>
            <p className='text-gray-600'> de votre objectif</p>
        </div>
    )
}
