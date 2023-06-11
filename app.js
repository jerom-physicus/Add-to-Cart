import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref,push,onValue, remove } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
const firebaseConfig = {
          apiKey: "AIzaSyAhty6gin7fREZ6wgY3qAjDS5bflDYsXFQ",
          authDomain: "test-3cd1c.firebaseapp.com",
          databaseURL: "https://test-3cd1c-default-rtdb.firebaseio.com",
          projectId: "test-3cd1c",
          storageBucket: "test-3cd1c.appspot.com",
          messagingSenderId: "1002535204986",
          appId: "1:1002535204986:web:e01e53e65c5d1ca533e3c3",
          measurementId: "G-91GW9MGT8X"
        };
      
        
        //getting data from local storage

const localdata = localStorage.getItem('user_name') 
const username =localdata.replace('@gmail.com','') 
const localdata_cart = localStorage.getItem('cart_name')
document.getElementById('carthead').innerHTML = localdata_cart;  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var database = getDatabase(app);
const data = ref(database,username)





const add = document.getElementById('add')
document.getElementById('btn').addEventListener('click',function(){
  const items = document.getElementById('item').value
  if (items == ''|| items==' '|| items == '  '){
    alert("can't add null item")
  }
  else{
    push(data,items)
    item.value =""
  }
 
 
  
  //onValue(data,function(snapshot){
    //const values =Object.values(snapshot.val())
    //for (let i=0; i <values.length; i++){
      //appendItems(values[i])
      //console.log(values[i])
    //}
  //}) 
})
onValue(data,function(snapshot){
  let values = Object.values(snapshot.val())
  let keys = Object.keys(snapshot.val())
  let setdata = Object.entries(snapshot.val())
  add.innerHTML =" "
  for (let i=0 ; i <values.length; i++){
    let itemsarray = setdata[i]
    let datakey = itemsarray[0]
    let datavalue = itemsarray[1]
    appendListElement(datavalue,datakey)
  }  
})


function appendListElement(values,keys){
  let newEl = document.createElement("li")
  newEl.textContent =values
  add.append(newEl)
  newEl.addEventListener('click',function(){
    document.getElementById('alert').style.display = 'block'
    document.getElementById('remove-alert-h').innerHTML =`Remove "${values}" from cart?` 
    document.getElementById('remove-items').addEventListener('click',function(){
      removeItemsBykey(keys)
      document.getElementById('alert').style.display = 'none'

      //location.reload();
    })
    
  })
}
function removeItemsBykey(keys){
  remove(ref(database,`data/${keys}`))


}

document.getElementById('removeBtn').addEventListener('click', function(){
  document.getElementById('alert2').style.display = 'inline'
  //remove(data).then(() => {
    //location.reload();
  //});
})

function appendItems(values){
  add.innerHTML += `<li>${values}</li>`;

}
document.getElementById('close').addEventListener('click',function(){{
  document.getElementById('alert').style.display = 'none'
  document.getElementById('alert2').style.display = 'none'
}})

document.getElementById('close2').addEventListener('click',function(){{
  document.getElementById('alert2').style.display = 'none'
}})

document.getElementById('remove-all-items').addEventListener('click',function(){
  remove(data).then(() => {
    location.reload();
  });
})
//push(data, "hello")


