const fillname = document.querySelector("#input_name")
const fillemail = document.querySelector("#input_email")
const fillphone = document.querySelector("#input_phone")
const addbutton /*submitbutton*/ = document.querySelector("#add_button")
const error = document.querySelector("#error");
const tbody = document.querySelector("#tbody");
// const inputTable /*firsttable*/ = document.uerySelector("#input_table")
// const outputTable /*secondtable*/ = document.querySelector("#output_table")

addbutton.addEventListener('click', ()=>{
   // console.log("s");
    if(fillname.value==""){
        error.innerText = "please enter your name.."
        return;
    }
    if(fillemail.value==""){
        error.innerText="please enter your email.."
        return;
     }
     else if(!fillemail.value.includes("@")){
        error.innerText.value="invalid email. Please include @ in email"
        return;
     }
     if(fillphone.value==""){
        error.innerText="please enter your Phone number"
        return;
     }else if(fillphone.value.length!==10){
        error.innerText="please enter only 10 digits"
        return;
     }

     tbody.innerHTML += `<tr class="data">
     <td>${fillname.value}</td>
     <td>${fillemail.value}</td>
     <td>${fillphone.value}</td>
     <td><button class="del">Delete</button></td>
     </tr>`;

     fillname.value="";
     fillemail.value="";
     fillphone.value="";
     error.innerText="";

     
   })
   const delet = document.querySelector("#tbody");
// console.log(delet)
 //   for(const del in delet){
      delet.addEventListener('click', function(d){
          // let confirms = window.confirm("are you sure you want to delete this??")
                  //confirm is like alert it has ok and cancel button
          if(d.target.classList.contains('del')){
              d.target.parentNode.parentNode.remove();
          }
         //  console.log("s")
      })
 //   }
