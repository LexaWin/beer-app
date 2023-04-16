import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import './PaginateBeers.css';
import 'swiper/css';
import 'swiper/css/pagination';
import BeerCardsContainer from '../containers/BeerCardsContainer';

const PaginateBeers: React.FC = () => {
  // !!!Hardcode!!! Need to be replaced in the Future
  // But right now there's no time to do it.
  const pages = [1, 2, 3];

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        preventClicks
      >
        {pages.map((i) => (
          <SwiperSlide key={i}>
            {({ isActive }) =>
              isActive ? <BeerCardsContainer pageNumber={i} /> : null
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PaginateBeers;
