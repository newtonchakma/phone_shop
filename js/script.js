
const getAllPhone =phone =>{
 const searchValue = document.getElementById('search-box').value;
 const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
 fetch(url)
 .then(response => response.json())
 .then(data => console.log(data.data))

 document.getElementById('search-box').value = '';
 console.log(searchValue);
}

