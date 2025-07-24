import React, { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import InquiryForm from '../components/InquiryForm';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !absolute !top-1/2 !right-4 !transform !-translate-y-1/2 text-white text-3xl cursor-pointer z-10 hover:bg-opacity-80 transition-all duration-300`}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} !absolute !top-1/2 !left-4 !transform !-translate-y-1/2 text-white text-3xl cursor-pointer z-10 hover:bg-opacity-80 transition-all duration-300`}
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

const Home = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  const handleFlip = (index) => {
    setFlippedCards(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      <style>{`
        .spin {
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .slick-dots {
          bottom: 25px;
        }

        .slick-dots li button:before {
          color: white;
          font-size: 12px;
          opacity: 0.7;
        }

        .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
        }

        .flip-card {
          perspective: 1000px;
          height: 400px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .flip-card-front {
          background-color: white;
        }

        .flip-card-back {
          background-color: white;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
        }

        /* Desktop slider height */
        .hero-slider {
          height: 90vh;
          width: 100%;
          object-fit: contain;
        }

        /* Mobile view adjustments */
        @media (max-width: 768px) {
          .hero-slider {
            height: 60vh; /* This makes the slider take 60% of viewport height on mobile */
            width: 100%;
          }
          .hero-slider .slick-slider,
          .hero-slider .slick-list,
          .hero-slider .slick-track,
          .hero-slider .slick-slide,
          .hero-slider .slick-slide > div {
            height: 100%;
          }
          .hero-slider .slick-slide img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      `}</style>

      {/* Hero Slider Section */}
      <motion.div
        className="w-full hero-slider relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Slider {...settings} className="w-full h-full">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
              <img
                src={`/imgslider${index + 1}.jpg`}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full max-w-4xl px-4">
          <motion.h1 className="text-white font-medium text-4xl md:text-5xl">
            Welcome to BVSS
          </motion.h1>
          <motion.button
            className="mt-8 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            Explore Programs
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <div className="flex-grow py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* About Section */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Bharat Vikas Shikshan Sanstha</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-700 leading-relaxed">
              Bharat Vikas Shikshan Sanstha is an educational branch of BVG India Ltd. The key to success is to appreciate how people learn, understand the thought process that goes into instructional design, what works well, and a range of different approaches to education.
            </p>

            {/* Stats Section */}
            <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
              <motion.div
                className="p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl shadow-md"
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl font-bold text-yellow-800">2k+</p>
                <p className="text-lg text-yellow-700">Students</p>
              </motion.div>
              <motion.div
                className="p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-md"
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl font-bold text-green-800">3.50</p>
                <p className="text-lg text-green-700">Average CGPA</p>
              </motion.div>
              <motion.div
                className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-md"
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-3xl font-bold text-blue-800">95%</p>
                <p className="text-lg text-blue-700">Graduates</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Our Strength Section */}
          <motion.div
            className="mb-16 bg-white p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 border-l-4 border-blue-500 pl-4">Our Strength</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
              {[
                "The organization is registered with the Office of Public Trust.",
                "The courses are government and university approved.",
                "The Institute has its own administrative and educational building for this course.",
                "Expert doctors are available for Ayurveda, Allopathy in related subjects for student's lectures.",
                "For student's, patient Examination and Training (Practical) more than 350+ Govt. and private hospitals are attached to Institute having bed strength more than 10,000 beds.",
                "Admission to a physician (BAMS) who is registered with MCIM is of great help in enhancing his professional skills in the relevant field."
              ].map((item, index) => (
                <li key={index} className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 mt-1 mr-3"></div>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quotes Section */}
          <motion.div
            className="mb-16 bg-gradient-to-r from-gray-100 to-gray-200 p-10 rounded-2xl shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">See Good in All Things</h2>
            <div className="flex flex-col md:flex-row justify-around items-stretch gap-8">
              <motion.div
                className="flex-1 p-6 bg-white rounded-xl shadow-md flex flex-col"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex-grow">
                  <p className="text-xl italic mb-4 text-gray-700">"Learn everything that is good from others, but bring it in, and in your own way adsorb it; do not become others."</p>
                </div>
                <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                  <img className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-500" src="/swami.jpg" alt="Swami Vivekananda" />
                  <p className="text-lg font-bold text-gray-800">Swami Vivekananda</p>
                </div>
              </motion.div>

              <motion.div
                className="flex-1 p-6 bg-white rounded-xl shadow-md flex flex-col"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex-grow">
                  <p className="text-xl italic mb-4 text-gray-700">"One of the important characteristics of a student is to question. Let the students ask questions."</p>
                </div>
                <div className="flex items-center mt-4 pt-4 border-t border-gray-200">
                  <img className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-blue-500" src="/apj.jpg" alt="Dr. A.P.J. Abdul Kalam" />
                  <p className="text-lg font-bold text-gray-800">Dr. A.P.J. Abdul Kalam</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Medical Plantation Section with Flip Cards */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">Cultivation of Medical Plantation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Aloe Vera",
                  description: "Known for its healing properties, Aloe Vera is used in treating skin conditions, burns, and digestive issues. It's easy to grow and requires minimal maintenance with these key features:\n\n• Drought-resistant succulent\n• Contains over 75 active compounds\n• Requires well-draining soil and indirect sunlight\n• Harvested for its gel-like substance in the leaves",
                  image: "/aloevera.jpg"
                },
                {
                  name: "Tulsi (Holy Basil)",
                  description: "Tulsi is considered sacred in Ayurveda and has antibacterial, anti-inflammatory, and adaptogenic properties. It's commonly used to treat:\n\n• Respiratory conditions like cough and bronchitis\n• Digestive issues and stomach disorders\n• Stress and anxiety reduction\n• Boosting immunity and overall wellness",
                  image: "/tulsi.jpg"
                },
                {
                  name: "Ashwagandha",
                  description: "Also known as Indian Ginseng, Ashwagandha is valued for its adaptogenic benefits. Cultivation requirements include:\n\n• Well-draining sandy soil with pH 7.5-8.0\n• Annual rainfall of 600-700 mm\n• Warm, dry conditions (ideal temp: 20-35°C)\n• Harvested after 150-180 days when berries are ripe",
                  image: "/ashwagandha.jpg"
                }
              ].map((plant, index) => (
                <div
                  key={index}
                  className={`flip-card ${flippedCards[index] ? 'flipped' : ''}`}
                  onClick={() => handleFlip(index)}
                >
                  <div className="flip-card-inner shadow-lg">
                    <div className="flip-card-front">
                      <div className="relative w-full h-full">
                        <img
                          className="w-full h-full object-cover"
                          src={plant.image}
                          alt={plant.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white font-bold text-2xl">{plant.name}</h3>
                          <p className="text-gray-200 mt-2">Click to learn more</p>
                        </div>
                      </div>
                    </div>

                    <div className="flip-card-back bg-gradient-to-br from-blue-50 to-blue-100">
                      <h3 className="text-2xl font-bold text-blue-600 mb-4">{plant.name}</h3>
                      <div className="flex-grow overflow-auto">
                        <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
                          {plant.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-blue-200 mt-auto">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-blue-600">Click to flip back</span>
                          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition-colors duration-300">
                            See Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-blue-600 p-10 rounded-2xl shadow-lg text-center text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join our vibrant community of learners and start your path to a successful career in Ayurveda and medical sciences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300">
                Apply Now
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg shadow-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Schedule a Visit
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="my-10">
              <InquiryForm />
            </div>
    </div>
  );
};

export default Home;