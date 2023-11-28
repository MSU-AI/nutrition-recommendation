import React from 'react';
import Nav from '../components/Nav';
import LoginForm from '../components/Login';


function Home() {
    return (
        <div className="Home">
            <Nav />
            <header>
                <h1>Welcome to our Nutrition App!</h1>
            </header>
            <LoginForm />
            <main>
                <section>
                    <h2>About Us</h2>
                    <p>We are dedicated to helping you improve your nutrition. Our app provides personalized nutrition advice, meal plans, and more.</p>
                </section>
                <section>
                    <h2>Our AI Chatbot</h2>
                    <p>What makes us unique is our AI chatbot. You can ask it any questions about nutrition, and it will provide you with accurate and helpful information.</p>
                </section>
            </main>
            <footer>
                <p>Start your journey towards better nutrition today!</p>
            </footer>
        </div>
    );
}

export default Home;