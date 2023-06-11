# Günlük Uygulaması
Günlük Uygulaması, Node.js ve React kullanılarak geliştirilen bir tek sayfalı web uygulamasıdır. Bu uygulama sayesinde günlüklerinizi dijital ortamda tutabilir, yeni günlükler ekleyebilir ve listelenebilir hale getirebilirsiniz.

## Kod Sayfaları Ve İşleyiş

### App.js
addEntry fonksiyonu, yeni bir günlük girişi eklemek için kullanılır ve deleteEntry fonksiyonu, 
bir günlük girişini silmek için kullanılır. handleSearchTermChange fonksiyonu, arama terimi 
değiştikçe güncellemeleri sağlar. 
Sayfa içerisinde, GunlukGirisler ve GunlukListele bileşenleri kullanılmaktadır. GunlukGirisler 
bileşeni, kullanıcının yeni günlük girişleri eklemesini sağlar. GunlukListele bileşeni ise, günlük 
girişlerini listeleyerek arama işlevselliği sunar ve günlük girişlerinin silinmesini sağlar.
#### addEntry Fonksiyonu

```js
  const addEntry = (entry) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const newEntry = { ...entry, date: formattedDate };
    setEntries([...entries, newEntry]);
  };
```
**addEntry** işlevi, kullanıcının girdiği günlük bilgilerini alır, yeni bir günlük oluşturur ve bu günlüğü entries dizisine ekler. 




### Components Bileşenleri

- src/components/GunlukGirisler.js: Bu bileşen, kullanıcının günlük başlığı ve metnini girebileceği bir form içerecek.
- src/components/GunlukListele.js: Bu bileşen, kullanıcının girdiği günlükleri listeleyecek.



