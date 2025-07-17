import React from "react";
import { motion } from "framer-motion";

// Animation variant used by all components
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

// Service2Hero Component
const Service2Hero = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0c0d0c] text-white py-20 text-center px-4">
    <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 text-[#e3d271]">
      Content & Code Generation
    </motion.h1>
    <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#ffffff]/80 max-w-3xl mx-auto">
      AI-powered tools that generate high-quality content, code, and creative assets to accelerate your development and marketing efforts.
    </motion.p>
    <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-4">
      <button className="bg-[#e3d271] text-black px-6 py-3 rounded-2xl font-semibold">Get Started</button>
      <button className="border border-[#e3d271] px-6 py-3 rounded-2xl text-white hover:bg-[#e3d271]/10">View Demo</button>
    </motion.div>
  </motion.section>
);

// Service2Features Component
const features = [
  { title: "Code Generation", desc: "Generate production-ready code in multiple programming languages and frameworks." },
  { title: "Content Creation", desc: "Create engaging blog posts, articles, marketing copy, and social media content." },
  { title: "Documentation", desc: "Automatically generate technical documentation, user guides, and API references." },
  { title: "Creative Assets", desc: "Generate images, graphics, and visual content for marketing campaigns." },
  { title: "Translation & Localization", desc: "Translate content into multiple languages while maintaining context." },
  { title: "Quality Assurance", desc: "Review and optimize generated content for accuracy, style, and compliance." }
];
const Service2Features = () => (
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

// Service2Benefits Component
const benefits = [
  { title: "Faster Development", desc: "Accelerate coding projects with AI-generated boilerplate and templates." },
  { title: "Content Efficiency", desc: "Create high-quality content at scale without sacrificing creativity." },
  { title: "Cost Reduction", desc: "Reduce time and resources spent on manual content and code creation." },
  { title: "Consistency", desc: "Maintain uniform style and quality across all generated materials." },
  { title: "Innovation", desc: "Explore new ideas and approaches with AI-suggested creative solutions." },
  { title: "Scalability", desc: "Handle large volumes of content and code generation simultaneously." }
];
const Service2Benefits = () => (
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

// Service2HowItWorks Component
const steps = [
  { step: "Step 1", title: "Define Requirements", desc: "Specify content type, style, and technical requirements." },
  { step: "Step 2", title: "AI Generation", desc: "AI creates initial content or code based on your specifications." },
  { step: "Step 3", title: "Review & Refine", desc: "Review generated content and make necessary adjustments." },
  { step: "Step 4", title: "Deploy & Iterate", desc: "Use the generated content and gather feedback for improvements." }
];
const Service2HowItWorks = () => (
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

// Service2CaseStudy Component
const Service2CaseStudy = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0c0d0c] text-white py-20 px-6">
    <motion.div variants={fadeUp} className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#e3d271] mb-6">Case Study: DevCorp Studios</h2>
      <p className="text-[#808080] mb-6"><strong>Client:</strong> DevCorp Studios — Software Development Agency</p>
      <p className="mb-4"><strong>Challenge:</strong> Time-consuming content creation and repetitive code development.</p>
      <p className="mb-4"><strong>Solution:</strong> AI-powered content and code generation tools for rapid development.</p>
      <ul className="text-left max-w-xl mx-auto text-[#808080] space-y-2">
        <li>🚀 75% faster development cycles</li>
        <li>📝 10x increase in content production</li>
        <li>💰 50% reduction in development costs</li>
        <li>📊 90% client satisfaction improvement</li>
      </ul>
      <blockquote className="mt-6 italic text-[#e3d271]">
        "AI generation tools transformed our workflow. We now deliver projects 3x faster while maintaining quality."
      </blockquote>
    </motion.div>
  </motion.section>
);

// Service2Pricing Component
const plans = [
  { name: "Starter", price: "$49/month", features: ["Basic Content Generation", "Email Support", "10,000 Words/Month"] },
  { name: "Pro", price: "$199/month", features: ["Advanced Code Generation", "Priority Support", "Unlimited Content", "API Access"] },
  { name: "Enterprise", price: "Custom Quote", features: ["Custom AI Training", "Dedicated Manager", "Multi-Language Support", "24/7 Support"] }
];
const Service2Pricing = () => (
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
const CloudIntegration = () => {
  return (
    <main className="bg-[#0c0d0c] text-white">
      <Service2Hero />
      <Service2Features />
      <Service2Benefits />
      <Service2HowItWorks />
      <Service2CaseStudy />
      <Service2Pricing />
    </main>
  );
};

export default CloudIntegration;