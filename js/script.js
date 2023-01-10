let showNotification = (msg,type)=>{
  let bgColor;
   switch(type){
    case "success"  : 
     bgColor = "green";
     break;
     case "error" : 
     bgColor  = "red";
     break;
     default : 
     bgColor = "#000";
     break;
   }
   Toastify({
    text: msg,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: bgColor,
    
    },
    onClick: function(){} // Callback after click
  }).showToast();
}
function getValueElement(fieldId){
   return document.getElementById(fieldId).value;
}
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let users = [];

function getrandomValue(){
  // dlkfjsl
  return Math.random().toString(36).slice(2);
}

function formSubmition(){
  event.preventDefault();
   let firstName = getValueElement("firstName");
   let lastName = getValueElement("lastName");
   let email = getValueElement("email");
   let dob = getValueElement("dob");

   firstName = firstName.trim();
   lastName = lastName.trim();
   email = email.trim();
   if(firstName<3){
    showNotification("please enter your first name correctly", "error")
    return;

   }  
   if(!emailFormat.test(email)){
    showNotification("please enter valid email address", "error");
    return;
   }
   if(!dob){
    showNotification("please enter your dob", "error");
    return;
   }

  //  let user = {
  //    firstName,
  //    lastName,
  //    email,
  //    dob,
  //  }
  let user = new User(firstName,lastName,email,dob)

   user.id = getrandomValue();
   user.dateCreated = new Date().getTime();
   user.status = "active";
   user.role = "student";

   users.push(user);
   showNotification("successfully push user in the array", "success");
   console.log(user)
   

}

// constructor  constructor name must be start from captial latter
function User(firstName,lastName,email,dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.dob = dob;
}
// prototype use to make funtion in constructor
User.prototype.calculateAge = function(){
 let dob = new Date(this.dob);
 let currentDate = new Date();
 let month_diff = currentDate.getTime() - dob.getTime();
 console.log( "this is month difference",month_diff);
 let age_dt = new Date(month_diff);
 console.log("age_dt ",age_dt);
 let years = age_dt.getFullYear();
 console.log("year ", years);
 let age = Math.abs(years - 1970);

 return age;


}

let showTable = ()=>{

  let tableStartingCode = '<div class="table-responsive"><table class="table">'
  let tableEndingCode = '</table></div>'

  let tableHead = '<thead><tr><th scope="col">#</th> <th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">email</th><th scope="col">dob</th><th scope="col">age</th></tr></thead>'

  let tableBody = '';
  for(let i=0; i<users.length; i++){
    tableBody += ' <body><tr> <th scope="row">' +(i+1)+ '</th><td>'+users[i].firstName +'</td> <td>'+users[i].lastName +'</td> <td>'+users[i].email+'</td> <td>'+users[i].dob+'</td><td>'+users[i].calculateAge()+'</td></tr> </body>'

  }

  let table = tableStartingCode + tableHead + tableBody + tableEndingCode;
  showOutPUt(table);


}

let showOutPUt = (output)=>{
  document.getElementById("output").innerHTML = output;
}

let printUsers = ()=>{
  for(let user of users){
    console.log(user);
  }
}
let clearOutput = ()=>{
  showOutPUt(""); 
}