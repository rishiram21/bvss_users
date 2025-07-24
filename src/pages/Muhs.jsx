import React, { useState, useEffect } from 'react';
import { FileText, Download, Calendar, Search, Filter, ChevronDown, ChevronRight, ExternalLink, AlertCircle, BookOpen, Scale } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

// Sample Guidelines Data
const guidelines = [
  {
    id: 1,
    title: "Academic Assessment and Evaluation Guidelines 2024",
    category: "Academic",
    date: "2024-03-15",
    type: "PDF",
    size: "2.3 MB",
    description: "Comprehensive guidelines for continuous assessment, internal evaluation, and examination procedures for all affiliated institutions.",
    tags: ["Assessment", "Evaluation", "Examination"],
    isNew: true
  },
  {
    id: 2,
    title: "Clinical Training Standards for Medical Colleges",
    category: "Clinical",
    date: "2024-02-28",
    type: "PDF",
    size: "4.1 MB",
    description: "Updated standards and protocols for clinical training programs, including patient interaction guidelines and supervision requirements.",
    tags: ["Clinical", "Training", "Medical"],
    isNew: true
  },
  {
    id: 3,
    title: "Research Ethics and Publication Guidelines",
    category: "Research",
    date: "2024-01-20",
    type: "PDF",
    size: "1.8 MB",
    description: "Ethical guidelines for research conduct, publication standards, and intellectual property management in health sciences.",
    tags: ["Research", "Ethics", "Publication"],
    isNew: false
  },
  {
    id: 4,
    title: "Faculty Development and Training Framework",
    category: "Faculty",
    date: "2023-12-10",
    type: "PDF",
    size: "3.2 MB",
    description: "Framework for continuous professional development, training modules, and competency enhancement for faculty members.",
    tags: ["Faculty", "Development", "Training"],
    isNew: false
  },
  {
    id: 5,
    title: "Infrastructure and Equipment Standards",
    category: "Infrastructure",
    date: "2023-11-15",
    type: "PDF",
    size: "5.4 MB",
    description: "Minimum infrastructure requirements, equipment specifications, and facility standards for health science institutions.",
    tags: ["Infrastructure", "Equipment", "Standards"],
    isNew: false
  },
  {
    id: 6,
    title: "Student Welfare and Support Services Guidelines",
    category: "Student Affairs",
    date: "2023-10-25",
    type: "PDF",
    size: "2.7 MB",
    description: "Guidelines for student counseling, financial aid, grievance redressal, and support services across all programs.",
    tags: ["Student", "Welfare", "Support"],
    isNew: false
  }
];

// Sample Circulars Data
const circulars = [
  {
    id: 1,
    title: "Implementation of New Curriculum for MBBS Program - Academic Year 2024-25",
    circularNo: "MUHS/ACAD/2024/001",
    date: "2024-03-20",
    category: "Academic",
    priority: "High",
    description: "Detailed instructions for implementing the revised MBBS curriculum as per National Medical Commission guidelines, effective from the upcoming academic year.",
    attachments: ["Curriculum_Structure.pdf", "Implementation_Timeline.pdf"],
    isUrgent: true
  },
  {
    id: 2,
    title: "Summer Vacation Schedule and Academic Calendar 2024",
    circularNo: "MUHS/ADMIN/2024/015",
    date: "2024-03-18",
    category: "Administrative",
    priority: "Medium",
    description: "Official announcement of summer vacation dates, examination schedules, and important academic milestones for all affiliated colleges.",
    attachments: ["Academic_Calendar_2024.pdf"],
    isUrgent: false
  },
  {
    id: 3,
    title: "COVID-19 Health and Safety Protocols Update",
    circularNo: "MUHS/HEALTH/2024/008",
    date: "2024-03-10",
    category: "Health & Safety",
    priority: "High",
    description: "Updated health and safety protocols for campus operations, clinical training, and patient care activities in view of current health guidelines.",
    attachments: ["Safety_Protocols.pdf", "Emergency_Contacts.pdf"],
    isUrgent: true
  },
  {
    id: 4,
    title: "Fee Structure Revision for Professional Courses 2024-25",
    circularNo: "MUHS/FIN/2024/012",
    date: "2024-02-25",
    category: "Financial",
    priority: "High",
    description: "Notification regarding revised fee structure for various professional courses, payment schedules, and scholarship provisions.",
    attachments: ["Fee_Structure_2024.pdf", "Payment_Guidelines.pdf"],
    isUrgent: false
  },
  {
    id: 5,
    title: "Faculty Recruitment and Selection Process Guidelines",
    circularNo: "MUHS/HR/2024/006",
    date: "2024-02-15",
    category: "Human Resources",
    priority: "Medium",
    description: "Updated guidelines for faculty recruitment, selection criteria, interview processes, and appointment procedures for all departments.",
    attachments: ["Recruitment_Guidelines.pdf"],
    isUrgent: false
  },
  {
    id: 6,
    title: "Digital Library Access and E-Learning Platform Integration",
    circularNo: "MUHS/IT/2024/003",
    date: "2024-01-30",
    category: "Technology",
    priority: "Medium",
    description: "Instructions for accessing the new digital library system and integration with existing e-learning platforms for enhanced student experience.",
    attachments: ["Digital_Access_Guide.pdf", "Platform_Integration.pdf"],
    isUrgent: false
  }
];

const categories = {
  guidelines: ["All", "Academic", "Clinical", "Research", "Faculty", "Infrastructure", "Student Affairs"],
  circulars: ["All", "Academic", "Administrative", "Health & Safety", "Financial", "Human Resources", "Technology"]
};

const Muhs = () => {
  const [activeTab, setActiveTab] = useState('guidelines');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectedCategory('All');
    setSearchTerm('');
  }, [activeTab]);

  const filterItems = (items) => {
    return items.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const filteredGuidelines = filterItems(guidelines);
  const filteredCirculars = filterItems(circulars);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Scale className="h-12 w-12 mr-4 text-blue-300" />
              <h1 className="text-5xl font-bold">MUHS Mandate</h1>
            </div>
            <p className="text-xl leading-relaxed text-blue-100 mb-8">
              Maharashtra University of Health Sciences - Official Guidelines and Circulars
            </p>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-blue-100">
                Access the latest academic guidelines, administrative circulars, and regulatory documents 
                issued by MUHS for all affiliated institutions and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('guidelines')}
              className={`py-4 px-6 border-b-2 font-semibold transition-colors ${
                activeTab === 'guidelines'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Guidelines
              </div>
            </button>
            <button
              onClick={() => setActiveTab('circulars')}
              className={`py-4 px-6 border-b-2 font-semibold transition-colors ${
                activeTab === 'circulars'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Circulars
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {categories[activeTab].map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'guidelines' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Academic Guidelines ({filteredGuidelines.length})
              </h2>
              <span className="text-sm text-gray-500">
                Last updated: March 15, 2024
              </span>
            </div>

            {filteredGuidelines.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No guidelines found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredGuidelines.map((guideline) => (
                  <div key={guideline.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 mr-3">
                              {guideline.title}
                            </h3>
                            {guideline.isNew && (
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                New
                              </span>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {guideline.date}
                            </div>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              {guideline.category}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span>{guideline.type} • {guideline.size}</span>
                          </div>
                          <p className="text-gray-700 mb-4">{guideline.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {guideline.tags.map((tag, index) => (
                              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="ml-4 flex flex-col space-y-2">
                          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </button>
                          <button className="flex items-center text-blue-600 hover:text-blue-800 px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'circulars' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Official Circulars ({filteredCirculars.length})
              </h2>
              <span className="text-sm text-gray-500">
                Last updated: March 20, 2024
              </span>
            </div>

            {filteredCirculars.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">No circulars found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredCirculars.map((circular) => (
                  <div key={circular.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 mr-3">
                              {circular.title}
                            </h3>
                            {circular.isUrgent && (
                              <div className="flex items-center bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                                <AlertCircle className="h-3 w-3 mr-1" />
                                Urgent
                              </div>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {circular.date}
                            </div>
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {circular.circularNo}
                            </span>
                            <span className={`px-2 py-1 rounded text-xs border ${getPriorityColor(circular.priority)}`}>
                              {circular.priority} Priority
                            </span>
                          </div>
                          <p className="text-gray-700 mb-4">{circular.description}</p>
                          
                          {circular.attachments && circular.attachments.length > 0 && (
                            <div className="mb-4">
                              <button
                                onClick={() => setExpandedItem(expandedItem === circular.id ? null : circular.id)}
                                className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                              >
                                {expandedItem === circular.id ? (
                                  <ChevronDown className="h-4 w-4 mr-1" />
                                ) : (
                                  <ChevronRight className="h-4 w-4 mr-1" />
                                )}
                                Attachments ({circular.attachments.length})
                              </button>
                              
                              {expandedItem === circular.id && (
                                <div className="mt-2 pl-5 space-y-2">
                                  {circular.attachments.map((attachment, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                                      <div className="flex items-center">
                                        <FileText className="h-4 w-4 text-gray-500 mr-2" />
                                        <span className="text-sm text-gray-700">{attachment}</span>
                                      </div>
                                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                                        Download
                                      </button>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                          
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {circular.category}
                          </span>
                        </div>
                        <div className="ml-4 flex flex-col space-y-2">
                          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </button>
                          <button className="flex items-center text-blue-600 hover:text-blue-800 px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
        <div className="my-10">
              <InquiryForm />
            </div>
    </div>
  );
};

export default Muhs;