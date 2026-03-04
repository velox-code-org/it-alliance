import React from 'react';
import Logo from '../../assets/vendors/yadro.svg';

export default function Yadro() {
    return (
        <img src={Logo} alt="YADRO (АО «Ай-Эс-Джи» или АО «Ядро»)" className="w-full h-auto max-w-[300px] object-contain svg-icon"/>
    );
}