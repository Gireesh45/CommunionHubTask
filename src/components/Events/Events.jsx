import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTicketAlt, FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt, FaPlus, FaSpinner } from "react-icons/fa";

const EventsList = ({ isDarkMode }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedSource, setSelectedSource] = useState("all");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", eventType: "" });
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); 
  const allowedSources = [
    "Spotify.com",
    "The University Star",
    "Bandsintown.com",
    "Etix.com",
    "All",
  ];

  const ticketSources = [
    ...new Set(
      events
        .flatMap((event) => event.ticket_info.map((ticket) => ticket.source))
        .filter((source) => allowedSources.includes(source))
    ),
  ];

  useEffect(() => {
    setLoading(true); 
    fetch("https://reinvented-fringe-turkey.glitch.me/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data); 
        setFilteredEvents(data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false); 
      });
  }, []);

  const filterBySource = (source) => {
    setSelectedSource(source);
    setActiveTab(source);
    if (source === "all") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((event) =>
        event.ticket_info.some((ticket) => ticket.source === source)
      );
      setFilteredEvents(filtered); 
    }
  };

  const addEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.eventType) {
      const newEntry = {
        title: newEvent.title,
        date: { when: newEvent.date },
        address: ["Custom Location"],
        ticket_info: [{ source: newEvent.eventType, link: "#" }],
        image: "https://via.placeholder.com/150",
      };
      const updatedEvents = [newEntry, ...events];
      setEvents(updatedEvents);
      filterBySource(selectedSource);
      setNewEvent({ title: "", date: "", eventType: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 m-3 pb-2">
        Upcoming Events
      </h1>
      <div className="flex gap-2 mb-4 flex-wrap mb-3 mt-3">
        <motion.button
          whileHover={{ scale: 1.0 }}
          whileTap={{ scale: 0.9 }}
          className={`px-4 md:px-5 py-2 rounded-lg font-semibold transition-all shadow-lg ${
            activeTab === 'all'
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900"
          }`}
          onClick={() => filterBySource("all")}
        >
          All
        </motion.button>
        {ticketSources.map((source) => (
          <motion.button
            key={source}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`px-4 md:px-5 py-2 rounded-lg font-semibold transition-all shadow-lg ${
              activeTab === source
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "bg-gradient-to-r from-gray-200 to-gray-300 text-gray-900"
            }`}
            onClick={() => filterBySource(source)}
          >
            {source}
          </motion.button>
        ))}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-4 py-2 rounded-lg font-semibold transition-all shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center gap-2"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus /> Add Event
        </motion.button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className={`p-6 border rounded-lg shadow-lg w-full max-w-md ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">Add New Event</h3>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Event Title"
                className={`border p-3 rounded w-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <input
                type="date"
                className={`border p-3 rounded w-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              />
              <input
                type="text"
                placeholder="Event Type"
                className={`border p-3 rounded w-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                value={newEvent.eventType}
                onChange={(e) => setNewEvent({ ...newEvent, eventType: e.target.value })}
              />
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 bg-green-500 text-white rounded shadow-md flex items-center justify-center gap-2 flex-1"
                  onClick={addEvent}
                >
                  <FaPlus /> Add Event
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-4 py-2 bg-red-500 text-white rounded shadow-md flex items-center justify-center gap-2 flex-1"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin text-4xl text-blue-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-6 border rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-base sm:text-lg font-semibold mt-3 flex items-center gap-2">
               {event.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <FaCalendarAlt /> {event.date.when}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-2">
                <FaMapMarkerAlt /> {event.address.join(", ")}
              </p>
              <div className="mt-3">
                <h4 className="font-semibold">Ticket Sources:</h4>
                <ul>
                  {event.ticket_info.map((ticket) => (
                    <li key={ticket.source}>
                      <a
                        href={ticket.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 dark:text-blue-300 flex items-center gap-1"
                      >
                        <FaExternalLinkAlt /> {ticket.source}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsList;