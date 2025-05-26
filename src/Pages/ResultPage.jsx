import React from "react";

const ResultPage = ({ scorePercentage }) => {
  const getAnxietyLevel = () => {
    if (scorePercentage < 30) return "Minimal Anxiety";
    if (scorePercentage < 60) return "Mild Anxiety";
    if (scorePercentage < 80) return "Moderate Anxiety Levels";
    return "High Anxiety Levels";
  };

  return (
    <div className="min-h-screen bg-[#bcccdc] flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-2">
          Your Mental Health Assessment Results
        </h2>
        <p className="text-sm mb-4">
          Based on your responses, we’ve prepared a comprehensive analysis
        </p>

        <div className="bg-yellow-300 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl font-bold">{scorePercentage}%</span>
        </div>

        <h3 className="text-xl font-semibold mb-2">{getAnxietyLevel()}</h3>
        <p className="mb-6 text-sm">
          Your responses indicate {getAnxietyLevel().toLowerCase()} that may
          benefit from professional support.
        </p>

        <div className="text-left mb-6 space-y-4">
          <div>
            <strong>Talk Therapy</strong>
            <p className="text-sm">
              Consider scheduling sessions with a licensed therapist to develop
              coping strategies.
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
};

export default ResultPage;
