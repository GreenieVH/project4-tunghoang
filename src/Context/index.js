// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
    
//     const login = async (username, password) => {
//         try {
//             const response = await fetch('http://26.78.185.194:5050/api/authoz/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ username, password })
//             });

//             if (!response.ok) {
//                 throw new Error('Đăng nhập thất bại');
//             }
//             const data = await response.json();
//             console.log(data)
            

//             setError('');
//         } catch (err) {
//             setError('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
//         }
//     }
//     return (
//         <AuthContext.Provider value={{ username, setUsername, password, setPassword, error, login }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }