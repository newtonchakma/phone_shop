
const getAllPhone =phone =>{
 const searchValue = document.getElementById('search-box').value;
 const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
 fetch(url)
 .then(response => response.json())
 .then(data => displayAllPhone(data.data.slice(0,20)))

 document.getElementById('search-box').value = '';
 console.log(searchValue);
}

const displayAllPhone = phones =>{


for(const phone of phones){
console.log(phone);
    
    const parent = document.getElementById('show-phone');

    const div = document.createElement('div');
    div.innerHTML = `  
      <div class="card shadow-lg mt-4 round">
    <img src="${phone.image}" class="card-img-top p-2" alt="">
    <div class="card-body">
      <h5 class="card-title">Brand : ${phone.brand}</h5>
      <h6 class="card-title">Phone name : ${phone.phone_name}</h6>
      
      <div class="card-footer mx-auto">
      <button onclick="getPhoneDetails('${phone.slug}')" class="btn btn-primary w-100" type="button">Details</button>
   
    </div>
      
     
    </div>
    </div>`
    parent.appendChild(div)

}
} 

const getPhoneDetails =id =>{
const url = `https://openapi.programming-hero.com/api/phone/${id}`
fetch(url)
.then(response => response.json())
.then(data =>displayPhoneDetails(data))
console.log(url);

}

const displayPhoneDetails = details =>{
    
}


    