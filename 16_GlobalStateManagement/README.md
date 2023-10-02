# 16 Global State Management & Data Fetching

1. **Global state management** dalam React.js mengacu pada cara mengelola data yang dibagikan di seluruh komponen aplikasi React. Global state management adalah topik yang penting karena dalam aplikasi yang lebih besar atau kompleks, terkadang seringkali perlu menyimpan dan berbagi data antar komponen tanpa melibatkan proses prop drilling (meneruskan props dari satu komponen ke komponen lain yang dalam rantai hierarki yang dalam). terdapat beberapa _state management library_ yang biasa digunakan developer react, diantaranya adalah:

- Redux
- MobX
- Flux
- Recoil

2. **Redux** adalah salah satu global state yang populer, pada 2020 redux dipakai sekitar 50% dari react project yang ada. maka dari itu, kapan saat yang tepat untuk menggunakan redux.

- banyak state yang perlu ditaruh di banyak tempat
- state pada app sering brubah
- logic untuk mengubah state kompleks
- ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
- perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

**Redux Libraries dan Tools**

- React-redux
- Redux Toolkit
- Redux DevTools Extension

**Komponen penting di Redux**

- Actions
- Reducers
- Store

**Thunk Middleware** untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action, redux thunk diperlukan untuk menghandle side effect logic yang kompleks, dan juga untuk logic async seperti request data.

**Persisted State** berfungsi untuk menyimpan State ke storage lokal sementara yang ada pada lokal

3. **Data Fetching** adalah proses pengambilan atau pengunduhan data dari suatu sumber atau lokasi tertentu, seperti server, database, API, penyimpanan lokal, atau sumber data lainnya, untuk digunakan dalam aplikasi komputer atau perangkat lunak. Tujuan utama dari data fetching adalah untuk memungkinkan aplikasi untuk mengakses dan mengambil data yang diperlukan untuk melakukan tugas tertentu, seperti menampilkan informasi ke pengguna, memproses data, atau melakukan operasi lainnya.

**Cara-cara untuk fetching data di react**

- Fetch API
- Axios
- React Query Library

**syntaks untuk fetch API**<br/>

```
fetch('https:example.com',{
    method:'get'
}).then(function(response){

}).catch(function(err){
    //errorr
});

```
