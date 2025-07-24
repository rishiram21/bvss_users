import React, { useEffect } from 'react';
import InquiryForm from '../components/InquiryForm';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 text-center">About Our College</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Empowering students through education, innovation, and community since 1965.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Mission</h2>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <p className="text-lg text-gray-700 mb-4">
                We are committed to providing accessible, high-quality education that inspires intellectual curiosity and critical thinking. Our goal is to prepare students not only for successful careers but for meaningful lives as engaged citizens who contribute positively to society.
              </p>
              <p className="text-lg text-gray-700">
                Through rigorous academics, research opportunities, and community engagement, we foster an environment where knowledge serves humanity and students develop the skills needed for tomorrow's challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Academic Excellence",
                description: "We uphold rigorous standards and pursue innovation in teaching and learning."
              },
              {
                title: "Diversity & Inclusion",
                description: "We celebrate differences and create an environment where all perspectives are valued."
              },
              {
                title: "Integrity",
                description: "We promote ethical behavior, honesty, and accountability in all our endeavors."
              },
              {
                title: "Community Engagement",
                description: "We believe in the power of education to transform communities through service and partnership."
              },
              {
                title: "Student Success",
                description: "We are dedicated to supporting every student in achieving their academic and personal goals."
              },
              {
                title: "Innovation",
                description: "We embrace creative approaches to teaching, learning, and addressing societal challenges."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Academic Excellence</h2>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              Our institution offers a diverse range of undergraduate and graduate programs across the arts, sciences, business, and professional studies. Led by distinguished faculty who are leaders in their fields, our academic departments combine traditional scholarship with innovative teaching methods.
            </p>
            <p className="text-lg text-gray-700">
              Small class sizes ensure personalized attention and meaningful mentorship opportunities. We pride ourselves on creating an environment where students can pursue their intellectual passions while developing practical skills for their future careers.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Campus Life</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Student Organizations</h3>
              <p className="text-gray-700">
                With over 50 student clubs and organizations, there are countless opportunities to explore interests, develop leadership skills, and build community on campus.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Athletics</h3>
              <p className="text-gray-700">
                Our competitive athletic programs promote teamwork, discipline, and school spirit while providing students with opportunities to excel both on and off the field.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Arts & Culture</h3>
              <p className="text-gray-700">
                From gallery exhibitions to theatrical performances, our campus celebrates creativity and artistic expression in all its forms.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Community Service</h3>
              <p className="text-gray-700">
                We believe in giving back, with numerous service-learning opportunities that allow students to make a difference while gaining valuable real-world experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our History</h2>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <p className="text-lg text-gray-700 mb-4">
                Founded in 1965, our college began with a vision to provide accessible higher education to our community. From our humble beginnings with just three buildings and 200 students, we have grown into a respected institution serving thousands of students each year.
              </p>
              <p className="text-lg text-gray-700">
                Throughout our history, we have remained committed to our founding principles while adapting to meet the changing needs of students and society. Today, we stand as a testament to the power of education to transform lives and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Ready to begin your journey? Explore our programs, schedule a campus visit, or apply today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
              Explore Programs
            </button>
            <button className="bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </section>
      <div className="my-10">
              <InquiryForm />
            </div>
    </div>
  );
}

export default About;
