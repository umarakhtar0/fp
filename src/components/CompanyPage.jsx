import React from 'react';
import './CompanyPage.scss';
import com1 from '../assets/com/1.svg'
import com2 from '../assets/com/2.jpeg'

import com3 from '../assets/com/3.jpeg'

const CompanyPage = () => {
  const companies = [
    {
      name: "Future Career Hub",
      image: com1,
      description: "Worked as a Graphic Designer at FCH, handling all the social accounts as well."
    },
    {
      name: "Abroad Mentors",
      image: com2,
      description: "Worked as a Graphic Designer at Abroad Mentors."
    },
    {
      name: "RH Developer",
      image: com3,
      description: "Worked as a web developer, including both frontend and backend development."
    }
  ];

  return (
    <div className="company-page">
      <h1>Companies I've Worked With</h1>
      <div className="company-grid">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <img src={company.image} alt={company.name} className="company-image" />
            <h3>{company.name}</h3>
            <p>{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyPage;
