# 05 CSS (Cascading Style Sheets)

1. CSS berguna untuk menghias halaman web, (color, size, font, background, width, height, dll). selain untuk menghias, css juga dapat mengatur posisi layout pada halaman web. (float, align, display, position, dll).

2. ada 3 cara untuk menambahkan file CSS ke dalam HTMl:
- **External CSS**<br>
    contoh external CSS:<br>
    `<link rel="stylesheet" href="main.css">`<br>
>Syntax external css ini disisipkan didalam tag `<head>` pada file HTML, dan ekstensi untuk file css adalah .css.
- **Internal CSS**<br>
contoh internal CSS:<br>
```
<style>
body {
    background-color: black;
}
h1 {
    color: blue;
    margin-left: 40px;
}
</style>
```
>Syntax ini dapat digunakan di dalam satu file HTML. di definisikan di dalam elemen `<style>`, didalam bagian `<head>` atau didalam bagian `<body>`
      
- **inline CSS**<br>
  contoh inline CSS:<br>
  `<h1 style="color: #19355F;"> Hello World</h1>`
>Syntax ini dapat digunakan untuk elemen tunggal pada HTML<br>
>Diprioritaskan untuk menerapkan style yang unik

3. **Syntax CSS** `h1{color: pink; font-size: 15px;}`<br>
  >*h1* merupakan selector elemen <br>
  >*color: pink* merupakan declaration, dan<br>
  >*font-size: 15px* merupakan declaration 2. Setiap declaration dipisahkan dengan tanda `;`
  
4. **CSS Selector**<br>
   Pola yang digunakan untuk memilih element, yang akan di styling. Penanda HTML ke dalam CSS dapat menggunakan selector *ID* dan *Class*.
   - ID --> (#)
   - Class --> (.)
