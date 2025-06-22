"use client";
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { WebcamIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Webcam from "react-webcam";
import {Camera, Mic, Shield, CheckCircle } from 'lucide-react';
import Link from 'next/link';
interface InterviewProps {
    params: { interviewId: string };
}

function Interview({ params }: InterviewProps) {
    const [interviewData, setInterviewData] = React.useState<any>(null);
    const [webcamEnabled, setWebcamEnabled] = useState(false);
    useEffect(() => {
        console.log("id : " + params.interviewId);
        GetInterviewDetails();
    }, []);
    // used to get Interview details by MockId/Interview id
    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, params.interviewId))
        console.log(result);
        setInterviewData(result[0]);
    }
    return (
        <div>
            <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Let's Get Started
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Prepare yourself for an AI-powered mock interview experience designed to help you excel
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Left Column - Interview Details */}
                    <div className="space-y-8">
                        {/* Interview Information Card */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Interview Details</h3>
                                <p className="text-indigo-100">Review your interview configuration</p>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 font-semibold text-sm">JR</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 mb-1">Job Role/Job Position</p>
                                        <p className="text-lg font-semibold text-gray-800">{interviewData?.jobPosition}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-green-600 font-semibold text-sm">TS</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 mb-1">Job Description/Tech Stack</p>
                                        <p className="text-lg font-semibold text-gray-800">{interviewData?.jobDesc}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-purple-600 font-semibold text-sm">EX</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 mb-1">Years of Experience</p>
                                        <p className="text-lg font-semibold text-gray-800">{interviewData?.jobExperience}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Information Card */}
                        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-2xl p-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl">💡</span>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-lg font-bold text-amber-900">Before You Begin</h4>
                                    <div className="text-amber-800 space-y-3">
                                        <p className="leading-relaxed">
                                            Enable Video Web Cam and Microphone to start your AI Generated Mock Interview. 
                                            It has <span className="font-semibold">5 questions</span> which you can answer, 
                                            and at the end, you will get a detailed report based on your answers.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Webcam Section */}
                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 w-full max-w-md">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Camera Setup</h3>
                            
                            <div className="relative mb-8">
                                {webcamEnabled ? (
                                    <div className="relative">
<div className="w-80 h-60 bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                                            <Webcam onUserMedia={() => setWebcamEnabled(true)}
      onUserMediaError={() => setWebcamEnabled(false)} mirrored={true}></Webcam>
                                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                                <div className="text-center">
                                                    <Camera className="w-12 h-12 text-white mx-auto mb-2" />
                                                    <p className="text-white text-sm">Camera Active</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-green-500 rounded-full p-2">
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-80 h-60 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
                                        <WebcamIcon className="w-16 h-16 text-gray-400 mb-4" />
                                        <p className="text-gray-500 text-center mb-2">Camera Disabled</p>
                                        <p className="text-sm text-gray-400 text-center px-4">
                                            Enable your camera to begin the interview
                                        </p>
                                    </div>
                                )}
                            </div>

                            {!webcamEnabled && (
                                <button
                                    onClick={() => setWebcamEnabled(true)}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                                >
                                    <Camera className="w-5 h-5" />
                                    <span>Enable Camera & Microphone</span>
                                    <Mic className="w-5 h-5" />
                                </button>
                            )}

                            {webcamEnabled && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-center space-x-2 text-green-600">
                                        <CheckCircle className="w-5 h-5" />
                                        <span className="font-medium">Camera & Microphone Ready</span>
                                    </div>
                                    <button
                                        onClick={() => setWebcamEnabled(false)}
                                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all duration-200"
                                    >
                                        Disable Camera
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Start Interview Button */}
                <div className="flex justify-center">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 w-full max-w-md">
                        <Link href={'/dashboard/interview/'+params.interviewId+'/start'}>
                        <button
                            disabled={!webcamEnabled}
                            className={`w-full font-bold py-4 px-8 rounded-xl transition-all duration-200 transform ${
                                webcamEnabled
                                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white hover:scale-105 shadow-lg hover:shadow-xl'
                                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            {webcamEnabled ? 'Start Interview' : 'Enable Camera to Continue'}
                        </button>
                        </Link>
                        {webcamEnabled && (
                            <p className="text-center text-sm text-gray-500 mt-3">
                                You're all set! Click to begin your mock interview.
                            </p>
                        )}
                    </div>
                </div>
            </div>
    )
}

export default Interview
