import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import universal from "../assets/pngs/universalEbike.png";
import brampoton from "../assets/pngs/brampotonEbike.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Ebikes = () => {
  return (
    <>
      <SwiperContainer>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 1,
            },
          }}
          navigation={{
            prevEl: ".swiper-custom-navigation-prev",
            nextEl: ".swiper-custom-navigation-next",
          }}
          grabCursor={true}
          watchSlidesVisibility={true}
        >
          <SwiperSlide>
            <Card>
              <h4>Universal eBike Kit</h4>
              <div className="image-container">
                <img src={universal} alt="universal" />
              </div>
              <div className="price-order">
                <div>
                  <p>price</p>
                  <h4>$750.00</h4>
                </div>
                <Button type="" text="Order" />
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <h4>Brampoton eBike Kit</h4>
              <div className="image-container">
                <img src={brampoton} alt="universal" />
              </div>
              <div className="price-order">
                <div>
                  <p>price</p>
                  <h4>$750.00</h4>
                </div>
                <Button type="" text="Order" />
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <h4>Additional eBike Kit</h4>
              <div className="image-container">
                <img src={universal} alt="universal" />
              </div>
              <div className="price-order">
                <div>
                  <p>price</p>
                  <h4>$750.00</h4>
                </div>
                <Button type="" text="Order" />
              </div>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <h4>Universal eBike Kit</h4>
              <div className="image-container">
                <img src={brampoton} alt="universal" />
              </div>
              <div className="price-order">
                <div>
                  <p>price</p>
                  <h4>$750.00</h4>
                </div>
                <Button type="" text="Order" />
              </div>
            </Card>
          </SwiperSlide>
        </Swiper>
        <NavButtons>
          <div className="swiper-custom-navigation swiper-custom-navigation-prev backNavigate">
            <BsArrowLeft />
          </div>
          <div className="swiper-custom-navigation swiper-custom-navigation-next frontNavigate">
            <BsArrowRight />
          </div>
        </NavButtons>
      </SwiperContainer>
    </>
  );
};

const SwiperContainer = styled.div``;

const Card = styled.div`
  background-color: #eee;
  padding: 1.5rem;
  width: 23.9rem;
  height: 24.1rem;
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  h4 {
    font-weight: 700;
    font-size: 1.3rem;
  }
  .image-container {
    text-align: center;
    border-bottom: 1px solid #c2cfe0;
    img {
      width: 199px;
      height: 229px;
    }
  }
  .price-order {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    p {
      font-weight: 400;
      color: #7d7987;
      margin-bottom: 0.8rem;
    }
    h4 {
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: linear-gradient(
      180deg,
      rgba(255, 189, 55, 0.58) 0%,
      #ffbd37 100%
    );
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }
  .backNavigate {
    margin-right: 1rem;
  }
`;

export default Ebikes;
