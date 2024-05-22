'use client';
import "./stats.css";
import Image from "next/image";

export default function Stats(props) {
  return (
    <div className={"stats text-center flex flex-row flex-nowrap"}>
        <Image src={props.stats.icon}
               width={60}
                height={60}
               alt={props.stats.title}
               className={"m-auto"} />
        <div className={"stats-content m-auto"}>
            <h2 className={"text-2xl"}>{props.stats.value + props.stats.unit}</h2>
            <p className={"text-lg"}>{props.stats.title}</p>
        </div>
    </div>
  );
}
