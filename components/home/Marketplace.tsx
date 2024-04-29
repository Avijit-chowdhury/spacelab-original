import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper core and required modules
import SwiperCore, { EffectCreative, Pagination, Navigation } from 'swiper'

import { Slide } from './about-pool/Slide'
import { Delegation } from './about-pool/Delegation'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import background from "../../../public/S1.png";

// install Swiper modules
SwiperCore.use([EffectCreative, Pagination, Navigation])

export const Marketplace: React.FC = () => {
  return (
    <section id="marketplace" className="marketplace py-36">
      <div className="container  mx-auto pl-6 sm:pl-0 pr-6 sm:pr-0">
      
        <div className="lg:flex mx-auto">
          

          <div className="flex items-center  w-full lg:w-1/2"  style={{ paddingTop: 270 }}>

            <Swiper>

              <SwiperSlide>
                <Slide title="Marketplace">
                The official marketplace. Your trusted hub for buying and selling SpaceBudz.
                  <br />
            <br />
            <br />
            <a
        href="https://spacebudz.io/explore/"
        target="_blank"
        rel="noreferrer"
      >
            <button className="btn-2 w-50">
        Go To Marketplace
      </button>
      </a>
                </Slide>
              </SwiperSlide>

              
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
