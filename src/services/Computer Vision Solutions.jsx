import React from "react";
import { motion } from "framer-motion";

import heroPersonalized from "../assets/personalized-hero.svg";
import personalizedBehavior from "../assets/personalized-behavior.svg";
import personalizedRealtime from "../assets/personalized-realtime.svg";
import personalizedDynamic from "../assets/personalized-dynamic.svg";
import personalizedEmail from "../assets/personalized-email.svg";
import personalizedCustomization from "../assets/personalized-customization.svg";
import personalizedMultichannel from "../assets/personalized-multichannel.svg";
import defaultSvg from "../assets/defaultSvg.png";

// Animation variant used by all components
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const featureSvgs = {
  "Behavioral Tracking": personalizedBehavior,
  "Real-Time Content Recommendations": personalizedRealtime,
  "Dynamic UI Personalization": personalizedDynamic,
  "Email & Notification Personalization": personalizedEmail,
  "Product/Service Customization": personalizedCustomization,
  "Multi-Channel Experience Sync": personalizedMultichannel,
};

// Service5Hero Component
const Service5Hero = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0c0d0c] text-white py-20 text-center px-4">
    <motion.div variants={fadeUp} className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 text-[#e3d271]">
          Computer Vision Solutions
        </motion.h1>
        <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#ffffff]/80 mb-6">
          Advanced image and video analysis that sees, understands, and interprets visual data to automate processes and extract valuable insights.
        </motion.p>
        <motion.div variants={fadeUp} className="flex gap-4 flex-wrap justify-center md:justify-start">
          <button className="bg-[#e3d271] text-black px-6 py-3 rounded-2xl font-semibold">Explore Solutions</button>
          <button className="border border-[#e3d271] px-6 py-3 rounded-2xl text-white hover:bg-[#e3d271]/10">Request Demo</button>
        </motion.div>
      </div>
      <motion.div variants={fadeUp} className="flex-1">
        <img
          src={heroPersonalized}
          alt="Computer Vision Hero"
          className="w-full max-h-[400px] object-contain"
        />
      </motion.div>
    </motion.div>
  </motion.section>
);

// Service5Features Component
const features = [
  { title: "Image Recognition", desc: "Identify objects, people, and scenes in images with high accuracy." },
  { title: "Video Analysis", desc: "Process and analyze video content for real-time insights and automation." },
  { title: "Object Detection", desc: "Detect and track objects in images and videos for various applications." },
  { title: "Facial Recognition", desc: "Identify and verify individuals for security and personalization." },
  { title: "Quality Inspection", desc: "Automate quality control processes in manufacturing and production." },
  { title: "Document Processing", desc: "Extract text and data from images and scanned documents." }
];
const Service5Features = () => (
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

// Service5Benefits Component
const benefits = [
  { title: "Automated Processes", desc: "Reduce manual work with intelligent visual automation." },
  { title: "Enhanced Security", desc: "Improve safety and security through visual monitoring and detection." },
  { title: "Quality Assurance", desc: "Ensure consistent quality with automated visual inspection." },
  { title: "Data Extraction", desc: "Extract valuable information from images and documents efficiently." },
  { title: "Cost Reduction", desc: "Lower operational costs through automated visual analysis." },
  { title: "Real-Time Insights", desc: "Get instant visual insights for faster decision-making." }
];
const Service5Benefits = () => (
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

// Service5HowItWorks Component
const steps = [
  { step: "Step 1", title: "Image Capture", desc: "Collect visual data from cameras, sensors, or uploaded files." },
  { step: "Step 2", title: "Preprocessing", desc: "Clean and prepare images for optimal analysis." },
  { step: "Step 3", title: "AI Analysis", desc: "Apply computer vision algorithms to extract insights." },
  { step: "Step 4", title: "Action & Reporting", desc: "Generate reports and trigger automated actions." }
];
const Service5HowItWorks = () => (
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

// Service5CaseStudy Component
const Service5CaseStudy = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0c0d0c] text-white py-20 px-6">
    <motion.div variants={fadeUp} className="max-w-6xl mx-auto">
      <motion.h2 variants={fadeUp} className="text-3xl font-bold text-[#e3d271] mb-12 text-center">Case Study</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div variants={fadeUp}>
          <img
            src={caseStudyImage}
            alt="Case Study"
            className="w-full rounded-lg"
          />
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#e3d271] mb-4">
            How VisionTech Improved Manufacturing Quality by 95%
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-[#808080]">
            <li>👁 95% accuracy in defect detection</li>
            <li>⚡ 90% faster inspection process</li>
            <li>💰 60% reduction in quality control costs</li>
            <li>📊 99.9% customer satisfaction rate</li>
          </ul>
          <blockquote className="mt-6 italic text-[#e3d271]">
            "Computer vision transformed our quality control. We catch defects instantly that humans might miss."
          </blockquote>
        </motion.div>
      </div>
    </motion.div>
  </motion.section>
);

// Service5Pricing Component
const plans = [
  { name: "Starter", price: "$59/month", features: ["Basic Image Analysis", "Email Support", "1,000 Images/Month"] },
  { name: "Pro", price: "$199/month", features: ["Advanced Video Analysis", "Priority Support", "Unlimited Processing", "Custom Models"] },
  { name: "Enterprise", price: "Custom Quote", features: ["Custom Vision Models", "Dedicated Support", "Real-Time Processing", "24/7 SLA"] }
];
const Service5Pricing = () => (
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
const PersonalizedExperiences = () => {
  return (
    <main className="bg-[#0c0d0c] text-white">
      <Service5Hero />
      <Service5Features />
      <Service5Benefits />
      <Service5HowItWorks />
      <Service5CaseStudy />
      <Service5Pricing />
    </main>
  );
};

export default PersonalizedExperiences;
