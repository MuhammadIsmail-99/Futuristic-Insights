import "./whyChoose.css";
import whyChooseImage from './assets/whyChoose.svg';

function WhyChoose() {
  return (
    <div className="container">
      <div className="image-container">
        <div className="overlay"></div>
        <img src={whyChooseImage} alt="Futuristic" />
      </div>
      <div className="text-container">
        <h1>Why Choose Futuristic?</h1>
        <p>
          Your career is more than a job—it's your passion. Futuristic uses
          cutting-edge technology to analyze your strengths and match you with
          opportunities where you'll thrive. Your future starts here.
        </p>
        <button className="explore-button">Explore More</button>
      </div>
    </div>
  );
}
export default WhyChoose;
