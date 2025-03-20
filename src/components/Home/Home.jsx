import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaHandsHelping, FaPrayingHands, FaPlus, FaMinus, FaGlobe, FaLightbulb, FaHandshake, FaChartLine } from "react-icons/fa";
import { useState } from "react";

const Home = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is the Communion app?", answer: "It is a social platform for connecting people." },
    { question: "How does it promote social cohesion?", answer: "By fostering meaningful interactions." },
    { question: "Is it free to use?", answer: "Yes, the app is completely free." },
    { question: "Can I meet new people?", answer: "Absolutely! The app is designed for social networking." },
    { question: "What if I have more questions?", answer: "You can contact our support team anytime." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center text-center p-6 md:p-10 transition-all ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <motion.div 
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">
          Connecting People Across Faiths & Interests
        </h1>
        <p className="text-base md:text-lg mb-6">
        Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, and traditions. By promoting collaboration and connection, we're fostering a world where differences become strengths and unity becomes the norm.
        Communion App is your gateway to a world of meaningful connections, 
        bringing together people of all faiths through events, gatherings, and community support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[
            { 
              title: "Community Events", 
              description: "Join and connect with people through various events.", 
              icon: <FaUsers size={32} className="text-blue-600" /> 
            },
            { 
              title: "Support & Charity", 
              description: "Engage in social and charity activities.", 
              icon: <FaHandsHelping size={32} className="text-blue-600" /> 
            },
            { 
              title: "Religious Gatherings", 
              description: "Find spiritual events and join religious meetups.", 
              icon: <FaPrayingHands size={32} className="text-blue-600" /> 
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className={`shadow-lg rounded-lg p-6 text-center transition-all ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.2 }}
            >
              <div className="flex items-center justify-center space-x-3">
                {item.icon}
                <h3 className="text-lg md:text-xl font-semibold text-blue-600">{item.title}</h3>
              </div>
              <p className="text-sm md:text-base mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.button 
          className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2 mb-16"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/events")}
        >
          <FaUsers /> Explore Events
        </motion.button>
        

        {/* New Section: Global Engagement */}
        <div className={`mb-16 p-8 rounded-lg ${isDarkMode ? "bg-transparent" : "bg-transparent"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More Than 10,000+ Engagements Daily Across the World
          </h2>
          <p className="text-base md:text-lg mb-6">
            Experience the power of connection with over 10,000 daily interactions worldwide, 
            uniting diverse communities through innovation, collaboration, and shared spirituality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { 
                title: "Global Connectivity", 
                description: "Connecting people from diverse religious communities worldwide, fostering meaningful engagement.", 
                icon: <FaGlobe size={32} className="text-blue-600" /> 
              },
              { 
                title: "Innovative Technology", 
                description: "Utilizing cutting-edge tools to enhance user experience and encourage active participation.", 
                icon: <FaLightbulb size={32} className="text-blue-600" /> 
              },
              { 
                title: "Inclusive Collaboration", 
                description: "Engage, collaborate, and connect with diverse people to build inclusive and meaningful relationships.", 
                icon: <FaHandshake size={32} className="text-blue-600" /> 
              },
              { 
                title: "Daily Growth", 
                description: "Over 10,000+ daily engagements, creating a thriving community where spirituality and innovation meet.", 
                icon: <FaChartLine size={32} className="text-blue-600" /> 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`p-4 rounded-lg shadow-md transition-all ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-black"}`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-600">{item.title}</h3>
                  <p className="text-sm md:text-base mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>

        {/* FAQ Section */}
        <section className={`max-w-4xl w-full mx-auto py-16 px-4 sm:px-6 transition-all rounded-lg ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">Frequently Asked Questions</h2>
            <button className={`mt-4 sm:mt-0 px-5 py-2 rounded-lg flex items-center gap-2 transition-all ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-black text-white"
            }`}>
              View All <span className="text-lg">→</span>
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`shadow-md rounded-lg transition-all ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
              >
                <button
                  className="w-full p-4 flex justify-between items-center text-base sm:text-lg font-medium"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  {openIndex === index ? (
                    <FaMinus className={`${isDarkMode ? "text-gray-300" : "text-gray-500"}`} />
                  ) : (
                    <FaPlus className={`${isDarkMode ? "text-gray-300" : "text-gray-500"}`} />
                  )}
                </button>
                {openIndex === index && (
                  <p className={`p-4 text-sm sm:text-base transition-all ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Home;