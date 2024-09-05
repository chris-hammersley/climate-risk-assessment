import React, { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Assessment Results</h2>
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Recommendation</AlertTitle>
          <AlertDescription>{getRecommendation()}</AlertDescription>
        </Alert>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Next Steps:</h3>
          <ul className="list-disc pl-5">
            <li>Download our industry-specific case study</li>
            <li>Explore our forecast details page</li>
            <li>Contact us for a personalized consultation</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">5-Minute Climate Risk Assessment</h2>
      <p className="mb-4">Question {currentQuestion + 1} of {questions.length}</p>
      <h3 className="text-lg font-semibold mb-2">{questions[currentQuestion].text}</h3>
      <div className="space-y-2">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className="w-full p-2 text-left border rounded hover:bg-gray-100 flex items-center justify-between"
            onClick={() => handleAnswer(option)}
          >
            <span>{option}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClimateRiskAssessment;
