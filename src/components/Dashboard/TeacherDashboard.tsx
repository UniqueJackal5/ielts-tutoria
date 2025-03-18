import { useState, useEffect } from 'react';
import { Home, Book, Users, Briefcase, Folder, MessageSquare, User } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Course, Student } from '../../types/dashboard';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table';
import { Sidebar, SidebarProvider, SidebarItem } from '../ui/sidebar';
import { Calendar } from '../ui/calendar';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import FileUpload from '@/components/FileUpload';

export default function TeacherDashboard() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [uploadOpen, setUploadOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/courses');
                if (!response.ok) throw new Error('Failed to fetch courses');
                const data = await response.json() as Course[];
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const handleCreateCourse = async () => {
        try {
            const response = await fetch('/api/courses', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description })
            });

            if (response.ok) {
                const newCourse = await response.json();
                setCourses([...courses, newCourse]);
                setDialogOpen(false);
                setTitle('');
                setDescription('');
            }
        } catch (error) {
            console.error('Error creating course:', error);
        }
    };

    return (
        <div className="flex min-h-screen">
            <SidebarProvider>
                <Sidebar>
                    <SidebarItem name="Home" href="/dashboard" icon={Home} />
                    <SidebarItem name="Lessons" href="/dashboard/lessons" icon={Book} />
                    <SidebarItem name="Students" href="/dashboard/students" icon={Users} />
                    <SidebarItem name="Courses" href="/dashboard/courses" icon={Briefcase} />
                    <SidebarItem name="Resources" href="/dashboard/resources" icon={Folder} />
                    <SidebarItem name="Messages" href="/dashboard/messages" icon={MessageSquare} />
                    <SidebarItem name="Profile" href="/dashboard/profile" icon={User} />
                </Sidebar>
            </SidebarProvider>
            <div className="flex-1 p-8 space-y-6">
                <h1 className="text-3xl font-bold">Teacher Dashboard</h1>

                {!loading && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Courses</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {courses.length > 0 ? (
                                <div className="space-y-4">
                                    {courses.map(course => (
                                        <div key={course._id} className="space-y-2">
                                            <h3 className="font-medium">{course.title}</h3>
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead>Student</TableHead>
                                                        <TableHead>Progress</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {course.students?.length ? course.students.map((student: Student) => (
                                                        <TableRow key={student._id}>
                                                            <TableCell>{student.name}</TableCell>
                                                            <TableCell>
                                                                <Progress value={student.progress} className="h-2" />
                                                            </TableCell>
                                                        </TableRow>
                                                    )) : (
                                                        <TableRow>
                                                            <TableCell colSpan={2} className="text-center">
                                                                No students enrolled yet
                                                            </TableCell>
                                                        </TableRow>
                                                    )}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center space-y-4">
                                    <p className="text-red-600">No courses assigned</p>
                                    <Button onClick={() => setDialogOpen(true)}>Create New Course</Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                )}

                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Sessions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Student</TableHead>
                                    <TableHead>Course</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>John Doe</TableCell>
                                    <TableCell>Writing Masterclass</TableCell>
                                    <TableCell>2024-03-20</TableCell>
                                    <TableCell>
                                        <Button variant="outline">Start Session</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Student Progress</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Button variant="link" className="text-primary">
                                    John Doe - Writing Assessment
                                </Button>
                                <br />
                                <Button variant="link" className="text-primary">
                                    Sarah Smith - Speaking Practice
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            {/* In Quick Actions section */}
                            <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Create Course</Button>
                                </DialogTrigger>
                                <Button variant="outline" onClick={() => setUploadOpen(true)}>
                                    Upload Materials
                                </Button>
                                <FileUpload 
                                    open={uploadOpen}
                                    onOpenChange={setUploadOpen}
                                    onSuccess={() => console.log('Upload successful')}
                                    onFilesSelected={handleFilesSelected}
                                />

                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Create New Course</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                        <Input 
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="Course Title" 
                                        />
                                        <Textarea 
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Course Description" 
                                        />
                                        <Button onClick={handleCreateCourse} className="w-full">
                                            Create Course
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                            <Button variant="outline">View Schedule</Button>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-2 gap-6">
                        <Card className="col-span-2">
                            <CardHeader>
                                <CardTitle>Schedule Calendar</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[300px] bg-muted rounded-lg p-4">
                                    <Calendar
                                        mode="single"
                                        className="rounded-md border w-full mt-4"
                                        showOutsideDays
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Session Analytics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-[200px] bg-muted rounded-lg p-4">
                                    <p className="text-muted-foreground">Completed Sessions: 24</p>
                                    <p className="text-muted-foreground">Pending Sessions: 5</p>
                                    <p className="text-muted-foreground mt-4">Average Rating: 4.8/5</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Earnings Overview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <p className="font-medium">Total Earnings: ₹45,000</p>
                                    <Progress value={75} className="h-2" />
                                    <p className="text-sm text-muted-foreground">Monthly target: ₹60,000</p>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Pending Payments</TableCell>
                                                <TableCell className="text-right">₹12,500</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

const handleFilesSelected = (files: File[]) => {
    console.log('Files selected for upload:', files);
    // TODO: Add actual file handling logic here
};