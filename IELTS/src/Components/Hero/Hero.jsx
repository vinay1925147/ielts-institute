import arrow from '../../assets/dark-arrow.png';
import './Hero.css';
function Hero() {
  return (
    <>
    <div className="hero container">
          <div className="hero-text">
            <h1> Achieve Your Dream IELTS</h1>
            <p>  International English Language Testing System  
          is the world’s most trusted English proficiency test for study, work, and migration.  It evaluates four key skills — Listening, Reading, Writing, and Speaking — and helps you prove your English ability across the globe.</p>
            <button className='btn'> Get Started <img src={arrow} alt="Array" /> </button>
          </div>
    </div>
    </>
  )
}

export default Hero