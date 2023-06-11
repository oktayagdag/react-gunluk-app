import React from 'react';

const GunlukListele = ({ entries, searchTerm, onDeleteEntry}) => {
  const filteredEntries = entries.filter((entry) =>
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Günlükler</h2>
      {filteredEntries.length > 0 ? (
        <div className="entries-container">
          {filteredEntries.map((entry, index) => (
            <div key={index} className="entry-block">
              <h3>{entry.title}</h3>
              <p>{entry.text}</p>
              <span className="date">{entry.date}</span>
              <button className="delete-btn"onClick={() => onDeleteEntry(index)}>Sil</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Günlük bulunamadı.</p>
      )}
    </div>
  );
};

export default GunlukListele;