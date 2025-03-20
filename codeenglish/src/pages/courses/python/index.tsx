import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PythonCourse = () => {
  return (
    <>
      <Head>
        <title>Python Programming Course | CodeEnglish</title>
        <meta name="description" content="Learn Python programming while improving your English skills. Perfect for students in grades 7-11." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Python Programming Course</h1>
            <p className="text-xl mb-8">Master Python programming while improving your English skills</p>
            <div className="flex gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Learning
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Curriculum
              </button>
            </div>
          </div>
        </div>

        {/* Course Overview */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
              <p className="text-gray-600 mb-4">
                Our Python course is designed specifically for students in grades 7-11 who want to learn programming while improving their English skills. Through interactive lessons, practical exercises, and real-world projects, you'll become proficient in Python programming.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Beginner-friendly approach</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Interactive coding exercises</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>English language integration</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Course Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">Duration</p>
                  <p className="font-semibold">12 weeks</p>
                </div>
                <div>
                  <p className="text-gray-600">Level</p>
                  <p className="font-semibold">Beginner to Intermediate</p>
                </div>
                <div>
                  <p className="text-gray-600">Prerequisites</p>
                  <p className="font-semibold">Basic computer skills</p>
                </div>
                <div>
                  <p className="text-gray-600">Language</p>
                  <p className="font-semibold">English</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Curriculum</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Introduction to Python",
                  description: "Learn the basics of Python programming language and its syntax",
                  duration: "2 weeks"
                },
                {
                  title: "Variables and Data Types",
                  description: "Understanding different data types and how to work with them",
                  duration: "2 weeks"
                },
                {
                  title: "Control Structures",
                  description: "Learn about loops, conditions, and program flow control",
                  duration: "2 weeks"
                },
                {
                  title: "Functions and Modules",
                  description: "Creating reusable code with functions and modules",
                  duration: "2 weeks"
                },
                {
                  title: "Object-Oriented Programming",
                  description: "Understanding classes, objects, and inheritance",
                  duration: "2 weeks"
                },
                {
                  title: "Final Project",
                  description: "Build a complete Python application using everything you've learned",
                  duration: "2 weeks"
                }
              ].map((module, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <p className="text-sm text-blue-600">Duration: {module.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-xl mb-8">Join our Python course and start your programming journey today!</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PythonCourse; 