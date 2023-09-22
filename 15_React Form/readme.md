# 15 React Form

1. **Form** merupakan salah satu hal krusial dalam pengembangan aplikasi website, Form dapat digunakan untuk menghandle inputan dari user. Form banyak dijumpai ketika kita login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lagi. <br/> berikut adalah contoh dari form:<br/>
   ![contoh form](./screenshot/form-login.png)

berikut adalah macam macam form: <br/>
![macam form](./screenshot/macam-form.png)

2. **Uncontrolled Component** adalah input yang tidak terkontrol seperti input formulir HTMl tradisional, dengan kata lain, kita harus 'menarik' nilai dari field saat kita membutuhkannya, ini bisa terjadi ketika formulir di submit. Namun uncontrolled input tidak _powerful_. Maka dari itu, ada **Controlled Component**, Controlled Component merupakan sebuah controlled input yang menerima nilai saat ini sebagai prop, serta callback untuk mengubah nilai tersebut. <br/> berikut adalah perbedaan fitur antara Controlled Component dan Uncontrolled Component <br/>
   ![UC vs CC](./screenshot/UC-vs-CC.png)

3. **Basic Validation**, pada dasarnya ada 3 alasan kenapa validasi form diperlukan:

- _Mencari input data yang benar dan sesuai format_. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi.
- _Melindungi akun pengguna_. Misalnya, membuat pengguna untuk memasukkan data password yang aman.
- _Melindungi sistem/aplikasi_. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi. <br/>
  berikut adalah contoh validasi form<br/>
  ![validation](./screenshot/validation-detail-product.png)
