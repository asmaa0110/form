
function isOnlyChars(value){
    return (/[^a-z]/.test(value)) //ma9louba ki yebda fama nombre i9olek true 
}

function isEmail(email) {
    var test1 = email.split("@").length == 2
    if(!test1) {
        return false
    }
    var test2 = email.split("@")[1].split(".").length == 2
    var domain = email.split("@")[1].split(".")[1]
    var test3 = isOnlyChars(domain)
    return test1 && test2 && !test3
}
function isPassWord (password) {
    var test =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    return test
}

  var i;
  var j;
  var alt;
//verify if all fields are not empty
document.addEventListener("click",function(event){
    event.preventDefault()
    if(event.target.className == "btn btn-primary"){
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var password2 = document.getElementById('exampleInputPassword2').value;
    var firstname=document.getElementById('firstname').value;
    var lastname=document.getElementById('lastname').value;
        
        if(firstname!=="" && lastname!==""  && password!=="" && password2!=="" && email!=="")    
            {//vérification nom 
                  if(isOnlyChars(firstname)){
                      window.alert("votre prénom ne dois pas contenir des numéros")
                  }
                  if (isOnlyChars(lastname)){
                    window.alert("votre nom ne dois pas contenir des numéros")
                  }
            //vérification mail
                 if(!isEmail(email)) {
                    window.alert("veuillez entrer une adresse valide")
                }
            //vérification mot de passe
            if(!isPassWord (password)) {
                window.alert("veuillez entrer un mot de passe valide")

            }
            //mdp identique
            if (password!==password2)
            window.alert("Les mots de passe ne sont pas identiques")
               
            else 
            window.alert("enregistrement effectué ")
                       
                 



            }
        
        else {
        window.alert("veuillez entrer vos données")     

        }
}
    
})