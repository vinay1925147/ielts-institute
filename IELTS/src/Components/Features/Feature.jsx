import React from 'react'
import "./Feature.css"
function Feature() {

    const cards = [
    {
      id: 1,
      title: "Speaking English",
      description: "Master the art of English communication with confidence. Improve your pronunciation, fluency, and conversational skills through interactive practice and real-world scenarios.",
    
    },
    {
      id: 2,
      title: "AI Learning",
      description: "Explore the fascinating world of Artificial Intelligence. Learn machine learning algorithms, neural networks, and how AI is transforming industries across the globe.",
      
    },
    {
      id: 3,
      title: "Web Development",
      description: "Build modern, responsive websites and applications. Learn HTML, CSS, JavaScript, and popular frameworks to create stunning digital experiences.",
    
    },
    {
      id: 4,
      title: "Data Science",
      description: "Data science is the study of data to extract meaningful insights for business.  fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data.",
    
    },

   
  ];
  return (
    <>
    <div className=" card-container container">
        <div className="cards-grid">
          {cards.map((card) => (
            <div key={card.id} className={`card card-${card.id}`}>
              <div className="card-content">
                <span className="card-icon">{card.icon}</span>
                <h2 className="card-title">{card.title}</h2>
                <p className="card-description">{card.description}</p>
                <a href="#" className="card-button">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Feature;