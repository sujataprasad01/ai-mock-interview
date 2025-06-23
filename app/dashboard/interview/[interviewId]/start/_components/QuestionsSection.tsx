import { Lightbulb } from 'lucide-react';
import React from 'react'

type Question = {
  Question: string;
//   Answer?: string;
};

type QuestionsSectionProps = {
  mockInterviewQuestion: Question[];
  activeQuestionIndex: number;
};

function QuestionsSection({mockInterviewQuestion, activeQuestionIndex}: QuestionsSectionProps) {
  console.log("📦 mockInterviewQuestion:", mockInterviewQuestion);
  console.log("🎯 activeQuestionIndex:", activeQuestionIndex);
  console.log("💬 Current Question:", mockInterviewQuestion[activeQuestionIndex]);
  
  return mockInterviewQuestion && (
    <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden'>
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
        <h3 className="text-xl font-bold text-white mb-2">Interview Questions</h3>
        <p className="text-indigo-100">Navigate through your interview questions</p>
      </div>

      <div className="p-8">
        {/* Question Navigation Pills */}
        <div className='mb-8'>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Question Navigation</h4>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
            {mockInterviewQuestion && mockInterviewQuestion.map((question, index) => (
              <div
                key={index}
                className={`relative p-4 rounded-xl text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeQuestionIndex === index
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                <div className="text-xs font-medium mb-1">Question</div>
                <div className="text-lg font-bold">#{index + 1}</div>
                {activeQuestionIndex === index && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Current Question Display */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">Q{activeQuestionIndex + 1}</span>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">Current Question</h4>
                <p className="text-lg font-semibold text-gray-800">Question {activeQuestionIndex + 1} of {mockInterviewQuestion.length}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <p className='text-lg md:text-xl text-gray-800 leading-relaxed font-medium'>
                {mockInterviewQuestion[activeQuestionIndex]?.Question}
              </p>
            </div>
          </div>
        </div>

        {/* Information Note */}
        <div className='bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6'>
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <h4 className='text-lg font-bold text-blue-900'>Note:</h4>
              </div>
              <div className="bg-white/60 rounded-xl p-4 border border-blue-200">
                <p className='text-sm text-blue-800 leading-relaxed'>
                  {process.env.NEXT_PUBLIC_INFORMATION || "Take your time to think through your answer. Speak clearly and provide specific examples when possible. Remember, this is a practice session to help you improve."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionsSection