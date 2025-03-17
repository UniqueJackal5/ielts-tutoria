import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import StudentDashboard from '../components/Dashboard/StudentDashboard';
import TeacherDashboard from '../components/Dashboard/TeacherDashboard';
import AdminDashboard from '../components/Dashboard/AdminDashboard';

export default function Dashboard() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    if (!token) return null;

    const decodedToken: { role?: string } = jwtDecode(token);
    const userRole = decodedToken.role || 'student';

    return (
        <div className="min-h-screen bg-background">
            {userRole === 'student' && <StudentDashboard />}
            {userRole === 'teacher' && <TeacherDashboard />}
            {userRole === 'admin' && <AdminDashboard />}
        </div>
    );
}