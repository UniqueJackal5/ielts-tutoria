import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table';

export default function TeacherDashboard() {
    return (
        <div className="p-8 space-y-6">
            <h1 className="text-3xl font-bold">Teacher Dashboard</h1>

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
                        <Button>Create New Course</Button>
                        <Button variant="outline">Upload Materials</Button>
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
                                {/* Calendar component placeholder */}
                                <p className="text-muted-foreground">Calendar integration coming soon</p>
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
    );
}