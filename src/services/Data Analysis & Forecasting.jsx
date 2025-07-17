import React from "react";
import { motion } from "framer-motion";

// Animation variant used by all components
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

// Service3Hero Component
const Service3Hero = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0c0d0c] text-white py-20 text-center px-4">
    <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-4 text-[#e3d271]">
      Data Analysis & Forecasting
    </motion.h1>
    <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#ffffff]/80 max-w-3xl mx-auto">
      Transform raw data into actionable insights and accurate predictions using advanced AI algorithms and machine learning models.
    </motion.p>
    <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-4">
      <button className="bg-[#e3d271] text-black px-6 py-3 rounded-2xl font-semibold">Get Started</button>
      <button className="border border-[#e3d271] px-6 py-3 rounded-2xl text-white hover:bg-[#e3d271]/10">View Report</button>
    </motion.div>
  </motion.section>
);

// Service3Features Component
const features = [
  { title: "Predictive Analytics", desc: "Forecast future trends and outcomes with high accuracy using ML models." },
  { title: "Real-Time Dashboards", desc: "Visualize key metrics and KPIs with interactive, live-updating dashboards." },
  { title: "Data Mining", desc: "Discover hidden patterns and correlations in large datasets." },
  { title: "Statistical Analysis", desc: "Advanced statistical modeling for comprehensive data insights." },
  { title: "Business Intelligence", desc: "Convert data into strategic business insights and recommendations." },
  { title: "Automated Reporting", desc: "Generate comprehensive reports automatically with scheduled delivery." }
];
const Service3Features = () => (
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

// Service3Benefits Component
const benefits = [
  { title: "Informed Decisions", desc: "Make data-driven decisions with confidence using accurate insights." },
  { title: "Risk Mitigation", desc: "Identify potential risks and opportunities before they impact your business." },
  { title: "Operational Efficiency", desc: "Optimize processes and resource allocation based on data insights." },
  { title: "Competitive Advantage", desc: "Stay ahead of competitors with predictive market analysis." },
  { title: "Cost Optimization", desc: "Reduce costs by identifying inefficiencies and optimization opportunities." },
  { title: "Strategic Planning", desc: "Develop long-term strategies based on comprehensive data analysis." }
];
const Service3Benefits = () => (
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

// Service3HowItWorks Component
const steps = [
  { step: "Step 1", title: "Data Collection", desc: "Gather and integrate data from multiple sources and systems." },
  { step: "Step 2", title: "Data Processing", desc: "Clean, transform, and prepare data for analysis." },
  { step: "Step 3", title: "Model Development", desc: "Build and train predictive models using advanced algorithms." },
  { step: "Step 4", title: "Insight Delivery", desc: "Generate reports and visualizations for actionable insights." }
];
const Service3HowItWorks = () => (
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

// Service3CaseStudy Component
const Service3CaseStudy = () => (
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0c0d0c] text-white py-20 px-6">
    <motion.div variants={fadeUp} className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#e3d271] mb-6">Case Study: RetailMax</h2>
      <p className="text-[#808080] mb-6"><strong>Client:</strong> RetailMax — Large Fashion Retail Chain</p>
      <p className="mb-4"><strong>Challenge:</strong> No unified customer insight; ineffective promotions and inventory management.</p>
      <p className="mb-4"><strong>Solution:</strong> AI-powered data analysis and forecasting for customer behavior and demand prediction.</p>
      <ul className="text-left max-w-xl mx-auto text-[#808080] space-y-2">
        <li>📈 40% increase in promo engagement</li>
        <li>🧠 95% accuracy in demand forecasting</li>
        <li>💡 60% reduction in inventory costs</li>
        <li>📊 25% increase in customer lifetime value</li>
      </ul>
      <blockquote className="mt-6 italic text-[#e3d271]">
        "We now make data-driven moves daily. It's a competitive advantage that transformed our business."
      </blockquote>
    </motion.div>
  </motion.section>
);

// Service3Pricing Component
const plans = [
  { name: "Starter", price: "$79/month", features: ["Basic Analytics", "Email Support", "5 Data Sources"] },
  { name: "Pro", price: "$299/month", features: ["Advanced Forecasting", "Priority Support", "Unlimited Data Sources", "Custom Dashboards"] },
  { name: "Enterprise", price: "Custom Quote", features: ["Custom AI Models", "Dedicated Analyst", "Real-Time Analytics", "24/7 Support"] }
];
const Service3Pricing = () => (
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
const DataAnalysisInsights = () => {
  return (
    <main className="bg-[#0c0d0c] text-white">
      <Service3Hero />
      <Service3Features />
      <Service3Benefits />
      <Service3HowItWorks />
      <Service3CaseStudy />
      <Service3Pricing />
    </main>
  );
};

export default DataAnalysisInsights;