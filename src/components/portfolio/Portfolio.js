import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.PNG";
import IMG2 from "../../assets/project2.PNG";
import IMG3 from "../../assets/project3.PNG";
import IMG4 from "../../assets/project4.PNG";
import IMG5 from "../../assets/project5.PNG";
import IMG6 from "../../assets/project6.PNG";
import IMG7 from "../../assets/project7.PNG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Shopping Management System using Link List (Console Based)",
    github: "http://github.com/ameer-uet",
  },
  {
    id: 2,
    image: IMG2,
    title: "Employee Management System using Link List (Console Based)",
    github: "http://github.com/ameer-uet",
  },
  {
    id: 3,
    image: IMG3,
    title: "Smart Payroll Management System",
    github: "http://github.com/ameer-uet",
  },
  {
    id: 4,
    image: IMG4,
    title: "Smart Remote HealthCare System",
    github: "http://github.com/ameer-uet",
  },
  {
    id: 5,
    image: IMG5,
    title: "AlfaCare Smart Health App (Flutter)",
    github: "http://github.com/ameer-uet",
  },
  {
    id: 6,
    image: IMG6,
    title: "BigMart Sales Prediction using PySpark",
    github: "http://github.com/ameer-uet",
  },
  {
    id: 7,
    image: IMG7,
    title: "Web Content Accessibility Assistive Tool",
    github: "http://github.com/ameer-uet",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

          <div className="container portfolio__container">
              {
                  data.map(({ id, image, title, github }) => {
                      return (
                        <article key={id} className="portfolio__item">
                          <div className="portfolio__item-image">
                            <img src={image} alt={title} />
                          </div>
                          <h3>{title}</h3>
                          <a
                            href={github}
                            className="btn btn-primary"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Github
                          </a>
                        </article>
                      );
                  })
              }
      </div>
    </section>
  );
};

export default Portfolio;
