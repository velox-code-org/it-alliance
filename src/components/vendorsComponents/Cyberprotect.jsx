import React from 'react';
import Logo from '../../assets/vendors/cyberprotect.svg';

// Check that it is "export default"
export default function Cyberprotect() {
    return (
        <img src={Logo} alt="Киберпротект (ООО «Киберпротект»)" className="w-full h-auto max-w-[300px] object-contain svg-icon"/>
    );
}