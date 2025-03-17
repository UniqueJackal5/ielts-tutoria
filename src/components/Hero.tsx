
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      const bgImage = heroRef.current.querySelector('.bg-patterns') as HTMLElement;
      if (bgImage) {
        bgImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={heroRef} className="relative overflow-hidden min-h-[90vh] flex items-center justify-center pt-16">
      {/* Background Patterns */}
      <div className="bg-patterns absolute inset-0 transition-transform duration-[2s] ease-out opacity-5">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-primary/40 blur-[80px]" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-blue-300/40 blur-[100px]" />
        <div className="absolute top-[40%] right-[25%] w-60 h-60 rounded-full bg-indigo-500/30 blur-[70px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium animate-slide-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
              Your Path to IELTS Success
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              Personalized <span className="text-primary">IELTS Tutoring</span> for Your Success
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-slide-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              One-on-one sessions with expert tutors to help you achieve your target IELTS score. Customized lessons tailored to your needs and learning pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
              <Link to="/signup">
                <Button size="lg" className="group">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/find-tutor">
                <Button size="lg" variant="outline">
                  Find a Tutor
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4 animate-slide-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-700">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">500+</span> students already improving
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center animate-fade-in">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
              
              <div className="glass relative p-5 rounded-2xl shadow-lg">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" 
                    alt="IELTS Tutoring Session" 
                    className="w-full h-auto object-cover rounded-xl animate-scale-in opacity-0"
                    style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-4 animate-slide-up opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Personalized feedback</p>
                      <p className="text-xs text-muted-foreground">After every session</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
