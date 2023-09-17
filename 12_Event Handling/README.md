# 12 Event Handling

1. **Event Handling atau Handling Event** adalah suatu metode untuk menangani sebuah event/aksi yang diberikan pengguna kepada suatu komponen._Event_ adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya pada saat tombol ditekan.

   > ##### berikut ada beberapa contoh list Event :
   >
   > - Clipboard Events (Promise terpenuhi)
   > - Form Events (onChange, onSubmit)
   > - Mouse Events (onClick, onDoubleClick, onMouseOver)
   > - Generic Events (onError, onLoad)

2. **State** adalah data _private_ sebuah komponen. Data ini hanya tersedia untuk komponen tersebut dan tidak bisa diakses dari komponen lain. data pada state hanya bisa dimodifikasi menggunakan `setState`, setiap terjadi modifikasi akan terjadi render ulang, perubahannya bersifat asynchronous, dan state ini dipakai dalam Class.

3. **Stateful Component** adalah komponen yang memiliki state. Dan komponen ini sebelum react versi 16.8 hanya bisa dibuat menggunakan class. Kelebihannya dia memiliki lifecycle. Sedangkan, **Stateless Component** adalah komponen yang tidak memiliki state, hanya ada props. Pada react versi 16.8 biasanya komponen ini dibuat dengan function karena code nya lebih ringkas.

##### Perbedaan Stateful Component dan Stateless Component

| Stateless Component                              | Stateful Component                                  |
| ------------------------------------------------ | --------------------------------------------------- |
| Tidak tahu tentang aplikasi                      | Mengerti tentang aplikasi                           |
| Tidak melakukan data fetching (pengambilan data) | Melakukan data fetching (pengambilan data)          |
| Tujuan utamanya adalah visualisasi               | Tujuan utamanya adalah berinteraksi dengan aplikasi |
| Dapat digunakan kembali                          | Tidak dapat digunakan kembali                       |
| Hanya berkomunikasi dengan induk langsungnya     | Meneruskan status dan data ke anak-anaknya          |
