import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#121212] text-white">
      {/* 1. Company Timeline - Interactive Timeline */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-[#FFD600] text-center mb-12">Our Journey Through Time</h2>
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#FFD600]"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="flex items-center" data-aos="fade-right">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-[#FFD600] mb-2">2012 - Foundation</h3>
                  <p className="text-gray-300">Started in a garage with a vision to revolutionize digital solutions</p>
                </div>
                <div className="w-4 h-4 bg-[#FFD600] rounded-full border-4 border-[#121212] relative z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center" data-aos="fade-left">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-[#FFD600] rounded-full border-4 border-[#121212] relative z-10"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold text-[#FFD600] mb-2">2015 - First 100 Clients</h3>
                  <p className="text-gray-300">Reached our first milestone with 100 satisfied clients worldwide</p>
                </div>
              </div>
              
              <div className="flex items-center" data-aos="fade-right">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold text-[#FFD600] mb-2">2018 - AI Integration</h3>
                  <p className="text-gray-300">Pioneered AI solutions and machine learning implementations</p>
                </div>
                <div className="w-4 h-4 bg-[#FFD600] rounded-full border-4 border-[#121212] relative z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
              
              <div className="flex items-center" data-aos="fade-left">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-[#FFD600] rounded-full border-4 border-[#121212] relative z-10"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold text-[#FFD600] mb-2">2023 - Global Expansion</h3>
                  <p className="text-gray-300">Expanded to 15 countries with offices in major tech hubs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Values - Hexagonal Grid */}
      <section className="py-20 px-4 bg-[#181818]">
        <h2 className="text-4xl font-bold text-[#FFD600] text-center mb-12">Our Core Values</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#232323] p-8 rounded-xl border-2 border-[#FFD600] hover:shadow-[0_0_30px_5px_#FFD600] transition-all duration-300" data-aos="fade-up">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-[#FFD600] mb-4">Excellence</h3>
              <p className="text-gray-300">We pursue excellence in every project, delivering beyond expectations with unwavering quality standards.</p>
            </div>
            
            <div className="bg-[#232323] p-8 rounded-xl border-2 border-[#FFD600] hover:shadow-[0_0_30px_5px_#FFD600] transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-[#FFD600] mb-4">Integrity</h3>
              <p className="text-gray-300">Building trust through transparent communication, honest practices, and ethical business relationships.</p>
            </div>
            
            <div className="bg-[#232323] p-8 rounded-xl border-2 border-[#FFD600] hover:shadow-[0_0_30px_5px_#FFD600] transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-[#FFD600] mb-4">Innovation</h3>
              <p className="text-gray-300">Constantly pushing boundaries with cutting-edge technologies and creative problem-solving approaches.</p>
            </div>
            
            <div className="bg-[#232323] p-8 rounded-xl border-2 border-[#FFD600] hover:shadow-[0_0_30px_5px_#FFD600] transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-[#FFD600] mb-4">Sustainability</h3>
              <p className="text-gray-300">Committed to environmental responsibility and creating solutions that benefit future generations.</p>
            </div>
            
            <div className="bg-[#232323] p-8 rounded-xl border-2 border-[#FFD600] hover:shadow-[0_0_30px_5px_#FFD600] transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-[#FFD600] mb-4">Growth</h3>
              <p className="text-gray-300">Fostering continuous learning and development for our team and clients alike.</p>
            </div>
            
            <div className="bg-[#232323] p-8 rounded-xl border-2 border-[#FFD600] hover:shadow-[0_0_30px_5px_#FFD600] transition-all duration-300" data-aos="fade-up" data-aos-delay="500">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-[#FFD600] mb-4">Passion</h3>
              <p className="text-gray-300">Driven by genuine passion for technology and creating meaningful impact in the digital world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Team Expertise - Skill Bars */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-[#FFD600] text-center mb-12">Our Team Expertise</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div data-aos="fade-up">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-white">Artificial Intelligence</span>
                <span className="text-[#FFD600] font-bold">95%</span>
              </div>
              <div className="w-full bg-[#232323] rounded-full h-3">
                <div className="bg-[#FFD600] h-3 rounded-full transition-all duration-1000" style={{width: '95%'}}></div>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-white">Cloud Architecture</span>
                <span className="text-[#FFD600] font-bold">92%</span>
              </div>
              <div className="w-full bg-[#232323] rounded-full h-3">
                <div className="bg-[#FFD600] h-3 rounded-full transition-all duration-1000" style={{width: '92%'}}></div>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-white">Data Analytics</span>
                <span className="text-[#FFD600] font-bold">88%</span>
              </div>
              <div className="w-full bg-[#232323] rounded-full h-3">
                <div className="bg-[#FFD600] h-3 rounded-full transition-all duration-1000" style={{width: '88%'}}></div>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-white">Mobile Development</span>
                <span className="text-[#FFD600] font-bold">90%</span>
              </div>
              <div className="w-full bg-[#232323] rounded-full h-3">
                <div className="bg-[#FFD600] h-3 rounded-full transition-all duration-1000" style={{width: '90%'}}></div>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="400">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-white">Cybersecurity</span>
                <span className="text-[#FFD600] font-bold">87%</span>
              </div>
              <div className="w-full bg-[#232323] rounded-full h-3">
                <div className="bg-[#FFD600] h-3 rounded-full transition-all duration-1000" style={{width: '87%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Innovation Hub - Interactive Cards */}
      <section className="py-20 px-4 bg-[#181818]">
        <h2 className="text-4xl font-bold text-[#FFD600] text-center mb-12">Innovation Hub</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl bg-[#232323] hover:bg-[#FFD600] transition-all duration-500" data-aos="fade-up">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🔬</div>
                <h3 className="text-xl font-bold text-[#FFD600] group-hover:text-black mb-4">Research & Development</h3>
                <p className="text-gray-300 group-hover:text-black transition-colors duration-500">Pioneering next-generation technologies through dedicated R&D initiatives</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-[#232323] hover:bg-[#FFD600] transition-all duration-500" data-aos="fade-up" data-aos-delay="100">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🎓</div>
                <h3 className="text-xl font-bold text-[#FFD600] group-hover:text-black mb-4">Learning Center</h3>
                <p className="text-gray-300 group-hover:text-black transition-colors duration-500">Continuous education and skill development for our growing team</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-[#232323] hover:bg-[#FFD600] transition-all duration-500" data-aos="fade-up" data-aos-delay="200">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🚀</div>
                <h3 className="text-xl font-bold text-[#FFD600] group-hover:text-black mb-4">Startup Incubator</h3>
                <p className="text-gray-300 group-hover:text-black transition-colors duration-500">Supporting emerging tech startups with mentorship and resources</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-[#232323] hover:bg-[#FFD600] transition-all duration-500" data-aos="fade-up" data-aos-delay="300">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🌐</div>
                <h3 className="text-xl font-bold text-[#FFD600] group-hover:text-black mb-4">Open Source</h3>
                <p className="text-gray-300 group-hover:text-black transition-colors duration-500">Contributing to the global tech community through open source projects</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-[#232323] hover:bg-[#FFD600] transition-all duration-500" data-aos="fade-up" data-aos-delay="400">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🤖</div>
                <h3 className="text-xl font-bold text-[#FFD600] group-hover:text-black mb-4">AI Lab</h3>
                <p className="text-gray-300 group-hover:text-black transition-colors duration-500">Advanced AI research and development for cutting-edge solutions</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-[#232323] hover:bg-[#FFD600] transition-all duration-500" data-aos="fade-up" data-aos-delay="500">
              <div className="p-8 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🔮</div>
                <h3 className="text-xl font-bold text-[#FFD600] group-hover:text-black mb-4">Future Tech</h3>
                <p className="text-gray-300 group-hover:text-black transition-colors duration-500">Exploring emerging technologies like quantum computing and AR/VR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Global Reach - 3D World Map Style */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-[#FFD600] text-center mb-12">Global Reach</h2>
        <div className="max-w-6xl mx-auto">
          {/* 3D Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="group perspective-1000" data-aos="fade-up">
              <div className="relative transform transition-all duration-500 group-hover:rotateY(15deg) group-hover:scale-105" style={{transformStyle: 'preserve-3d'}}>
                <div className="bg-[#232323] p-6 rounded-xl border-2 border-[#FFD600] shadow-lg group-hover:shadow-[0_0_30px_5px_#FFD600] transition-all duration-500">
                  <div className="text-6xl mb-4 text-center">🌍</div>
                  <div className="text-3xl font-bold text-[#FFD600] mb-2 text-center">15+</div>
                  <p className="text-gray-300 text-center">Countries</p>
                </div>
              </div>
            </div>
            
            <div className="group perspective-1000" data-aos="fade-up" data-aos-delay="100">
              <div className="relative transform transition-all duration-500 group-hover:rotateY(-15deg) group-hover:scale-105" style={{transformStyle: 'preserve-3d'}}>
                <div className="bg-[#232323] p-6 rounded-xl border-2 border-[#FFD600] shadow-lg group-hover:shadow-[0_0_30px_5px_#FFD600] transition-all duration-500">
                  <div className="text-6xl mb-4 text-center">🏢</div>
                  <div className="text-3xl font-bold text-[#FFD600] mb-2 text-center">25+</div>
                  <p className="text-gray-300 text-center">Offices</p>
                </div>
              </div>
            </div>
            
            <div className="group perspective-1000" data-aos="fade-up" data-aos-delay="200">
              <div className="relative transform transition-all duration-500 group-hover:rotateY(15deg) group-hover:scale-105" style={{transformStyle: 'preserve-3d'}}>
                <div className="bg-[#232323] p-6 rounded-xl border-2 border-[#FFD600] shadow-lg group-hover:shadow-[0_0_30px_5px_#FFD600] transition-all duration-500">
                  <div className="text-6xl mb-4 text-center">👥</div>
                  <div className="text-3xl font-bold text-[#FFD600] mb-2 text-center">500+</div>
                  <p className="text-gray-300 text-center">Team Members</p>
                </div>
              </div>
            </div>
            
            <div className="group perspective-1000" data-aos="fade-up" data-aos-delay="300">
              <div className="relative transform transition-all duration-500 group-hover:rotateY(-15deg) group-hover:scale-105" style={{transformStyle: 'preserve-3d'}}>
                <div className="bg-[#232323] p-6 rounded-xl border-2 border-[#FFD600] shadow-lg group-hover:shadow-[0_0_30px_5px_#FFD600] transition-all duration-500">
                  <div className="text-6xl mb-4 text-center">🌐</div>
                  <div className="text-3xl font-bold text-[#FFD600] mb-2 text-center">50+</div>
                  <p className="text-gray-300 text-center">Languages</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Regional Cards with Particle Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden bg-[#232323] p-6 rounded-xl border border-[#FFD600]/30 group" data-aos="fade-up">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 left-2 w-2 h-2 bg-[#FFD600] rounded-full animate-ping"></div>
                <div className="absolute top-4 right-4 w-1 h-1 bg-[#FFD600] rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#FFD600] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
              <h3 className="text-xl font-bold text-[#FFD600] mb-4 relative z-10">North America</h3>
              <p className="text-gray-300 relative z-10">Headquarters in Silicon Valley with offices in New York, Toronto, and Mexico City</p>
            </div>
            
            <div className="relative overflow-hidden bg-[#232323] p-6 rounded-xl border border-[#FFD600]/30 group" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 left-2 w-2 h-2 bg-[#FFD600] rounded-full animate-ping"></div>
                <div className="absolute top-4 right-4 w-1 h-1 bg-[#FFD600] rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#FFD600] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
              <h3 className="text-xl font-bold text-[#FFD600] mb-4 relative z-10">Europe</h3>
              <p className="text-gray-300 relative z-10">Strategic presence in London, Berlin, Paris, and Amsterdam</p>
            </div>
            
            <div className="relative overflow-hidden bg-[#232323] p-6 rounded-xl border border-[#FFD600]/30 group" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 left-2 w-2 h-2 bg-[#FFD600] rounded-full animate-ping"></div>
                <div className="absolute top-4 right-4 w-1 h-1 bg-[#FFD600] rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#FFD600] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
              <h3 className="text-xl font-bold text-[#FFD600] mb-4 relative z-10">Asia Pacific</h3>
              <p className="text-gray-300 relative z-10">Growing network across Singapore, Tokyo, Sydney, and Bangalore</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Future Vision - Holographic Cards */}
      <section className="py-20 px-4 bg-[#181818]">
        <h2 className="text-4xl font-bold text-[#FFD600] text-center mb-12">Our Future Vision</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FFD600] via-yellow-400 to-[#FFD600] p-8 hover:shadow-[0_0_50px_10px_#FFD600] transition-all duration-500" data-aos="fade-right">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-black">
                <h3 className="text-2xl font-bold mb-4">2025 - Quantum Leap</h3>
                <p className="mb-4">Launching our quantum computing division to solve complex problems that were previously impossible.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Quantum AI algorithms
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Cryptography breakthroughs
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Climate modeling solutions
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FFD600] via-yellow-400 to-[#FFD600] p-8 hover:shadow-[0_0_50px_10px_#FFD600] transition-all duration-500" data-aos="fade-left">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-black">
                <h3 className="text-2xl font-bold mb-4">2030 - Sustainable Future</h3>
                <p className="mb-4">Leading the charge in green technology and sustainable digital solutions.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Carbon-neutral operations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Renewable energy tech
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Smart city solutions
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FFD600] via-yellow-400 to-[#FFD600] p-8 hover:shadow-[0_0_50px_10px_#FFD600] transition-all duration-500" data-aos="fade-right" data-aos-delay="100">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-black">
                <h3 className="text-2xl font-bold mb-4">2035 - Human-AI Collaboration</h3>
                <p className="mb-4">Creating seamless partnerships between humans and artificial intelligence.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Brain-computer interfaces
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Augmented reality workplaces
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    AI-powered education
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FFD600] via-yellow-400 to-[#FFD600] p-8 hover:shadow-[0_0_50px_10px_#FFD600] transition-all duration-500" data-aos="fade-left" data-aos-delay="100">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-black">
                <h3 className="text-2xl font-bold mb-4">2040 - Interstellar Tech</h3>
                <p className="mb-4">Pioneering technologies for space exploration and interplanetary communication.</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Space-based AI systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Interplanetary networks
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                    Mars colony tech
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
