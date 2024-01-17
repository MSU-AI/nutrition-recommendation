import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [mealPlan, setMealPlan] = useState(null);

  useEffect(() => {
    // Fetch user's information from API
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUserInfo(data));

    // Fetch user's weekly meal plan from API
    fetch('/api/meal-plan')
      .then(response => response.json())
      .then(data => setMealPlan(data));
  }, []);

  return (
    <div className='Profile'>
      <Nav />
      <div className='main-content'>
        <h1>Profile</h1>

        {userInfo && (
          <div>
            <h2>User Information</h2>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            {/* Display other user information */}
          </div>
        )}

        {mealPlan && (
          <div>
            <h2>Weekly Meal Plan</h2>
            {/* Display the weekly meal plan */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
