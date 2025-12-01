import React from 'react'

export default function BannerTitle({ title, size, style}) {

  // console.log(size - 14.7)

    return (

        <label className={`
        text-xs
        min-[369px]:text-[${size - 14.7}px]
        min-[480px]:text-[${size - 7}px]
        min-[570px]:text-[${size - 7}px]
        min-[640px]:text-[${size - 6}px]
        min-[768px]:text-[${size - 5}px]
        min-[992px]:text-[${size - 8}px]
        min-[1024px]:text-[${size - 4}px]
        min-[1260px]:text-[${size - 2}px]
        min-[1440px]:text-[${size - 1}px]
        min-[1600px]:text-[${size}px]
        min-[1920px]:text-[${size}px]
        ${style}
    `}>
      {title}
    </label>
    )
}

