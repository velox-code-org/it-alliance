import React from 'react'
import Vector1920 from './vendorsLogo/1920/dell.png'
import Vector1600 from './vendorsLogo/1600/dell.png'
import Vector1440 from './vendorsLogo/1440/dell.png'
import Vector1260 from './vendorsLogo/1260/dell.png'
import Vector1024 from './vendorsLogo/1024/dell.png'
import Vector992 from './vendorsLogo/992/dell.png'
import Vector768 from './vendorsLogo/768/dell.png'
import Vector576 from './vendorsLogo/576/dell.png'
import Vector480 from './vendorsLogo/480/dell.png'
import Vector370 from './vendorsLogo/370/dell.png'




export default function Dell() {
  return (
    <picture>
    <source media="(min-width: 1900px)" srcSet={Vector1920} />
    <source media="(min-width: 1600px)" srcSet={Vector1600} />
    <source media="(min-width: 1440px)" srcSet={Vector1440} />
    <source media="(min-width: 1260px)" srcSet={Vector1260} />
    <source media="(min-width: 1024px)" srcSet={Vector1024} />
    <source media="(min-width: 992px)" srcSet={Vector992} />
    <source media="(min-width: 768px)" srcSet={Vector768} />
    <source media="(min-width: 576px)" srcSet={Vector576} />
    <source media="(min-width: 480px)" srcSet={Vector480} />
    <img src={Vector370} alt="Dell" className="w-full h-auto object-contain"/>
</picture>

  )
}