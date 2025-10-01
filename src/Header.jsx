import React from "react";
import icon from "/icone.png"

export default function Header() {
return (
    <div class="Header">
        <div className="mainText">
        <img className="icon" src={icon} alt="icone" />
            <h1 className="text">Produtos gerais versão gamer!</h1>
        </div>
    </div>
 )
}