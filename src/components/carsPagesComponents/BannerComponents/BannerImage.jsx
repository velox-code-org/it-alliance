import React from 'react'
import VectorRed1920 from './images/red/1920.png'
import VectorRed1600 from './images/red/1600.png'
import VectorRed1440 from './images/red/1440.png'
import VectorRed1260 from './images/red/1260.png'
import VectorRed1024 from './images/red/1024.png'
import VectorRed992 from './images/red/992.png'
import VectorRed768 from './images/red/768.png'
import VectorRed576 from './images/red/576.png'
import VectorRed370 from './images/red/370.png'

import VectorBlack1920 from './images/black/1920.png'
import VectorBlack1600 from './images/black/1600.png'
import VectorBlack1440 from './images/black/1440.png'
import VectorBlack1260 from './images/black/1260.png'
import VectorBlack1024 from './images/black/1024.png'
import VectorBlack992 from './images/black/992.png'
import VectorBlack768 from './images/black/768.png'
import VectorBlack576 from './images/black/576.png'
import VectorBlack370 from './images/black/370.png'


export default function BannerImage({ color = "red" }) {
    console.log(color)
    let teg = ""

    if (color == 'black') {
        teg = <picture>
            <source media="(min-width: 1900px)" srcSet={VectorBlack1920} />
            <source media="(min-width: 1600px)" srcSet={VectorBlack1600} />
            <source media="(min-width: 1440px)" srcSet={VectorBlack1440} />
            <source media="(min-width: 1260px)" srcSet={VectorBlack1260} />
            <source media="(min-width: 1024px)" srcSet={VectorBlack1024} />
            <source media="(min-width: 992px)" srcSet={VectorBlack992} />
            <source media="(min-width: 768px)" srcSet={VectorBlack768} />
            <source media="(min-width: 480px)" srcSet={VectorBlack576} />
            <img src={VectorBlack370} className="w-full h-full" />
        </picture>
    } else if (color == 'red') {
        teg = <picture>
            <source media="(min-width: 1900px)" srcSet={VectorRed1920} />
            <source media="(min-width: 1600px)" srcSet={VectorRed1600} />
            <source media="(min-width: 1440px)" srcSet={VectorRed1440} />
            <source media="(min-width: 1260px)" srcSet={VectorRed1260} />
            <source media="(min-width: 1024px)" srcSet={VectorRed1024} />
            <source media="(min-width: 992px)" srcSet={VectorRed992} />
            <source media="(min-width: 768px)" srcSet={VectorRed768} />
            <source media="(min-width: 480px)" srcSet={VectorRed576} />
            <img src={VectorRed370} className="w-full h-full" />
        </picture>
    }

    return (teg)
}
