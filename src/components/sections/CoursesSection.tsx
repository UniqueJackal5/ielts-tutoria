
import React from 'react';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your IELTS Preparation Path
          </h2>
          <p className="text-muted-foreground text-lg">
            Select from our range of specialized courses designed to meet your specific needs and learning style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard
            title="Fast-Track IELTS Preparation"
            description="Intensive course designed for quick improvement with daily practice and feedback."
            image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            duration="4 Weeks"
            schedule="Daily Sessions"
            price="$249"
            popular={true}
            delay={100}
          />
          <CourseCard
            title="Complete IELTS Mastery"
            description="Comprehensive preparation covering all four IELTS sections in depth."
            image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            duration="8 Weeks"
            schedule="3 Sessions/Week"
            price="$399"
            delay={200}
          />
          <CourseCard
            title="IELTS Speaking & Writing Focus"
            description="Specialized course focusing on improving speaking fluency and writing skills."
            image="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            duration="6 Weeks"
            schedule="2 Sessions/Week"
            price="$299"
            delay={300}
          />
        </div>
        
        <div className="text-center mt-12">
          <Link to="/courses">
            <Button size="lg" variant="outline" className="group">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
