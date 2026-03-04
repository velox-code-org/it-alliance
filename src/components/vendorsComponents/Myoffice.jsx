import React from 'react';
import Logo from '../../assets/vendors/myoffice.svg';

export default function Myoffice() {
    return (
        <img src={Logo} alt="МойОфис (ООО «МойОфис»)" className="w-full h-auto max-w-[300px] object-contain svg-icon"/>
    );
}