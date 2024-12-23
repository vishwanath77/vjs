import React, { useState } from "react";
import "./FAQ.css"; // Add styles for proper alignment and responsive design

const FAQ = () => {
  const faqData = [
    { question: "What is CRS score?", answer: "The CRS score is..." },
    { question: "What is the required minimum score?", answer: "The required minimum score depends on..." },
    { question: "What score is considered as a good CRS score?", answer: "A good CRS score is usually..." },
    { question: "What is the Canada Express Entry CRS score in 2023?", answer: "The CRS score for Express Entry in 2023..." },
    { question: "In what ways can I raise my score on the Comprehensive Ranking System (CRS)?", answer: "You can raise your CRS score by..." },
    { question: "How can my CRS score be increased through a Provincial Nominee Programme?", answer: "Through a Provincial Nominee Programme..." },
    { question: "What score is required for PNP?", answer: "The required PNP score is..." },
    { question: "If I apply with my spouse, will my Comprehensive Ranking System (CRS) score increase?", answer: "Applying with your spouse may increase..." },
    { question: "How can your CRS Score be improved?", answer: "You can improve your CRS score by..." },
    { question: "What role does language proficiency, work experience in Canada, and education play in impacting CRS scores?", answer: "Language proficiency, work experience, and education..." },
    { question: "How to calculate CRS score for Canada PR?", answer: "CRS score for Canada PR can be calculated using..." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
