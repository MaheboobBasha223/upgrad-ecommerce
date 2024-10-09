// src/components/products/AddProduct.js

/*import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    manufacturer: '',
    availableItems: '',
    imageUrl: 'null',
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    if (imageFile) {
      formData.append('image', imageFile); // Append the image file
    }
    try {
      const response = await fetch('https://dev-project-ecommerce.upgrad.dev/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token'), // Make sure to set your token correctly
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      setSuccess(true);
      setProduct({
        name: '',
        category: '',
        price: '',
        description: '',
        manufacturer: '',
        availableItems: '',
       
      });
      setImageFile(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Add New Product</Typography>
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="success">Product added successfully!</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Manufacturer"
          name="manufacturer"
          value={product.manufacturer}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Available Items"
          name="availableItems"
          type="number"
          value={product.availableItems}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <Button type="submit" variant="contained" color="primary">Add Product</Button>
      </form>
    </Container>
  );
};

export default AddProduct;*/

/*import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    manufacturer: '',
    availableItems: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    console.log('Change Event:', e);
    const { name, value } = e.target;
    const target=e.target;
    if (target) {
      const { name, value } = target; // Safe destructuring
      console.log('Name:', name, 'Value:', value); // Check values

      if (name) { // Check if name is defined
        setProduct((prevProduct) => ({
          ...prevProduct,
          [name]: value,
        }));
      } else {
        console.error("Target does not have a name property.");
      }
    } else {
      console.error("Event target is undefined.");
    }

    console.log('Name:', name, 'Value:', value); // Check values
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const productData = {
      ...product,
      price: Number(product.price),
      availableItems: Number(product.availableItems),
    };

    try {
      const formData = new FormData();
      Object.keys(productData).forEach(key => {
        formData.append(key, productData[key]);
      });
      if (imageFile) {
        formData.append('image', imageFile);
      }

      const response = await fetch('https://dev-project-ecommerce.upgrad.dev/api/products', {
        method: 'POST',
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(setProduct());
        throw new Error(errorData.message || 'Something went wrong');
      }

      setSuccess(true);
      setProduct({
        name: '',
        category: '',
        price: '',
        description: '',
        manufacturer: '',
        availableItems: '',
      });
      setImageFile(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Add New Product</Typography>
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="success">Product added successfully!</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Manufacturer"
          name="manufacturer"
          value={product.manufacturer}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Available Items"
          name="availableItems"
          type="number"
          value={product.availableItems}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        
        <Button type="submit" variant="contained" color="primary">Add Product</Button>
      </form>
    </Container>
  );
};

export default AddProduct;*/
/*import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    manufacturer: '',
    availableItems: '',
    imageUrl: '', // New field for image URL
  });

  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0] || null;
    setImageFile(file);
    if (file) {
      const url = URL.createObjectURL(file); // Create a local URL for the image
      setProduct((prevProduct) => ({
        ...prevProduct,
        imageUrl: url || null, // Set the image URL in product state
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    const productData = {
      ...product,
      price: Number(product.price),
      availableItems: Number(product.availableItems),
    };

    try {
      const formData = new FormData();
      Object.keys(productData).forEach((key) => {
        formData.append(key, productData[key]);
      });
      if (imageFile) {
        formData.append('image', imageFile);
      }

      const response = await fetch('https://dev-project-ecommerce.upgrad.dev/api/products', {
        method: 'POST',
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      setSuccess(true);
      setProduct({
        name: '',
        category: '',
        price: '',
        description: '',
        manufacturer: '',
        availableItems: '',
        imageUrl: '', // Reset image URL
      });
      setImageFile(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Add New Product</Typography>
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="success">Product added successfully!</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Manufacturer"
          name="manufacturer"
          value={product.manufacturer}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Available Items"
          name="availableItems"
          type="number"
          value={product.availableItems}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload} // Use separate handler for image upload
        />
        
        <Button type="submit" variant="contained" color="primary">Add Product</Button>
      </form>

      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt="Preview"
          style={{ marginTop: '20px', maxWidth: '100%', maxHeight: '200px' }}
        />
      )}
    </Container>
  );
};

export default AddProduct;*/

/*import React, { useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]);

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const response = await fetch('https://dev-project-ecommerce.upgrad.dev/api/products/categories'); // Replace with your API URL
      const data = await response.json();
      const categories = data.map(category => ({
        value: category, // Adjust according to your API response
        label: category // Adjust according to your API response
      }));
      setCategoryOptions(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle category change
  const handleCategoryChange = (newValue) => {
    setSelectedCategory(newValue);
  };
  const handleCreate = (inputValue) => {
    const newOption = {
      value: inputValue,
      label: inputValue,
    };
    setCategoryOptions((prev) => [...prev, newOption]);
    setSelectedCategory(newOption);
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example: Check if the new category needs to be added
    const categoryId = selectedCategory ? selectedCategory.value : null;

    console.log('Product Name:', productName);
    console.log('Selected Category:', selectedCategory);

    // Post product to API
    try {
      await fetch('https://dev-project-ecommerce.upgrad.dev/api/products', { // Replace with your API URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: productName,
          category: categoryId,
        }),
      });
      // Optionally reset the form or handle success
      setProductName('');
      setSelectedCategory(null);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <CreatableSelect
          id="category"
          isClearable
          options={categoryOptions}
          onChange={handleCategoryChange}
          onCreateOption={handleCreate}
          value={selectedCategory}
          placeholder="Select or create a category"
        />
      </div>
      <br/>      <br/>      <br/>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;*/
import React, { useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import './AddProduct.css'; // Import your CSS file for styling

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [manufacturer, setManufacturer] = useState('');
  const [availableItems, setAvailableItems] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [categoryOptions, setCategoryOptions] = useState([]);
  
  const token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImlhdCI6MTcyODA1NTYxNiwiZXhwIjoxNzI4MDY0MDE2fQ.oU_svzONjD4uTMlLyHc8uRBOZEDd1WriuonUqrr-LqVCPYLI7IOVSXO1ICJ5aojwAzM43EqcCr-zMVoBpvFZRQ'
  const fetchCategories = async () => {
    try {
      const response = await fetch('https://dev-project-ecommerce.upgrad.dev/api/products/categories'); 
      const data = await response.json();
      const categories = data.map(category => ({
        value: category,
        label: category,
      }));
      setCategoryOptions(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryChange = (newValue) => {
    setSelectedCategory(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryId = selectedCategory ? selectedCategory.value : null;

    // Example: Process form submission logic here
    const productData = {
      name: productName,
      category: categoryId,
      manufacturer,
      availableItems: parseInt(availableItems),
      price: parseFloat(price),
      imageUrl,
      description,
    };

    console.log('Product Data:', productData);
   // const token = localStorage.getItem('x-auth-token');
    //const token1=Response.headers.getItem('X-auth-token')
    //const token='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBkZW1vLmNvbSIsImlhdCI6MTcyNzUyOTU5NCwiZXhwIjoxNzI3NTM3OTk0fQ.4N754S6XTm1Sdx75807m2bW-GsuZ8TeIgmAzMPNgyRC8XtxfvpMdf2tUhMthSwpX23QtGuqu6HFmnbpSEZlCLQ';
          
    // Here you can send productData to your API
    try {
      //console.log("token1"+token);
      await fetch('https://dev-project-ecommerce.upgrad.dev/api/products', { // Replace with your API URL
        method: 'POST',
        headers: {
         
          'Content-Type': 'application/json',
         'x-auth-token':token
          //'Authorization': `Bearer <token>`,
         // 'x-auth-token':token,
        
        },
        body: JSON.stringify(productData),
        
      });
     // console.log("token2"+token);
      // Reset form after submission
      setProductName('');
      setSelectedCategory(null);
      setManufacturer('');
      setAvailableItems('');
      setPrice('');
      setImageUrl('');
      setDescription('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <div className="form-group">
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <CreatableSelect
          id="category"
          isClearable
          options={categoryOptions}
          onChange={handleCategoryChange}
          value={selectedCategory}
          placeholder="Select or create a category"
        />
      </div>
      <div className="form-group">
        <label htmlFor="manufacturer">Manufacturer:</label>
        <input
          type="text"
          id="manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="availableItems">Available Items:</label>
        <input
          type="number"
          id="availableItems"
          value={availableItems}
          onChange={(e) => setAvailableItems(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Product Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;

