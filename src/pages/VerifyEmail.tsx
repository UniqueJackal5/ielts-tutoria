import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../components/ui/button';

interface VerifyEmailResponse {
    message: string;
}

const VerifyEmail = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await axios.get<VerifyEmailResponse>(`/api/auth/verify/${token}`);
                setMessage(response.data.message);
                setTimeout(() => navigate('/login'), 3000);
            } catch (error: any) {
                setMessage(
                    error.response?.data?.message ||
                    'Email verification failed. Please try again.'
                );
            } finally {
                setIsLoading(false);
            }
        };

        verifyEmail();
    }, [token, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
                {isLoading ? (
                    <p>Verifying your email...</p>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
                        <p className="mb-6">{message}</p>
                        <Button onClick={() => navigate('/login')}>
                            Go to Login
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;
