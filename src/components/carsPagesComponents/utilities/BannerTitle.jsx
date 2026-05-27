import React from 'react'

export default function BannerTitle({title, size, style}) {

    // console.log(size - 14.7)

    return (
        <span className={`${style}`}>
            {title}
        </span>
    )
}

