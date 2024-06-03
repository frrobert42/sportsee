import "./navbar.css";
import swim from "/public/img/swim.svg";
import weight from "/public/img/weight.svg";
import bike from "/public/img/bike.svg";
import meditate from "/public/img/meditate.svg";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className={"navbar bg-black text-white flex flex-col justify-end h-100"}>
            <Image src={meditate} alt={"meditate"} className={"navbar-icon"} width={64} height={64} />
            <Image src={swim} alt={"swim"} className={"navbar-icon"} width={64} height={64} />
            <Image src={bike} alt={"bike"} className={"navbar-icon"} width={64} height={64} />
            <Image src={weight} alt={"weight"} className={"navbar-icon"} width={64} height={64} />
        </div>
    );
}
