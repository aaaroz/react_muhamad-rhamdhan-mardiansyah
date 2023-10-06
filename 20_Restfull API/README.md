# 20 Restfull API with JavaScript

### 1) Mock API/Public API

Untuk mendapatkan API (Application Programming Interface) kita bisa menggunakan public API untuk contoh data atau contoh endpoint, yang biasanya disebut fake API (API Palsu), API tiruan adalah ketika sedang membangun API yang mengembalikan data yang diinginkan. kesimpulannya manfaat dari Mock API (API tiruan) adalah:

1. Frontend and back-end developers can work simultaneously
2. Fast feedback loop
3. Finding issues early and fast
4. Developing tests and APIs simultaneously

![Top 7 Mock APIs Available ](./screenshot/summary.screenshots/top7.mock.apis.png)

### 2) Create Mock API with MOCKAPI.IO

![sign in to mockapi ](./screenshot/summary.screenshots/signin.mockapi.png)<br/>
![create a project ](./screenshot/summary.screenshots/create.project.png)<br/>
![create a resources ](./screenshot/summary.screenshots/create.resource.png)<br/>
![generate dummy data ](./screenshot/summary.screenshots/generate.dummy.data.png)<br/>
![Access MockAPI Endpoint](./screenshot/summary.screenshots/access.mockapi.endpoint.png)<br/>

### 3) Implementation Get Data and Render
##### 1. Make `index.html` file and class container 
```
<body>
  <h1>Your Data<h1>
  <div class="container"></div>
</body>
```

##### 2. Make `<script>` for your JavaScript. Then make this function to get data inside your `<script>`
```
async function getUsers(){
          let url ="https://6299e3697b866a90ec452547.mockapi.io/peserta/v1/users";
          try {
            let res = await fetch(url);
            console.log("your status : ", res.status); // untuk dapat melakukan pengecekan terhadap status data
            return await res.json();
          } catch (error) {
            console.log(error);
          }
        }
```

##### 3. Make `renderUsers` function inside `<script>`
```
  //function yang berfungsi untuk menampilkan data ke dalam halaman
        async function renderUsers() {
          let users = await getUsers();
          console.log(users);
          let html = "";
          users.forEach((user) => {
            let htmlSegment = `<div class="user">
                          <img src="${user.avatar}" >
                          <h3>${user.id} : ${user.name}</h3>
                       </div>
                            <button onclick="deleteUser(${user.id})"> Delete id : ${user.id}</button>
                       <hr>`;
            //menambahkan data ke dalam variabel html.
            html += htmlSegment;
          });

          let container = document.querySelector(".container");
          container.innerHTML = html;
        }
        renderUsers();
```
#### For more implementation check this [repo - Restfull API with JavaScript - by attoyibi](https://github.com/attoyibi/frontend-intern-basic-code/tree/main/Restfull%20API%20with%20Javascript%20)
