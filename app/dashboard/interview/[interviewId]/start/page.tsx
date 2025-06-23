"use client";
import React, { useEffect } from 'react'
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
interface StartInterviewProps {
    params: {
        interviewId: string;
    };
}

function StartInterview({ params }: StartInterviewProps) {
    const [interviewData, setInterviewData] = React.useState<any>();
    const [mockInterviewQuestion, setMockInterviewQuestion] = React.useState<any[]>([]);
    const [activeQuestionIndex, setActiveQuestionIndex] = React.useState(0);
    useEffect(() => {
        GetInterviewDetails();
    }, []);

    const GetInterviewDetails = async () => {
            const result = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockId, params.interviewId))
                const jsonMockResp = JSON.parse(result[0].jsonMockResp);
                console.log(jsonMockResp);
                setMockInterviewQuestion(jsonMockResp);
                setInterviewData(result[0]);
        }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <QuestionsSection mockInterviewQuestion={mockInterviewQuestion}
      activeQuestionIndex={activeQuestionIndex}
      ></QuestionsSection>
      <RecordAnswerSection></RecordAnswerSection>
    </div>
  )
}

export default StartInterview