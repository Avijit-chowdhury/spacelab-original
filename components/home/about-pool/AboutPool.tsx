import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { DelegateButton } from '@features/wallet'

// import Swiper core and required modules
import SwiperCore, { EffectCreative, Pagination, Navigation } from 'swiper'

import { Slide } from './Slide'
import { Delegation } from './Delegation'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// install Swiper modules
SwiperCore.use([EffectCreative, Pagination, Navigation])

export const AboutPool: React.FC = () => {
  return (
    <section id="about" className="about py-36">
      <div className="container  mx-auto pl-6 sm:pl-0 pr-6 sm:pr-0">
      
        <div className="lg:flex mx-auto">
          <div className="flex flex-col items-center justify-center p-8 w-full lg:w-1/2 relative">
            

            
          </div>

          <div className="flex items-center justify-center w-full lg:w-1/2">

            <Swiper
              effect={'creative'}
              pagination={{
                dynamicBullets: true,
              }}
              navigation={true}
              spaceBetween={50}
              slidesPerView={1}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }}
            >
              

              <SwiperSlide>
                <Slide title="SpaceBudz Analytics">
                  
                 
                  Unlock SpaceBudz analytics. Discover traits, volume, sales history and more. Your cosmic insights simplified.
                  <br />
                  <br />
                  <br />
                  <DelegateButton className="mb-3 w-full sm:mb-0 sm:mr-3 sm:w-auto " />
                </Slide>
              </SwiperSlide>

              

            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
