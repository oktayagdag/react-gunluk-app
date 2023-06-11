import React, { useState } from 'react';
import GunlukListele from './components/GunlukListele';
import GunlukGirisler from './components/GunlukGirisler';
import './App.css';

const App = () => {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addEntry = (entry) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const newEntry = { ...entry, date: formattedDate };
    setEntries([...entries, newEntry]);
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };


  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  


  return (
    <div className='container'>
      <h1>Günlük Uygulaması</h1>
      <GunlukGirisler addEntry={ addEntry} />
      <input
        type="text"
        placeholder="Günlük Ara"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <GunlukListele entries={entries}  searchTerm={searchTerm} onDeleteEntry={deleteEntry}  />
    </div>
    
  );
};


export default App;
