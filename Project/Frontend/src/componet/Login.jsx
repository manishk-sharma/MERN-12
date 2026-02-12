import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../api/axios';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/authSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            role: 'user',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
            role: Yup.string().oneOf(['user', 'admin'], 'Invalid Role').required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await api.post('/auth/login', values);
                console.log('Login success:', response.data);

                // Dispatch user data and token to Redux store
                const { user, token } = response.data;
                dispatch(setCredentials({ user, token }));

                alert(`Logged in successfully as ${values.role}!`);
                navigate('/');
            } catch (error) {
                console.error('Login failed:', error);
                alert(error.response?.data?.message || 'Login failed. Please try again.');
            }
        },
    });

    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Login</h2>
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={`w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'dark:border-gray-600'
                                }`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className={`w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'dark:border-gray-600'
                                }`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Role</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="role"
                                    value="user"
                                    checked={formik.values.role === 'user'}
                                    onChange={formik.handleChange}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-gray-700 dark:text-gray-300">User</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name="role"
                                    value="admin"
                                    checked={formik.values.role === 'admin'}
                                    onChange={formik.handleChange}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="ml-2 text-gray-700 dark:text-gray-300">Admin</span>
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
