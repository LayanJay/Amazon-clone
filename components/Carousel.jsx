import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { carouselData } from '../lib/data'

const CarouselComp = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={4000}
        showStatus={false}
        showIndicators={false}
        emulateTouch={true}
        swipeable={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        {carouselData.map(({ image, text }, i) => (
          <div key={i}>
            <Image
              src={image}
              alt={text}
              layout='intrinsic'
              placeholder='blur'
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselComp
