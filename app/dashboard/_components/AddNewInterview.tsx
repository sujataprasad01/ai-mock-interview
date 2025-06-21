"use client";
import React, { useState } from 'react'
import { Plus, Calendar, Clock, Star } from 'lucide-react';
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
function AddNewInterview() {
    const [openDailog, setOpenDailog] = useState(false)
    const [jobPosition, setJobPosition] = useState('');
    const [jobDesc, setJobDesc] = useState('');
    const [jobExperience, setJobExperience] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(jobPosition, jobDesc, jobExperience);
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
                                <Button type="submit">Start Interview</Button>
                            </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview
