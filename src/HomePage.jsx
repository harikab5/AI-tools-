import React, { useState } from 'react';
import Button from './components/Button';
import { FaCogs, FaChartLine, FaMobileAlt, FaRobot, FaShieldAlt, FaBrain } from 'react-icons/fa';
import pythonLogo from './assets/tech/python.png';
import djangoLogo from './assets/tech/django.png';
import reactLogo from './assets/tech/react.png';
import vueLogo from './assets/tech/vue.png';
import flutterLogo from './assets/tech/flutter.png';
import awsLogo from './assets/tech/aws.png';
import postgresqlLogo from './assets/tech/postgresql.png';
import hero from './assets/hero.png';
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
  },
  {
    icon: <FaMobileAlt />,
    title: 'App & Software Development',
    desc: 'Custom web and mobile solutions.',
    back: 'We build scalable, secure apps tailored for your business needs using modern tech.',
  },
  {
    icon: <FaChartLine />,
    title: 'Analytics & BI',
    desc: 'Real‑time metrics and dashboards.',
    back: 'Unlock actionable insights with real-time dashboards and predictive analytics.',
  },
  {
    icon: <FaRobot />,
    title: 'Chatbots & Automation',
    desc: 'Automate repetitive tasks with AI.',
    back: 'Reduce operational load with smart chatbots and automation tools.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'AI Security Solutions',
    desc: 'Intelligent threat detection systems.',
    back: 'We design AI-powered solutions for cybersecurity and risk mitigation.',
  },
  {
    icon: <FaBrain />,
    title: 'Machine Learning Models',
    desc: 'Custom ML for your business.',
    back: 'Train models tailored to your goals—classification, regression, NLP, and more.',
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

export default function HomePage() {
  const [flippedService, setFlippedService] = useState(null);
  const [flippedInsight, setFlippedInsight] = useState(null);

  return (
    <div className="space-y-16 bg-black text-white">
      
      {/* 🏠 Hero Section */}
      <section
        className="relative text-white py-32 text-center shadow-2xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-black bg-opacity-60 absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 justify-items-center">
          {serviceCards.map((card, i) => (
            <div
              key={card.title}
              className={`flip-card ${flippedService === i ? 'flipped' : ''} w-full max-w-[500px]`}
              onMouseEnter={() => setFlippedService(i)}
              onMouseLeave={() => setFlippedService(null)}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl shadow-xl border-2 border-gold text-white p-6 flex flex-col items-center justify-center h-full"
                  style={
                    i === 0
                      ? {
                          backgroundImage: `url(${agentImg})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : i === 1
                      ? {
                          backgroundImage: `url(${card2Img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : i === 2
                      ? {
                          backgroundImage: `url(${card3Img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : i === 3
                      ? {
                          backgroundImage: `url(${card4Img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : i === 4
                      ? {
                          backgroundImage: `url(${card5Img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : i === 5
                      ? {
                          backgroundImage: `url(${card6Img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : {}
                  }
                >
                  <div className="text-gold text-5xl mb-4">
                    {i === 0 ? <FaCogs /> :
                     i === 1 ? <FaMobileAlt /> :
                     i === 2 ? <FaChartLine /> :
                     i === 3 ? <FaRobot /> :
                     i === 4 ? <FaShieldAlt /> :
                     i === 5 ? <FaBrain /> :
                     card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gold">{card.title}</h3>
                  <p className="mt-2 text-gray-300">{card.desc}</p>
                </div>
                <div className="flip-card-back bg-gold rounded-xl shadow-xl border-2 border-white text-black p-6 flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p>{card.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 Insights */}
      <section className="bg-section-grey py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gold">Insights</h2>
        <div className="grid md:grid-cols-3 gap-8 justify-center">
          {insightCards.map((card, i) => (
            <div
              key={card.title}
              className={`flip-card ${flippedInsight === i ? 'flipped' : ''} mx-auto`}
              onMouseEnter={() => setFlippedInsight(i)}
              onMouseLeave={() => setFlippedInsight(null)}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-lg shadow-xl border-2 border-gold text-white p-8 flex flex-col items-center justify-center"
                  style={
                    i === 0
                      ? {
                          backgroundImage: `url(${card7Img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : i === 1
                      ? {
                          backgroundImage: `url(${card8Img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : i === 2
                      ? {
                          backgroundImage: `url(${card9Img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }
                      : {}
                  }
                >
                  <div className="text-gold text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-gold">{card.title}</h3>
                  <p className="mt-2 text-gray-300">{card.desc}</p>
                </div>
                <div className="flip-card-back bg-gold rounded-lg shadow-xl border-2 border-white text-black p-8 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p>{card.back}</p>
                </div>
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
