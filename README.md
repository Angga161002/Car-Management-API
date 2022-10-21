# FSW Challenge 06: Car Management API

## Getting Started

Sebelum memulai untuk menjalankan projek ini ada  beberapa hal yang harus disiapkan.

Pertama, buka file `/config/config.json` kemudian sesuaikan isi filenya dengan konfigurasi yang kalian miliki.

```
"development": {
      "username": "Angga",       // Ubah sesuai dengan username kalian
      "password": "xdo914cs33",      // Ubah sesuai dengan password kalian
      "database": "challenge-6",    // Ubah sesuai dengan nama database yang kalian inginkan
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
```

Kemudian, install semua dependencies dengan menjalankan
```
npm i
```

Kemudian, buat database yang sesuai dengan apa yang ada dalam file `/config/config.json`.
```
sequelize db:create
```

Jika database sudah dibuat maka selanjutnya adalah melakukan migrasi seluruh model yang ada di folder `/app/models` ke dalam database.
Namun sebelumnya keluarkan folder `migrations` dari folder `db` kemudian jalankan 
```
npx sequelize-cli db:migrate
```

Selanjutya masukkan beberapa data yang diperlukan seperti yang ada di folder `/db/seeds`.
Namun sebelumnya keluarkan folder `seeders` dari folder `db` kemudian jalankan
```
npx sequelize-cli db:seed
```
Jika sudah, maka masukkan kembali folder `migrations` dan `seeders` kedalam folder `db`.

Maka akan tersedia data user sebagai super admin yang digunakan untuk login dan mengakses seluruh endpoint.
```
email: spadmin@gmail.com
pass: qwerty
```

Langkah terakhir yaitu menjalankan server, beberapa script yang dapat digunakan dalam project ini dapat dilihat di file [`package.json`](./package.json#L6-L14).
```
npm run start
```


Untuk melihat seluruh endpoint yang tersedia dapat mengimport API Documentatio dari file berikut
```
`/postman/Rest Api Back End Cl6.postman_collection.json`

```