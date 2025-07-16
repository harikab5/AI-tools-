import React from "react";
import { Link } from "react-router-dom";

const services = [
  { id: 1, name: "AI Text Generator", description: "Generate text using AI." },
  { id: 2, name: "Image Recognition", description: "Analyze images with AI." },
  { id: 3, name: "Chatbot Platform", description: "Deploy AI chatbots." },
];

const Services = () => (
  <div className="container mx-auto py-8">
    <h1 className="text-3xl font-bold mb-4">AI Tools & Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map(service => (
        <Link key={service.id} to={`/services/${service.id}`}>
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="font-semibold">{service.name}</h2>
            <p>{service.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Services;