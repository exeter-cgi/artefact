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
    text: "⁠What is the primary factor driving the belief in EVs' eco-friendliness?",
    options: [
      "No exhaust fumes",
      "Public perception and marketing",
      "Lower lifetime carbon footprint",
      " Battery production"
    ],
    correctAnswer: 0,
    explanation: "The absence of tailpipe emissions creates a visual and symbolic impression of clean transport, driving the belief that EVs are eco-friendly, even though other environmental factors are overlooked."
  },
  {
    id: 2,
    text: "What factor do most respondents ignore when considering EVs’ environmental impact?",
    options: [
      "Limited driving range compared to petrol cars",
      "Battery production",
      "Social status",
      "Lack of charging infrastructure"
    ],
    correctAnswer: 1,
    explanation: "Few respondents were aware of the ecological harm caused by battery production, which complicates the assumption that EVs are inherently eco-friendly."
  },
  {
    id: 3,
    text: "Which metal is commonly associated with ethical concerns in mining?",
    options: [
      "Iron",
      "Zinc",
      "Cobalt",
      "Aluminium"
    ],
    correctAnswer: 2,
    explanation: "Cobalt is often mined in countries like the Democratic Republic of Congo under exploitative and unsafe conditions, including child labour. Its use raises serious human rights and environmental concerns."
  },
  {
    id: 4,
    text: "⁠What is a major environmental concern associated with lithium-ion battery production?",
    options: [
      "Air pollution",
      "Carbon emissions",
      "Noise pollution",
      "Water pollution"
    ],
    correctAnswer: 3,
    explanation: "The extraction of materials like lithium and cobalt has been linked to environmental degradation and water pollution, especially in regions like the Democratic Republic of Congo."
  },
  {
    id: 5,
    text: "What is the estimated carbon emission per kilowatt-hour during the production of an EV battery?",
    options: [
      "100–150 kg of CO₂",
      "150–200 kg of CO₂",
      "200–250 kg of CO₂",
      "250–300 kg of CO₂"
    ],
    correctAnswer: 1,
    explanation: "Producing a single EV battery can emit 150–200 kg of CO₂ per kilowatt-hour, contributing to the carbon footprint despite the reduction in tailpipe emissions from EVs."
  },
  {
    id: 6,
    text: "What is a key concern for consumers regarding EVs?",
    options: [
      "Charging speed",
      "Vehicle weight",
      "Battery lifespan",
      "Maintenance cost"
    ],
    correctAnswer: 2,
    explanation: "The lifespan of EV batteries is a major concern for consumers and manufacturers, as it directly impacts vehicle performance, cost, and environmental sustainability."
  },
  {
    id: 7,
    text: "How long do modern EV batteries typically last before significant capacity loss?",
    options: [
      "5–7 years",
      "10–12 years",
      "12-15 years",
      "20–25 years"
    ],
    correctAnswer: 2,
    explanation: "Most modern EV lithium-ion batteries are designed to last 12–15 years or 150,000–300,000 kilometers before experiencing significant capacity loss."
  },
  {
    id: 8,
    text: "What is a major environmental risk of improperly disposing lithium-ion batteries?",
    options: [
      "Air pollution",
      "Soil and groundwater contamination",
      "Water scarcity",
      "Noise pollution"
    ],
    correctAnswer: 1,
    explanation: "Improper disposal of lithium-ion batteries in landfills can lead to the leakage of toxic chemicals such as cobalt, nickel, and lithium, contaminating soil and groundwater."
  },
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
            Take our interactive quiz to test what you know about the environmental impact of EVs.
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
