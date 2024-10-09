// src/components/login/Login.js

// src/components/login/Login.js

/*import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn, setIsAdmin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // API call to log in the user
    const response = await fetch('https://dev-project-ecommerce.upgrad.dev/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      setIsLoggedIn(true);
        setIsAdmin(data.role === 'ADMIN');
         navigate('/Products'); // Redirect to products/home page
        
        
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <form onSubmit={handleLogin} style={{ width: '300px' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        {errorMessage && <Typography color="error" align="center">{errorMessage}</Typography>}
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default Login;
// src/components/Login.js  */

// updated one 


// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography, Link } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import LockIcon from '@mui/icons-material/Lock'; // Import the Lock icon

// const Login = ({ setIsLoggedIn, setIsAdmin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // API call to log in the user
//     const response = await fetch('https://dev-project-ecommerce.upgrad.dev/api/auth/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username: email, password }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       setIsLoggedIn(true);
//       setIsAdmin(data.role === 'ADMIN');
//       navigate('/Products'); // Redirect to products/home page
//     } else {
//       const errorData = await response.json();
//       setErrorMessage(errorData.message || 'Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
      
//       {/* Circular background for Lock icon */}
//       <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         width="70px"
//         height="70px"
//         borderRadius="50%"
//         bgcolor="red"
//         mb={2}
//       >
//         <LockIcon style={{ fontSize: 40, color: 'white' }} />
//       </Box>

//       {/* Sign In Form */}
//       <form onSubmit={handleLogin} style={{ width: '300px', textAlign: 'center' }}>
//         <Typography variant="h5" gutterBottom>
//           Sign In
//         </Typography>
//         {errorMessage && <Typography color="error">{errorMessage}</Typography>}
//         <TextField
//           label="Email Address"
//           type="email"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <TextField
//           label="Password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <Button type="submit" variant="contained" color="primary" fullWidth>
//           Sign In
//         </Button>

//         {/* "Don't have an account?" link */}
//         <Typography variant="body2" style={{ marginTop: '15px' }}>
//           <Link href="/signup" underline="always" style={{ color: 'blue' }}>
//             Don't have an account? Sign Up
//           </Link>
//         </Typography>
//       </form>

//       {/* Copyright */}
//       <Typography variant="body2" color="textSecondary" style={{ marginTop: '20px' }}>
//         Copyright © upGrad 2021.
//       </Typography>
//     </Box>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock'; // Import the Lock icon

const Login = ({ setIsLoggedIn, setIsAdmin ,isAdmin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
 
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // API call to log in the user
    const response = await fetch('https://dev-project-ecommerce.upgrad.dev/api/auth/signin', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token':'[x-auth-token]',
      },
      body: JSON.stringify({ username: email, password }),
       
    });
    console.log('Response:', response);
    console.log('Response Headers:', response.headers); 
    const token = response.headers['x-auth-token'] || response.headers['X-Auth-Token'];
        if (token) {
            localStorage.setItem('x-auth-token', token);
            console.log('Token stored:', token);
        } else {
            console.error('Token not found in response headers');
        }
    if (response.ok) {
    
     const data = await response.json();
     
    //console.log('Response data:'+response.headers.get('x-auth-token'));
     
      setIsLoggedIn(true);
     
    setIsAdmin(data.roles[0] === 'ADMIN');
    
   //console.log("login1:"+data.roles[0]);
   
     // navigate('/Products', { state: { isAdmin } }); // Redirect to products/home page
      navigate('/Products');
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f1f1f1', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '40px' }}> {/* Reduced paddingTop */}
      <Box
        sx={{
          width: '350px', // Adjusted width to make it more compact
          backgroundColor: 'white',
          padding: '20px', // Reduced padding for a more compact layout
          borderRadius: '8px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}
      >
        {/* Circular background for Lock icon */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="50px" // Reduced size
          height="50px" // Reduced size
          borderRadius="50%"
          bgcolor="red"
          margin="auto"
          mb={1} // Reduced margin
        >
          <LockIcon style={{ fontSize: 30, color: 'white' }} /> {/* Reduced font size */}
        </Box>

        <Typography variant="h6" gutterBottom> {/* Changed variant for smaller font */}
          Sign In
        </Typography>

        {errorMessage && <Typography color="error" align="center">{errorMessage}</Typography>}

        <form onSubmit={handleLogin} style={{ marginTop: '10px' }}> {/* Reduced margin */}
          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
            margin="dense" // Used 'dense' margin to reduce spacing
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="dense" // Used 'dense' margin to reduce spacing
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 1 }} // Reduced margin top
          >
            Sign In
          </Button>
        </form>

        <Typography variant="body2" sx={{ mt: 1 }}>
          <Link href="/signup" underline="always" style={{ color: 'blue' }}>
            Don't have an account? Sign Up
          </Link>
        </Typography>

        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Copyright © upGrad 2021.
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;




