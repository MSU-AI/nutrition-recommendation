import React from 'react';
import Nav from '../components/Nav';

const Features = () => {
  return (
    <div className='Features'>
        <Nav />
      <h1>Features of Our Nutrition Plan</h1>
      <h2>AI Chatbot</h2>
      <p>
        Our nutrition plan includes an AI chatbot that you can interact with to get personalized recommendations and guidance. The chatbot is designed to answer your questions, provide meal suggestions, and help you stay on track with your nutrition goals.
      </p>

      <h2>Personalized Nutrition Plan</h2>
      <p>
        With our nutrition plan, you can input your personal details such as age, weight, height, and activity level. Based on this information, our system will generate a weekly nutrition plan tailored to your specific needs. This plan will include recommended calorie intake, macronutrient distribution, and meal suggestions.
      </p>

      <h2>Meal Tracking</h2>
      <p>
        Our nutrition plan allows you to track your meals and monitor your daily calorie intake. You can log the foods you consume throughout the day and our system will calculate the total calories and provide feedback on your progress towards your goals.
      </p>

      <h2>Recipe Library</h2>
      <p>
        We provide a vast library of healthy recipes that you can explore and try out. Our recipes are categorized based on dietary preferences, such as vegetarian, vegan, gluten-free, and more. You can search for recipes, save your favorites, and even create your own personalized meal plans.
      </p>

      <h2>Progress Tracking</h2>
      <p>
        Our nutrition plan includes tools to track your progress over time. You can set goals, monitor your weight, body measurements, and other relevant metrics. Our system will generate visualizations and reports to help you understand your progress and make adjustments to your plan if needed.
      </p>
    </div>
  );
};

export default Features;
