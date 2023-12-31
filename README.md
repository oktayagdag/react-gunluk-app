# Günlük Uygulaması

![app](https://github.com/oktayagdag/react-gunluk-app/assets/120986651/6e42469d-5d9d-4d98-b4da-2efe12cd1f02)

Günlük Uygulaması, **Node.js** ve **React** kullanılarak geliştirilen bir tek sayfalı web uygulamasıdır. Bu uygulama sayesinde günlüklerinizi dijital ortamda tutabilir, yeni günlükler ekleyebilir ve listelenebilir hale getirebilirsiniz.

## Kod Sayfaları Ve İşleyiş

### App.js
addEntry fonksiyonu, yeni bir günlük girişi eklemek için kullanılır ve deleteEntry fonksiyonu, 
bir günlük girişini silmek için kullanılır. handleSearchTermChange fonksiyonu, arama terimi 
değiştikçe güncellemeleri sağlar. 
Sayfa içerisinde, GunlukGirisler ve GunlukListele bileşenleri kullanılmaktadır. GunlukGirisler 
bileşeni, kullanıcının yeni günlük girişleri eklemesini sağlar. GunlukListele bileşeni ise, günlük 
girişlerini listeleyerek arama işlevselliği sunar ve günlük girişlerinin silinmesini sağlar.

#### addEntry Fonksiyonu
**addEntry** işlevi, kullanıcının girdiği günlük bilgilerini alır, yeni bir günlük oluşturur ve bu günlüğü entries dizisine ekler.  
```js
  const addEntry = (entry) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const newEntry = { ...entry, date: formattedDate };
    setEntries([...entries, newEntry]);
  };
```

#### deleteEntry Fonksiyonu
**deleteEntry** Kullanıcı bir günlüğü silmek istediğinde, silinecek günlüğün dizindeki index değeri belirtilir.
Mevcut günlüklerin bir kopyası oluşturulur.
Kopya günlükler dizisinden, belirtilen index değerine sahip günlük splice() yöntemi kullanılarak çıkarılır.
```js
   const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };
```

#### handleSearchTermChange Fonksiyonu
**handleSearchTermChange** Bu kod bloğu, günlük arama işlevini gerçekleştirir.onChange olayı tetiklendiğinde, e.target.value kullanılarak girilen metin alınır.Günlüklerin listelendiği GunlukListele bileşeni, searchTerm prop'unu alarak günlükleri filtreler ve sadece eşleşen günlükleri görüntüler.

```js
   const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };
```

### Components Bileşenleri

- src/components/GunlukGirisler.js: Bu bileşen, kullanıcının günlük başlığı ve metnini girebileceği bir form içerir.
- src/components/GunlukListele.js: Bu bileşen, kullanıcının girdiği günlükleri listeler.


#### GunlukGirisler.js
GünlükGirisler bileşeni, başlık (title) ve metin (text) için ayrı ayrı useState() hook'larını kullanarak state'i tanımlar.
Kullanıcı başlık veya metin inputlarında değişiklik yaptığında, onChange olayı tetiklenir ve ilgili inputtaki değer state'e yansıtılır.Kullanıcı formu göndermek istediğinde, handleSubmit fonksiyonu çalışır. Bu fonksiyon onSubmit olayıyla tetiklenir.handleSubmit fonksiyonu içinde, addEntry() fonksiyonu çağrılır. Bu fonksiyon, App.js dosyasından prop olarak geçirilen addEntry fonksiyonudur. addEntry fonksiyonuna, kullanıcının girdiği başlık ve metin bilgisi obje olarak iletilir.
```js
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  
   const handleSubmit = (e) => {
    e.preventDefault();
    addEntry({ title, text });
    setTitle('');
    setText('');
  };

```
#### GunlukListele.js
GunlukListele bileşeni, entries (günlük girişleri), searchTerm (arama terimi) ve onDeleteEntry (silme işlevi) olmak üzere üç adet prop alır.Günlük girişleri, entries prop'u aracılığıyla alınır.Arama terimi, searchTerm prop'u aracılığıyla alınır.entries üzerinde searchTerm filtresi uygulanarak, filtrelenmiş günlük girişleri elde edilir.Her bir günlük girişi için bir "Sil" düğmesi eklenir. Bu düğme onDeleteEntry prop'u aracılığıyla iletilen silme işlevini çağırır.Bu kod bloğu sayesinde günlük girişleri, başlık ve metinleriyle birlikte listelenir. Ayrıca kullanıcı, arama terimini girerek günlükleri filtreleyebilir ve silme işlevi sayesinde istediği günlüğü silebilir.
```js
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


```







