const moviename=async(mname,year)=>{
const resp= await fetch(`http://www.omdbapi.com/?s=${mname}&apikey=a321734d`);
const data=await resp.json()
const movies= data['Search'];
const moviefilter=movies.filter(element=>+element['Year']>=+year);
const container=document.getElementsByClassName('rootcontainer');
moviefilter.forEach(element => {
container[0].insertAdjacentHTML('afterend',
 `<div class="row">
 <div class="column">
 <div class="card">
 <img src= "${element['Poster']}">
 <div class="containerc">
   <h4><b>${element['Title']}</b></h4> 
   <p>${element['Year']}</p> 
 </div>
 </div>
 </div>
</div>`)

});
console.log(data);
}

const button=document.querySelector('.nbtn')

button.addEventListener('click',()=>{
const name=document.getElementById('movie').value;
const year=document.getElementById('movieyear').value;
moviename(name,year);
})

