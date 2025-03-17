
import React from 'react';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Calendar, Users, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/sections/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IELTS Preparation Courses
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our range of specialized courses designed to help you achieve your target IELTS score.
            </p>
          </div>
        </div>
      </section>
      
      {/* Course Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-xl">
                <TabsTrigger value="all">All Courses</TabsTrigger>
                <TabsTrigger value="fast-track">Fast-Track</TabsTrigger>
                <TabsTrigger value="comprehensive">Comprehensive</TabsTrigger>
                <TabsTrigger value="specialized">Specialized</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allCourses.map((course, index) => (
                  <CourseCard
                    key={index}
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    duration={course.duration}
                    schedule={course.schedule}
                    price={course.price}
                    popular={course.popular}
                    delay={index * 100}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="fast-track">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allCourses
                  .filter(course => course.category === 'fast-track')
                  .map((course, index) => (
                    <CourseCard
                      key={index}
                      title={course.title}
                      description={course.description}
                      image={course.image}
                      duration={course.duration}
                      schedule={course.schedule}
                      price={course.price}
                      popular={course.popular}
                      delay={index * 100}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="comprehensive">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allCourses
                  .filter(course => course.category === 'comprehensive')
                  .map((course, index) => (
                    <CourseCard
                      key={index}
                      title={course.title}
                      description={course.description}
                      image={course.image}
                      duration={course.duration}
                      schedule={course.schedule}
                      price={course.price}
                      popular={course.popular}
                      delay={index * 100}
                    />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="specialized">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allCourses
                  .filter(course => course.category === 'specialized')
                  .map((course, index) => (
                    <CourseCard
                      key={index}
                      title={course.title}
                      description={course.description}
                      image={course.image}
                      duration={course.duration}
                      schedule={course.schedule}
                      price={course.price}
                      popular={course.popular}
                      delay={index * 100}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Course Features */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Courses Include</h2>
            <p className="text-muted-foreground">
              Every course is designed to provide comprehensive preparation for your IELTS exam
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "One-on-One Tutoring",
                description: "Personalized sessions with experienced IELTS instructors focused on your needs.",
                icon: <Users className="h-6 w-6 text-primary" />
              },
              {
                title: "Flexible Scheduling",
                description: "Book sessions at times that work for you, with options for different time zones.",
                icon: <Calendar className="h-6 w-6 text-primary" />
              },
              {
                title: "Official Practice Materials",
                description: "Access to authentic IELTS practice tests and resources.",
                icon: <CheckCircle2 className="h-6 w-6 text-primary" />
              },
              {
                title: "Progress Tracking",
                description: "Regular assessments and progress reports to monitor your improvement.",
                icon: <Award className="h-6 w-6 text-primary" />
              },
              {
                title: "Quick Response Support",
                description: "Get answers to your questions between sessions via messaging.",
                icon: <ArrowRight className="h-6 w-6 text-primary" />
              },
              {
                title: "Lifetime Access",
                description: "Permanent access to course materials even after completion.",
                icon: <Clock className="h-6 w-6 text-primary" />
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <div className="flex items-start gap-4">
                  {feature.icon}
                  <div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our courses
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How do I know which course is right for me?",
                answer: "We recommend starting with a free assessment to determine your current level and goals. Our team will then suggest the most appropriate course for your needs."
              },
              {
                question: "Can I switch tutors if I'm not satisfied?",
                answer: "Yes, we offer a tutor matching guarantee. If you're not satisfied with your current tutor, we'll help you find a better match at no additional cost."
              },
              {
                question: "What happens if I need to cancel a session?",
                answer: "Sessions can be rescheduled or canceled up to 24 hours in advance without penalty. Late cancellations may be subject to our cancellation policy."
              },
              {
                question: "How quickly will I see improvement in my scores?",
                answer: "Most students see noticeable improvement within 4-6 weeks of consistent study. Individual results may vary based on starting level and study habits."
              },
              {
                question: "Do you offer a money-back guarantee?",
                answer: "Yes, we offer a 7-day satisfaction guarantee for all our courses. If you're not satisfied, you can request a full refund within the first week."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
              Ready to Begin Your IELTS Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start today with a personalized assessment and a customized study plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="group min-w-[180px]">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/find-tutor">
                <Button size="lg" variant="outline" className="min-w-[180px]">
                  Find a Tutor
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

// Course data
const allCourses = [
  {
    title: "Fast-Track IELTS Preparation",
    description: "Intensive course designed for quick improvement with daily practice and feedback.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    duration: "4 Weeks",
    schedule: "Daily Sessions",
    price: "$249",
    popular: true,
    category: "fast-track"
  },
  {
    title: "Complete IELTS Mastery",
    description: "Comprehensive preparation covering all four IELTS sections in depth.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    duration: "8 Weeks",
    schedule: "3 Sessions/Week",
    price: "$399",
    popular: false,
    category: "comprehensive"
  },
  {
    title: "IELTS Speaking & Writing Focus",
    description: "Specialized course focusing on improving speaking fluency and writing skills.",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    duration: "6 Weeks",
    schedule: "2 Sessions/Week",
    price: "$299",
    popular: false,
    category: "specialized"
  },
  {
    title: "IELTS Weekend Intensive",
    description: "Accelerated weekend program for professionals with limited weekday availability.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1749&q=80",
    duration: "5 Weekends",
    schedule: "Sat & Sun Sessions",
    price: "$299",
    popular: false,
    category: "fast-track"
  },
  {
    title: "Academic IELTS Complete Course",
    description: "Tailored for university admissions with focus on academic writing and reading.",
    image: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    duration: "10 Weeks",
    schedule: "3 Sessions/Week",
    price: "$449",
    popular: false,
    category: "comprehensive"
  },
  {
    title: "IELTS Reading & Listening Boost",
    description: "Focused training on receptive skills with techniques for improved comprehension.",
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    duration: "5 Weeks",
    schedule: "2 Sessions/Week",
    price: "$249",
    popular: false,
    category: "specialized"
  },
  {
    title: "General Training IELTS Course",
    description: "Comprehensive preparation for the General Training module of IELTS.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    duration: "8 Weeks",
    schedule: "3 Sessions/Week",
    price: "$399",
    popular: false,
    category: "comprehensive"
  },
  {
    title: "IELTS Express Preparation",
    description: "Last-minute intensive preparation for those with upcoming test dates.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    duration: "2 Weeks",
    schedule: "Daily Sessions",
    price: "$199",
    popular: true,
    category: "fast-track"
  },
  {
    title: "IELTS for Immigration",
    description: "Specialized preparation focusing on requirements for immigration purposes.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    duration: "7 Weeks",
    schedule: "3 Sessions/Week",
    price: "$379",
    popular: false,
    category: "specialized"
  }
];

export default Courses;
