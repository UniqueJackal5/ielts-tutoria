import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
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
            </div>
        </div>
    );
}