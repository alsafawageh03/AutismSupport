import React, { useState } from 'react';
import { FiImage, FiSend } from 'react-icons/fi';

export default function PostCreationBox({ onCreatePost }) {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await onCreatePost(text, file);
    if (success) {
      setText('');
      setFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', border: '1px solid #e0e0e0', padding: '16px', borderRadius: '12px', marginBottom: '24px' }}>
      <textarea
        placeholder="What's on your mind today?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', minHeight: '80px', border: 'none', resize: 'none', outline: 'none', fontSize: '16px' }}
      />
      <hr style={{ border: '0', borderTop: '1px solid #f0f0f0', margin: '12px 0' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: '#555', fontSize: '14px' }}>
          <FiImage size={18} />
          <span>Add Photo</span>
          <input 
            type="file" 
            accept="image/*" 
            onChange={(e) => setFile(e.target.files[0])} 
            style={{ display: 'none' }} 
          />
        </label>
        {file && <span style={{ fontSize: '12px', color: '#666' }}>{file.name}</span>}
        <button type="submit" style={{ background: '#0070f3', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FiSend size={14} />
          <span>Publish Post</span>
        </button>
      </div>
    </form>
  );
}