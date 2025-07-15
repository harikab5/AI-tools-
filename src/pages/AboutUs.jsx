import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#121212] text-white">
      {/* What Makes Us Stand Apart */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-[#D8B4FE] text-center mb-8">
          What Makes Us Stand Apart
        </h2>
        <p className="max-w-3xl mx-auto text-[#5A6F73]" data-aos="fade-up">
          At our company, innovation isn’t just a buzzword—it’s the foundation
          of everything we do. Our agile approach and passionate team empower us
          to deliver tailored solutions that exceed client expectations. We
          believe in forging long-term partnerships, driven by transparency,
          creativity, and relentless pursuit of excellence.
        </p>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-[#D8B4FE] text-center mb-8">
          Vision and Mission
        </h2>
        <p className="max-w-3xl mx-auto text-[#5A6F73]" data-aos="fade-up">
          Our vision is to transform the digital landscape through sustainable
          and impactful solutions. We aim to empower businesses worldwide,
          enabling them to thrive in an ever-changing market. Our mission is to
          deliver exceptional services rooted in innovation, integrity, and a
          client-centric approach.
        </p>
      </section>

      {/* History */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-[#D8B4FE] text-center mb-8">
          Our History
        </h2>
        <p className="max-w-3xl mx-auto text-[#5A6F73]" data-aos="fade-up">
          Founded in a small garage in 2012, our company has grown from humble
          beginnings into a trusted technology partner for brands worldwide.
          Over the years, we’ve expanded our services, embraced emerging
          technologies, and built a team of experts passionate about shaping the
          future of digital experiences.
        </p>
      </section>

      {/* Our Services */}
      {/* Our Services */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-[#D8B4FE] text-center mb-8">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Web Development */}
          <div
            className="bg-[#5A6F73] p-6 rounded shadow hover:bg-gray-600 transition-colors duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-[#D8B4FE] mb-2">
              Web Development
            </h3>
            <p>
              We craft scalable, high-performance websites tailored to your
              business objectives, blending creativity and technology
              seamlessly.
            </p>
          </div>

          {/* Mobile Apps */}
          <div
            className="bg-[#5A6F73] p-6 rounded shadow hover:bg-gray-600 transition-colors duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-[#D8B4FE] mb-2">
              Mobile Apps
            </h3>
            <p>
              Our mobile solutions deliver smooth user experiences and robust
              performance, helping you engage customers wherever they are.
            </p>
          </div>

          {/* Digital Strategy */}
          <div
            className="bg-[#5A6F73] p-6 rounded shadow hover:bg-gray-600 transition-colors duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-[#D8B4FE] mb-2">
              Digital Strategy
            </h3>
            <p>
              We empower businesses to achieve measurable results through
              data-driven strategies and innovative digital marketing.
            </p>
          </div>

          {/* Cloud Integration */}
          <div
            className="bg-[#5A6F73] p-6 rounded shadow hover:bg-gray-600 transition-colors duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-[#D8B4FE] mb-2">
              Cloud Integration
            </h3>
            <p>
              We help businesses migrate and manage workloads in the cloud,
              ensuring seamless integration, scalability, and cost-efficiency
              for your operations.
            </p>
          </div>

          {/* Data Analytics */}
          <div
            className="bg-[#5A6F73] p-6 rounded shadow hover:bg-gray-600 transition-colors duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-[#D8B4FE] mb-2">
              Data Analytics
            </h3>
            <p>
              Turn raw data into actionable insights with our advanced analytics
              services, enabling smarter decisions and strategic growth.
            </p>
          </div>

          {/* AI Solutions */}
          <div
            className="bg-[#5A6F73] p-6 rounded shadow hover:bg-gray-600 transition-colors duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-bold text-[#D8B4FE] mb-2">
              AI Solutions
            </h3>
            <p>
              Leverage artificial intelligence to automate processes,
              personalize customer experiences, and innovate faster than ever
              before.
            </p>
          </div>
        </div>
      </section>

      {/* Our Social Profiles */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-[#D8B4FE] text-center mb-8">
          Our Social Profiles
        </h2>
        <div className="flex justify-center gap-6 flex-wrap" data-aos="fade-up">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#D8B4FE] text-[#121212] px-4 py-2 rounded hover:bg-[#B78AFD] transition"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#D8B4FE] text-[#121212] px-4 py-2 rounded hover:bg-[#B78AFD] transition"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#D8B4FE] text-[#121212] px-4 py-2 rounded hover:bg-[#B78AFD] transition"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="bg-[#D8B4FE] text-[#121212] px-4 py-2 rounded hover:bg-[#B78AFD] transition"
          >
            Instagram
          </a>
        </div>
      </section>

      {/* Our CEO and Company Heads */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-[#ffffff] text-center mb-8">
          Our CEO and Company Heads
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center" data-aos="fade-up">
            <div className="w-32 h-32 rounded-full mx-auto bg-[#5A6F73] text-[#121212] flex items-center justify-center text-2xl font-bold">
              J.S.
            </div>
            <h3 className="mt-4 text-xl text-[#ffffff] font-bold">
              Jane Smith
            </h3>
            <p className="text-[#5A6F73]">Chief Executive Officer</p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <div className="w-32 h-32 rounded-full mx-auto bg-[#5A6F73] text-[#121212] flex items-center justify-center text-2xl font-bold">
              M.K.
            </div>
            <h3 className="mt-4 text-xl text-[#ffffff] font-bold">
              Mark Kumar
            </h3>
            <p className="text-[#5A6F73]">Head of Technology</p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <div className="w-32 h-32 rounded-full mx-auto bg-[#5A6F73] text-[#121212] flex items-center justify-center text-2xl font-bold">
              L.W.
            </div>
            <h3 className="mt-4 text-xl text-[#ffffff] font-bold">
              Laura White
            </h3>
            <p className="text-[#5A6F73]">Head of Design</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
