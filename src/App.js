import React, { useState } from 'react';

const questions = [
  {
    text: "What industry is your business in?",
    options: ["Agriculture", "Energy", "Manufacturing", "Retail", "Other"]
  },
  {
    text: "Do you currently use any weather or climate forecasting data?",
    options: ["Yes, regularly", "Sometimes", "No", "Not sure"]
  },
  {
    text: "How often do extreme weather events impact your operations?",
    options: ["Frequently", "Occasionally", "Rarely", "Never"]
  },
  {
    text: "Which weather events are you most concerned about?",
    options: ["Heatwaves", "Floods", "Hurricanes", "Droughts", "Other"]
  },
  {
    text: "How prepared do you feel for future climate-related risks?",
    options: ["Very prepared", "Somewhat prepared", "Not very prepared", "Not at all prepared"]
  }
];

const ClimateRiskAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendation = () => {
    const preparedness = answers[4];
    if (preparedness === "Very prepared" || preparedness === "Somewhat prepared") {
      return "Your business seems to have a good foundation for climate resilience. Consider exploring our advanced forecasting tools to further enhance your preparedness.";
    } else {
      return "Your business may benefit from more robust climate risk planning. Our forecasting tools can help you anticipate and prepare for future weather-related challenges.";
    }
  };

  if (showResults) {
    return (
      <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Assessment Results</h2>
        <div style={{ padding: '16px', backgroundColor: '#f0f0f0', borderRadius: '4px', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Recommendation</h3>
          <p>{getRecommendation()}</p>
        </div>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Next Steps:</h3>
          <ul style={{ paddingLeft: '20px', listStyleType: 'disc' }}>
            <li>Download our industry-specific case study</li>
            <li>Explore our forecast details page</li>
            <li>Contact us for a personalized consultation</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>5-Minute Climate Risk Assessment</h2>
      <p style={{ marginBottom: '16px' }}>Question {currentQuestion + 1} of {questions.length}</p>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{questions[currentQuestion].text}</h3>
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            style={{
              width: '100%',
              padding: '8px',
              textAlign: 'left',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '8px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onClick={() => handleAnswer(option)}
          >
            <span>{option}</span>
            <span>→</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClimateRiskAssessment;