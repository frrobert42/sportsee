import "./header.css";
import logo from "../../img/logo.png";

export default function Header() {
    return (
        <header className={"bg-black text-white w-100 flex flex-row flex-wrap justify-between"}>
            <img src={logo} alt={"logo"} width={178} height={61}/>
            <span>Accueil</span>
            <span>Profil</span>
            <span>Réglage</span>
            <span>Communauté</span>
        </header>
    );
}
