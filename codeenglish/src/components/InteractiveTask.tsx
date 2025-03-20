import { useState } from 'react';

interface InteractiveTaskProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const InteractiveTask: React.FC<InteractiveTaskProps> = ({
  question,
  options,
  correctAnswer,
  explanation,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  const resetTask = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-6 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">{question}</h3>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={showExplanation}
            className={`w-full text-left p-3 rounded-lg transition-colors ${
              selectedAnswer === index
                ? isCorrect
                  ? 'bg-green-100 border-green-500'
                  : 'bg-red-100 border-red-500'
                : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
            } border`}
          >
            {option}
          </button>
        ))}
      </div>
      {showExplanation && (
        <div className="mt-4">
          <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
            <p className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {isCorrect ? 'Правильно! (Correct!)' : 'Неправильно. (Incorrect.)'}
            </p>
            <p className="mt-2 text-gray-700">{explanation}</p>
          </div>
          <button 
            onClick={resetTask}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Попробовать снова (Try again)
          </button>
        </div>
      )}
    </div>
  );
};

export default InteractiveTask; 