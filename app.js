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
      
        // Initialize Firebase
const app = initializeApp(firebaseConfig);
var database = getDatabase(app);
const data = ref(database,"data")
const add = document.getElementById('add')
document.getElementById('btn').addEventListener('click',function(){
  const items = document.getElementById('item').value
  push(data,items)
  item.value =""
 
  
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
  add.innerHTML =" "
  console.log(Object.keys(snapshot.val()))
  for (let i=0 ; i <values.length; i++){
    appendListElement(values[i])
  }  
})

function appendItems(values){
  add.innerHTML += `<li>${values}</li>`;

}
document.getElementById('removeBtn').addEventListener('click', function(){
  remove(data).then(() => {
    location.reload();
  });
})


function appendListElement(values){
  let newEl = document.createElement("li")
  newEl.textContent =values
  add.append(newEl)
  newEl.addEventListener('dblclick',function(){
    alert('double clicked')
  })
}
//push(data, "hello")


