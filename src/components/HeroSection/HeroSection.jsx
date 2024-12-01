import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import img from "../../assets/Doctors.png";
import percent30 from "../../assets/percent30.png";
import percent100 from "../../assets/percent100.png";
import searchgrey from "../../assets/searchgrey.png";
import searchwhite from "../../assets/searchwhite.png";
import Doctorlogo from "../../assets/Doctor.png";
import Ambulance from "../../assets/Ambulance.png";
import Capsule from "../../assets/Capsule.png";
import Hospital from "../../assets/Hospital.png";
import Drugstore from "../../assets/Drugstore.png";

import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Specialisation from "../Specialisation/Specialisation";
import OurTeam from "../Carousel/Carousel";
import PatientCaring from "../SummerySection/Summary";
import BlogAndNews from "../BlogsAndNewsSection/BlogsAndNews";
import OurFamilySection from "../OurFamilies/OurFamilies";
import QuestionSection from "../Faqs/Faqs";

import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const HeroSection = ({
  selectedState,
  setSelectedState,
  states,
  selectedCity,
  setSelectedCity,
  cities,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="HeroSection">
        <Navigation />

        <div className="heroContent">
          <div className="heroText">
            <h3>
              Skip the travel! Find Online <span>Medical</span>{" "}
              <span>Centers</span>
            </h3>
            <p>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <button
              onClick={() => {
                navigate("/findDoctor");
              }}
            >
              Find Centers
            </button>
          </div>
          <img src={img} alt="" srcset="" />
        </div>

        <div className="floating-div">
          <div className="form">
            <div className="input-controll select-width">
              <img src={searchgrey} alt="" srcset="" />
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-controll select-width">
              <img src={searchgrey} alt="" srcset="" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <button className="search-btn"
              onClick={() => {
                navigate("/findDoctor");
              }}
            >
              <img src={searchwhite} alt="" srcset="" />
              Search
            </button>
          </div>
          <h5>You may be looking for</h5>
          <div className="category">
            <div>
              <img src={Doctorlogo} alt="" />
              <h6>Doctors</h6>
            </div>
            <div>
              <img src={Drugstore} alt="" />
              <h6>Labs</h6>
            </div>
            <div>
              <img src={Hospital} alt="" />
              <h6>Hospitals</h6>
            </div>
            <div>
              <img src={Capsule} alt="" />
              <h6>Medical store</h6>
            </div>
            <div>
              <img src={Ambulance} alt="" />
              <h6>Ambulance</h6>
            </div>
          </div>
        </div>

        <div className="offer-img">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ width: 1250 }}
          >
            <SwiperSlide>
              <img className="offer" src={percent100} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="offer" src={percent30} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="offer" src={percent100} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="offer" src={percent30} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="offer" src={percent100} alt="" srcset="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="offer-img-sm">
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ width: 300 }}
          >
            <SwiperSlide>
              <img className="offer" src={percent100} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="offer" src={percent30} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="offer" src={percent100} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="offer" src={percent30} alt="" srcset="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="offer" src={percent100} alt="" srcset="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Specialisation />
      <OurTeam />
      <PatientCaring />
      <BlogAndNews />
      <OurFamilySection />
      <QuestionSection />
    </>
  );
};

export default HeroSection;