import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  FileText,
  HelpCircle,
  Clock,
  MapPin,
} from "lucide-react";

export default function SupportContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert(
      "Thank you for contacting us! We will get back to you within 24 hours.",
    );
    setFormData({ name: "", email: "", phone: "", category: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "1-800-MOBILITY",
      subtext: "Mon-Fri, 8am-8pm IST",
      action: "tel:1800000000",
    },
    {
      icon: Mail,
      title: "Email Support",
      detail: "support@mobilityhub.com",
      subtext: "Response within 24 hours",
      action: "mailto:support@mobilityhub.com",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      detail: "Chat with our team",
      subtext: "Available during business hours",
      action: "#",
    },
  ];

  const helpTopics = [
    {
      icon: HelpCircle,
      title: "General Questions",
      description: "Learn about our platform, products, and services",
    },
    {
      icon: FileText,
      title: "Orders & Rentals",
      description: "Track orders, manage rentals, returns, and refunds",
    },
    {
      icon: MapPin,
      title: "Delivery & Pickup",
      description: "Shipping information, delivery areas, and scheduling",
    },
  ];

  const isFormValid =
    formData.name && formData.email && formData.category && formData.message;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F1E8" }}>
      {/* Hero Section */}
      <section className="bg-white py-16 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            We're here to <span className="text-orange-500">help</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get support, ask questions, or share feedback. Our team is ready to
            assist you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.action}
                  className="bg-white rounded-lg p-8 border border-gray-200 text-center hover:border-orange-500 transition-colors"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-lg text-orange-500 font-medium mb-1">
                    {method.detail}
                  </p>
                  <p className="text-sm text-gray-600">{method.subtext}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Help Topics */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Common Help Topics
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {helpTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <Icon className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600">{topic.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  How can we help?
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                >
                  <option value="">Select a category</option>
                  <option value="general">General Question</option>
                  <option value="order">Order or Rental Issue</option>
                  <option value="product">Product Information</option>
                  <option value="delivery">Delivery & Pickup</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback or Suggestion</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!isFormValid}
                className={`w-full font-semibold py-4 px-6 rounded-lg transition-colors ${
                  isFormValid
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Support Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-900">
                      Monday - Friday:
                    </span>{" "}
                    8:00 AM - 8:00 PM IST
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">
                      Saturday:
                    </span>{" "}
                    9:00 AM - 6:00 PM IST
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Sunday:</span>{" "}
                    10:00 AM - 4:00 PM IST
                  </p>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Email support available 24/7. We'll respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Visit Our Office
                  </h3>
                  <p className="text-gray-600">
                    Mobility Hub Headquarters
                    <br />
                    Connaught Place, New Delhi, Delhi 110001, India
                  </p>
                </div>
              </div>
            </div>


            <div className="h-96 bg-gray-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9747687630484!2d77.21787931508076!3d28.631475982421268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371d97a80b%3A0x6bef6bbb4e64e55c!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mobility Hub Office Location"
              ></iframe>
            </div>


          </div>
        </div>
      </section> */}
    </div>
  );
}
