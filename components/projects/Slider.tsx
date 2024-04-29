'use client'

import Image from 'next/image'
import left from '/public/left.svg'
import right from '/public/right.svg'
import { useEffect, useState } from 'react'

import { images } from './constants'

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function clickNext() {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1)
  }
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext()
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [activeImage, clickNext])

  return (
    <div className="relative w-full m-auto flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 p-6">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? 'block w-full h-[50vh] object-cover transition-all duration-500 ease-in-out'
              : 'hidden'
          }`}
        >
          <Image
            src={elem.src}
            alt=""
            width={1480}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute w-full flex justify-center items-center">
        <div
          className="absolute left-4 cursor-pointer rounded-full px-2 pt-2  bg-slate-400 bg-opacity-20"
          onClick={clickPrev}
        >
          <Image src={left} alt="" className="rounded-full" />
        </div>

        <div
          className="absolute right-4 cursor-pointer rounded-full px-2 pt-2  bg-slate-400 bg-opacity-20"
          onClick={clickNext}
        >
          <Image src={right} alt="" className="rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Slider
