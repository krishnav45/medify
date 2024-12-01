import "./Specialisation.css";
import React from 'react'
import "./Specialisation.css"
import cardiology from "../../assets/Heart Rate.png";
import lab from "../../assets/Drugstore.png";
import mri from "../../assets/Heart Rate Monitor.png";
import primary from "../../assets/Stethoscope.png";
import psycologist from "../../assets/Immune.png";
import test from "../../assets/Blood Sample.png";
import xray from "../../assets/X-Ray.png";

const Specialisation = () => {
  return (
    <div className='Specialisation'>
    <h1>Find by specialisation</h1>
    <div className="box-container">
        <div className="box">
            <img src={lab} alt="" srcset="" />
            <h3>Dentistry</h3>
        </div>
        <div className="box">
            <img src={primary} alt="" srcset="" />
            <h3>Primary Care</h3>
        </div>
        <div className="box">
            <img src={cardiology} alt="" srcset="" />
            <h3>Cardiology</h3>
        </div>
        <div className="box">
            <img src={mri} alt="" srcset="" />
            <h3>MRI</h3>
        </div>
        <div className="box">
            <img src={test} alt="" srcset="" />
            <h3>Blood Test</h3>
        </div>
        <div className="box">
            <img src={psycologist} alt="" srcset="" />
            <h3>psycologist</h3>
        </div>
        <div className="box">
            <img src={lab} alt="" srcset="" />
            <h3>Laboratory</h3>
        </div>
        <div className="box">
            <img src={xray} alt="" srcset="" />
            <h3>X-Ray</h3>
        </div>
    </div>
    <button>View All</button>
</div>
)
}

export default Specialisation;