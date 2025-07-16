import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// InsightCard component with flip effect and consistent alignment
function InsightCard({ icon, title, desc, more }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ perspective: '1000px' }} data-aos="fade-up">
      <div
        className="relative w-full h-72 transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col justify-between items-center transition-all duration-300 group hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] cursor-pointer"
          style={{ backfaceVisibility: 'hidden' }}
          onClick={() => setFlipped(true)}
        >
          <div className="flex flex-col items-center w-full flex-1 justify-center">
            <span className="text-3xl mb-4">{icon}</span>
            <h3 className="text-2xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600] text-center">{title}</h3>
            <p className="mb-4 text-center flex-1">{desc}</p>
          </div>
          <button className="text-[#FFD600] underline font-semibold mt-2 self-center">Read More</button>
        </div>
        {/* Back Side */}
        <div
          className="absolute inset-0 bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col justify-between items-center transition-all duration-300 cursor-pointer"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
          onClick={() => setFlipped(false)}
        >
          <div className="flex flex-col items-center w-full flex-1 justify-center">
            <h3 className="text-2xl font-bold text-[#FFD600] mb-4 text-center">{title} - Details</h3>
            <p className="text-center text-[#FFD600] mb-4 flex-1">{more}</p>
          </div>
          <button className="text-[#FFD600] underline font-semibold self-center" onClick={e => { e.stopPropagation(); setFlipped(false); }}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

// ServiceCard with flip for details
function ServiceCard({ icon, title, desc, more }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div style={{ perspective: '1000px' }} data-aos="fade-up">
      <div
        className="relative w-full h-72 transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col justify-between items-center transition-all duration-300 group hover:shadow-[0_0_30px_5px_#FFD600] hover:border-[#FFD600] cursor-pointer"
          style={{ backfaceVisibility: 'hidden' }}
          onClick={() => setFlipped(true)}
        >
          <div className="flex flex-col items-center w-full flex-1 justify-center">
            <span className="text-3xl mb-4">{icon}</span>
            <h3 className="text-2xl font-bold text-[#FFD600] mb-2 group-hover:text-[#FFD600] text-center">{title}</h3>
            <p className="mb-4 text-center flex-1">{desc}</p>
          </div>
          <button className="text-[#FFD600] underline font-semibold mt-2 self-center">Read More</button>
        </div>
        {/* Back Side */}
        <div
          className="absolute inset-0 bg-[#181818] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col justify-between items-center transition-all duration-300 cursor-pointer"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
          onClick={() => setFlipped(false)}
        >
          <div className="flex flex-col items-center w-full flex-1 justify-center">
            <h3 className="text-2xl font-bold text-[#FFD600] mb-4 text-center">{title} - Details</h3>
            <p className="text-center text-[#FFD600] mb-4 flex-1">{more}</p>
          </div>
          <button className="text-[#FFD600] underline font-semibold self-center" onClick={e => { e.stopPropagation(); setFlipped(false); }}>Go Back</button>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Alice Johnson",
    company: "TechNova",
    text: "The team delivered beyond our expectations. Their AI solutions transformed our business operations!"
  },
  {
    name: "Michael Lee",
    company: "FinEdge",
    text: "Professional, innovative, and always on time. Highly recommended for any digital transformation project."
  },
  {
    name: "Sara Kim",
    company: "HealthSync",
    text: "Their insights and analytics helped us unlock new growth opportunities. Fantastic experience!"
  }
];

const whyChoose = [
  {
    icon: "⏳",
    title: "10+ Years Experience",
    desc: "A decade of proven expertise in delivering digital solutions across industries.",
    more: "Our team brings together years of hands-on experience, ensuring every project is handled with professionalism and deep technical know-how."
  },
  {
    icon: "📦",
    title: "200+ Projects Delivered",
    desc: "A strong track record of successful, on-time project delivery.",
    more: "From startups to enterprises, we have delivered a wide range of projects, always focusing on quality and client satisfaction."
  },
  {
    icon: "👥",
    title: "Expert Team",
    desc: "A multidisciplinary team of passionate professionals.",
    more: "Our experts in AI, development, design, and strategy work together to create holistic solutions for your business."
  },
  {
    icon: "⭐",
    title: "98% Client Satisfaction",
    desc: "We pride ourselves on building lasting client relationships.",
    more: "Our commitment to excellence and transparency has earned us a high client satisfaction rate and repeat business."
  }
];

const services = [
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "Automate processes and unlock new efficiencies with custom AI solutions.",
    more: "We design, build, and deploy intelligent systems that streamline your workflows and drive innovation."
  },
  {
    icon: "📊",
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights for smarter decisions.",
    more: "Our analytics solutions help you visualize trends, predict outcomes, and optimize strategies."
  },
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Modern, scalable websites tailored to your business goals.",
    more: "We use the latest technologies to build fast, secure, and responsive web applications."
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "Seamless mobile experiences for iOS and Android platforms.",
    more: "From concept to launch, we create apps that engage users and drive results."
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "User-centric design for delightful digital experiences.",
    more: "Our designers craft intuitive interfaces that boost engagement and satisfaction."
  },
  {
    icon: "☁️",
    title: "Cloud Integration",
    desc: "Migrate, manage, and scale your business in the cloud.",
    more: "We ensure seamless cloud adoption, integration, and ongoing support for your operations."
  }
];

const insights = [
  {
    icon: '📊',
    title: 'Market Trends',
    desc: 'Stay ahead with data-driven insights into evolving markets.',
    more: 'We analyze global and local market trends to help you make informed decisions and stay competitive.'
  },
  {
    icon: '🧑‍💼',
    title: 'Customer Behavior',
    desc: 'Understand your customers and tailor your services effectively.',
    more: 'Deep dive into customer analytics to optimize engagement and retention strategies.'
  },
  {
    icon: '🚀',
    title: 'Growth Opportunities',
    desc: 'Unlock hidden growth potential for your business success.',
    more: 'Identify new markets, products, and partnerships for sustainable growth.'
  },
  {
    icon: '💡',
    title: 'Innovation Insights',
    desc: 'Discover the latest innovations in your industry.',
    more: 'Stay updated with cutting-edge technologies and innovative business models.'
  },
  {
    icon: '🔒',
    title: 'Security Analysis',
    desc: 'Protect your business with advanced security insights.',
    more: 'Get recommendations on best practices and tools to safeguard your data.'
  },
  {
    icon: '🌐',
    title: 'Global Expansion',
    desc: 'Expand your reach with global market insights.',
    more: 'Learn about international opportunities and how to enter new markets.'
  }
];

const SecondHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#121212] text-white">
      {/* 1. Hero/Intro Section */}
      <section className="py-24 flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-[#181818] to-[#232323]">
        <h1 className="text-5xl font-extrabold text-[#FFD600] mb-6">Empowering Your Digital Future</h1>
        <p className="text-xl text-[#fffffe] max-w-2xl mb-8">We help businesses achieve remarkable growth with innovative AI, analytics, and digital solutions. Partner with us to unlock new opportunities and drive success in a rapidly evolving world.</p>
        <a href="#contact" className="bg-[#FFD600] text-black font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition">Get in Touch</a>
      </section>

      {/* 2. Deep Insights Section */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-[#FFD600] text-center mb-12">Deep Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {insights.map((card, idx) => (
            <InsightCard key={idx} icon={card.icon} title={card.title} desc={card.desc} more={card.more} />
          ))}
        </div>
      </section>

      {/* 3. Featured Clients & Testimonials */}
      <section className="py-20 px-4 bg-[#181818]">
        <h2 className="text-4xl font-bold text-[#FFD600] text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#232323] p-8 border-2 border-[#FFD600] rounded-xl shadow-lg flex flex-col items-center text-center" data-aos="fade-up">
              <span className="text-5xl mb-4">💬</span>
              <p className="text-lg text-[#FFD600] mb-4">"{t.text}"</p>
              <div className="font-bold text-white">{t.name}</div>
              <div className="text-[#FFD600]">{t.company}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-[#FFD600] text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {whyChoose.map((card, idx) => (
            <InsightCard key={idx} icon={card.icon} title={card.title} desc={card.desc} more={card.more} />
          ))}
        </div>
      </section>

      {/* 5. Our Services (6 cards) */}
      <section className="py-20 px-4 bg-[#181818]">
        <h2 className="text-4xl font-bold text-[#FFD600] text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((card, idx) => (
            <ServiceCard key={idx} icon={card.icon} title={card.title} desc={card.desc} more={card.more} />
          ))}
        </div>
      </section>

      {/* 6. Contact/CTA Section */}
      <section id="contact" className="py-24 flex flex-col items-center justify-center text-center bg-gradient-to-t from-black via-[#181818] to-[#232323]">
        <h2 className="text-4xl font-bold text-[#FFD600] mb-6">Ready to Start Your Project?</h2>
        <p className="text-lg text-[#fffffe] max-w-xl mb-8">Contact us today to discuss your goals and discover how we can help you achieve them with innovative technology and expert guidance.</p>
        <form className="bg-[#232323] p-8 rounded-xl shadow-lg max-w-md w-full border-2 border-[#FFD600]">
          <input type="text" placeholder="Your Name" className="block w-full mb-4 p-3 rounded bg-[#181818] text-white border border-[#FFD600]" required />
          <input type="email" placeholder="Your Email" className="block w-full mb-4 p-3 rounded bg-[#181818] text-white border border-[#FFD600]" required />
          <textarea placeholder="Your Message" className="block w-full mb-4 p-3 rounded bg-[#181818] text-white border border-[#FFD600]" rows={4} required />
          <button type="submit" className="bg-[#FFD600] text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition w-full">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default SecondHome;
