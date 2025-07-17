import React from "react";
import { motion } from "framer-motion";

import heroDashboard from "../assets/hero-dashboard.svg";
import defaultSvg from "../assets/defaultSvg.png";

import industryModel from "../assets/feature-industry-model.png";
import compliance from "../assets/feature-compliance.png";
import workflow from "../assets/feature-workflow.png";
import analytics from "../assets/feature-analytics.png";
import scalable from "../assets/feature-scalable.png";
import integration from "../assets/feature-integration.png";

// Animation variant used by all components
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const featureSvgs = {
  "Industry-Specific AI Models": industryModel,
  "Compliance & Security Ready": compliance,
  "Custom Workflow Automation": workflow,
  "Predictive Analytics for Key Metrics": analytics,
  "Scalable Deployment": scalable,
  "Integration with Industry Tools": integration,
  "heroDashboard": heroDashboard
};

// Service6Hero Component
const Service6Hero = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0c0d0c] text-white py-20 text-center px-4">
    <motion.div variants={fadeUp} className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 text-[#e3d271]">
          Automation & Workflow Tools
        </motion.h1>
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#ffffff]/80 mb-6">
          Streamline operations with intelligent automation that eliminates repetitive tasks, reduces errors, and boosts productivity across your organization.
        </motion.p>
        <motion.div variants={fadeUp} className="flex gap-4 flex-wrap justify-center md:justify-start">
          <button className="bg-[#e3d271] text-black px-6 py-3 rounded-2xl font-semibold">Get Started</button>
          <button className="border border-[#e3d271] px-6 py-3 rounded-2xl text-white hover:bg-[#e3d271]/10">View Demo</button>
        </motion.div>
      </div>
      <motion.div variants={fadeUp} className="flex-1">
        <img
          src={heroDashboard}
          alt="Automation Dashboard"
          className="w-full max-h-[400px] object-contain"
        />
      </motion.div>
    </motion.div>
  </motion.section>
);

// Service6Features Component
const features = [
  { title: "Process Automation", desc: "Automate repetitive tasks and workflows across departments." },
  { title: "Smart Triggers", desc: "Intelligent event-based automation that responds to data changes." },
  { title: "Workflow Design", desc: "Visual workflow builder for creating complex automation sequences." },
  { title: "Integration Hub", desc: "Connect and automate across multiple systems and applications." },
  { title: "Monitoring & Analytics", desc: "Track automation performance and identify optimization opportunities." },
  { title: "Error Handling", desc: "Robust error handling and recovery mechanisms for reliable automation." }
];
const Service6Features = () => (
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

// Service6Benefits Component
const benefits = [
  { title: "Time Savings", desc: "Free up valuable time by automating routine tasks and processes." },
  { title: "Error Reduction", desc: "Minimize human errors with consistent, rule-based automation." },
  { title: "Cost Efficiency", desc: "Reduce operational costs through automated workflows." },
  { title: "Scalability", desc: "Handle increased workloads without proportional resource increases." },
  { title: "Compliance", desc: "Ensure consistent adherence to business rules and regulations." },
  { title: "Employee Satisfaction", desc: "Allow teams to focus on high-value, strategic work." }
];
const Service6Benefits = () => (
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

// Service6HowItWorks Component
const steps = [
  { step: "Step 1", title: "Identify Opportunities", desc: "Map out processes suitable for automation." },
  { step: "Step 2", title: "Design Workflows", desc: "Create automation logic and decision trees." },
  { step: "Step 3", title: "Deploy & Test", desc: "Implement automation and validate functionality." },
  { step: "Step 4", title: "Monitor & Optimize", desc: "Track performance and continuously improve." }
];
const Service6HowItWorks = () => (
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

// Service6CaseStudy Component
const Service6CaseStudy = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0c0d0c] text-white py-20 px-6">
    <motion.div variants={fadeUp} className="max-w-6xl mx-auto">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#e3d271] mb-12 text-center">Case Study</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div variants={fadeUp}>
          <img
            src={caseStudy}
            alt="Case Study"
            className="w-full rounded-lg"
          />
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#e3d271] mb-4">
            How AutoCorp Streamlined Operations by 70%
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-[#808080]">
            <li>⚡ 70% reduction in manual processing time</li>
            <li>💰 50% decrease in operational costs</li>
            <li>📊 90% improvement in process accuracy</li>
            <li>👥 40% increase in employee productivity</li>
          </ul>
          <blockquote className="mt-6 italic text-[#e3d271]">
            "Automation transformed our operations. We now handle 3x the workload with the same team size."
          </blockquote>
        </motion.div>
      </div>
    </motion.div>
  </motion.section>
);

// Service6Pricing Component
const plans = [
  { name: "Starter", price: "$39/month", features: ["Basic Automation", "Email Support", "5 Workflows"] },
  { name: "Pro", price: "$129/month", features: ["Advanced Automation", "Priority Support", "Unlimited Workflows", "Custom Integrations"] },
  { name: "Enterprise", price: "Custom Quote", features: ["Custom Automation", "Dedicated Manager", "24/7 Support", "SLA Guarantees"] }
];
const Service6Pricing = () => (
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
const SpecializedIndustryApps = () => {
  return (
    <main className="bg-[#0c0d0c] text-white">
      <Service6Hero />
      <Service6Features />
      <Service6Benefits />
      <Service6HowItWorks />
      <Service6CaseStudy />
      <Service6Pricing />
    </main>
  );
};

export default SpecializedIndustryApps;