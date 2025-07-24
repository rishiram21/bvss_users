import React, { useEffect, useState } from 'react';
import { Trophy, Award, Calendar, Users, Star, ChevronRight, Play, MapPin, Clock, Eye, Heart, Share2, Filter, Grid, List } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const achievements = [
    {
      title: 'NAAC A+ Accreditation',
      year: '2024',
      description: 'Awarded highest grade by National Assessment and Accreditation Council',
      category: 'Accreditation',
      icon: '🏆',
      impact: 'Institutional Excellence'
    },
    {
      title: 'Best Ayurvedic College Award',
      year: '2023',
      description: 'Recognized as the leading Ayurvedic institution by Ministry of AYUSH',
      category: 'National Award',
      icon: '🥇',
      impact: 'National Recognition'
    },
    {
      title: 'Research Excellence Grant',
      year: '2023',
      description: 'Received ₹50 Lakhs research grant for innovative Ayurvedic studies',
      category: 'Research',
      icon: '🔬',
      impact: 'Research Development'
    },
    {
      title: 'ISO 9001:2015 Certification',
      year: '2022',
      description: 'Quality management system certification for educational excellence',
      category: 'Quality',
      icon: '✅',
      impact: 'Quality Assurance'
    },
    {
      title: 'Digital India Initiative',
      year: '2022',
      description: 'Successfully implemented digital learning infrastructure',
      category: 'Technology',
      icon: '💻',
      impact: 'Digital Transformation'
    },
    {
      title: 'Green Campus Award',
      year: '2021',
      description: 'Recognized for sustainable campus development and eco-friendly practices',
      category: 'Environment',
      icon: '🌱',
      impact: 'Sustainability'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'International Ayurveda Conference 2024',
      date: '2024-03-15',
      category: 'Conference',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
      description: 'Global gathering of Ayurveda experts, researchers, and practitioners sharing latest innovations.',
      attendees: 500,
      duration: '3 days',
      location: 'Main Campus Auditorium'
    },
    {
      id: 2,
      title: 'Annual Cultural Festival - Arogya Utsav',
      date: '2024-02-20',
      category: 'Cultural',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
      description: 'Celebrating traditional arts, music, and dance with wellness themes.',
      attendees: 1200,
      duration: '2 days',
      location: 'Campus Grounds'
    },
    {
      id: 3,
      title: 'Free Health Camp - Community Outreach',
      date: '2024-01-10',
      category: 'Community',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      description: 'Providing free Ayurvedic consultation and treatments to rural communities.',
      attendees: 800,
      duration: '1 day',
      location: 'Village Centers'
    },
    {
      id: 4,
      title: 'Research Symposium on Medicinal Plants',
      date: '2023-12-05',
      category: 'Academic',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop',
      description: 'Scholarly discussions on conservation and utilization of medicinal plants.',
      attendees: 300,
      duration: '1 day',
      location: 'Research Center'
    },
    {
      id: 5,
      title: 'Student Innovation Challenge',
      date: '2023-11-18',
      category: 'Competition',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
      description: 'Students showcasing innovative solutions for modern healthcare challenges.',
      attendees: 200,
      duration: '2 days',
      location: 'Innovation Hub'
    },
    {
      id: 6,
      title: 'Alumni Meet & Awards Ceremony',
      date: '2023-10-25',
      category: 'Alumni',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop',
      description: 'Celebrating achievements of distinguished alumni and networking opportunities.',
      attendees: 600,
      duration: '1 day',
      location: 'Convention Center'
    }
  ];

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      title: 'Graduation Ceremony 2024',
      category: 'Academic',
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      title: 'Cultural Performance',
      category: 'Cultural',
      views: 980,
      likes: 67
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop',
      title: 'Research Laboratory',
      category: 'Academic',
      views: 1100,
      likes: 75
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      title: 'Community Health Camp',
      category: 'Community',
      views: 890,
      likes: 92
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop',
      title: 'Herbal Garden Tour',
      category: 'Educational',
      views: 756,
      likes: 54
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=600&h=400&fit=crop',
      title: 'International Conference',
      category: 'Academic',
      views: 1340,
      likes: 108
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
      title: 'Innovation Challenge',
      category: 'Competition',
      views: 920,
      likes: 71
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
      title: 'Sports Day Celebration',
      category: 'Sports',
      views: 680,
      likes: 43
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
      title: 'Faculty Achievement Award',
      category: 'Recognition',
      views: 870,
      likes: 85
    }
  ];

  const stats = [
    { number: '50+', label: 'Awards Won', icon: Trophy },
    { number: '100+', label: 'Events Organized', icon: Calendar },
    { number: '10K+', label: 'Students Impacted', icon: Users },
    { number: '25+', label: 'Years of Excellence', icon: Star }
  ];

  const categories = ['all', 'Academic', 'Cultural', 'Community', 'Sports', 'Competition'];

  const filteredGallery = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            Achievements & Events
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
            Celebrating milestones, fostering innovation, and building a legacy of excellence 
            in Ayurvedic education and healthcare.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Achievements
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Upcoming Events
            </button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition of our commitment to excellence in Ayurvedic education and healthcare innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {achievement.year}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 mb-4">{achievement.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {achievement.category}
                    </span>
                    <span className="text-sm text-gray-500">{achievement.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Events & Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From academic conferences to cultural celebrations, experience the vibrant campus life
            </p>
          </div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={event.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-full">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        event.status === 'upcoming' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </span>
                    </div>
                    
                    {event.status === 'completed' && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-16 h-16 text-white" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {event.category}
                    </span>
                    <span className="text-gray-500 text-sm">{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{event.title}</h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Users className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                      <div className="text-sm font-semibold">{event.attendees}</div>
                      <div className="text-xs text-gray-500">Attendees</div>
                    </div>
                    <div className="text-center">
                      <Clock className="w-5 h-5 mx-auto mb-1 text-green-600" />
                      <div className="text-sm font-semibold">{event.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <MapPin className="w-5 h-5 mx-auto mb-1 text-red-600" />
                      <div className="text-sm font-semibold">Campus</div>
                      <div className="text-xs text-gray-500">Location</div>
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
                    {event.status === 'upcoming' ? 'Register Now' : 'View Gallery'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Campus Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Capturing moments of learning, celebration, and community engagement
            </p>
            
            {/* Filter and View Controls */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <div className="flex items-center bg-white rounded-lg shadow-md">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center bg-white rounded-lg shadow-md">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 max-w-4xl mx-auto'}`}>
            {filteredGallery.map((item) => (
              <div key={item.id} className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${viewMode === 'list' ? 'h-48' : 'h-64'}`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3 flex flex-col justify-center' : ''}`}>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {item.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {item.likes}
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Load More Images
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Success Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our journey towards excellence in Ayurvedic education and make your mark in healthcare innovation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
      <div className="my-10">
              <InquiryForm />
            </div>
    </div>
  );
};

export default Achievements;