'use client';
import './radar.css';
import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';

function PerformanceRadar (props) {
    let formattedPerformance = [];
    let kinds = [
        {en: "intensity", translation: 'Intensité'},
        {en: "speed", translation: 'Vitesse'},
        {en: "strength", translation: 'Force'},
        {en: "endurance", translation: 'Endurance'},
        {en: "energy", translation: 'Energie'},
        {en: "cardio", translation: 'Cardio'},
    ]

    kinds.forEach((kind) => {
        let value = props.performance?.data.find(item => props.performance.kind[item.kind] === kind.en);
       formattedPerformance.push({
           value: value?.value || 0,
           kind: kind.translation
       });
    });

    return (
        <div className='radar'>
            <ResponsiveContainer width='100%' height='100%'>
                <RadarChart outerRadius={60} width='258' height='263' data={formattedPerformance}>
                    <PolarGrid gridType='polygon' radialLines={false} />
                    <PolarAngleAxis dataKey='kind' stroke='#FFFFFF' fontSize={12} tickLine={false}/>
                    <Radar dataKey='value' stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none'/>
                    <Legend/>
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PerformanceRadar
