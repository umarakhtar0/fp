import React from 'react';
import './CompanyPage.scss';

const CompanyPage = () => {
  const companies = [
    {
      name: "Future Career Hub",
      src: "https://res.cloudinary.com/dxx12rebk/image/upload/v1745924538/Screenshot_2025-04-29_at_4.01.41_PM_pfyihd.png",
      description: "Worked as a Graphic Designer at FCH, handling all the social accounts as well."
    },
    {
      name: "Abroad Mentors",
      src: "https://res.cloudinary.com/dxx12rebk/image/upload/v1745923970/2_dsx8xb.jpg",
      description: "Worked as a Graphic Designer at Abroad Mentors."
    },
    {
      name: "RH Developer",
      src: "https://res.cloudinary.com/dxx12rebk/image/upload/v1745923970/3_ldvrvq.jpg",
      description: "Worked as a web developer, including both frontend and backend development."
    }
  ];

  return (
    <div className="company-page">
      <h1>Companies I've Worked With</h1>
      <div className="company-grid">
        {companies.map((company, index) => (
          <div key={index} className="company-card">
            <img
              src={company.src} // ✅ fixed from company.image to company.src
              alt={company.name}
              className="company-image"
            />
            <h3>{company.name}</h3>
            <p>{company.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyPage;
