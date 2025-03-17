import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const RequestPasswordReset = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            interface RequestPasswordResetResponse {
                message: string;
            }

            const response = await axios.post<RequestPasswordResetResponse>(
                '/api/auth/request-password-reset',
                { email }
            );
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Failed to send password reset instructions. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min极客时间-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-center">Reset Password</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1">
                            Email Address
                        </label>
                        <Input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? 'Sending...' : 'Send Reset Instructions'}
                    </Button>
                    {message && (
                        <p className={`mt-4 text-center ${message.includes('sent') ? 'text-green-600' : 'text-red-600'}`}>
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RequestPasswordReset;
