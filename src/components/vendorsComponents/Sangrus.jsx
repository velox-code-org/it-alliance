import React from 'react';
import Logo from '../../assets/vendors/sangrus.svg';

export default function Sangrus() {
    return (
        <img src={Logo} alt="Sangrus (ООО «Сангрус»)" className="w-full h-auto max-w-[300px] object-contain svg-icon"/>
    );
}