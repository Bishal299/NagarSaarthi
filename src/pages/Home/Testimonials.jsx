import React from "react";

const reports = [
  { description: "Dumped garden rubbish", timestamp: "18:20 today" },
  { description: "Broken streetlight near park", timestamp: "16:45 today" },
  { description: "Overflowing garbage bin", timestamp: "15:30 today" },
  { description: "Pothole on 5th Avenue", timestamp: "14:10 today" },
  { description: "Graffiti on community center wall", timestamp: "12:50 today" },
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Local Resident",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    quote: "NagarSaarthi has made it so easy to report issues in our neighborhood!",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Community Leader",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "This platform has revolutionized how we engage with city officials!",
  },
  {
    id: 3,
    name: "Dr. Meera Patel",
    role: "City Official",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "NagarSaarthi helps us address citizen concerns more effectively!",
  },
];

export function Testimonials() {
  return (
    <section className="bg-gray-100">
      {/* Civic Statistics + Reports */}
      <div className="bg-gray-800 text-gray-100 py-6 px-4 font-sans">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-10">
          {/* Left: Statistics */}
          <div className="flex-1 min-w-[300px]">
            <hr className="border-t-8 border-blue-500 my-6" />
            <div className="flex flex-wrap gap-5 justify-between">
              <div className="flex-1 min-w-[200px] text-center">
                <div className="text-4xl font-bold mb-1">22,389</div>
                <div className="text-sm text-gray-400">reports in past week</div>
              </div>
              <div className="flex-1 min-w-[200px] text-center">
                <div className="text-4xl font-bold mb-1">48,806</div>
                <div className="text-sm text-gray-400">fixed in past month</div>
              </div>
              <div className="flex-1 min-w-[200px] text-center">
                <div className="text-4xl font-bold mb-1">12,740,927</div>
                <div className="text-sm text-gray-400">updates on reports</div>
              </div>
            </div>
          </div>

          {/* Right: Recently Reported Problems */}
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-xl font-semibold mb-5 text-gray-100">
              Recently reported problems
            </h2>
            <ul className="space-y-4">
              {reports.map((report, index) => (
                <li key={index}>
                  <div className="text-gray-100">{report.description}</div>
                  <div className="text-gray-400 text-sm">{report.timestamp}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex-1 min-w-[300px] max-w-xs"
              >
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-5 border-4 border-blue-500 mx-auto"
                />
                <blockquote className="text-gray-600 italic mb-5 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <h4 className="text-gray-800 font-semibold text-lg mb-1">{testimonial.name}</h4>
                <p className="text-blue-500 font-medium text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
