// // src/components/navbar/NavBar.js

// // src/components/navbar/NavBar.js

// /*import React from 'react';
// import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from 'react-router-dom';

// const NavBar = ({ isLoggedIn, isAdmin, onLogout, onSearch }) => {
//   const handleSearch = (event) => {
//     if (event.key === 'Enter') {
//       onSearch(event.target.value);
//       event.target.value = ''; // Clear input after search
//     }
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <ShoppingCartIcon />
//         <Typography variant="h6" style={{ flexGrow: 1, marginLeft: '10px' }}>
//           upGrad Eshop
//         </Typography>

//         {isLoggedIn ? (
//           <>
//             <InputBase
//               placeholder="Search products…"
//               inputProps={{ 'aria-label': 'search' }}
//               onKeyPress={handleSearch}
//               style={{ color: 'white', marginRight: '20px' }}
//             />
//             <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
//               <Button color="inherit">Home</Button>
//             </Link>
//             {isAdmin && (
//               <Link to="/add-products" style={{ textDecoration: 'none', color: 'white' }}>
//                 <Button color="inherit">Add Products</Button>
//               </Link>
//             )}
//             <Button color="inherit" onClick={onLogout}>Logout</Button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
//               <Button color="inherit">Login</Button>
//             </Link>
//             <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
//               <Button color="inherit">Sign Up</Button>
//             </Link>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;  */

// // src/components/navbar/NavBar.js

// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from 'react-router-dom';
// import './NavBar.css'; // Import the CSS file

// const NavBar = ({ isLoggedIn, isAdmin, onLogout, onSearch }) => {
//   const handleSearch = (event) => {
//     if (event.key === 'Enter') {
//       onSearch(event.target.value);
//       event.target.value = ''; // Clear input after search
//     }
//   };

//   return (
//     <AppBar position="static" className="navbar">
//       <Toolbar>
//         <ShoppingCartIcon />
//         <Typography variant="h6" className="title">
//           upGrad Eshop
//         </Typography>

//         <InputBase
//           placeholder="Search products…"
//           inputProps={{ 'aria-label': 'search' }}
//           onKeyPress={handleSearch}
//           className="searchInput"
//         />
        
//         <Link to="/" className="navLink">
//           <Button color="inherit">Home</Button>
//         </Link>
        
//         <Link to="/products" className="navLink">
//           <Button color="inherit">Products</Button>
//         </Link>

//         <Link to="/contact" className="navLink">
//           <Button color="inherit" className="contactButton">Contact</Button>
//         </Link>

//         {isLoggedIn ? (
//           <>
//             {isAdmin && (
//               <Link to="/add-products" className="navLink">
//                 <Button color="inherit">Add Products</Button>
//               </Link>
//             )}
//             <Button color="inherit" onClick={onLogout}>Logout</Button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="navLink">
//               <Button color="inherit">Login</Button>
//             </Link>
//             <Link to="/signup" className="navLink">
//               <Button color="inherit">Sign Up</Button>
//             </Link>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

//=======================chat gpt code============================================

// src/components/navbar/NavBar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search'; // Import search icon
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

const NavBar = ({ isLoggedIn, isAdmin, onLogout, onSearch }) => {
  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      onSearch(event.target.value);
      event.target.value = ''; // Clear input after search
    }
  };
console.log("nav"+isAdmin);
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <ShoppingCartIcon />
        <Typography variant="h6" className="title">
          upGrad Eshop
        </Typography>

        {/* Updated Search Input */}
        <div className="searchBox">
          <SearchIcon className="searchIcon" /> {/* Search icon inside the input */}
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onKeyPress={handleSearch}
            className="searchInput"
          />
        </div>

        <Link to="/" className="navLink">
          <Button color="inherit">Home</Button>
        </Link>

        {isLoggedIn ? (
          <>
            {isAdmin && (
              <Link to="/add-products" className="navLink">
                <Button color="inherit">Add Products</Button>
              </Link>
            )}
            <Button className="logoutButton" onClick={onLogout}>Logout</Button>
          </>
        ) : (
          <>
            <Link to="/login" className="navLink">
              <Button color="inherit">Login</Button>
            </Link>
            <Link to="/signup" className="navLink">
              <Button color="inherit">Sign Up</Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;


