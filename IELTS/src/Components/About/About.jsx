import './About.css'
import about_img from "../../assets/about.png";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="about" className="about_img" />
          
        </div>
        <div className="about-right">
          <h2>About us</h2>
          <h3>International English Language Testing System</h3>
          <p>
            IELTS, the International English Language Testing System, was
            originally launched in 1980 (as just "ELTS"), but rapidly expanded
            to help people worldwide from 1989 when the IELTS International
            partnership was formed.
          </p>
          <p>
            For decades now IELTS has set the standard for English language
            testing to help people achieve their professional, personal, and
            academic ambitions. Jointly owned by the British Council, IDP IELTS,
            and Cambridge University Press & Assessment – our combined global
            presence and commitment to research makes us ideal providers of
            international English testing.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
