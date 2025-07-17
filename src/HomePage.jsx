import React, { useState } from 'react';
import Button from './components/Button';
import { FaCogs, FaChartLine, FaMobileAlt, FaRobot, FaShieldAlt, FaBrain, FaArrowRight, FaGlobe, FaGem, FaRocket } from 'react-icons/fa';
import pythonLogo from './assets/tech/python.png';
import djangoLogo from './assets/tech/django.png';
import reactLogo from './assets/tech/react.png';
import vueLogo from './assets/tech/vue.png';
import flutterLogo from './assets/tech/flutter.png';
import awsLogo from './assets/tech/aws.png';
import postgresqlLogo from './assets/tech/postgresql.png';
import hero from './assets/hero.png';
import heroVideo from './assets/hero.mp4';
import agentImg from './assets/agent.png';
import card2Img from './assets/card2.jpeg';
import card3Img from './assets/card3.jpeg';
import card4Img from './assets/card4.jpeg';
import card5Img from './assets/card5.jpeg';
import card6Img from './assets/card6.jpeg';
import card7Img from './assets/card7.jpeg';
import card8Img from './assets/card8.jpeg';
import card9Img from './assets/card9.jpeg';

const serviceCards = [
  {
    icon: (
      <span>
        <img src={agentImg} alt="Agentic AI" className="h-20 w-100 mx-auto mb-2" />
        <FaCogs />
      </span>
    ),
    title: 'Agentic AI Integration',
    desc: 'Full automation system that thinks & acts.',
    back: 'Integrate advanced agentic AI for seamless business automation and decision making.',
    image: agentImg,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    title: 'App & Software Development',
    desc: 'Custom web and mobile solutions.',
    back: 'We build scalable, secure apps tailored for your business needs using modern tech.',
    image: card2Img,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    title: 'Analytics & BI',
    desc: 'Real‑time metrics and dashboards.',
    back: 'Unlock actionable insights with real-time dashboards and predictive analytics.',
    image: card3Img,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    icon: <FaRobot />,
    title: 'Chatbots & Automation',
    desc: 'Automate repetitive tasks with AI.',
    back: 'Reduce operational load with smart chatbots and automation tools.',
    image: card4Img,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    icon: <FaShieldAlt />,
    title: 'AI Security Solutions',
    desc: 'Intelligent threat detection systems.',
    back: 'We design AI-powered solutions for cybersecurity and risk mitigation.',
    image: card5Img,
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    icon: <FaBrain />,
    title: 'Machine Learning Models',
    desc: 'Custom ML for your business.',
    back: 'Train models tailored to your goals—classification, regression, NLP, and more.',
    image: card6Img,
    gradient: 'from-gray-600 to-gray-800'
  },
];

const insightCards = [
  {
    title: 'Market Trends',
    desc: 'Stay ahead with data-driven insights into evolving markets.',
    back: 'Our AI tools analyze market signals to help you anticipate changes and opportunities.',
  },
  {
    title: 'Customer Behavior',
    desc: 'Understand your customers and tailor your services effectively.',
    back: 'Track and predict customer actions to personalize experiences and boost loyalty.',
  },
  {
    title: 'Growth Opportunities',
    desc: 'Unlock hidden growth potential using predictive AI models.',
    back: 'Discover new markets and optimize your strategy for maximum business growth.',
  },
];

const insightGradients = [
  "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
  "linear-gradient(135deg, #fbc2eb 0%, #fbc2eb 50%, #f9d423 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
];
const insightIcons = [<FaGlobe />, <FaGem />, <FaRocket />];
const insightImages = [card7Img, card8Img, card9Img]; // your background images

export default function HomePage() {
  const [flippedService, setFlippedService] = useState(null);
  const [flippedInsight, setFlippedInsight] = useState(null);

  return (
    <div className="space-y-16 bg-black text-white">
      
      {/* 🏠 Hero Section */}
      <section className="relative text-white py-32 text-center shadow-2xl overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Fallback background image */}
          <img src={hero} alt="Hero Background" className="w-full h-full object-cover" />
        </video>
        
        {/* Overlay */}
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold text-gold mb-8 leading-tight tracking-tight">
            Empowering Businesses with <br className="hidden md:block" /> End-to-End AI Intelligence
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
            Build, deploy, and scale AI-driven solutions tailored to your business needs.
          </p>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Transform your operations with automation, predictive analytics, and scalable systems — all powered by next-gen artificial intelligence.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button className="bg-gold text-black text-xl font-bold hover:bg-yellow-300 px-8 py-4 rounded-full shadow-lg">Get Started</Button>
            <Button className="bg-gold text-black text-xl font-bold hover:bg-yellow-300 px-8 py-4 rounded-full shadow-lg">Explore Tools</Button>
          </div>
          <p className="mt-12 text-md text-gray-200 italic">
            Trusted by startups, enterprises, and innovators to shape the future of intelligent solutions.
          </p>
        </div>
      </section>

      {/* 💡 Our Core Services */}
      <section className="bg-section-grey py-16 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-12 text-gold">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-2 justify-items-center">
          {serviceCards.map((card, i) => (
            <div
              key={card.title}
              className={`flip-card group ${flippedService === i ? 'flipped' : ''} w-full max-w-[700px] h-[500px] flex flex-col relative overflow-hidden`}
              onMouseEnter={() => setFlippedService(i)}
              onMouseLeave={() => setFlippedService(null)}
            >
              <div className="flip-card-inner h-full">
                <div className={`flip-card-front bg-gradient-to-b ${card.gradient} rounded-xl shadow-lg overflow-hidden h-full flex flex-col relative`}>
                  {/* Hologram Effect Overlay for Card */}
                  <div className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{
                         background: "linear-gradient(120deg, rgba(0,255,255,0.12) 0%, rgba(0,0,0,0) 60%, rgba(0,255,255,0.12) 100%)"
                       }} />
                  {/* Image Section */}
                  <div className="flex-1 w-full relative">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Text Area */}
                  <div className="p-6 min-h-[60px] flex flex-col justify-center relative group/text hover:z-20">
                    {/* Hologram Effect Overlay for Text */}
                    <div className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:text:opacity-100 hover:opacity-100 transition-opacity duration-500"
                         style={{
                           background: "linear-gradient(90deg, rgba(0,255,255,0.18) 0%, rgba(0,0,0,0) 60%, rgba(0,255,255,0.18) 100%)"
                         }} />
                    <h3 className="text-white text-lg font-bold mb-1 group-hover:glitter-text transition-all duration-300">{card.title}</h3>
                    <p className="text-white text-sm leading-relaxed group-hover:glitter-text transition-all duration-300">
                      {card.desc}
                    </p>
                  </div>
                </div>
                
                {/* Back Side */}
                <div className="flip-card-back bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl border-2 border-blue-400 text-white p-6 flex flex-col items-center justify-center h-full relative group">
                  {/* Hologram Effect on Back */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold mb-4 text-blue-200">{card.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{card.back}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 Insights */}
      <section className="bg-section-grey py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gold">Insights</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {insightCards.map((card, i) => (
            <div key={card.title} className="insight-curve-card">
              {/* Background image */}
              <div className="insight-curve-bg" style={{
                backgroundImage: `url(${insightImages[i]})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}>
                {/* Gradient overlay */}
                <div className="insight-curve-gradient" style={{ background: insightGradients[i] }} />
              </div>
              {/* Icon cutout */}
              <div className="insight-curve-icon">{insightIcons[i]}</div>
              {/* Content */}
              <div className="insight-curve-content">
                <div className="insight-curve-title">{card.title}</div>
                <div className="text-sm">{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🛠 Tech Stack */}
      <section className="bg-black py-24 px-8 text-center">
        <h2 className="text-4xl font-bold mb-10 text-gold">Tech We Use</h2>
        <div className="relative overflow-hidden">
          <div className="marquee flex gap-16 w-max px-8 animate-scroll">
            {[pythonLogo, djangoLogo, reactLogo, vueLogo, flutterLogo, awsLogo, postgresqlLogo,
              pythonLogo, djangoLogo, reactLogo, vueLogo, flutterLogo, awsLogo, postgresqlLogo].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Tech ${index}`}
                className="h-24 w-auto hover:scale-110 transition-all duration-300 drop-shadow-xl cursor-pointer"
              />
            ))}
          </div>
        </div>
        <p className="max-w-2xl mx-auto text-gray-300 mt-12 text-lg">
           we build intelligent, scalable, and secure digital solutions using modern technologies. Our tech stack includes powerful tools like Python, Django, React, Vue.js, Flutter, AWS, and PostgreSQL. These technologies help us develop responsive web apps, robust mobile applications, seamless cloud integrations, and AI-driven platforms that drive real business value. We choose tools that are trusted by developers and enterprises worldwide to ensure performance, reliability, and future scalability.
        </p>
      </section>
    </div>
  );
}
