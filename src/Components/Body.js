import React from 'react'
import trophy from '../img/1.png';
import award from '../img/2.png';
import types from '../img/3.png';


function Body() {
    return (
    <main className="site-main">
    <section className="section-1">
    <div class="flex-container">
        <div className="left">
            <img src={trophy} alt="trophy" className="trophyimage"/>
        </div>
        <div className="paragraph ">
        <div className="right">
            <p className="top-line">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
            <ul className="a">
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li> 
            </ul>
            <img src={award} alt="award" className="awardimage"/>
            <p className="bottom-line">
            Government of India has awarded the 
            <strong >"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
        </div>
        </div>
    </div>
    </section>

    <section className="section-2">
    <div className="flex-container" >
        <div>
            <p className="product-count">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        </div>
        <div>
            <img src={types} alt="types of products" className="product-variety"/>
        </div> 
        <div>
            <p className="product-name">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
            </p>
        </div>
    </div>
    </section>
        
    <section className="section-3">
        <div className="flex-container">
            <h5 className="line-1">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
            </h5>
            <p className="line-2">
            CHEMICALS & PROCESS <red>|</red> POWER <red>|</red> WATER & WASTE WATER <red>|</red> OILS & GAS <red>|</red> PHARMA <red>|</red> SUGARS & DISTILLERIES <red>|</red> PAPER & PULP <red>|</red> MARINE & DEFENCE <red>|</red> METAL & MINING <red>|</red> FOOD & BEVERAGE <red>|</red> PETROCHEMICAL & REFINERIES <red>|</red> SOLAR <red>|</red> BUILDING <red>|</red> HVAC <red>|</red> FIRE FIGHTING <red>|</red> AGRICULTURE & RESIDENTIAL
            </p>
        </div>
    </section>

    </main>
    );
}

export default Body;
