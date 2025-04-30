// Quiz.tsx
import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Check, X, Award, RefreshCw } from 'lucide-react';

interface Question {
  id: number; 
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Which vehicle type typically has lower lifetime carbon emissions when charged using renewable energy?",
    options: [
      "Electric Vehicles (EVs)",
      "Internal Combustion Engine (ICE) vehicles",
      "Both have approximately equal emissions",
      "It depends entirely on the vehicle size"
    ],
    correctAnswer: 0,
    explanation: "EVs charged with renewable energy have significantly lower lifetime carbon emissions compared to ICE vehicles, as they produce zero tailpipe emissions and the electricity generation has minimal carbon impact."
  },
  {
    id: 2,
    text: "Which stage of an EV's lifecycle typically has the highest environmental impact?",
    options: [
      "Daily operation/driving",
      "Battery manufacturing",
      "Vehicle disposal",
      "Maintenance"
    ],
    correctAnswer: 1,
    explanation: "Battery manufacturing is currently the most environmentally intensive part of an EV's lifecycle due to energy requirements and resource extraction for materials like lithium, cobalt, and nickel."
  },
  {
    id: 3,
    text: "What percentage of an ICE vehicle's energy is typically converted to power at the wheels?",
    options: [
      "60-70%",
      "40-50%",
      "12-30%",
      "80-90%"
    ],
    correctAnswer: 2,
    explanation: "ICE vehicles are relatively inefficient, converting only about 12-30% of the energy stored in gasoline to power at the wheels. The rest is lost as heat and friction."
  },
  {
    id: 4,
    text: "Which of the following is NOT a common material used in EV batteries?",
    options: [
      "Lithium",
      "Cobalt",
      "Platinum",
      "Nickel"
    ],
    correctAnswer: 2,
    explanation: "While lithium, cobalt, and nickel are common components in EV batteries, platinum is primarily used in catalytic converters for ICE vehicles, not in EV batteries."
  },
  {
    id: 5,
    text: "After how many miles (approximately) do EVs typically 'break even' with ICE vehicles in terms of total lifecycle emissions?",
    options: [
      "1,000-5,000 miles",
      "6,000-16,000 miles",
      "20,000-30,000 miles",
      "50,000+ miles"
    ],
    correctAnswer: 1,
    explanation: "Research shows that EVs typically reach a 'breakeven point' with ICE vehicles after 6,000 to 16,000 miles of driving, depending on the electricity grid mix and vehicle models compared."
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const renderAnswerResult = (isCorrect: boolean) => {
    return isCorrect ? (
      <div className="flex items-center text-green-600">
        <Check size={16} className="mr-1" />
        <span>Correct!</span>
      </div>
    ) : (
      <div className="flex items-center text-red-600">
        <X size={16} className="mr-1" />
        <span>Incorrect</span>
      </div>
    );
  };

  return (
    <PageLayout>
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 py-20 pt-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Test Your Knowledge</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Take our interactive quiz to test what you know about the environmental impact of EVs and ICEs.
          </p>
        </div>
      </div>

      <Section>
        {!quizCompleted ? (
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium">Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span className="text-lg font-medium">Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}</span>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-6">{quizQuestions[currentQuestion].text}</h2>

              <div className="space-y-3 mb-6">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => !showExplanation && handleAnswerSelect(index)}
                    className={`
                      p-4 rounded-lg border cursor-pointer transition-colors
                      ${selectedAnswer === index ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'}
                      ${showExplanation && index === quizQuestions[currentQuestion].correctAnswer ? 'border-green-500 bg-green-50' : ''}
                      ${showExplanation && selectedAnswer === index && selectedAnswer !== quizQuestions[currentQuestion].correctAnswer ? 'border-red-500 bg-red-50' : ''}
                      ${showExplanation ? 'cursor-default' : ''}
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span>{option}</span>
                      {showExplanation && index === selectedAnswer && (
                        renderAnswerResult(index === quizQuestions[currentQuestion].correctAnswer)
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {showExplanation && (
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-blue-800 mb-1">Explanation:</h3>
                  <p className="text-blue-900">{quizQuestions[currentQuestion].explanation}</p>
                </div>
              )}

              <div className="flex justify-end">
                {!showExplanation ? (
                  <Button
                    onClick={handleCheckAnswer}
                    disabled={selectedAnswer === null}
                    className={selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''}
                  >
                    Check Answer
                  </Button>
                ) : (
                  <Button onClick={handleNextQuestion}>
                    {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="mb-6">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                  <Award size={40} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Quiz Completed!</h2>
                <p className="text-gray-600">
                  You scored {score} out of {quizQuestions.length} questions correctly.
                </p>
              </div>

              <Button onClick={restartQuiz}>
                <RefreshCw size={16} className="mr-2" />
                Take Quiz Again
              </Button>
            </div>
          </div>
        )}
      </Section>
    </PageLayout>
  );
};

export default Quiz;
