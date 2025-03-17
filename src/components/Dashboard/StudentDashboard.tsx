import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table';

export default function StudentDashboard() {
    return (
        <div className="p-8 space-y-6">
            <h1 className="text-3xl font-bold">Student Dashboard</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Upcoming Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Teacher</TableHead>
                                <TableHead>Course</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>2024-03-20</TableCell>
                                <TableCell>Ms. Smith</TableCell>
                                <TableCell>Writing Masterclass</TableCell>
                                <TableCell>
                                    <Button variant="outline">Join Session</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Progress Tracking</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <p>Speaking: 65%</p>
                            <Progress value={65} className="h-2" />
                        </div>
                        <div>
                            <p>Writing: 45%</p>
                            <Progress value={45} className="h-2" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Files</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Button variant="link" className="text-primary">
                                Writing_Feedback.pdf
                            </Button>
                            <br />
                            <Button variant="link" className="text-primary">
                                Speaking_Exercise.mp3
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Upload New File</Button>
                    </CardFooter>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Assignment Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Course</TableHead>
                                <TableHead>Assignment</TableHead>
                                <TableHead>Due Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Writing</TableCell>
                                <TableCell>Essay Task 2</TableCell>
                                <TableCell>2024-03-25</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>2024-03-15</TableCell>
                                <TableCell>₹5000</TableCell>
                                <TableCell>Completed</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                    <Button>Book New Session</Button>
                    <Button variant="outline">View Course Materials</Button>
                    <Button variant="outline">Payment History</Button>
                </CardContent>
            </Card>
        </div>
    );
}