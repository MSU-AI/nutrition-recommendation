import React from 'react';
import Nav from '../components/Nav';
import '../index.css'; // Adjust the path as needed

function Home() {
  return (
    <div className="html">
      <Nav />
      <div className="main-content">
        {/* Wrapper for main content */}

        <div className="section section-grey-ish">

        </div>

{/* Feature Section Starts Here */}

      <div className="feature-section">
        <div className="container">
          <div className="heading">
            <h2>Empowering Your Health Journey with AI</h2>
            <p className="subheading">From managing your diet to optimizing your health, our AI chatbot is here to assist you</p>
          </div>

          <div className="features-grid">
            {/* Feature 1 */}
            <div className="feature">
              <img className="feature-icon" src="nutri1.svg" alt="Nutrition Icon"/>
              <p className="feature-text">Personalized Nutrition Advice</p>
              <p className="feature-description">Get expert nutrition advice tailored to your dietary restrictions, allergies, and preferences, all powered by AI.</p>
            </div>

            {/* Feature 2 */}
            <div className="feature">
              <img className="feature-icon" src="nutri2.svg" alt="Health Plan Icon"/>
              <p className="feature-text">Customized Diet Plans</p>
              <p className="feature-description">Provide your health details like weight, height, and goals to receive a personalized diet plan that fits your lifestyle.</p>
            </div>

            {/* Feature 3 */}
            <div className="feature">
              <img className="feature-icon" src="nutri3.svg" alt="Allergy Icon"/>
              <p className="feature-text">Allergy-Safe Eating</p>
              <p className="feature-description">Our AI understands your allergies and suggests safe, delicious alternatives to keep your meals enjoyable and risk-free.</p>
            </div>

            {/* Feature 4 */}
            <div className="feature">
              <img className="feature-icon" src="nutri4.svg" alt="Goal Icon"/>
              <p className="feature-text">Goal-Oriented Guidance</p>
              <p className="feature-description">Whether it's weight loss, muscle gain, or just staying healthy, our chatbot guides you towards your health goals with evidence-based advice.</p>
            </div>

          </div>
        </div>
      </div>

{/* Feature Section Ends Here */}


        <div className="section section-light-blue frosted-effect rounded-corners">
        </div>


      </div>
    </div>
  );
}

export default Home;
