import React from 'react';
import Logo from '../../assets/vendors/rupost.svg';

export default function Rupost() {
    return (
        <img src={Logo} alt="RuPost (ООО «РуПост»)" className="w-full h-auto max-w-[300px] object-contain svg-icon"/>
    );
}