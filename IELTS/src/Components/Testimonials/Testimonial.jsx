import { useRef } from "react";
import back_arrow from "../../assets/back-icon.png";
import next_arrow from "../../assets/next-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import "./Testinomial.css";
function Testimonial() {

    const slider = useRef();
    let tx=0;
    const slideforword=()=>{
        if(tx>-50){
            tx=tx-25;
        }
  slider.current.style.transform=`translate(${tx}%)`
    }
     const slidebackword=()=>{
        if(tx<0){
            tx=tx+25;
        }
  slider.current.style.transform=`translate(${tx}%)`
    }

    const testimonials = [
  {
    name: "",
    review:
      "",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohit Verma",
    review:
      "The AI Band Score feature is amazing. I could track my progress daily.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara Khan",
    review:
      "Thanks to expert coaching, I finally achieved Band 8! Highly recommend!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];
  return (
    <>
      <div className="testimonial">
        <img src={next_arrow} alt="" className="next-btn"  onClick={slideforword}/>
        <img src={back_arrow} alt="" className="back-btn"  onClick={slidebackword}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Sonam Sharma</h3>
                    <span>BITS Pilani</span>
                  </div>
                </div>
                <p>The mock tests and speaking practice really boosted my confidence. I scored Band 7.5!. Thanks to expert coaching, I finally achieved Band 8! Highly recommend. </p>
              </div>
            </li>
             <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Vinay Asati</h3>
                    <span>Sati college</span>
                  </div>
                </div>
                <p>Each practice session highlighted my weaknesses and guided me on how to improve effectively. The structured approach made preparation less stressful.</p>
              </div>
            </li>
             <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Tanya Asati</h3>
                    <span>MNIT Bhopal</span>
                  </div>
                </div>
                <p>Thanks to expert coaching, I could focus on strategies that really work. The mentors provided personalized tips that boosted my performance.</p>
              </div>
            </li>
              <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Sachin Patel</h3>
                    <span>IIT Dehli</span>
                  </div>
                </div>
                <p>
                  Finally, I achieved Band 8! I highly recommend this institute to anyone preparing for IELTS. Their support and guidance make a real difference. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
