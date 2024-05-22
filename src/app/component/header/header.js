import "./header.css";
import Image from "next/image";
import logo from "/public/img/logo.png";

export default function Header() {
    return (
        <header className={"bg-black text-white w-100 flex flex-row justify-between"}>
            <Image src={logo} alt={"logo"} width={178} height={61}/>
            <span>Accueil</span>
            <span>Profil</span>
            <span>Réglage</span>
            <span>Communauté</span>
        </header>
    );
}
