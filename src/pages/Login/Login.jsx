import React, { useState } from 'react';
import { sendToastError, sendToastSuccess } from '../../config/toast';
import useValidation from '../../utils/validate';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { errors, validate } = useValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate(email, password)) {
            // Xử lý logic đăng nhập
            sendToastSuccess("Login successful!");
            console.log({ email, password });
        } else {
            sendToastError("Đăng nhập không thành công! Vui lòng kiểm tra thông tin.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Đăng Nhập</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="Nhập email của bạn"
                            required
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700">Mật khẩu</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                            placeholder="Nhập mật khẩu"
                            required
                        />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Đăng Nhập
                    </button>
                </form>
                <p className="text-center mt-4">
                    Bạn chưa có tài khoản?{' '}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Đăng ký ngay
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
