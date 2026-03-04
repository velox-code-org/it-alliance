import React from 'react';
import Logo from '../../assets/vendors/openyard.svg';

export default function Openyard() {
    return (
        <img src={Logo} alt="OpenYard (ООО «Открытый двор»)" className="w-full h-auto max-w-[300px] object-contain svg-icon"/>
    );
}