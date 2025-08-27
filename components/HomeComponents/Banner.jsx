import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

const Banner = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    // Animation for stats counters
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      let count = 0;
      const duration = 2000; // ms
      const increment = target / (duration / 16);
      
      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count) + '+';
          setTimeout(updateCount, 16);
        } else {
          counter.innerText = target + '+';
        }
      };
      
      setTimeout(updateCount, 1500);
    });
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-500px)] flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-MidNightBlack">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-Green rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-400 rounded-full filter blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
        <div className="bg-gray-800/40 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:block backdrop-blur-sm">
          <div className="flex items-center md:items-center md:justify-around">
            <div className="">
              <div className="">
                <h1 className="text-3xl sm:text-4xl xl:text-5xl text-white font-bold">Hello, Check This Out!</h1>
              </div>
              <div className="">
                <div className="py-4 font-mono text-white pb-4 text-xs h-20 lg:h-auto">
                  <span>{"<"}<span className="text-green-400 sm:text-base xl:text-lg font-bold">div</span>
                    {">"} <span className="text-white sm:text-xl xl:text-2xl font-bold"> I am a  <span className="inline-block text-cyan-300">
                      <Typewriter
                        options={{
                          strings: ['MERN Stack Developer', 'NextJs Developer', 'React Js Developer'],
                          autoStart: true,
                          loop: true,
                          delay: 75,
                          deleteSpeed: 50,
                        }}
                      />
                    </span>
                    </span> {"</"}<span className="text-green-400 sm:text-base xl:text-lg font-bold">div</span>{">"} </span>
                </div>
              </div>
              <a href="#intro" className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-white font-semibold rounded-lg shadow-md transition-all hover:scale-105 hover:shadow-lg">
                Explore
              </a>
            </div>
            <div className="w-48 h-52 relative hidden md:block">
              <img 
                className='absolute top-8 w-full h-full animate-float' 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%234ade80'/%3E%3Ccircle cx='8' cy='9' r='1.5' fill='white'/%3E%3Ccircle cx='16' cy='9' r='1.5' fill='white'/%3E%3Cpath d='M8 15 Q12 19 16 15' stroke='white' stroke-width='2' fill='none'/%3E%3C/svg%3E" 
                alt="emoji" 
              />
            </div>
          </div>
        </div>

        {/* Animated dots above details row */}
        <div className="relative w-full px-4 xl:px-8 2xl:px-16 mt-6 mb-2">
          <div className="flex justify-between">
            {/* Dots for each column */}
            <div className="flex flex-col items-center">
              <div className="flex space-x-1 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-0"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-500"></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex space-x-1 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-100"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-300"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-600"></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex space-x-1 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-400"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-700"></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex space-x-1 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-300"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-500"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-800"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Details in row */}
        <div ref={statsRef} className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">
          <div className="flex items-center gap-x-1">
            <span className='text-base md:text-lg text-green-400 font-bold stat-number' data-target="10">0+</span>
            <span className='text-xs text-white'>Completed Projects</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className='text-base md:text-lg text-green-400 font-bold stat-number' data-target="8">0+</span>
            <span className='text-xs text-white'>Freelance Clients</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className='text-base md:text-lg text-green-400 font-bold stat-number' data-target="5">0+</span>
            <span className='text-xs text-white'>Honors & Awards</span>
          </div>

          <div className="flex items-center gap-x-1">
            <span className='text-base md:text-lg text-green-400 font-bold stat-number' data-target="10">0+</span>
            <span className='text-xs text-white'>Opensource Projects</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-0 { animation-delay: 0s; }
        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
};

export default Banner;