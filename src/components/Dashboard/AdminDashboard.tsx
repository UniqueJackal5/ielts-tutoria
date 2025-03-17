import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table';

export default function AdminDashboard() {
    return (
        <div className="p-8 space-y-6">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>

            <Card>
                <CardHeader>
                    <CardTitle>User Management</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>John Doe</TableCell>
                                <TableCell>john@example.com</TableCell>
                                <TableCell>Teacher</TableCell>
                                <TableCell>
                                    <Button variant="destructive" size="sm">Remove</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <Button>Add New User</Button>
                </CardFooter>
            </Card>

            <div className="grid grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Content Moderation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>File Name</TableHead>
                                    <TableHead>Uploaded By</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>writing_sample.pdf</TableCell>
                                    <TableCell>Sarah Smith</TableCell>
                                    <TableCell>Pending Review</TableCell>
                                    <TableCell>
                                        <Button variant="outline" size="sm">Review</Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Platform Analytics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between">
                            <span>Active Teachers:</span>
                            <span className="font-bold">24</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Active Students:</span>
                            <span className="font-bold">158</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Total Sessions:</span>
                            <span className="font-bold">1,240</span>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline" className="w-full">View Detailed Reports</Button>
                    </CardFooter>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                    <Button variant="destructive">Platform Maintenance</Button>
                    <Button>Payment Overview</Button>
                    <Button variant="outline">System Settings</Button>
                </CardContent>
            </Card>
        </div>
    );
}