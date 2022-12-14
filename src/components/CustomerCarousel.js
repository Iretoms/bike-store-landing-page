import React from "react";
import styled from "styled-components";
import customer from "../assets/pngs/customer.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { textAnimate, imageAnimate } from "../animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomerCarousel = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        navigation={{
          prevEl: ".swiper-custom-navigation-prev",
          nextEl: ".swiper-custom-navigation-next",
        }}
        pagination={true}
        watchSlidesVisibility={true}
      >
        <SwiperSlide>
          <CustomerCard
            initial="hide"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.h1 variants={textAnimate}>
              What our customer are saying
            </motion.h1>
            <motion.div variants={textAnimate} className="line"></motion.div>
            <Profile>
              <div className="image-section">
                <motion.div variants={imageAnimate} className="customer-image">
                  <img src={customer} alt="pic" />
                </motion.div>
                <motion.h3 variants={textAnimate}>Edward Newgate</motion.h3>
                <motion.p variants={textAnimate}>Pro-Cycler</motion.p>
              </div>
              <div className="text-section">
                <motion.p variants={textAnimate}>
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </motion.p>
              </div>
            </Profile>
          </CustomerCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard>
            <h1>What our customer are saying</h1>
            <div className="line"></div>
            <Profile>
              <div className="image-section">
                <div className="customer-image">
                  <img src={customer} alt="pic" />
                </div>
                <h3>Atilola</h3>
                <p>Pro-Cycler</p>
              </div>
              <div className="text-section">
                <p>
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </Profile>
          </CustomerCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard>
            <h1>What our customer are saying</h1>
            <div className="line"></div>
            <Profile>
              <div className="image-section">
                <div className="customer-image">
                  <img src={customer} alt="pic" />
                </div>
                <h3>Iretomiwa</h3>
                <p>Pro-Cycler</p>
              </div>
              <div className="text-section">
                <p>
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </Profile>
          </CustomerCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomerCard>
            <h1>What our customer are saying</h1>
            <div className="line"></div>
            <Profile>
              <div className="image-section">
                <div className="customer-image">
                  <img src={customer} alt="pic" />
                </div>
                <h3>Edward</h3>
                <p>Pro-Cycler</p>
              </div>
              <div className="text-section">
                <p>
                  Dummy Text patient engagement app and web portal allow you to
                  access information instantaneously (no tedeous form, long
                  calls, or administrative hassle) and securely”
                </p>
              </div>
            </Profile>
          </CustomerCard>
        </SwiperSlide>
      </Swiper>
      <CarouselNav>
        <div className="swiper-custom-navigation swiper-custom-navigation-prev backNavigate">
          <BsArrowLeft />
        </div>
        <div className="swiper-custom-navigation swiper-custom-navigation-next frontNavigate">
          <BsArrowRight />
        </div>
      </CarouselNav>
    </>
  );
};

const CustomerCard = styled(motion.div)`
  width: 100%;
  min-height: 26.6rem;
  background-color: #fcb72b;
  border-radius: 10px;
  color: #fff;
  padding-top: 4rem;
  h1 {
    text-align: center;
    color: #fff;
    font-weight: 700;
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }
  .line {
    width: 56px;
    height: 2px;
    background-color: #fff;
    margin: 0 auto 1.5rem;
  }

  @media screen and (max-width: 875px) {
    padding-bottom: 4rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 70%;
  margin: 0 auto;
  .image-section {
    width: 11.5rem;
    text-align: center;
    .customer-image {
      margin-left: 1.5rem;
      width: 8.8rem;
      height: 8.8rem;
      overflow: hidden;
      border: 3px solid #fff;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      font-size: 1.3rem;
      color: #fff;
      margin: 0.5rem 0 1rem;
    }
    p {
      font-weight: 400;
      font-size: 1.1rem;
    }
  }

  .text-section {
    width: 26.3rem;
    p {
      font-weight: 400;
      font-size: 1.1rem;
      line-height: 30px;
    }
  }

  @media screen and (max-width: 875px) {
    flex-direction: column;
    gap: 1rem;

    .text-section {
      width: 100%;
      text-align: center;
    }
  }
`;

const CarouselNav = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  svg {
    cursor: pointer;
    color: #fcb72b;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 875px) {
    display: none;
  }
`;
export default CustomerCarousel;
