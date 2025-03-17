
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/sections/Footer';

const ForStudents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Achieve Your <span className="text-primary">IELTS Goals</span> with Personalized Tutoring
              </h1>
              <p className="text-lg text-muted-foreground">
                Our tailored approach helps you focus on areas where you need improvement, with experienced tutors guiding you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/signup">
                  <Button size="lg" className="group">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/find-tutor">
                  <Button size="lg" variant="outline">
                    Browse Tutors
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" 
                alt="Students studying" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How Our Platform Benefits Students</h2>
            <p className="text-muted-foreground">
              We've designed our platform to address the specific needs of IELTS test-takers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Learning Plans",
                description: "Get a customized study plan based on your target score and current proficiency level."
              },
              {
                title: "One-on-One Attention",
                description: "Direct access to experienced tutors who focus solely on your progress and needs."
              },
              {
                title: "Flexible Scheduling",
                description: "Book sessions at times that work for you, with options for different time zones."
              },
              {
                title: "Real-Time Feedback",
                description: "Receive immediate guidance on your speaking and writing to improve quickly."
              },
              {
                title: "Practice Materials",
                description: "Access curated resources and practice tests designed to enhance your skills."
              },
              {
                title: "Progress Tracking",
                description: "Monitor your improvement over time with detailed performance metrics."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground">
              Hear from students who achieved their target IELTS scores
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                score: "Band 8.0",
                content: "My tutor identified my weaknesses in writing and provided targeted exercises. I improved from Band 6.5 to 8.0 in just two months!",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              },
              {
                name: "Ravi P.",
                score: "Band 7.5",
                content: "The speaking practice sessions were incredibly helpful. My tutor's feedback helped me overcome my nervousness and articulate my thoughts clearly.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              },
              {
                name: "Mei L.",
                score: "Band 8.5",
                content: "The personalized approach made all the difference. My tutor focused on academic reading techniques that helped me save time and improve accuracy.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="flex gap-4 mb-4 items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-sm">{testimonial.score}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your IELTS Preparation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our platform today and take the first step toward achieving your desired IELTS score.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="group min-w-[180px]">
                  Sign Up Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/find-tutor">
                <Button size="lg" variant="outline" className="min-w-[180px]">
                  Browse Tutors
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ForStudents;
