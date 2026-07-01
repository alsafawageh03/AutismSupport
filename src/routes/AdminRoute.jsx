// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// export default function AdminRoute() {
//   // Replace these examples with your actual authentication logic/state
//   const token = localStorage.getItem('token');
//   const userRole = localStorage.getItem('role'); // e.g., 'Admin', 'User', etc.

//   // 1. If not logged in at all, redirect them to the login page
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   // 2. If logged in but NOT an Admin, redirect them to the home community page (or an Access Denied screen)
//   if (userRole !== 'Admin') {
//     return <Navigate to="/community" replace />;
//   }

//   // 3. If they are an Admin, render the children components safely
//   return <Outlet />;
// }

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // npm install jwt-decode

export default function AdminRoute() {
  const token = localStorage.getItem('token'); 

  // 1. If no token exists at all, boot them immediately to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    // 2. Decode the JWT to read payload claims
    const decodedToken = jwtDecode(token);
    
    // NET core identity roles usually map to this specific claim URI string string format:
    const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] 
                     || decodedToken?.role;

    // 3. If the role claim doesn't equal Admin, redirect to home channel
    if (userRole !== 'Admin') {
      return <Navigate to="/community" replace />;
    }

  } catch (error) {
    // If token format is corrupted or parsing throws an error, wipe it and reset to login
    console.error("Invalid application token detected:", error);
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }

  // 4. Everything matches perfectly—allow access to the protected nested admin layouts
  return <Outlet />;
}