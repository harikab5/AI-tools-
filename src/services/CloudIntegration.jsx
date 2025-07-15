import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CloudIntegration = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#121212] text-white">
      {/* Intro Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Cloud Integration
        </h2>
        <p
          className="max-w-3xl mx-auto text-[#5A6F73]"
          data-aos="fade-up"
        >
          Cloud Integration bridges your on-premises systems with modern cloud
          solutions, ensuring seamless data flow, enhanced security, and
          optimized operations. Explore how our services help you innovate
          faster and scale efficiently.
        </p>
      </section>

      {/* Benefits of Cloud Integration */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Benefits of Cloud Integration
        </h2>
        <p
          className="max-w-3xl mx-auto text-[#5A6F73]"
          data-aos="fade-up"
        >
          Embrace agility, reduce operational costs, and gain real-time insights
          into your business. Cloud integration transforms your organization,
          providing unmatched flexibility, security, and speed for competitive
          growth.
        </p>
      </section>

      {/* Our Cloud Solutions */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Our Cloud Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            className="bg-[#5A6F73] p-6 rounded shadow hover:bg-[#333333] transition-colors duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Cloud Migration
            </h3>
            <p>
              Seamlessly move your workloads to the cloud, reducing downtime
              and ensuring business continuity during transitions.
            </p>
          </div>
          <div
            className="bg-[#5A6F73] p-6 rounded shadow hover:bg-[#333333] transition-colors duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Hybrid Integration
            </h3>
            <p>
              Connect your on-premises systems with cloud services, enabling
              unified operations without sacrificing control.
            </p>
          </div>
          <div
            className="bg-[#5A6F73] p-6 rounded shadow hover:bg-[#333333] transition-colors duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              API Management
            </h3>
            <p>
              Secure and manage your APIs with scalable solutions, ensuring
              smooth communication across all platforms and applications.
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Industries We Serve
        </h2>
        <p
          className="max-w-3xl mx-auto text-[#5A6F73]"
          data-aos="fade-up"
        >
          From finance to healthcare, retail to logistics, our cloud integration
          services empower diverse industries to innovate, improve customer
          experiences, and achieve operational excellence.
        </p>
      </section>

      {/* Our Cloud Partners */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Our Cloud Partners
        </h2>
        <div
          className="flex justify-center flex-wrap gap-6"
          data-aos="fade-up"
        >
          <div className="bg-[#5A6F73] text-white px-6 py-3 rounded hover:bg-[#333333] transition-colors duration-300">
            AWS
          </div>
          <div className="bg-[#5A6F73] text-white px-6 py-3 rounded hover:bg-[#333333] transition-colors duration-300">
            Microsoft Azure
          </div>
          <div className="bg-[#5A6F73] text-white px-6 py-3 rounded hover:bg-[#333333] transition-colors duration-300">
            Google Cloud
          </div>
          <div className="bg-[#5A6F73] text-white px-6 py-3 rounded hover:bg-[#333333] transition-colors duration-300">
            IBM Cloud
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to Embrace Cloud Integration?
        </h2>
        <p
          className="max-w-2xl mx-auto text-[#5A6F73] mb-8"
          data-aos="fade-up"
        >
          Let us help you navigate your cloud journey. Reach out to our experts
          and discover how we can transform your business through innovative
          cloud integration services.
        </p>
        <button className="bg-[#5A6F73] hover:bg-[#333333] text-white px-6 py-3 rounded transition-colors duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CloudIntegration;