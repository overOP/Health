import React, { useState } from "react";
import { quizData } from "../Data/Data";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleOptionSelect = (optionIndex) => {
    setAnswers({
      ...answers,
      [quizData[currentQuestion].id]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);
  const maxScore = quizData.length * 3;
  const percentage = Math.round((totalScore / maxScore) * 100);

  const getAnxietyLevel = () => {
    if (percentage < 30) return "Minimal Anxiety";
    if (percentage < 60) return "Mild Anxiety";
    if (percentage < 80) return "Moderate Anxiety Levels";
    return "High Anxiety Levels";
  };

  const quote =
    "Taking care of your mental health is a sign of strength, not weakness.";

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-[#bcccdc] flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2">
            Your Mental Health Assessment Results
          </h2>
          <p className="text-sm mb-4">
            Based on your responses, here’s your summary:
          </p>

          <div className="bg-yellow-300 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-bold">{percentage}%</span>
          </div>

          <h3 className="text-xl font-semibold mb-2">{getAnxietyLevel()}</h3>
          <p className="mb-6 text-sm">
            Your responses indicate {getAnxietyLevel().toLowerCase()} that may
            benefit from professional support.
          </p>

          <blockquote className="italic text-gray-600 border-l-4 border-yellow-400 pl-4 mb-6">
            “{quote}”
          </blockquote>

          <div className="text-left mb-6 space-y-4">
            <div>
              <strong>Talk Therapy</strong>
              <p className="text-sm">
                Consider scheduling sessions with a licensed therapist to
                develop coping strategies.
              </p>
            </div>
            <div>
              <strong>Stress Management</strong>
              <p className="text-sm">
                Practice daily meditation and mindfulness exercises.
              </p>
            </div>
          </div>

          <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500">
            Schedule a Consultation
          </button>
        </div>
      </div>
    );
  }

  const question = quizData[currentQuestion];
  const selected = answers[question.id];

  return (
    <div className="min-h-screen bg-[#bcccdc] flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-2">
          Mood Assessment Quiz
        </h1>
        <p className="text-sm text-center font-medium mb-4">
          Question {currentQuestion + 1} out of {quizData.length}
        </p>

        <p className="text-lg font-medium mb-6">{question.question}</p>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition ${
                selected === index
                  ? "bg-blue-100 border-l-4 border-blue-500"
                  : "hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name={question.id}
                checked={selected === index}
                onChange={() => handleOptionSelect(index)}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-800">{option}</span>
            </label>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 disabled:opacity-50"
          >
            Prev question
          </button>
          <button
            onClick={handleNext}
            className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
          >
            {currentQuestion === quizData.length - 1
              ? "Submit"
              : "Next question"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
