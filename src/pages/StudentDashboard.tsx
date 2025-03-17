
import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProgressTracker from '@/components/ProgressTracker';
import CourseCard from '@/components/CourseCard';
import { ArrowRight, Book, Calendar, ChevronRight, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  // Dummy progress data
  const progressItems = [
    { title: 'Reading', value: 8, maxValue: 10, color: 'bg-blue-500' },
    { title: 'Writing', value: 6, maxValue: 10, color: 'bg-purple-500' },
    { title: 'Listening', value: 9, maxValue: 10, color: 'bg-green-500' },
    { title: 'Speaking', value: 7, maxValue: 10, color: 'bg-amber-500' },
  ];
  
  // Dummy upcoming sessions
  const upcomingSessions = [
    {
      title: 'Speaking Practice',
      tutor: 'Dr. Emily Chen',
      time: 'Today, 3:00 PM',
      duration: '45 minutes',
    },
    {
      title: 'Writing Task 2 Review',
      tutor: 'Prof. Michael Brown',
      time: 'Tomorrow, 10:00 AM',
      duration: '60 minutes',
    },
    {
      title: 'Mock Test Preparation',
      tutor: 'Dr. Emily Chen',
      time: 'Wed, 5:30 PM',
      duration: '90 minutes',
    },
  ];
  
  // Dummy recent activities
  const recentActivities = [
    {
      title: 'Writing Task Submission',
      details: 'Essay on Environmental Issues',
      time: '2 hours ago',
      icon: <FileText size={16} />,
    },
    {
      title: 'Completed Reading Practice',
      details: 'Academic Reading Test 3',
      time: 'Yesterday',
      icon: <Book size={16} />,
    },
    {
      title: 'Booked New Session',
      details: 'Mock Test with Dr. Emily Chen',
      time: '2 days ago',
      icon: <Calendar size={16} />,
    },
  ];
  
  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back, John!</h1>
            <p className="text-muted-foreground">Here's an overview of your IELTS preparation progress.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button>
              Book a Session
            </Button>
            <Button variant="outline">
              Take Practice Test
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Progress Section */}
          <Card className="lg:col-span-2 animate-scale-in">
            <CardHeader>
              <CardTitle>Your IELTS Progress</CardTitle>
              <CardDescription>Track your progress across all four sections</CardDescription>
            </CardHeader>
            <CardContent>
              <ProgressTracker items={progressItems} />
              
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Recent Assessments</h3>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View All
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {['Reading Test 4', 'Speaking Assessment', 'Writing Task 1', 'Listening Test 5'].map((assessment, index) => (
                    <div key={index} className="bg-secondary rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium">{assessment}</p>
                        <p className="text-sm text-muted-foreground">Completed 2 days ago</p>
                      </div>
                      <div className="bg-primary/10 text-primary font-medium px-2 py-1 rounded text-sm">
                        Band 7.5
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Sessions */}
          <Card className="animate-scale-in opacity-0" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled tutoring sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingSessions.map((session, index) => (
                  <div key={index} className="rounded-lg border p-3 hover:bg-secondary transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-medium line-clamp-1">{session.title}</h4>
                        <p className="text-sm text-muted-foreground">with {session.tutor}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-primary" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-primary" />
                        <span>{session.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                View All Sessions
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent Activities & Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <Card className="animate-scale-in opacity-0" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your latest actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex gap-3 pb-3 border-b last:border-0 last:pb-0">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {activity.icon}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{activity.title}</p>
                      <p className="text-xs text-muted-foreground mb-1">{activity.details}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Recommended Resources */}
          <Card className="lg:col-span-2 animate-scale-in opacity-0" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            <CardHeader>
              <CardTitle>Recommended Resources</CardTitle>
              <CardDescription>Materials tailored to your learning needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Essay Writing Templates',
                    description: 'Task 2 structures for high band scores',
                    type: 'PDF',
                    category: 'Writing'
                  },
                  {
                    title: 'Speaking Part 2 Cue Cards',
                    description: 'Practice with common speaking topics',
                    type: 'Audio',
                    category: 'Speaking'
                  },
                  {
                    title: 'Academic Reading Strategies',
                    description: 'Techniques for fast and accurate reading',
                    type: 'Guide',
                    category: 'Reading'
                  },
                  {
                    title: 'Listening Note-Taking Tips',
                    description: 'Effective methods for Section 3 and 4',
                    type: 'Video',
                    category: 'Listening'
                  }
                ].map((resource, index) => (
                  <div key={index} className="rounded-lg border p-4 hover:shadow-sm transition-all flex flex-col justify-between h-full">
                    <div>
                      <div className="inline-block px-2 py-1 text-xs font-medium bg-secondary rounded-md mb-2">
                        {resource.category}
                      </div>
                      <h4 className="font-medium">{resource.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1 mb-3">{resource.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{resource.type}</span>
                      <Button variant="ghost" size="sm" className="text-primary gap-1">
                        Access <ArrowRight size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-2">
                <Link to="/student/resources">
                  <Button variant="outline" className="w-full">
                    Browse All Resources
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recommended Courses */}
        <div className="pt-4 animate-scale-in opacity-0" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recommended Courses</h2>
            <Button variant="ghost" className="text-primary gap-1">
              View All <ChevronRight size={16} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard
              title="Academic Writing Masterclass"
              description="Master Task 1 and Task 2 essays with advanced templates and strategies."
              image="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
              duration="4 Weeks"
              schedule="2 Sessions/Week"
              price="$199"
            />
            <CourseCard
              title="Speaking Confidence Builder"
              description="Overcome nervousness and speak fluently with pronunciation practice."
              image="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              duration="3 Weeks"
              schedule="2 Sessions/Week"
              price="$179"
              popular={true}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
