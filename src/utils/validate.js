import { useState } from 'react';

const useValidation = () => {
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const validate = (email, password) => {
        const newErrors = {};
        if (!validateEmail(email)) {
            newErrors.email = "Email không hợp lệ!";
        }
        if (!validatePassword(password)) {
            newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự!";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return { errors, validate };
};

export default useValidation;
