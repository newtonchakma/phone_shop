
const getAllPhone =phone =>{
 const searchValue = document.getElementById('search-box').value;

 const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
 if(searchValue === '' || searchValue.length <= 0){
   document.getElementById('error').style.display = 'block';
 }

  fetch(url)
 .then(response => response.json())
 .then(data => displayAllPhone(data.data.slice(0,20)))
 
 

 document.getElementById('search-box').value = '';
 console.log(searchValue);
}

const displayAllPhone = phones =>{


for(const phone of phones){
// console.log(phone);
    
    const parent = document.getElementById('show-phone');
  
    const div = document.createElement('div');
    
    div.innerHTML = `  
      <div class="card shadow-lg mt-4 rounded">
    <img src="${phone.image}" class="img-fluid card-img-top p-2" alt="">
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
.then(data =>displayPhoneDetails(data.data))
//console.log(url);

}

const displayPhoneDetails = info =>{
    const showDetails = document.getElementById('show-details');
   if(info.others===undefined || info.releaseDate.length <= 0){
     info.others={WLAN:'No',NFC:'No',GPS:'No',Radio:'No',USB:'No',Bluetooth:'No'};
     info.releaseDate ='Not Found';
   }
   

    showDetails.innerHTML = `
    <div class="card mb-4 mt-4 mx-auto w-75 rounded">
    <div class="row ">
    <div class="col-md-4">
      <img src="${info.image}" class="img-fluid rounded-start h-100" alt="...">
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h6 class="card-title">Release : ${info.releaseDate}</h6>
    <p><strong>ChipSet : </strong>  ${info.mainFeatures.chipSet}.</p>
    <p><strong>Display size : </strong> ${info.mainFeatures.displaySize}.</p>
    <p><strong>Memory : </strong>  ${info.mainFeatures.memory}</p>
    <p><strong>sensors : </strong>  ${info.mainFeatures.sensors}</p>
    <p><strong>storage : </strong>  ${info.mainFeatures.storage}</p>
    <p><strong>Bluetooth : </strong>  ${info.others?.Bluetooth}</p>
    <p><strong>GPS : </strong>  ${info.others?.GPS}</p>
    <p><strong>Radio : </strong>  ${info.others?.Radio}</p>
    <p><strong>NFC : </strong>  ${info.others?.NFC}</p>
    <p><strong>USB : </strong>  ${info.others?.USB}</p>
    <p><strong>WLAN : </strong>  ${info.others?.WLAN}</p>
    </div>
    </div>
  </div>
    `

  
   
  console.log(info);
}

