import React, { useState } from 'react';

const DailyEntry = ({ addEntry }) => {
  
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry({ title, text });
    setTitle('');
    setText('');
  };

  return (
    <div>
      <h2>Anılarını Gir</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Başlık"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Metin"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit">Ekle</button>
      </form>
    </div>
  );
};

export default DailyEntry;