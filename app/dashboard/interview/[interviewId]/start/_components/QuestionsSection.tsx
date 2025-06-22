import React from 'react'

type Question = {
  Question: string;
};

type QuestionsSectionProps = {
  mockInterviewQuestion: Question[];
  activeQuestionIndex: number;
};

function QuestionsSection({mockInterviewQuestion, activeQuestionIndex}: QuestionsSectionProps) {
      console.log("📦 mockInterviewQuestion:", mockInterviewQuestion);
  console.log("🎯 activeQuestionIndex:", activeQuestionIndex);
  console.log("💬 Current Question:", mockInterviewQuestion[activeQuestionIndex]);
  return mockInterviewQuestion&&(
    <div className='p-5 border rounded-lg'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {mockInterviewQuestion&&mockInterviewQuestion.map((question, index) => (
             <h2 key={index}
    className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${
      activeQuestionIndex==index&& 'bg-primary text-white'
    }`}
  >
    Question #{index + 1}
  </h2>
        ))}
      </div>
        <h2 className='my-5 text-md md:test-lg'>{mockInterviewQuestion[activeQuestionIndex]?.Question}</h2>
    </div>
  )
}

export default QuestionsSection
