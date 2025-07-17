import React from "react";
import { motion } from "framer-motion";

// Animation variant used by all components
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

// Service1Hero Component
const Service1Hero = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0c0d0c] text-white py-20 text-center px-4">
    <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 text-[#e3d271]">
      AI Chatbots & Assistants
    </motion.h1>
    <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#ffffff]/80 max-w-3xl mx-auto">
      Intelligent conversational AI that understands, responds, and assists users 24/7 with natural language processing and contextual awareness.
    </motion.p>
    <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-4">
      <button className="bg-[#e3d271] text-black px-6 py-3 rounded-2xl font-semibold">Get Started</button>
      <button className="border border-[#e3d271] px-6 py-3 rounded-2xl text-white hover:bg-[#e3d271]/10">View Demo</button>
    </motion.div>
  </motion.section>
);

// Service1Features Component
const features = [
  { title: "Natural Language Understanding", desc: "Advanced NLP to comprehend user intent and context accurately." },
  { title: "Multi-Channel Integration", desc: "Deploy across websites, mobile apps, messaging platforms, and voice assistants." },
  { title: "Contextual Conversations", desc: "Maintain conversation context and provide relevant, personalized responses." },
  { title: "24/7 Availability", desc: "Round-the-clock customer support and assistance without human intervention." },
  { title: "Seamless Handoff", desc: "Smooth transition to human agents when complex issues arise." },
  { title: "Analytics & Insights", desc: "Track performance, user satisfaction, and conversation analytics." }
];
const Service1Features = () => (
  <section className="bg-[#1a1a1a] text-white py-20 px-6">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto text-center">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#e3d271] mb-12">Key Features</motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div variants={fadeUp} key={index} className="bg-[#0c0d0c] p-6 rounded-xl shadow-md hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-[#808080]">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

// Service1Benefits Component
const benefits = [
  { title: "Improved Customer Service", desc: "Provide instant responses and reduce wait times for customer inquiries." },
  { title: "Cost Reduction", desc: "Automate routine customer interactions and reduce support team workload." },
  { title: "Scalability", desc: "Handle unlimited conversations simultaneously without additional resources." },
  { title: "Consistent Experience", desc: "Deliver uniform service quality across all customer interactions." },
  { title: "Data Collection", desc: "Gather valuable insights from customer conversations and preferences." },
  { title: "Increased Engagement", desc: "Interactive conversations that keep users engaged and satisfied." }
];
const Service1Benefits = () => (
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

// Service1HowItWorks Component
const steps = [
  { step: "Step 1", title: "Define Use Cases", desc: "Identify customer interaction scenarios and conversation flows." },
  { step: "Step 2", title: "Train AI Model", desc: "Configure NLP models with domain-specific knowledge and responses." },
  { step: "Step 3", title: "Deploy & Integrate", desc: "Connect chatbot to platforms and test functionality." },
  { step: "Step 4", title: "Monitor & Optimize", desc: "Track performance and continuously improve responses." }
];
const Service1HowItWorks = () => (
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

// Service1CaseStudy Component
const Service1CaseStudy = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0c0d0c] text-white py-20 px-6">
    <motion.div variants={fadeUp} className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#e3d271] mb-6">Case Study: TechSupport Pro</h2>
      <p className="text-[#808080] mb-6"><strong>Client:</strong> TechSupport Pro — Software Support Company</p>
      <p className="mb-4"><strong>Challenge:</strong> Overwhelming support ticket volume and long response times.</p>
      <p className="mb-4"><strong>Solution:</strong> AI-powered chatbot for instant technical support and issue resolution.</p>
      <ul className="text-left max-w-xl mx-auto text-[#808080] space-y-2">
        <li>📈 85% reduction in response time</li>
        <li>⏱ 70% of issues resolved without human intervention</li>
        <li>💰 60% reduction in support costs</li>
        <li>📊 95% customer satisfaction rate</li>
      </ul>
      <blockquote className="mt-6 italic text-[#e3d271]">
        "Our AI chatbot handles 80% of support queries instantly, allowing our team to focus on complex technical issues."
      </blockquote>
    </motion.div>
  </motion.section>
);

// Service1Pricing Component
const plans = [
  { name: "Starter", price: "$29/month", features: ["Basic Chatbot", "Email Support", "5,000 Conversations/Month"] },
  { name: "Pro", price: "$99/month", features: ["Advanced NLP", "Priority Support", "Unlimited Conversations", "Analytics Dashboard"] },
  { name: "Enterprise", price: "Custom Quote", features: ["Custom AI Training", "Dedicated Manager", "Multi-Platform Integration", "24/7 Support"] }
];
const Service1Pricing = () => (
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
const AutomationEfficiency = () => {
  return (
    <main className="bg-[#0c0d0c] text-white">
      <Service1Hero />
      <Service1Features />
      <Service1Benefits />
      <Service1HowItWorks />
      <Service1CaseStudy />
      <Service1Pricing />
    </main>
  );
};

export default AutomationEfficiency;