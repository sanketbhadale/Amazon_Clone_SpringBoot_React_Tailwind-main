import { bannerImages } from "./BannerConstant";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Banner = () => {

     const responsive = {
          
          desktop: {
               breakpoint: { max: 3000, min: 1024 },
               items: 1
          },
          tablet: {
               breakpoint: { max: 1024, min: 464 },
               items: 1
          },
          mobile: {
               breakpoint: { max: 464, min: 0 },
               items: 1
          }
     };

     return (
          <Carousel
               swipeable={false}
               draggable={false}
               responsive={responsive}
               infinite={true}
               autoPlay={true}
               showDots={true}
               autoPlaySpeed={2000}
               keyBoardControl={true}
               containerClass="carousel-container"
               removeArrowOnDeviceType={["tablet", "mobile"]}
          >
               {
                    bannerImages.map(({ id, src }) => (
                         <div key={id} className="h-64 w-full">
                              <img src={src} alt={`Component at id ${id}`} />
                         </div>

                    ))
               }
          </Carousel>
     );
}

export default Banner;