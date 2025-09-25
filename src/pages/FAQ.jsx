import React, { useState } from "react";
import { Header } from "./Home/Header";
import { Navbar } from "./Home/Navbar";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

const categorizedFAQs = [
  {
    category: "Reporting Issues",
    items: [
      {
        question: "How do I report a civic issue?",
        answer:
          "You can report an issue by logging into your citizen account, selecting 'Report Issue', uploading a photo (optional), providing a description, and specifying the location.",
      },
      {
        question: "What types of issues can I report?",
        answer:
          "Citizens can report issues such as potholes, streetlight outages, garbage collection problems, water supply issues, tree damage, traffic hazards, and other civic concerns.",
      },
      {
        question: "Can multiple reports be submitted for the same issue?",
        answer:
          "Yes, multiple citizens can report the same issue. Our system aggregates similar reports to prioritize resolution efficiently.",
      },
      {
        question: "Can I edit or delete a report after submission?",
        answer:
          "You can edit the description or add photos before it is assigned to a department. Deleting reports is restricted to maintain accountability.",
      },
      {
        question: "Who handles my reported issue?",
        answer:
          "Each issue is automatically routed to the relevant municipal department responsible for that category of civic concern.",
      },
      {
        question: "How long does it take to resolve an issue?",
        answer:
          "Resolution times vary depending on the type of issue and the department responsible. You can track the status of your report in real time on your dashboard.",
      },
      {
        question: "Can I provide feedback after the issue is resolved?",
        answer:
          "Yes, after an issue is marked resolved, you can rate the service and provide comments to help improve the process.",
      },
    ],
  },
  {
    category: "Account & Privacy",
    items: [
      {
        question: "Do I need to register to report an issue?",
        answer:
          "Yes, registering ensures that you can track the status of your report and receive updates when the issue is resolved.",
      },
      {
        question: "Can I report an issue anonymously?",
        answer:
          "Currently, reports require registration. However, your personal information is kept confidential and is only used for follow-ups and notifications.",
      },
      {
        question: "Will my report be visible to others?",
        answer:
          "Reports are visible on the platform in an anonymized format. Personal details of the reporter are never publicly shared.",
      },
      {
        question: "How is my data protected?",
        answer:
          "We follow strict privacy protocols. All personal data is encrypted and stored securely. Only authorized municipal staff can access your report details.",
      },
    ],
  },
  {
    category: "Technical Support",
    items: [
      {
        question: "Is there a mobile app?",
        answer:
          "Currently, our platform is web-based, but it is optimized for mobile browsers. Mobile apps are planned for future releases.",
      },
      {
        question: "What if I encounter a technical problem while using the platform?",
        answer:
          "You can contact our support team via the provided email or phone number. Include a screenshot and description of the issue for faster resolution.",
      },
    ],
  },
  {
    category: "Community & Participation",
    items: [
      {
        question: "How can I become a part of the platform's community programs?",
        answer:
          "We regularly conduct community outreach programs. Stay updated via our newsletter or contact the support team to participate.",
      },
    ],
  },
];

export default function FAQ() {
  const [openFAQs, setOpenFAQs] = useState({}); // Track open state per category+question
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (catIdx, faqIdx) => {
    const key = `${catIdx}-${faqIdx}`;
    setOpenFAQs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Filter FAQs based on search query
  const filteredCategories = categorizedFAQs.map((category) => {
    const filteredItems = category.items.filter((faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...category, items: filteredItems };
  }).filter(cat => cat.items.length > 0); // Only categories with matching items

  return (
    <main className="bg-white text-gray-900">
      <Header />
      <Navbar />

      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-700 mb-6">
            Find answers to common questions about using our civic reporting platform.
          </p>

          {/* Search Bar */}
          <div className="mb-8 relative max-w-lg">
            <FaSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {filteredCategories.length === 0 && (
            <p className="text-gray-500">No FAQs match your search query.</p>
          )}

          {filteredCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.items.map((faq, faqIdx) => {
                  const isOpen = openFAQs[`${catIdx}-${faqIdx}`];
                  return (
                    <div
                      key={faqIdx}
                      className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => toggleFAQ(catIdx, faqIdx)}
                        className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none bg-gray-50 hover:bg-gray-100 transition"
                      >
                        <span className="font-medium">{faq.question}</span>
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 bg-white text-gray-700">{faq.answer}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} NagarSaarthi-Civic Crowdsorced Reporting Platform — All rights reserved.
        </div>
      </footer>
    </main>
  );
}
