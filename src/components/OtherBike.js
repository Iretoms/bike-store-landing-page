import React from 'react';
import styled from 'styled-components';
import hybrid from '../assets/pngs/hybrid.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


const OtherBike = () => {
    return (
      <>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            1300:{
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
          }}
          grabCursor={true}
          watchSlidesVisibility={true}
        >
          <SwiperSlide>
            <Card>
              <div className="bike-image">
                <img src={hybrid} alt="hybrid" />
              </div>
              <h4>Hybrid Bike</h4>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className="bike-image">
                <img src={hybrid} alt="hybrid" />
              </div>
              <h4>Fixie Bikes</h4>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className="bike-image">
                <img src={hybrid} alt="hybrid" />
              </div>
              <h4>Folding Bikes</h4>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className="bike-image">
                <img src={hybrid} alt="hybrid" />
              </div>
              <h4>Mount Bikes</h4>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <div className="bike-image">
                <img src={hybrid} alt="hybrid" />
              </div>
              <h4>City Bikes</h4>
            </Card>
          </SwiperSlide>
        </Swiper>
      </>
    );
};

const Card = styled.div`
  width: 14.2rem;
  .bike-image {
    width: 14.2rem;
    height: 7.3rem;
    box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    text-align: center;
    padding-top: 1rem;
  }
  h4 {
    font-weight: 600;
    font-size: 1rem;
    line-height: 20px;
    text-align: center;
    margin-top: 1rem;
  }
  &:hover {
    .bike-image {
      border: 2px solid #fcb72b;
    }
    h4 {
      color: #fcb72b;
    }
  }

  @media screen and (max-width: 875px) {
    width: 100%;
    .bike-image {
      width:100%;
      height: 9rem;
    }
  }
`;

export default OtherBike;