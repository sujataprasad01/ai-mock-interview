"use client";
import React, { useState } from 'react'
import { Plus, Calendar, Clock, Star, LoaderCircle } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { Textarea } from "@/components/ui/textarea"
import { eventNames } from 'process';
import { chatSession } from '@/utils/GeminiAIModal';
import {db} from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useRouter } from 'next/router';
function AddNewInterview() {
    const [openDailog, setOpenDailog] = useState(false)
    const [jobPosition, setJobPosition] = useState('');
    const [jobDesc, setJobDesc] = useState('');
    const [jobExperience, setJobExperience] = useState('');
    const [loading, setLoading] = useState(false);
    const [jsonResponse, setJsonResponse] = useState([]);
    const router=useRouter();
    
    const {user}=useUser();
    const onSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault()
        console.log(jobPosition, jobDesc, jobExperience);
        const InputPrompt="Job Position: "+jobPosition+", Job Description: "+jobDesc+", Years of Experience: "+jobExperience+", Depends on this information please give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Interview question along with Answered in Json Format, Give Question and Answered as field in JSON"
            const result = await chatSession.sendMessage(InputPrompt);
    const response = await (result.response.text()).replace('```json', '').replace('```', '');
    console.log(JSON.parse(response));
    setJsonResponse(response);
    if(response){
  
    const resp=await db.insert(MockInterview)
    .values({
        mockId: uuidv4(),
        jsonMockResp: response,
        jobPosition: jobPosition,        
        jobDesc: jobDesc,
        jobExperience: jobExperience,
        createdBy: user?.primaryEmailAddress?.emailAddress || '', // Ensure createdBy is provided
        createdAt: moment().format('DD-MM-YYYY HH:mm:ss'),
    }).returning({mockId:MockInterview.mockId, createdAt:MockInterview.createdAt});
    console.log(resp);
    if(resp){
        setOpenDailog(false);
        router.push('/dashboard/interview/'+resp[0]?.mockId);
    }
}
else{
    console.log("Error in Generating Response");
}
    setLoading(false);
    }
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transform hover:-translate-y-1 w-full flex items-center justify-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-200 group">
            <div className="p-6 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-200 cursor-pointer"
                onClick={() => setOpenDailog(true)}>
                <Plus className="w-6 h-6 text-indigo-600" />
                <span className="text-lg font-semibold">Add New Interview</span>
            </div>
            <Dialog open={openDailog}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">Share Insights About Your Job Interview</DialogTitle>
                        <DialogDescription>
                             </DialogDescription>
                    </DialogHeader>
                            <form onSubmit={onSubmit}>
                            <div>
                                <h2>Include Details About the Position, Role Responsibilities, and Your Years of Experience</h2>
                                <div className='mt-7 my-2'>
                                    <label >Job Role/Job Position</label>
                                    <Input placeholder='Ex. Full Stack Developer' required 
                                    onChange={(event)=>setJobPosition(event.target.value)}></Input>
                                    <div className='my-3'>

                                        <label >Job Description/ Tech Stack</label>
                                        <Textarea placeholder='Ex. React, Angular, NodeJs' required
                                        onChange={(event)=>setJobDesc(event.target.value)}/>
                                    </div>
                                    <div className='my-3'>
                                        <label >Years Of Experience</label>
                                        <Input placeholder="Ex. 2" type="number" max='100' required 
                                        onChange={(event)=>setJobExperience(event.target.value)}/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-5 justify-end'>
                                <Button type="button" variant="ghost" onClick={() => setOpenDailog(false)}>Cancle</Button>
                                <Button type="submit" disabled={loading}>{loading? <><LoaderCircle className='animate-spin'/>Generative From AI</>: 'Start Interview'}</Button>
                            </div>
                            </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview
