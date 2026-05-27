import React from 'react'

export default function CarsDocSteps({title, subtitle}) {
    return (
        <div class="page-header CarsDocSteps">
            <span class="corner-tl"></span><span class="corner-tr"></span><span class="corner-br"></span><span class="corner-bl"></span>
            <h2 class="h2">{title}</h2>
            <div class="sub-heading">{subtitle}</div>
        </div>
    )
}