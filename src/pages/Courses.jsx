import React, { useState } from 'react';
import { useEffect } from 'react';
import InquiryForm from '../components/InquiryForm';

const Courses = () => {


  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample course data - replace with your actual courses
  const courses = [
    {
      id: 1,
      code: "BUS101",
      title: "Introduction to Business",
      department: "business",
      credits: 3,
      description: "An overview of business principles, concepts, and practices in contemporary society.",
      prerequisites: "None",
      schedule: "Mon/Wed 10:00 AM - 11:30 AM"
    },
    {
      id: 2,
      code: "CS150",
      title: "Computer Science Fundamentals",
      department: "technology",
      credits: 4,
      description: "Introduction to programming concepts, algorithms, and problem-solving using Python.",
      prerequisites: "None",
      schedule: "Tue/Thu 1:00 PM - 2:45 PM"
    },
    {
      id: 3,
      code: "ENG201",
      title: "Academic Writing",
      department: "humanities",
      credits: 3,
      description: "Development of writing skills for academic research and communication.",
      prerequisites: "ENG101",
      schedule: "Mon/Wed/Fri 9:00 AM - 10:00 AM"
    },
    {
      id: 4,
      code: "BIO220",
      title: "Human Anatomy",
      department: "science",
      credits: 4,
      description: "Structure and function of the human body with emphasis on organ systems.",
      prerequisites: "BIO101",
      schedule: "Tue/Thu 9:00 AM - 10:30 AM, Fri 1:00 PM - 3:00 PM (Lab)"
    },
    {
      id: 5,
      code: "MATH230",
      title: "Calculus I",
      department: "mathematics",
      credits: 4,
      description: "Limits, derivatives, and integrals of algebraic and transcendental functions.",
      prerequisites: "MATH120 or equivalent",
      schedule: "Mon/Wed/Fri 11:00 AM - 12:15 PM"
    },
    {
      id: 6,
      code: "PSYC101",
      title: "Introduction to Psychology",
      department: "socialscience",
      credits: 3,
      description: "Survey of major topics in psychology including perception, learning, and personality.",
      prerequisites: "None",
      schedule: "Tue/Thu 3:00 PM - 4:30 PM"
    },
    {
      id: 7,
      code: "ART150",
      title: "Drawing Fundamentals",
      department: "arts",
      credits: 3,
      description: "Introduction to principles of drawing with emphasis on visual perception and technique.",
      prerequisites: "None",
      schedule: "Mon/Wed 1:00 PM - 3:45 PM"
    },
    {
      id: 8,
      code: "CS250",
      title: "Data Structures",
      department: "technology",
      credits: 4,
      description: "Implementation and application of common data structures including lists, stacks, queues, and trees.",
      prerequisites: "CS150",
      schedule: "Mon/Wed 3:00 PM - 4:30 PM, Fri 3:00 PM - 4:00 PM (Lab)"
    },
    {
      id: 9,
      code: "HIST210",
      title: "World History",
      department: "humanities",
      credits: 3,
      description: "Survey of major historical events and developments across global civilizations.",
      prerequisites: "None",
      schedule: "Tue/Thu 11:00 AM - 12:30 PM"
    },
    {
      id: 10,
      code: "CHEM101",
      title: "General Chemistry",
      department: "science",
      credits: 4,
      description: "Fundamental principles of chemistry including atomic structure, periodicity, and chemical reactions.",
      prerequisites: "High school chemistry recommended",
      schedule: "Mon/Wed 10:00 AM - 11:30 AM, Thu 1:00 PM - 4:00 PM"
    },
    {
      id: 11,
      code: "MKT300",
      title: "Marketing Principles",
      department: "business",
      credits: 3,
      description: "Introduction to marketing concepts, strategies, and applications in various contexts.",
      prerequisites: "BUS101",
      schedule: "Tue/Thu 9:00 AM - 10:30 AM"
    },
    {
      id: 12,
      code: "SOC101",
      title: "Introduction to Sociology",
      department: "socialscience",
      credits: 3,
      description: "Study of human society, social institutions, and group behaviors.",
      prerequisites: "None",
      schedule: "Mon/Wed/Fri 1:00 PM - 2:00 PM"
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'arts', name: 'Arts & Design' },
    { id: 'business', name: 'Business' },
    { id: 'humanities', name: 'Humanities' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'science', name: 'Natural Sciences' },
    { id: 'socialscience', name: 'Social Sciences' },
    { id: 'technology', name: 'Technology & Computing' }
  ];

  // Filter courses based on department and search query
  const filteredCourses = courses.filter(course => {
    const matchesDepartment = selectedDepartment === 'all' || course.department === selectedDepartment;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 text-center">Course Catalog</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Explore our diverse range of programs designed to prepare you for success.
          </p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-auto">
              <select 
                className="w-full md:w-64 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full md:w-64 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Available
          </h2>
          
          {filteredCourses.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-lg text-gray-700">No courses match your criteria. Please try a different search or filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-blue-800 text-white py-2 px-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold">{course.code}</h3>
                      <span className="text-sm bg-blue-700 px-2 py-1 rounded">{course.credits} {course.credits === 1 ? 'Credit' : 'Credits'}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{course.title}</h3>
                    <p className="text-gray-700 mb-4">{course.description}</p>
                    <div className="text-sm text-gray-600">
                      <p className="mb-1"><span className="font-semibold">Prerequisites:</span> {course.prerequisites}</p>
                      <p><span className="font-semibold">Schedule:</span> {course.schedule}</p>
                    </div>
                    <button className="mt-4 bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 w-full">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Program Information */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Academic Information</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Credit System</h3>
              <p className="text-gray-700">
                Most courses carry 3-4 credits. A typical full-time student takes 15-18 credits per semester. 
                To graduate, students must complete 120 credits for a bachelor's degree or 60 credits for an associate degree.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Registration</h3>
              <p className="text-gray-700">
                Registration for the upcoming semester opens six weeks before the end of the current term. 
                Students should meet with academic advisors to plan their course schedules and register through the student portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Academic Journey?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Speak with an academic advisor today to create your personalized degree plan.
          </p>
          <button className="bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
            Schedule Advising Appointment
          </button>
        </div>
      </section>
      <div className="my-10">
              <InquiryForm />
            </div>
    </div>
  );
}

export default Courses;