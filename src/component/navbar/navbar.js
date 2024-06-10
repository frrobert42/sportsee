import "./navbar.css";
import swim from "../../img/swim.svg";
import weight from "../../img/weight.svg";
import bike from "../../img/bike.svg";
import meditate from "../../img/meditate.svg";

export default function Navbar() {
    return (
        <div className={"navbar bg-black text-white"}>
            <div className={"navbar-link"}>
                <img src={meditate} alt={"meditate"} className={"navbar-icon"} width={64} height={64} />
                <img src={swim} alt={"swim"} className={"navbar-icon"} width={64} height={64} />
                <img src={bike} alt={"bike"} className={"navbar-icon"} width={64} height={64} />
                <img src={weight} alt={"weight"} className={"navbar-icon"} width={64} height={64} />
            </div>
            <p className={"copyright"}>Copyright, SportSee {new Date().getFullYear() ?? '2024'}</p>
        </div>
    );
}
