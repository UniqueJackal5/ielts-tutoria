
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, DollarSign, Calendar, Users, Book, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/sections/Footer';

const ForTeachers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Grow Your <span className="text-primary">Teaching Career</span> with IELTS Tutoria
              </h1>
              <p className="text-lg text-muted-foreground">
                Join our platform to connect with motivated students worldwide, set your own schedule, and maximize your earning potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/signup">
                  <Button size="lg" className="group">
                    Become a Tutor
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline">
                    Log In
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="IELTS Teacher" 
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
            <h2 className="text-3xl font-bold mb-4">Why Teach with Us?</h2>
            <p className="text-muted-foreground">
              Our platform offers unique advantages for IELTS teachers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Competitive Earnings",
                description: "Set your own rates and earn more with our low commission structure.",
                icon: <DollarSign className="text-primary h-6 w-6" />
              },
              {
                title: "Flexible Schedule",
                description: "Teach when it suits you – create a schedule that fits your lifestyle.",
                icon: <Calendar className="text-primary h-6 w-6" />
              },
              {
                title: "Global Student Base",
                description: "Connect with students from around the world seeking quality IELTS instruction.",
                icon: <Users className="text-primary h-6 w-6" />
              },
              {
                title: "Teaching Resources",
                description: "Access our library of IELTS materials to enhance your lessons.",
                icon: <Book className="text-primary h-6 w-6" />
              },
              {
                title: "Performance Analytics",
                description: "Track your teaching effectiveness and student progress with detailed metrics.",
                icon: <BarChart className="text-primary h-6 w-6" />
              },
              {
                title: "Supportive Community",
                description: "Join a network of professional IELTS tutors for collaboration and resource sharing.",
                icon: <CheckCircle2 className="text-primary h-6 w-6" />
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  {benefit.icon}
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
      
      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              Getting started as a tutor is simple
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create Your Profile",
                description: "Sign up and showcase your qualifications, teaching experience, and IELTS expertise."
              },
              {
                step: "2",
                title: "Set Your Availability",
                description: "Define when you're available to teach and set your hourly rate."
              },
              {
                step: "3",
                title: "Start Teaching",
                description: "Accept booking requests and begin helping students achieve their IELTS goals."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Requirements */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Tutor Requirements</h2>
            <p className="text-muted-foreground">
              We maintain high standards to ensure quality instruction
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow border border-border">
              <ul className="space-y-4">
                {[
                  "Minimum 2 years of IELTS teaching experience",
                  "Excellent English proficiency (native or C2 level)",
                  "Knowledge of current IELTS exam formats and requirements",
                  "Bachelor's degree or higher in relevant field",
                  "TEFL/TESOL certification or equivalent (preferred)",
                  "Professional demeanor and commitment to student success",
                  "Reliable internet connection and appropriate teaching environment"
                ].map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary h-5 w-5 mt-0.5" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Teaching?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our growing community of IELTS tutors and help students worldwide achieve their goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="group min-w-[180px]">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="mailto:tutors@ieltstutoria.com">
                <Button size="lg" variant="outline" className="min-w-[180px]">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ForTeachers;
