
const getAllPhone =phone =>{
 const searchValue = document.getElementById('search-box').value;
 const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
 fetch(url)
 .then(response => response.json())
 .then(data => displayAllPhone(data.data))

 document.getElementById('search-box').value = '';
 console.log(searchValue);
}

const displayAllPhone = phones =>{

for(const phone of phones){
    const parent = document.getElementById('show-phone');
    parent.innerHTML =`
    <div class="col">
    <div class="card h-50">
      <img src="${phone.image}" class="card-img-top p-4" alt="..." >
      <div class="card-body">
        <h5 class="card-title">Phone name : ${phone.phone_name}</h5>
        <h6 class="card-title"> Brand : ${phone.brand}</h6>
        
      </div>
      <div class="card-footer mx-auto">
        <button class=" btn btn-primary">Details</button>
      </div>
    </div>
  </div>
    
    
    `
    console.log(phone);
}
}