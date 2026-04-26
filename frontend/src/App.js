import React, { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const API_URL = 'https://mern-item-manager-backend-dchz.onrender.com/api/items';

function App() {
  const [items, setItems] = useState([]);

  // Fetch all items from backend
  const fetchItems = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Add new item
  const addItem = async (newItem) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem)
    });
    fetchItems(); // refresh list
  };

  // Delete item
  const deleteItem = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchItems(); // refresh list
  };

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>📦 Item Manager</h1>
      <ItemForm addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;