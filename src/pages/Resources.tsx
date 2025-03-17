import React from 'react';
import Navbar from '../components/Navbar';
import { Button } from '../components/ui/button';
import { ArrowRight, FileText, Headphones, MessageSquare, PenTool, BookOpen, FileDown, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/sections/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface Resource {
  title: string;
  description: string;
  icon: JSX.Element;
  category: string;
  free: boolean;
}

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IELTS Preparation Resources
            </h1>
            <p className="text-lg text-muted-foreground mb极客时间-8">
              Access our comprehensive collection of IELTS materials to help you excel in your exam.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Tabs */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-5 w-full max-w-3xl">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="reading">Reading</TabsTrigger>
                <TabsTrigger value="writing">Writing</TabsTrigger>
                <TabsTrigger value="listening">Listening</TabsTrigger>
                <TabsTrigger value="speaking">Speaking</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {generateResourceCards(allResources)}
              </div>
            </TabsContent>

            <TabsContent value="reading">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {generateResourceCards(allResources.filter(r => r.category === 'reading'))}
              </div>
            </TabsContent>

            <TabsContent value="writing">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {generateResourceCards(allResources.filter(r => r.category === 'writing'))}
              </div>
            </TabsContent>

            <TabsContent value="listening">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {generateResourceCards(allResources.filter(r => r.category === 'listening'))}
              </div>
            </TabsContent>

            <TabsContent value="speaking">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {generateResourceCards(allResources.filter(r => r.category === 'speaking'))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Practice Tests Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Practice Tests</h2>
            <p className="text-muted-foreground">
              Prepare for your IELTS exam with our collection of full-length practice tests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Practice Test 1",
                description: "Complete practice test with Reading, Writing, Listening and Speaking sections.",
                free: true
              },
              {
                title: "General Training Practice Test 1",
                description: "Full practice test for IELTS General Training module.",
                free: true
              },
              {
                title: "Academic Practice Test 2",
                description: "Advanced level practice test with detailed answer explanations.",
                free: false
              },
              {
                title: "General Training Practice Test 2",
                description: "Comprehensive practice for the General Training module.",
                free: false
              },
              {
                title: "Academic Reading Practice",
                description: "Focused practice for the Academic Reading section with 3 full texts.",
                free: true
              },
              {
                title: "Speaking Mock Test",
                description: "Simulated speaking test with examiner questions and model answers.",
                free: false
              }
            ].map((test, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{test.title}</CardTitle>
                  <CardDescription>{test.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-6">
                  {test.free ? (
                    <Button className="w-full">
                      <FileDown className="mr-2 h-4 w-4" /> Download Free
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/signup">Sign Up to Access</Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want Personalized Guidance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our tutors can provide customized feedback and strategies for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/find-tutor">
                <Button size="lg" className="group min极客时间-w-[180px]">
                  Find a Tutor
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="min-w-[180px]">
                  Sign Up
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

// Resource data
const allResources = [
  {
    title: "IELTS Reading Strategy Guide",
    description: "Learn time management and question-tackling strategies for the Reading section.",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    category: "reading",
    free: true
  },
  {
    title: "Task 2 Essay Writing Templates",
    description: "Structure templates for different essay types in IELTS Writing Task 2.",
    icon: <PenTool className="h-6 w-6 text-primary" />,
    category: "writing",
    free: true
  },
  {
    title: "Listening Section Mastery",
    description: "Techniques to improve your score in all four parts of the Listening test.",
    icon: <Headphones className="h-6 w-6 text-primary" />,
    category: "listening",
    free: false
  },
  {
    title: "Speaking Part 2 Topic Cards",
    description: "Practice cards with sample answers for the long-turn speaking task.",
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    category: "speaking",
    free: false
  },
  {
    title: "Academic Writing Task 1 Guide",
    description: "极客时间Learn how to describe charts, graphs and diagrams effectively.",
    icon: <FileText className="h-6 w-6 text-primary" />,
    category: "writing",
    free: true
  },
  {
    title: "IELTS Vocabulary Builder",
    description: "Essential vocabulary organized by topics for all IELTS sections.",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    category: "reading",
    free: false
  },
  {
    title: "Pronunciation Workshop",
    description: "Video lessons focusing on English pronunciation for higher speaking scores.",
    icon: <PlayCircle className="h-6 w-6 text-primary" />,
    category: "speaking",
    free: false
  },
  {
    title: "Note-taking Strategies",
    description: "Effective methods for taking notes during the Listening section.",
    icon: <PenTool className="h-6 w-6 text-primary" />,
    category: "listening",
    free: true
  },
  {
    title: "Reading Comprehension Exercises",
    description: "Practice exercises to improve your reading speed and comprehension.",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    category: "reading",
    free: false
  }
];

// Function to generate resource cards
const generateResourceCards = (resources: Resource[]) => {
  return resources.map((resource, index) => (
    <Card key={index} className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {resource.icon}
          <div className="text-xs uppercase tracking-wide font-semibold text-muted-foreground">
            {resource.category}
          </div>
        </div>
        <CardTitle>{resource.title}</CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-6">
        {resource.free ? (
          <Button className="w-full">
            <FileDown className="mr-2 h-4 w-4" /> Download Free
          </Button>
        ) : (
          <Link to="/signup" className="w-full">
            <Button variant="outline" className="w-full">
              Sign Up to Access
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  ));
};

export default Resources;
