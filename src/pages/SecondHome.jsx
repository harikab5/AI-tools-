import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SecondHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#121212] text-white">
      {/* Home Intro */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-[#D8B4FE]">Welcome to Our Company</h1>
        <p className="mt-4 max-w-2xl mx-auto text-[#5A6F73]">
          We help businesses achieve remarkable growth with innovative solutions.
        </p>
      </section>

      {/* Insights Reveal */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-[#D8B4FE] text-center mb-10">Insights</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#5A6F73] p-6 rounded shadow" data-aos="fade-up">
            <h3 className="text-xl font-bold text-[#D8B4FE] mb-2">Market Trends</h3>
            <p>Stay ahead with data-driven insights into evolving markets.</p>
          </div>
          <div className="bg-[#5A6F73] p-6 rounded shadow" data-aos="fade-up">
            <h3 className="text-xl font-bold text-[#D8B4FE] mb-2">Customer Behavior</h3>
            <p>Understand your customers and tailor your services effectively.</p>
          </div>
          <div className="bg-[#5A6F73] p-6 rounded shadow" data-aos="fade-up">
            <h3 className="text-xl font-bold text-[#D8B4FE] mb-2">Growth Opportunities</h3>
            <p>Unlock hidden growth potential for your business success.</p>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-[#D8B4FE] text-center mb-10">Featured Clients</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="w-40 h-20 bg-[#D8B4FE] text-[#121212] flex items-center justify-center rounded" data-aos="fade-up">Client A</div>
          <div className="w-40 h-20 bg-[#D8B4FE] text-[#121212] flex items-center justify-center rounded" data-aos="fade-up">Client B</div>
          <div className="w-40 h-20 bg-[#D8B4FE] text-[#121212] flex items-center justify-center rounded" data-aos="fade-up">Client C</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-[#D8B4FE] text-center mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-4xl text-[#D8B4FE] font-bold">10+</h3>
            <p className="text-[#5A6F73]">Years of Experience</p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-4xl text-[#D8B4FE] font-bold">200+</h3>
            <p className="text-[#5A6F73]">Projects Delivered</p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-4xl text-[#D8B4FE] font-bold">50+</h3>
            <p className="text-[#5A6F73]">Expert Team Members</p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-4xl text-[#D8B4FE] font-bold">98%</h3>
            <p className="text-[#5A6F73]">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 text-white">
        <h2 className="text-3xl font-bold text-[#D8B4FE] text-center mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            className="p-6 border border-[#D8B4FE] rounded hover:bg-[#D8B4FE] hover:text-[#121212] transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p>High-quality websites that scale with your business needs.</p>
          </div>
          <div
            className="p-6 border border-[#D8B4FE] rounded hover:bg-[#D8B4FE] hover:text-[#121212] transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
            <p>Seamless mobile applications for iOS and Android platforms.</p>
          </div>
          <div
            className="p-6 border border-[#D8B4FE] rounded hover:bg-[#D8B4FE] hover:text-[#121212] transition"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p>Engaging designs focused on user experience and results.</p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-[#D8B4FE] text-center mb-10">Our Clients</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-28 h-28 bg-[#D8B4FE] text-[#121212] flex items-center justify-center rounded-full" data-aos="fade-up">
            Logo 1
          </div>
          <div className="w-28 h-28 bg-[#D8B4FE] text-[#121212] flex items-center justify-center rounded-full" data-aos="fade-up">
            Logo 2
          </div>
          <div className="w-28 h-28 bg-[#D8B4FE] text-[#121212] flex items-center justify-center rounded-full" data-aos="fade-up">
            Logo 3
          </div>
          <div className="w-28 h-28 bg-[#D8B4FE] text-[#121212] flex items-center justify-center rounded-full" data-aos="fade-up">
            Logo 4
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondHome;