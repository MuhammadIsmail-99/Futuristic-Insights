import "./features.css"
import featuresImageOne from "./assets/featuresImageOne.svg"
import featuresImageTwo from "./assets/featuresImageTwo.svg"
import featuresImageThree from "./assets/featuresImageThree.svg"

function Features() {
    return (
        <>
        <h1>Features</h1>
        <div className="features-container">
            
            <div className="feature">
                <div className="feature-header">
                    <h2>AI-driven recommendations</h2>
                </div>
                <div className="feature-image">
                    <img src={featuresImageOne} alt="AI-driven recommendations" />
                </div>
            </div>
            <div className="feature">
                <div className="feature-header">
                    <h2>Insights into trending career paths</h2>
                </div>
                <div className="feature-image">
                    <img src={featuresImageTwo} alt="Insights into trending career paths" />
                </div>
            </div>
            <div className="feature">
                <div className="feature-header">
                    <h2>Expert resources and tools</h2>
                </div>
                <div className="feature-image">
                    <img src={featuresImageThree} alt="Expert resources and tools" />
                </div>
            </div>
        </div>
        </>
    );
}
export default Features