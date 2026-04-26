import React from 'react';

function ItemList({ items, deleteItem }) {
  if (items.length === 0) {
    return <p style={{ textAlign: 'center', color: '#999' }}>No items yet. Add one above! 👆</p>;
  }

  return (
    <div>
      <h2>All Items ({items.length})</h2>
      {items.map((item) => (
        <div key={item._id} style={cardStyle}>
          <div>
            <h3 style={{ margin: '0 0 5px' }}>{item.name}</h3>
            <p style={{ margin: '0 0 5px', color: '#666' }}>{item.description}</p>
            <p style={{ margin: 0 }}>Quantity: <strong>{item.quantity}</strong></p>
            <p style={{margin: 0}}> Price: <strong>{item.price}</strong></p>
            <p style={{margin: 0}}>Category: <strong>{item.category}</strong></p>
          </div>
          <button onClick={() => deleteItem(item._id)} style={deleteBtnStyle}>
            🗑️ Delete
          </button>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  background: 'white', padding: '15px', marginBottom: '10px',
  borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

const deleteBtnStyle = {
  padding: '8px 15px', background: '#f44336',
  color: 'white', border: 'none', borderRadius: '5px',
  cursor: 'pointer'
};

export default ItemList;