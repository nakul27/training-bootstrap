//global var
let form = document.getElementById("myProfile");
let errorMsg = document.getElementsByClassName("error");
let editProf = document.getElementById("editProfile");
form.saveProfile.disabled = true;
editProf.updateProf.disabled = true;
let newArray = [];

window.addEventListener("load",()=>{
   form.saveProfile.addEventListener("click",()=>{
    saveProfile();
    createProfileDiv();
   })
  editProf.updateProf.addEventListener("click",()=>{
    editProfile();
  }); 

});


// Myform validation----
let bioValidation = ()=>{
   
    if ((form.inputBio.value !== '') && (!(inputBio.value.match("[a-zA-Z]+")))){
        errorMsg[0].innerHTML = 'please enter valid value for bio';
        // form.saveProfile.disabled = false;
        return false;
    }
    else{
        errorMsg[0].innerHTML ='';
        form.saveProfile.disabled = false;
        return true;
    }
}

// emailValidate - 
let emailValidate = ()=>{
   if (!(form.inputEmailadd.value.includes('.')) || !(form.inputEmailadd.value.includes('@'))) {
      errorMsg[1].innerHTML = 'email must include . and @';
      form.inputEmailadd.focus();
      console.log(form.inputEmailadd.value);
      return false;
    }else { 
         if( form.inputEmailadd.value.indexOf('@') !== form.inputEmailadd.value.lastIndexOf('@')) {
            errorMsg[1].innerHTML = 'multiple  @ is not  allowed';
            console.log(form.inputEmailadd.value.indexOf('@'));
            console.log(form.inputEmailadd.value.lastIndexOf('@'));
            form.inputEmailadd.value.focus();
            return false;
          }
        errorMsg[1].innerHTML = ' ';
        form.saveProfile.disabled =false;
        return true;
    }
}

let passValidation = () =>{

    if ((form.inputPassword.value.length < 6 ) || (form.inputPassword.value.length > 8 )) {
        errorMsg[2].innerHTML = 'password must be 6 to 8 digit long';
        // form.inputPassword.value.focus();
        return false;
    }else { 
       if( (form.inputPassword.value.search(/[0-9]/) < 0 ) ||
              (form.inputPassword.value.search(/[a-z]/) < 0 ) ||
              (form.inputPassword.value.search(/[A-Z]/) < 0 ) 
            // ||  (form.inputPassword.value.search( /[!#$%&?'"]  ))
              ){
         
           errorMsg[2].innerHTML = 'password must contain digit,char small and capital, spl char';
           form.inputPassword.value.focus(); 
           return false;    
        }
        errorMsg[2].innerHTML = '';
        form.saveProfile.disabled =true;
        return true;
    }
}

let urlValidation = () =>{
    if ((!(form.inputWebsite.value.includes("http://")) || !(form.inputWebsite.value.includes(".")))){
        errorMsg[3].innerHTML = 'URL  must include . and http:// ';
        form.inputWebsite.focus();
        console.log(form.inputWebsite.value);
        return false;
    }else {
        errorMsg[3].innerHTML = ' ';
        form.saveProfile.disabled = false;    
        return true;
    }
 } 

//  debugger
 let saveProfile = () =>{
    if ((form.inputBio.value == '') || ( form.inputEmailadd.value == '') ||
     (form.inputPassword.value == '') || (form.inputWebsite.value == '')){
       errorMsg[3].innerHTML = 'please enter complete detail';
        form.saveProfile.disabled = true;
    }else{
    //   const profile ={
    //     bio : form.inputBio.value,
    //     email : form.inputEmailadd.value,
    //     password : form.inputPassword.value,
    //     website : form.inputWebsite.value
    //   }  
    //   console.log('profile :-',profile);

    //   const prof = new FormData(form);
    //   const profileObj = Object.fromEntries(prof);
    //   console.log(profileObj);


      form.saveProfile.disabled = false;
    }
}

form.inputBio.addEventListener("change",bioValidation);
form.inputEmailadd.addEventListener("change",emailValidate);
 form.inputPassword.addEventListener("change",passValidation);
 form.inputWebsite.addEventListener("change",urlValidation);
     
   
//edit-Profile ------------
let companyValid = ()=>{
    if (!(editProf.inputCompany.value.match("[a-zA-Z]+"))){
        errorMsg[4].innerHTML = 'please enter valid value for company'
        return false;
    }
    else{
        errorMsg[4].innerHTML ='';
        editProf.updateProf.disabled = false;
        return false;
    }
}
let usernameValid = () =>{
    if (!(editProf.inputUser.value.match("[a-zA-Z]+"))){
        errorMsg[5].innerHTML = 'please enter valid value for username'
        return false;
    }
    else{
        errorMsg[5].innerHTML ='';
        editProf.updateProf.disabled = false;
        return false;
    }
}

let emailValid = () =>{
    if (!(editProf.inputEmailId.value.includes('.')) || !(editProf.inputEmailId.value.includes('@'))) {
        errorMsg[6].innerHTML = 'email must include . and @';
        editProf.inputEmailId.focus();
        console.log(editProf.inputEmailId.value);
        return false;
    }else {
       if( editProf.inputEmailId.value.indexOf('@') !== editProf.inputEmailId.value.lastIndexOf('@')) {
          errorMsg[6].innerHTML = 'multiple  @ is not  allowed';
          console.log(editProf.inputEmailId.value.indexOf('@'));
          console.log(editProf.inputEmailId.value.lastIndexOf('@'));
          editProf.inputEmailId.value.focus();
          return false;
      }
        errorMsg[6].innerHTML = ' ';
        return true;
    }
}

let firstnameValid = () =>{
    if (!(editProf.inputFirstname.value.match("[a-zA-Z]+"))){
        errorMsg[7].innerHTML = 'please enter valid value for firstname'
        return false;
    }
    else{
        errorMsg[7].innerHTML ='';
        editProf.updateProf.disabled = false;
        return false;
    }
}
let lastnameValid = () =>{
    if (!(editProf.inputlastname.value.match("[a-zA-Z]+"))){
        errorMsg[8].innerHTML = 'please enter valid value for lastname'
        return false;
    }
    else{
        errorMsg[8].innerHTML ='';
        editProf.updateProf.disabled = false;
        return false;
    }
}

let addressValid = ()=>{
    if (!(editProf.inputAddress.value.match("[a-zA-Z0-9]+"))){
        errorMsg[9].innerHTML = 'please enter valid value for address'
        return false;
    }
    else{
        errorMsg[9].innerHTML ='';
        editProf.updateProf.disabled = false;
        return false;
    }
}

let cityValid =()=>{
    if (!(editProf.inputCity.value.match("[a-zA-Z]+"))){
        errorMsg[10].innerHTML = 'please enter valid value for city'
        return false;
    }
    else{
        errorMsg[10].innerHTML ='';
        editProf.updateProf.disabled = false;
        return false;
    }
}

let postalValid = () =>{
    if (isNaN(editProf.inputPostalCode.value) === true){
        errorMsg[11].innerHTML = 'please enter numeric value for Postal Code'
        return false;
    }
    else{
        errorMsg[11].innerHTML ='';
        editProf.updateProf.disabled = false;
        return false;
    }
}
let countryValid = () =>{
    if (editProf.inputCountry.value == " " ){
    // if (editProf.inputCountry.selectedIndex == 0 ){
        errorMsg[12].innerHTML = 'please selct country from the list';
        console.log(editProf.inputCountry.value);
        alert(editProf.inputCountry.value);
        editProf.inputCountry.focus();
        editProf.updateProf.disabled= true;
    }
    errorMsg[12].innerHTML ='';
    console.log(editProf.inputCountry.value);
    alert(editProf.inputCountry.value);
    editProf.updateProf.disabled = false;
    return true;
}


let aboutmeValid =()=>{
    if (!(editProf.inputAboutme.value.match("[a-zA-Z]+"))){
        errorMsg[13].innerHTML = 'please enter text'
        return false;
    }
    else{
        errorMsg[13].innerHTML ='';
        editProf.updateProf.disabled = false;
        return false;
    }
}

// debugger
let editProfile = () =>{
    if (
        (editProf.inputCompany.value == '') || (editProf.inputUser.value == '') ||
     (editProf.inputEmailId.value == '') || (editProf.inputFirstname.value == '') ||
     (editProf.inputlastname.value == '') ||(editProf.inputAddress.value == '') ||
     (editProf.inputCity.value == '') || (editProf.inputPostalCode.value == '') ||
     (editProf.inputCountry.value == '') || (editProf.inputAboutme.value == '')
     )
     {
       errorMsg[13].innerHTML = 'please enter complete detail for updation';
        editProf.updateProf.disabled = true;
    }else{
        editProf.updateProf.disabled = false;
    }
}


// display output in new div
let createProfileDiv = ()=>{
    console.log("inside create");
    var divNew = document.createElement("div");
    divNew.setAttribute('id','displayRsl');

    var tbl = document.createElement('table');
    var tblhead = document.createElement('thead');
    var tblHeadRow = document.createElement('tr');
    var tblBody = document.createElement('tbody');
    var tblRow = document.createElement('tr');
    
    // let newArray = [form.inputBio.value,form.inputEmailadd.value,
    //     form.inputPassword.value,form.inputWebsite.value];
    let newArray = [{"Bio":form.inputBio.value},{"Email":form.inputEmailadd.value},
        {"Password":form.inputPassword.value},{"Website":form.inputWebsite.value}];

    console.log(newArray);
    document.getElementById("displayOutput").appendChild(divNew);

   for(var i=0; i<newArray.length;i++){
    var keys = Object.keys(newArray[i]);
    
    // for(var key in newArray){
        const tblHeadCell  = document.createElement('th');
        const cellHeadText = document.createTextNode(keys); //
        tblHeadCell.appendChild(cellHeadText);
        tblHeadRow.appendChild(tblHeadCell);
        console.log(tblHeadRow);  
       
        const tblCell  = document.createElement('td');
        const cellText = document.createTextNode(newArray[i][keys]);  //element[key]);
        console.log(newArray[i][keys]);  
        // console.log(newArray[keys]);   //undefined 
        tblCell.appendChild(cellText);
        tblRow.appendChild(tblCell);
        console.log(tblRow);
    }

    tblhead.appendChild(tblHeadRow);
    tbl.appendChild(tblhead);
    console.log(tbl);
    
    tblBody.appendChild(tblRow);
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    // tbl.setAttribute("border", "2");
    console.log(tbl);
    divNew.appendChild(tbl);



    // for(var key in newArray){
    //     const tblCell  = document.createElement('th');
    //     const cellText = document.createTextNode(key); //
    //     tblCell.appendChild(cellText);
    //     tblHeadRow.appendChild(tblCell);
    // console.log(tblHeadRow);   
    // }

    // tblhead.appendChild(tblHeadRow);
    // tbl.appendChild(tblhead);
    // console.log(tbl);
    
    // newArray.forEach( (element) =>{
    //      const tblCell  = document.createElement('td');
    //      const cellText = document.createTextNode(element);
    //      tblCell.appendChild(cellText);
    //     //  tblCell.style.border("thick solid #000FF");
    //      tblRow.appendChild(tblCell);
    //      console.log(tblRow);
    //  })
    // tblBody.appendChild(tblRow);
    // tbl.appendChild(tblBody);
    // document.body.appendChild(tbl);
    // tbl.setAttribute("border", "2");
    // console.log(tbl);
    // divNew.appendChild(tbl);

    
    

    
    
    // var displayResult = document.createElement('div');
    // displayResult.setAttribute('id','displayRsl');
    // var ul = document.createElement('ul');
    // document.body.appendChild(displayResult);
    // displayResult.appendChild(ul);
    // for(i=0;i<=newArray.length;i++){
    //     var li = document.createElement('li');
    //     ul.appendChild(li);
    //     li.innerHTML=li.innerHTML +newArray[i];
    // }

    // divNew.appendChild(displayResult);
    // console.log(divNew);

    // divNew.innerHTML = '<h2> Profile Data for Edit/Update </h2>';
    // const para = document.createElement("p");
    // para.innerHTML = "this is paragraph";
    // divNew.innerHTML = "hello";
    // divNew.style.color = "red";

    // const bioValue = 
    // let li = document.createElement('li');
    // li.textContent = 'bio value :- ';
    // divNew.appendChild(li);
    // li = document.createElement('li');
    // li.textContent = form.inputBio.value;
    // divNew.appendChild(li);

    // li = document.createElement('li');
    // li.textContent = 'Email :-';
    // divNew.appendChild(li);
    // li = document.createElement('li');
    // li.textContent = form.inputEmailadd.value;
    // divNew.appendChild(li);

    // li = document.createElement('li');
    // li.textContent = 'password :-';
    // divNew.appendChild(li);
    // li = document.createElement('li');
    // li.textContent = form.inputPassword.value;
    // divNew.appendChild(li);

    // li = document.createElement('li');
    // li.textContent = 'website :-';
    // divNew.appendChild(li);
    // li = document.createElement('li');
    // li.textContent = form.inputWebsite.value;
    // divNew.appendChild(li);

    // const node = document.createElement("li");
    // const textnode = document.createTextNode("Bio..");
    // const textnodeVal = document.createTextNode(form.inputBio.value);
    // node.appendChild(textnode);
    // divNew.appendChild(node);

}

// editProf.inputCompany.addEventListener("change",companyValid);
// editProf.inputUser.addEventListener("change",usernameValid);
// editProf.inputEmailId.addEventListener("change",emailValid);
// editProf.inputFirstname.addEventListener("change",firstnameValid);
// editProf.inputlastname.addEventListener("change",lastnameValid);
// editProf.inputAddress.addEventListener("change",addressValid);
// editProf.inputCity.addEventListener("change",cityValid);
// editProf.inputPostalCode.addEventListener("change",postalValid);
// editProf.inputCountry.addEventListener("change",countryValid);
// editProf.inputAboutme.addEventListener("change",aboutmeValid);






// let removeMyProfile = ()=>{
//     const element = document.getElementById('myProfile');
//     element.remove();
// }

// let createMyProfile = ()=>{
//     const newDiv = document.createElement("div");
    
// }
//   document.getElementById('myProfile').innerHTML = document.getElementById('editProfile').innerHTML;
 // console.log(form);

//  else if (!(inputEmailadd.match(emailExp))){
    //     errorMsg[1].innerHTML = 'email is not valid';
    //     form.inputEmailadd.focus();
    //     return false;
    // }