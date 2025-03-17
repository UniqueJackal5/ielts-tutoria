
import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { BookOpen, Calendar, Award, Headphones, MessageSquare, Video } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Premium Features for IELTS Success
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform is designed to help you achieve your target IELTS score through personalized tutoring and comprehensive resources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<BookOpen size={24} />}
            title="Personalized Learning"
            description="Customized lesson plans based on your strengths, weaknesses, and target score."
            delay={100}
          />
          <FeatureCard
            icon={<Video size={24} />}
            title="Live & Recorded Lessons"
            description="Interactive video lessons with expert tutors, plus recordings to review at your pace."
            delay={200}
          />
          <FeatureCard
            icon={<MessageSquare size={24} />}
            title="Immediate Feedback"
            description="Get detailed feedback on your speaking and writing tasks to improve quickly."
            delay={300}
          />
          <FeatureCard
            icon={<Calendar size={24} />}
            title="Flexible Scheduling"
            description="Book lessons at times that work for you, with options for different time zones."
            delay={400}
          />
          <FeatureCard
            icon={<Award size={24} />}
            title="Expert Tutors"
            description="Learn from certified instructors with extensive experience in IELTS preparation."
            delay={500}
          />
          <FeatureCard
            icon={<Headphones size={24} />}
            title="Practice Materials"
            description="Access a wide range of practice tests, exercises, and study resources."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
