import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag, Search, ChevronLeft } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Revolutionary AI Research Lab Opens at University Campus",
    excerpt: "Our new state-of-the-art artificial intelligence research facility will advance machine learning and robotics studies, positioning our university at the forefront of technological innovation.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Research",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    content: `
      <div class="prose max-w-none">
        <p class="text-lg leading-relaxed mb-6">The University is proud to announce the grand opening of our cutting-edge Artificial Intelligence Research Laboratory, a $50 million facility that represents the largest investment in technological research infrastructure in our institution's history.</p>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">State-of-the-Art Facilities</h3>
        <p class="mb-4">The 15,000 square foot laboratory features advanced computing clusters, quantum processing units, and specialized robotics testing environments. Our facility includes:</p>
        <ul class="list-disc pl-6 mb-6">
          <li>High-performance computing center with 500+ GPUs</li>
          <li>Robotics workshop with 3D printing and fabrication tools</li>
          <li>Virtual reality development studio</li>
          <li>Collaborative research spaces for interdisciplinary projects</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Research Focus Areas</h3>
        <p class="mb-4">The lab will concentrate on several key areas of AI research that have significant potential for real-world impact:</p>
        <p class="mb-4">Machine Learning and Deep Neural Networks will be explored to develop more efficient algorithms for pattern recognition and predictive modeling. Our researchers are particularly interested in applications for healthcare diagnostics and climate modeling.</p>
        
        <blockquote class="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6">
          "This facility represents not just an investment in technology, but an investment in the future of human knowledge and capability." - Dr. Sarah Chen, Director of AI Research
        </blockquote>
        
        <p class="mb-4">The laboratory will also serve as a hub for undergraduate and graduate student research, providing hands-on experience with cutting-edge technology and preparing the next generation of AI researchers and practitioners.</p>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Industry Partnerships</h3>
        <p class="mb-4">We've established partnerships with leading technology companies including Google, Microsoft, and several emerging AI startups. These collaborations will provide students with internship opportunities and ensure our research remains aligned with industry needs.</p>
        
        <p class="mt-8">The official ribbon-cutting ceremony will take place on April 1st, 2024, with demonstrations and tours available to the university community.</p>
      </div>
    `
  },
  {
    id: 2,
    title: "Student Sustainability Initiative Wins National Environmental Award",
    excerpt: "Our campus-wide green energy project, led entirely by students, has been recognized with the prestigious National Campus Sustainability Excellence Award for innovative environmental solutions.",
    author: "Emma Rodriguez",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
    content: `
      <div class="prose max-w-none">
        <p class="text-lg leading-relaxed mb-6">In a remarkable achievement that highlights the power of student-led initiatives, our university's Green Campus Project has been awarded the National Campus Sustainability Excellence Award, competing against over 200 institutions nationwide.</p>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">The Winning Project</h3>
        <p class="mb-4">The award-winning initiative, conceived and implemented entirely by students, transformed our campus into a model of environmental sustainability through innovative approaches to energy management, waste reduction, and ecological preservation.</p>
        
        <p class="mb-4">Key achievements of the project include:</p>
        <ul class="list-disc pl-6 mb-6">
          <li>Installation of 2,000 solar panels across campus buildings</li>
          <li>Implementation of a comprehensive recycling program that achieved 85% waste diversion</li>
          <li>Creation of urban gardens that provide fresh produce for dining services</li>
          <li>Development of a campus-wide bike-sharing program</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Student Leadership</h3>
        <p class="mb-4">The project was spearheaded by the Environmental Action Club, led by senior Emma Rodriguez, who mobilized over 300 student volunteers across various disciplines. "What started as a small initiative to reduce plastic waste in our dormitories grew into a comprehensive sustainability transformation," Rodriguez explains.</p>
        
        <blockquote class="border-l-4 border-green-500 pl-6 italic text-gray-700 my-6">
          "This award belongs to every student who believed that we could make a difference. It proves that when young people are passionate about change, incredible things happen." - Emma Rodriguez, Project Leader
        </blockquote>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Environmental Impact</h3>
        <p class="mb-4">The measurable results of the initiative have been impressive. Carbon emissions on campus have been reduced by 40% over two years, energy costs have decreased by $2.3 million annually, and the university has achieved carbon neutrality ahead of its 2030 goal.</p>
        
        <p class="mb-4">The project has also created educational opportunities, with sustainability principles now integrated into curricula across multiple departments, from engineering to business studies.</p>
        
        <p class="mt-8">The $50,000 award will be used to expand the program and establish similar initiatives at partner universities across the region.</p>
      </div>
    `
  },
  {
    id: 3,
    title: "New Medical School Partnership Brings Advanced Healthcare Training",
    excerpt: "A groundbreaking collaboration with City General Hospital creates unprecedented opportunities for medical students to gain real-world experience while serving our local community's healthcare needs.",
    author: "Dr. Michael Thompson",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    content: `
      <div class="prose max-w-none">
        <p class="text-lg leading-relaxed mb-6">Our medical school has entered into a transformative partnership with City General Hospital, creating the most comprehensive medical training program in the region and significantly expanding healthcare services available to our community.</p>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Partnership Overview</h3>
        <p class="mb-4">This five-year agreement establishes City General Hospital as our primary teaching hospital, providing medical students with direct access to a 500-bed facility that serves over 100,000 patients annually. The partnership creates a seamless bridge between academic learning and clinical practice.</p>
        
        <p class="mb-4">Under this collaboration, our students will have access to:</p>
        <ul class="list-disc pl-6 mb-6">
          <li>Advanced simulation laboratories with cutting-edge medical equipment</li>
          <li>Direct mentorship from practicing physicians and specialists</li>
          <li>Rotations across 15 different medical specialties</li>
          <li>Research opportunities in active clinical trials</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Community Health Impact</h3>
        <p class="mb-4">The partnership extends beyond education to significantly improve healthcare access in our region. A new community health clinic, staffed by senior medical students under physician supervision, will provide free and low-cost medical services to underserved populations.</p>
        
        <blockquote class="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6">
          "This partnership represents the future of medical education – where learning and service come together to benefit both students and the communities they will serve." - Dr. Michael Thompson, Dean of Medical School
        </blockquote>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Educational Innovation</h3>
        <p class="mb-4">The program introduces several innovative educational approaches, including integrated clinical experiences beginning in the first year, rather than the traditional model where clinical work begins in the third year. This early exposure helps students develop patient care skills alongside their scientific knowledge.</p>
        
        <p class="mb-4">Additionally, the partnership includes a unique rural medicine track, where students spend extended rotations in rural clinics and hospitals, addressing the critical shortage of healthcare providers in underserved areas.</p>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Technology Integration</h3>
        <p class="mb-4">The collaboration features state-of-the-art technology integration, including telemedicine capabilities that allow students to participate in remote consultations and virtual reality training modules for complex surgical procedures.</p>
        
        <p class="mt-8">The first cohort of students under this new program will begin their clinical rotations this fall, marking a new era in medical education at our institution.</p>
      </div>
    `
  },
  {
    id: 4,
    title: "International Student Exchange Program Reaches Record Participation",
    excerpt: "Over 500 students from 40 countries will participate in our expanded exchange program this year, fostering global connections and cross-cultural understanding like never before.",
    author: "Dr. Lisa Park",
    date: "February 20, 2024",
    readTime: "3 min read",
    category: "International",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    content: `
      <div class="prose max-w-none">
        <p class="text-lg leading-relaxed mb-6">Our International Student Exchange Program has achieved unprecedented growth, with over 500 students from 40 countries participating in cultural and academic exchanges that are transforming our campus into a truly global learning environment.</p>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Program Expansion</h3>
        <p class="mb-4">What began as a modest program with 12 partner universities has evolved into a comprehensive network spanning six continents. This year's participants represent the highest number in the program's 15-year history, with students from institutions in Europe, Asia, Africa, South America, and Australia.</p>
        
        <p class="mb-4">New partnerships this year include prestigious institutions such as:</p>
        <ul class="list-disc pl-6 mb-6">
          <li>University of Edinburgh, Scotland</li>
          <li>National University of Singapore</li>
          <li>University of São Paulo, Brazil</li>
          <li>University of Cape Town, South Africa</li>
          <li>Australian National University</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Cultural Integration</h3>
        <p class="mb-4">The program goes beyond traditional academic exchanges, emphasizing deep cultural integration and mutual learning. Exchange students participate in local community service projects, while our students abroad engage with local cultures through homestay programs and cultural immersion activities.</p>
        
        <blockquote class="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6">
          "These exchanges create lifelong connections and global perspectives that are invaluable in our interconnected world. Our students return as global citizens with expanded worldviews." - Dr. Lisa Park, Director of International Programs
        </blockquote>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Academic Benefits</h3>
        <p class="mb-4">Research shows that students who participate in exchange programs demonstrate improved language skills, cultural competency, and adaptability – qualities highly valued by employers in today's global marketplace. Additionally, many exchange students collaborate on international research projects, contributing to groundbreaking studies that span multiple continents.</p>
        
        <p class="mb-4">The program also features innovative virtual exchange components, allowing students to collaborate on projects with international peers even when physical travel isn't possible.</p>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Looking Forward</h3>
        <p class="mb-4">Plans for next year include launching specialized exchange tracks in emerging fields like sustainable development, digital innovation, and global health, further expanding opportunities for meaningful international collaboration.</p>
        
        <p class="mt-8">Applications for next year's exchange programs open in May, with information sessions scheduled throughout the spring semester.</p>
      </div>
    `
  },
  {
    id: 5,
    title: "Campus Innovation Hub Launches Student Entrepreneur Incubator",
    excerpt: "A new $10 million innovation center provides aspiring student entrepreneurs with mentorship, funding, and resources to transform their ideas into successful businesses and social enterprises.",
    author: "Prof. David Kim",
    date: "February 12, 2024",
    readTime: "4 min read",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    content: `
      <div class="prose max-w-none">
        <p class="text-lg leading-relaxed mb-6">The newly opened Campus Innovation Hub represents a significant investment in student entrepreneurship, providing a comprehensive ecosystem where innovative ideas can flourish and develop into successful ventures that benefit both students and society.</p>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Facility Features</h3>
        <p class="mb-4">The 20,000 square foot Innovation Hub houses state-of-the-art facilities designed to support every stage of the entrepreneurial journey. The space includes collaborative workspaces, private offices for developing startups, a maker space with 3D printers and prototyping equipment, and a presentation center for pitch competitions.</p>
        
        <p class="mb-4">Key facilities include:</p>
        <ul class="list-disc pl-6 mb-6">
          <li>24/7 co-working spaces with high-speed internet and modern amenities</li>
          <li>Professional recording studio for creating marketing content</li>
          <li>Legal and business consultation offices</li>
          <li>Demo room for product testing and customer feedback sessions</li>
          <li>Networking lounge for informal meetings and collaboration</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Mentorship and Support</h3>
        <p class="mb-4">The incubator program connects student entrepreneurs with experienced mentors from various industries, including successful alumni who have built their own companies. Each startup team receives personalized guidance on business development, market research, funding strategies, and scaling operations.</p>
        
        <blockquote class="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6">
          "We're not just providing space and resources – we're building a community of innovators who will shape the future of business and technology." - Prof. David Kim, Innovation Hub Director
        </blockquote>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Funding Opportunities</h3>
        <p class="mb-4">The Hub offers multiple funding pathways for promising ventures, including micro-grants up to $5,000 for initial development, seed funding up to $50,000 for proven concepts, and connections to venture capital firms for larger investments. Additionally, an annual pitch competition awards $200,000 in prizes to the most innovative student startups.</p>
        
        <p class="mb-4">The program also facilitates access to external funding sources, including government grants, angel investors, and crowdfunding platforms.</p>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Success Stories</h3>
        <p class="mb-4">Even in its early stages, the Innovation Hub has already supported several promising ventures, including a sustainable packaging company, a mental health app, and an AI-powered tutoring platform. These startups demonstrate the diverse range of innovations emerging from our student community.</p>
        
        <p class="mt-8">Applications for the next cohort of incubator participants are being accepted through March 31st, with the program officially launching in September 2024.</p>
      </div>
    `
  },
  {
    id: 6,
    title: "University Orchestra's European Tour Showcases Musical Excellence",
    excerpt: "Our acclaimed symphony orchestra embarks on a three-week European concert tour, performing in world-renowned venues and collaborating with international musicians to celebrate cultural exchange through music.",
    author: "Maestro Elena Volkov",
    date: "February 5, 2024",
    readTime: "5 min read",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    content: `
      <div class="prose max-w-none">
        <p class="text-lg leading-relaxed mb-6">Our University Symphony Orchestra is preparing for an extraordinary three-week European concert tour that will showcase the exceptional musical talents of our students while fostering international cultural connections through the universal language of music.</p>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Tour Highlights</h3>
        <p class="mb-4">The orchestra will perform in eight cities across five countries, including prestigious venues such as the Vienna Musikverein, Berlin Philharmonie, and London's Royal Albert Hall. Each performance will feature a carefully curated program that includes classical masterpieces, contemporary compositions, and original works by our own student composers.</p>
        
        <p class="mb-4">Scheduled performances include:</p>
        <ul class="list-disc pl-6 mb-6">
          <li>Vienna, Austria - Musikverein Golden Hall</li>
          <li>Salzburg, Austria - Mozarteum Concert Hall</li>
          <li>Munich, Germany - Gasteig Cultural Center</li>
          <li>Berlin, Germany - Berlin Philharmonie</li>
          <li>Prague, Czech Republic - Rudolfinum</li>
          <li>Paris, France - Salle Pleyel</li>
          <li>Amsterdam, Netherlands - Concertgebouw</li>
          <li>London, UK - Royal Albert Hall</li>
        </ul>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Musical Program</h3>
        <p class="mb-4">The tour repertoire spans from classical giants like Beethoven and Mozart to contemporary works that reflect our commitment to promoting new music. Featured pieces include Beethoven's Symphony No. 7, Mozart's Piano Concerto No. 27 (featuring student soloist Maria Chen), and the world premiere of "American Landscapes" by our composer-in-residence, Dr. James Mitchell.</p>
        
        <blockquote class="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6">
          "This tour represents the culmination of years of dedication and hard work by our incredibly talented students. They will serve as musical ambassadors, sharing the excellence of our program with audiences around the world." - Maestro Elena Volkov, Orchestra Director
        </blockquote>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Educational Opportunities</h3>
        <p class="mb-4">Beyond performances, the tour includes masterclasses with renowned European musicians, visits to historical music sites, and collaborative sessions with student orchestras at partner universities. These experiences provide invaluable learning opportunities that extend far beyond the concert hall.</p>
        
        <p class="mb-4">Students will also participate in cultural exchanges, visiting local schools to perform for young audiences and conducting workshops that promote music education and appreciation.</p>
        
        <h3 class="text-2xl font-bold text-blue-900 mt-8 mb-4">Preparation and Selection</h3>
        <p class="mb-4">The 75-member touring orchestra was selected through rigorous auditions from over 150 student musicians. Preparation for the tour has involved intensive rehearsals, individual coaching sessions, and performance workshops focused on stage presence and international performance etiquette.</p>
        
        <p class="mb-4">The tour is supported by generous donations from alumni, local businesses, and a special fundraising campaign that raised over $300,000 to make this educational opportunity possible for all selected students.</p>
        
        <p class="mt-8">The orchestra departs on March 20th, with a farewell concert on campus scheduled for March 18th that is open to the entire university community.</p>
      </div>
    `
  }
];

const categories = ["All", "Research", "Sustainability", "Medical", "International", "Innovation", "Arts"];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPost]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (selectedPost) {
    return (
      <div className="bg-gray-50 min-h-screen">
        {/* Navigation */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <button 
              onClick={() => setSelectedPost(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </button>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {selectedPost.category}
                </span>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center text-gray-600 space-x-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {selectedPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {selectedPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {selectedPost.readTime}
                  </div>
                </div>
              </div>
              
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white">
          <div className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto">
              <div 
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              
              {/* Social Sharing */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Share this article:</span>
                    <div className="flex space-x-3">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                        Twitter
                      </button>
                      <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition-colors">
                        Facebook
                      </button>
                      <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
                        LinkedIn
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header/Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              University <span className="text-blue-300">Blog</span>
            </h1>
            <p className="text-xl leading-relaxed mb-8 text-blue-100">
              Discover the latest news, research breakthroughs, student achievements, and campus life stories that shape our vibrant university community.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {selectedCategory === "All" && !searchTerm && (
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8">
                <div className="bg-blue-600 p-2 rounded-lg mr-4">
                  <Tag className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Featured Story</h2>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                      {blogPosts[0].category}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center text-gray-600 mb-6 space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {blogPosts[0].date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPost(blogPosts[0])}
                      className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
                    >
                      Read Full Story
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                  <div>
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-12">
              <div className="bg-blue-600 p-2 rounded-lg mr-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory === "All" ? "Latest Posts" : `${selectedCategory} Posts`}
              </h2>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-white rounded-lg shadow-lg p-12 max-w-md mx-auto">
                  <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(selectedCategory === "All" && !searchTerm ? 1 : 0).map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <button
                          onClick={() => setSelectedPost(post)}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-blue-100 text-lg mb-8">
              Subscribe to our newsletter and never miss the latest university news and stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
            <div className="my-10">
              <InquiryForm />
            </div>
      
    </div>
  );
};

export default Blog;