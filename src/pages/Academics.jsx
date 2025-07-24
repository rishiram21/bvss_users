import React, { useEffect, useState } from 'react';
import { BookOpen, Users, Award, Globe, ChevronRight, Star, Calendar, Clock, MapPin, Mail, FileText, GraduationCap } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Academics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('undergraduate');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '15+', label: 'Academic Departments', icon: BookOpen },
    { number: '50+', label: 'Expert Faculty', icon: Users },
    { number: '95%', label: 'Success Rate', icon: Award },
    { number: '10+', label: 'Years Experience', icon: Globe }
  ];

  const programs = {
    undergraduate: [
      {
        title: 'Bachelor of Ayurvedic Medicine & Surgery (BAMS)',
        duration: '5.5 Years',
        seats: '100',
        description: 'Comprehensive program covering traditional Ayurvedic principles with modern medical knowledge.',
        highlights: ['Clinical Training', 'Research Projects', 'Internship Program']
      },
      {
        title: 'Integrated Medicine Program',
        duration: '4 Years',
        seats: '50',
        description: 'Unique blend of Ayurvedic and modern medical practices for holistic healthcare.',
        highlights: ['Dual Certification', 'International Exposure', 'Practical Training']
      }
    ],
    postgraduate: [
      {
        title: 'MD in Kayachikitsa (Internal Medicine)',
        duration: '3 Years',
        seats: '15',
        description: 'Advanced specialization in Ayurvedic internal medicine and therapeutic practices.',
        highlights: ['Specialized Training', 'Research Thesis', 'Clinical Excellence']
      },
      {
        title: 'MS in Shalya Tantra (Surgery)',
        duration: '3 Years',
        seats: '10',
        description: 'Master surgical techniques combining traditional and modern approaches.',
        highlights: ['Surgical Training', 'Advanced Techniques', 'Patient Care']
      }
    ],
    research: [
      {
        title: 'PhD in Ayurvedic Sciences',
        duration: '3-5 Years',
        seats: '20',
        description: 'Doctoral research programs in various Ayurvedic specializations.',
        highlights: ['Independent Research', 'Publication Support', 'International Collaboration']
      }
    ]
  };

  const departments = [
    {
      name: 'Department of Kayachikitsa',
      specialty: 'Internal Medicine',
      faculty: 8,
      research: 'Metabolic Disorders, Immunity',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Department of Shalya Tantra',
      specialty: 'Surgery',
      faculty: 6,
      research: 'Minimally Invasive Techniques',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Department of Panchakarma',
      specialty: 'Detoxification',
      faculty: 5,
      research: 'Therapeutic Protocols',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Department of Dravyaguna',
      specialty: 'Pharmacology',
      faculty: 7,
      research: 'Drug Development, Standardization',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Department of Prasuti Tantra',
      specialty: 'Gynecology & Obstetrics',
      faculty: 4,
      research: 'Women\'s Health',
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'Department of Rachana Sharir',
      specialty: 'Anatomy',
      faculty: 6,
      research: 'Structural Studies',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar Sharma',
      position: 'Principal & Professor',
      department: 'Kayachikitsa',
      qualification: 'MD (Ayu), PhD',
      experience: '25+ Years',
      specialization: 'Metabolic Disorders, Diabetes Management',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      achievements: ['National Award for Excellence in Ayurveda', '50+ Research Publications', 'WHO Consultant'],
      research: 'Ayurvedic approaches to lifestyle diseases',
      email: 'principal@ayurveda.edu',
      publications: 45
    },
    {
      name: 'Dr. Priya Devi Patel',
      position: 'Professor & HOD',
      department: 'Prasuti Tantra & Stri Roga',
      qualification: 'MD (Ayu), MS (Obs & Gyn)',
      experience: '20+ Years',
      specialization: 'Women\'s Health, Fertility Management',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      achievements: ['Best Teacher Award 2023', 'International Speaker', 'Women Healthcare Pioneer'],
      research: 'Ayurvedic gynecology and reproductive health',
      email: 'priya.patel@ayurveda.edu',
      publications: 32
    },
    {
      name: 'Dr. Arun Singh Rathore',
      position: 'Professor',
      department: 'Shalya Tantra',
      qualification: 'MS (Ayu), MCh (Neuro)',
      experience: '18+ Years',
      specialization: 'Minimally Invasive Surgery, Anorectal Disorders',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      achievements: ['Pioneer in Ayurvedic Surgery', 'International Fellowship', '1000+ Successful Surgeries'],
      research: 'Traditional surgical techniques with modern applications',
      email: 'arun.rathore@ayurveda.edu',
      publications: 28
    },
    {
      name: 'Dr. Kavitha Menon',
      position: 'Associate Professor',
      department: 'Panchakarma',
      qualification: 'MD (Ayu), Yoga Therapist',
      experience: '15+ Years',
      specialization: 'Detoxification Therapies, Stress Management',
      image: 'https://images.unsplash.com/photo-1594824388647-82b8c193305f?w=400&h=400&fit=crop&crop=face',
      achievements: ['Certified Panchakarma Specialist', 'Wellness Consultant', 'TEDx Speaker'],
      research: 'Panchakarma protocols for modern lifestyle diseases',
      email: 'kavitha.menon@ayurveda.edu',
      publications: 22
    },
    {
      name: 'Dr. Vikram Joshi',
      position: 'Professor',
      department: 'Dravyaguna Vigyan',
      qualification: 'MD (Ayu), PhD (Pharmacology)',
      experience: '22+ Years',
      specialization: 'Herbal Drug Development, Pharmacokinetics',
      image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face',
      achievements: ['Drug Development Expert', 'Patent Holder (5 Patents)', 'Industry Collaborations'],
      research: 'Standardization of Ayurvedic medicines',
      email: 'vikram.joshi@ayurveda.edu',
      publications: 38
    },
    {
      name: 'Dr. Sunita Agarwal',
      position: 'Assistant Professor',
      department: 'Rachana Sharir',
      qualification: 'MD (Ayu), MSc (Anatomy)',
      experience: '12+ Years',
      specialization: 'Anatomical Correlations, Marma Therapy',
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face',
      achievements: ['Young Researcher Award', 'Digital Anatomy Pioneer', 'Student Favorite'],
      research: 'Modern interpretation of ancient anatomical concepts',
      email: 'sunita.agarwal@ayurveda.edu',
      publications: 18
    }
  ];

const facilities = [
  {
    title: 'Digital Library',
    description: 'Access to over 50,000 books, journals, and digital resources',
    icon: '💻', // changed from 📚 to 💻 (more digital-specific)
    features: ['24/7 Access', 'Digital Journals', 'Research Database']
  },
  {
    title: 'Research Labs',
    description: 'State-of-the-art laboratories for pharmaceutical and clinical research',
    icon: '🧪', // changed from 🔬 to 🧪 (represents lab testing realistically)
    features: ['Modern Equipment', 'Safety Protocols', 'Expert Supervision']
  },
  {
    title: 'Clinical Training',
    description: 'Hands-on experience in our affiliated hospital and clinics',
    icon: '🩺', // changed from 🏥 to 🩺 (symbolizes clinical practice better)
    features: ['Patient Interaction', 'Real Cases', 'Mentorship']
  },
  {
    title: 'Herbal Garden',
    description: 'Extensive medicinal plant collection for practical learning',
    icon: '🪴', // changed from 🌿 to 🪴 (represents planted herbs in a learning setting)
    features: ['500+ Species', 'Seasonal Study', 'Conservation']
  }
];


  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Academics Excellence
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
            Pioneering the future of Ayurvedic education through innovative curriculum, 
            world-class faculty, and cutting-edge research facilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Programs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
              Download Brochure
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
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Academic Programs Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of programs designed to shape the next generation of Ayurvedic practitioners
            </p>
          </div>

          {/* Program Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {Object.keys(programs).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-3 rounded-full mr-4 mb-4 font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)} Programs
              </button>
            ))}
          </div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs[activeTab].map((program, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {program.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {program.seats} Seats
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2">
                    {program.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center text-sm text-blue-700">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Meet Our Distinguished Faculty</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from renowned experts who combine traditional wisdom with modern research to deliver world-class education
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-4">
                      <Mail className="w-5 h-5" />
                      <FileText className="w-5 h-5" />
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-blue-900 mb-1">{faculty.name}</h3>
                    <p className="text-blue-600 font-semibold">{faculty.position}</p>
                    <p className="text-gray-500 text-sm">{faculty.department}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award className="w-4 h-4 mr-2 text-blue-500" />
                      {faculty.qualification}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-green-500" />
                      {faculty.experience}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FileText className="w-4 h-4 mr-2 text-purple-500" />
                      {faculty.publications} Publications
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-800 mb-2">Specialization:</h4>
                    <p className="text-sm text-gray-600">{faculty.specialization}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-blue-800 mb-2">Key Achievements:</h4>
                    <div className="space-y-1">
                      {faculty.achievements.slice(0, 2).map((achievement, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <Star className="w-3 h-3 mr-2 text-yellow-500 fill-current" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold transform hover:scale-105">
                    View Full Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Faculty Stats */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
                <div className="text-gray-600">Expert Faculty</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">300+</div>
                <div className="text-gray-600">Research Papers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
                <div className="text-gray-600">Years Avg Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">25+</div>
                <div className="text-gray-600">Awards & Honors</div>
              </div>
            </div>
          </div>

          {/* Faculty Development */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Faculty Development Programs</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Regular Training & Workshops
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  International Exchange Programs
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Research Funding Support
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Conference Participation
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Student Mentorship</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  One-on-One Academic Guidance
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Research Project Supervision
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Career Counseling
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  Industry Connect Programs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Academic Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized departments led by renowned faculty members and researchers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${dept.color} p-6 text-white`}>
                  <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                  <p className="text-blue-100 mb-4">{dept.specialty}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      {dept.faculty} Faculty Members
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="w-4 h-4 mr-2" />
                      Research: {dept.research}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6">
                  <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-medium">
                    View Department
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience learning in state-of-the-art facilities designed for academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                <div className="text-6xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600 mb-6">{facility.description}</p>
                
                <div className="space-y-2">
                  {facility.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center text-sm text-blue-700">
                      <Star className="w-4 h-4 mr-2 fill-current" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Academic Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our prestigious institution and become part of a legacy that shapes the future of Ayurvedic medicine.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Schedule Campus Visit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Contact Admissions
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

export default Academics;