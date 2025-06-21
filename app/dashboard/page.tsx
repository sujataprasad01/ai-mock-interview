import React from 'react'
import { Plus, Calendar, Clock, Star } from 'lucide-react';
import {UserButton } from '@clerk/nextjs';
import AddNewInterview from './_components/AddNewInterview';
function Dashboard() {
      const mockInterviews = [
    {
      id: 1,
      title: 'Full Stack Frontend Developer',
      experience: '7 Years of Experience',
      createdAt: 'Created At 05-06-2024',
      type: 'frontend'
    },
    {
      id: 2,
      title: 'Backend Java Developer',
      experience: '5 Years of Experience',
      createdAt: 'Created At 05-06-2024',
      type: 'backend'
    },
    {
      id: 3,
      title: 'Full Stack Angular Developer',
      experience: '3 Years of Experience',
      createdAt: 'Created At 04-06-2024',
      type: 'fullstack'
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      experience: '4 Years of Experience',
      createdAt: 'Created At 03-06-2024',
      type: 'fullstack'
    }
  ];

  const getGradientClass = (type: string) => {
    switch (type) {
      case 'frontend':
        return 'from-blue-500 to-indigo-600';
      case 'backend':
        return 'from-green-500 to-emerald-600';
      case 'fullstack':
        return 'from-purple-500 to-pink-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div>
       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create and Start your AI Mockup Interview
          </p>
          
          {/* Add New Interview Card */}
          {/* className='grid grid-cols-1 md:grid-cols-3 my-5 */}
          <div>
            <AddNewInterview>
              </AddNewInterview>
          </div>
        </div>

        {/* Previous Mock Interviews */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center space-x-3">
            <Clock className="w-6 h-6 text-indigo-600" />
            <span>Previous Mock Interviews</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockInterviews.map((interview) => (
              <div
                key={interview.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Card Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${getGradientClass(interview.type)}`}></div>
                
                <div className="p-6">
                  {/* Interview Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {interview.title}
                  </h3>
                  
                  {/* Experience */}
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-gray-600 font-medium">{interview.experience}</span>
                  </div>
                  
                  {/* Created Date */}
                  <div className="flex items-center space-x-2 mb-6">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{interview.createdAt}</span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-md">
                      Feedback
                    </button>
                    <button className={`flex-1 bg-gradient-to-r ${getGradientClass(interview.type)} hover:shadow-lg text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105`}>
                      Start
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-indigo-600">4</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Interviews</h3>
            <p className="text-gray-600">Mock interviews completed</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-emerald-600">85%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Average Score</h3>
            <p className="text-gray-600">Performance rating</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">12h</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Practice Time</h3>
            <p className="text-gray-600">Total time spent</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
