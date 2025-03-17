
import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ChevronRight, Clock, DollarSign, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import FileUpload from '@/components/FileUpload';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TeacherDashboard = () => {
  // Dummy upcoming sessions
  const upcomingSessions = [
    {
      title: 'Speaking Practice with John Doe',
      student: 'John Doe',
      time: 'Today, 3:00 PM',
      duration: '45 minutes',
    },
    {
      title: 'Writing Task 2 Review with Emily Wang',
      student: 'Emily Wang',
      time: 'Tomorrow, 10:00 AM',
      duration: '60 minutes',
    },
    {
      title: 'Mock Test with Raj Patel',
      student: 'Raj Patel',
      time: 'Wed, 5:30 PM',
      duration: '90 minutes',
    },
  ];

  // Dummy recent activities
  const recentActivities = [
    {
      title: 'Feedback Provided',
      details: 'Essay on Environmental Issues - John Doe',
      time: '2 hours ago',
      icon: <FileText size={16} />,
    },
    {
      title: 'New Booking',
      details: 'Speaking Session - Sarah Johnson',
      time: 'Yesterday',
      icon: <Calendar size={16} />,
    },
    {
      title: 'Course Materials Updated',
      details: 'Writing Task 2 Templates',
      time: '2 days ago',
      icon: <FileText size={16} />,
    },
  ];

  // Dummy stats
  const stats = [
    {
      title: 'Students',
      value: '26',
      change: '+3 this month',
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: 'Sessions Completed',
      value: '142',
      change: '+18 this month',
      icon: <Calendar className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: 'Hours Taught',
      value: '186',
      change: '+24 this month',
      icon: <Clock className="h-4 w-4 text-muted-foreground" />,
    },
    {
      title: 'Earnings',
      value: '$3,240',
      change: '+$680 this month',
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  // Handle file upload
  const handleFilesSelected = (files: File[]) => {
    console.log('Files selected:', files);
  };

  return (
    <DashboardLayout userType="teacher">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back, Prof. Smith!</h1>
            <p className="text-muted-foreground">Here's an overview of your teaching dashboard.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button>
              Create New Course
            </Button>
            <Button variant="outline">
              Manage Schedule
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-scale-in">
          {stats.map((stat, index) => (
            <Card key={index} className="animate-scale-in opacity-0" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                  {stat.icon}
                </div>
                <div className="mt-2">
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Sessions */}
          <Card className="animate-scale-in opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
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
                        <p className="text-sm text-muted-foreground">with {session.student}</p>
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

          {/* Recent Activities */}
          <Card className="animate-scale-in opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
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

              <Button variant="ghost" className="w-full mt-4 text-primary">
                View All Activities
              </Button>
            </CardContent>
          </Card>

          {/* Upload Resources */}
          <Card className="animate-scale-in opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <CardHeader>
              <CardTitle>Upload Resources</CardTitle>
              <CardDescription>Share materials with your students</CardDescription>
            </CardHeader>
            <CardContent>
              <FileUpload onFilesSelected={handleFilesSelected} />
            </CardContent>
          </Card>
        </div>

        {/* Student Management */}
        <Card className="animate-scale-in opacity-0" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>Monitor and manage your current students</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All Students
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary text-muted-foreground">
                  <tr>
                    <th className="text-left p-3 font-medium">Student</th>
                    <th className="text-left p-3 font-medium">Course</th>
                    <th className="text-left p-3 font-medium">Progress</th>
                    <th className="text-left p-3 font-medium">Next Session</th>
                    <th className="text-right p-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    {
                      name: 'John Doe',
                      email: 'john.doe@example.com',
                      course: 'Complete IELTS Preparation',
                      progress: 68,
                      nextSession: 'Today, 3:00 PM',
                    },
                    {
                      name: 'Emily Wang',
                      email: 'emily.wang@example.com',
                      course: 'Writing Masterclass',
                      progress: 42,
                      nextSession: 'Tomorrow, 10:00 AM',
                    },
                    {
                      name: 'Raj Patel',
                      email: 'raj.patel@example.com',
                      course: 'Speaking Confidence',
                      progress: 85,
                      nextSession: 'Wed, 5:30 PM',
                    },
                    {
                      name: 'Sarah Johnson',
                      email: 'sarah.j@example.com',
                      course: 'Academic Reading Skills',
                      progress: 29,
                      nextSession: 'Fri, 1:00 PM',
                    },
                  ].map((student, index) => (
                    <tr key={index} className="hover:bg-secondary/50 transition-colors">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className="text-xs text-muted-foreground">{student.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">{student.course}</td>
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-secondary rounded-full h-2 max-w-24">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs">{student.progress}%</span>
                        </div>
                      </td>
                      <td className="p-3">{student.nextSession}</td>
                      <td className="p-3 text-right">
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Course Management */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-scale-in opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <Card>
            <CardHeader>
              <CardTitle>Your Courses</CardTitle>
              <CardDescription>Manage and update your course offerings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: 'Complete IELTS Preparation',
                    students: 12,
                    sessions: 24,
                    earnings: '$2,160',
                  },
                  {
                    title: 'Writing Masterclass',
                    students: 8,
                    sessions: 16,
                    earnings: '$640',
                  },
                  {
                    title: 'Speaking Confidence Builder',
                    students: 6,
                    sessions: 12,
                    earnings: '$440',
                  },
                ].map((course, index) => (
                  <div key={index} className="rounded-lg border p-4 hover:shadow-sm transition-all">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{course.title}</h4>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>{course.students} students</span>
                          <span>{course.sessions} sessions</span>
                          <span>{course.earnings} earned</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/teacher/courses">
                  <Button variant="outline" className="w-full">
                    Manage All Courses
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Calendar Overview</CardTitle>
              <CardDescription>Your teaching schedule at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border overflow-hidden">
                <div className="bg-secondary p-3 text-center">
                  <h3 className="font-medium">August 2023</h3>
                </div>
                <div className="grid grid-cols-7 text-center text-xs p-2 bg-secondary/50">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="py-1">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 text-center text-sm p-2">
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 1; // Adjust to start from the correct day
                    const isCurrentMonth = day >= 0 && day < 31;
                    const isToday = day === 14; // Assuming today is the 15th
                    const hasSession = [2, 8, 15, 16, 22, 28].includes(day);

                    return (
                      <div
                        key={i}
                        className={`py-2 relative ${!isCurrentMonth ? 'text-muted-foreground/40' : ''
                          } ${isToday ? 'font-bold text-primary' : ''}`}
                      >
                        {day + 1}
                        {hasSession && isCurrentMonth && (
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-4">
                <Link to="/teacher/schedule">
                  <Button variant="outline" className="w-full">
                    Open Full Calendar
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

const handleDateChange = (dates: Date[]) => {
  setAvailability(prev => ({ ...prev, dates }));
};

const saveSchedule = async () => {
  // TODO: Implement API call to save schedule
  console.log('Saving schedule:', availability);
};

return (
  <div className="p-6 max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Schedule Management</h2>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">
        Select Available Dates
      </label>
      <DatePicker
        selected={null}
        onChange={handleDateChange}
        inline
        minDate={new Date()}
        selectsMultiple
        className="border rounded p-2 w-full"
      />
    </div>

    <button
      onClick={saveSchedule}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Save Schedule
    </button>
  </div>
);
};

export default TeacherDashboard;
