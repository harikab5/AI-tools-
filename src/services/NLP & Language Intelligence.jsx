import React from "react";
import { motion } from "framer-motion";

import heroHci from "../assets/hero-dashboard.svg";
import hciNlp from "../assets/hci-nlp.png";
import hciVoice from "../assets/hci-voice.png";
import hciFacial from "../assets/hci-facial.png";
import hciGesture from "../assets/hci-gesture.png";
import hciPersonalized from "../assets/hci-personalized.png";
import hciConversational from "../assets/hci-conversational.png";
import defaultSvg from "../assets/defaultSvg.png";

// Animation variant used by all components
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const featureSvgs = {
  "Natural Language Processing (NLP)": hciNlp,
  "Voice & Speech Recognition": hciVoice,
  "Facial Expression Analysis": hciFacial,
  "Gesture Recognition": hciGesture,
  "Personalized Interactions": hciPersonalized,
  "Conversational Interfaces": hciConversational,
};

// Service4Hero Component
const Service4Hero = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0c0d0c] text-white py-20 text-center px-4">
    <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
      <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 text-[#e3d271]">
        NLP & Language Intelligence
      </motion.h1>
      <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#ffffff]/80 mb-6">
        Advanced natural language processing that understands context, sentiment, and intent to enable intelligent communication and automation.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-4">
        <button className="bg-[#e3d271] text-black px-6 py-3 rounded-2xl font-semibold">Explore Solutions</button>
        <button className="border border-[#e3d271] px-6 py-3 rounded-2xl text-white hover:bg-[#e3d271]/10">Request Demo</button>
      </motion.div>
    </motion.div>
  </motion.section>
);

// Service4Features Component
const features = [
  { title: "Natural Language Processing (NLP)", desc: "Advanced text analysis and understanding capabilities." },
  { title: "Voice & Speech Recognition", desc: "High-accuracy speech-to-text and voice command processing." },
  { title: "Sentiment Analysis", desc: "Detect and analyze emotions and opinions in text and speech." },
  { title: "Language Translation", desc: "Real-time translation across multiple languages with context preservation." },
  { title: "Text Generation", desc: "Create human-like text content for various applications." },
  { title: "Conversational AI", desc: "Build intelligent chatbots and virtual assistants." }
];
const Service4Features = () => (
  <section className="bg-[#1a1a1a] text-white py-20 px-6">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#e3d271] mb-12">Key Features</motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div variants={fadeUp} key={index} className="bg-[#0c0d0c] p-6 rounded-xl shadow-md hover:shadow-lg">
            <img
              src={featureSvgs[feature.title] || defaultSvg}
              alt={feature.title}
              className="h-16 w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-white text-center">{feature.title}</h3>
            <p className="text-[#808080] text-center">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// Service4Benefits Component
const benefits = [
  { title: "Enhanced Communication", desc: "Improve customer interactions with intelligent language understanding." },
  { title: "Automated Processing", desc: "Streamline document processing and information extraction." },
  { title: "Global Reach", desc: "Break language barriers and serve international audiences." },
  { title: "Content Optimization", desc: "Create and optimize content based on language intelligence." },
  { title: "Efficiency Gains", desc: "Automate language-based tasks and reduce manual processing." },
  { title: "Better Insights", desc: "Extract meaningful insights from unstructured text data." }
];
const Service4Benefits = () => (
  <section className="bg-[#0c0d0c] text-white py-20 px-6">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#e3d271] mb-12">Benefits</motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((item, index) => (
          <motion.div variants={fadeUp} key={index} className="p-6 bg-[#1a1a1a] rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-[#808080]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// Service4HowItWorks Component
const steps = [
  { step: "Step 1", title: "Text Input", desc: "Receive text or speech input from various sources." },
  { step: "Step 2", title: "Language Processing", desc: "Apply NLP algorithms for understanding and analysis." },
  { step: "Step 3", title: "Intelligence Extraction", desc: "Extract meaning, sentiment, and actionable insights." },
  { step: "Step 4", title: "Response Generation", desc: "Generate appropriate responses or take actions." }
];
const Service4HowItWorks = () => (
  <section className="bg-[#1a1a1a] text-white py-20 px-6">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-5xl mx-auto text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#e3d271] mb-12">How It Works</motion.h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div variants={fadeUp} key={i} className="p-6 bg-[#0c0d0c] rounded-xl shadow">
            <h4 className="text-[#e3d271] font-bold mb-2">{s.step}</h4>
            <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
            <p className="text-[#808080] text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// Service4CaseStudy Component
const Service4CaseStudy = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0c0d0c] text-white py-20 px-6">
    <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#e3d271] mb-12">Case Study</motion.h2>
      <h3 className="text-2xl font-bold text-[#e3d271] mb-4">
        How LangTech Improved Customer Support by 80%
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-[#808080] text-left max-w-xl mx-auto">
        <li>🗣 90% accuracy in customer intent recognition</li>
        <li>😊 80% improvement in response accuracy</li>
        <li>📊 70% reduction in support ticket volume</li>
        <li>💡 95% customer satisfaction with AI responses</li>
      </ul>
      <blockquote className="mt-6 italic text-[#e3d271]">
        "Our NLP system understands customer needs better than ever, providing instant, accurate responses."
      </blockquote>
    </motion.div>
  </motion.section>
);

// Service4Pricing Component
const plans = [
  { name: "Basic Plan", price: "$39/month", features: ["Basic NLP Processing", "Email Support", "10,000 API Calls/Month"] },
  { name: "Pro Plan", price: "$149/month", features: ["Advanced Language Models", "Priority Support", "Unlimited API Calls", "Custom Training"] },
  { name: "Enterprise", price: "Custom Quote", features: ["Custom Language Models", "Dedicated Support", "Multi-Language Support", "24/7 SLA"] }
];
const Service4Pricing = () => (
  <section className="bg-[#1a1a1a] text-white py-20 px-6">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#e3d271] mb-12">Pricing</motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div variants={fadeUp} key={i} className="bg-[#0c0d0c] p-6 rounded-xl border border-[#e3d271]/30">
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-[#e3d271] font-semibold mb-4">{plan.price}</p>
            <ul className="text-[#808080] space-y-2 text-sm">
              {plan.features.map((f, index) => <li key={index}>✔ {f}</li>)}
            </ul>
            <button className="mt-6 bg-[#e3d271] text-black px-4 py-2 rounded-xl font-semibold">
              {plan.name === "Enterprise" ? "Contact Us" : "Start Plan"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// Main App Component
const EnhancedHci = () => {
  return (
    <main className="bg-[#0c0d0c] text-white">
      <Service4Hero />
      <Service4Features />
      <Service4Benefits />
      <Service4HowItWorks />
      <Service4CaseStudy />
      <Service4Pricing />
    </main>
  );
};

export default EnhancedHci;
