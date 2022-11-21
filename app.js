const fillname = document.querySelectorAll("#input_name")
const fillemail = document.querySelectorAll("#input_email")
const fillphone = document.querySelectorAll("#input_phone")
const addbutton /*submitbutton*/ = document.querySelector("#add_button")
const error = document.querySelectorAll("#error");
const tbody = document.querySelectorAll("#tbody");
// const inputTable /*firsttable*/ = document.uerySelector("#input_table")
// const outputTable /*secondtable*/ = document.querySelector("#output_table")

addbutton.addEventListener('click', ()=>{
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
     if(contact.value==""){
        error.innerText="please enter your Phone number"
        return;
     }else if(contact.value.length!==10){
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

     const delete_row = document.querySelectorAll(".del");

     for(const del of delete_row){
        del.removeEventListener('click', function(){
            let confirm = window.confirm("are you sure you want to delete this??")
                    //confirm is like alert it has ok and cancel button
            if(confirm){
                this.parentNode.parentNode.remove();
            }
        })
     }

})
