import React, { useState } from 'react';

function ItemForm({ addItem }) {
  const [name, setName]  =  useState('');
  const [description, setDescription]  =  useState('');
  const [quantity, setQuantity]   =   useState('');
  const [price, setPrice]   =   useState('');
  const[category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !quantity || !price || !category ) return alert('Please fill all fields!');
    addItem({ name, description,category, quantity: Number(quantity) , price: Number(price) });
    setName('');
    setDescription('');
    setQuantity('');
    setPrice('');
  };

  return (
    <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Add New Item</h2>
      <div>
        <input
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={inputStyle}
        
        />
        <input
          placeholder="Price (Rs.)"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={inputStyle}
        
        />
        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={inputStyle}
        
        />

        <button onClick={handleSubmit} style={btnStyle}>
          ➕ Add Item
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  display: 'block', width: '100%', padding: '10px',
  marginBottom: '10px', borderRadius: '5px',
  border: '1px solid #ccc', fontSize: '16px'
};

const btnStyle = {
  padding: '10px 20px', background: '#4CAF50',
  color: 'white', border: 'none', borderRadius: '5px',
  fontSize: '16px', cursor: 'pointer'
};

export default ItemForm;