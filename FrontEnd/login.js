// const btnEnvoyer = document.querySelector("#login h2")
// btnEnvoyer.addEventListener ("click", ()=>{


    
    // const emailLogin = document.getElementById("email")
    // const email = emailLogin.value
    // console.log(email);
    // const passwordLogin = document.getElementById("pass")
    // const password = passwordLogin.value
    // console.log(password);

    // const iDLogin = {"email": email, "password": password}
    // const chargeUtile = JSON.stringify(iDLogin)
    

    // FUNCTION

async function postLogin (){

    const loginForm = document.querySelector("#login-form")
    loginForm.addEventListener ("submit",async function(event){
            event.preventDefault()
            const emailLogin = document.getElementById("email")
            const email = emailLogin.value
            console.log(email);
            const passwordLogin = document.getElementById("pass")
            const password = passwordLogin.value
            console.log(password);
        
            const iDLogin = {"email": email, "password": password}
            const chargeUtile = JSON.stringify(iDLogin)
            const reponse = await fetch("http://localhost:5678/api/users/login", {
                method : "POST",
                headers: { "Content-Type": "application/json" },
               body: chargeUtile
            })
            console.log(reponse)
            console.log(`status: ${reponse.status}`);
            const loginReponse = await reponse.json ()
            console.log(loginReponse);
            console.log(loginReponse.token);

             // Token saved into LocalStorage

            const valeurLoginReponse = JSON.stringify(loginReponse.token)
    console.log(valeurLoginReponse)
    window.localStorage.setItem("token",valeurLoginReponse)
    window.localStorage.getItem("token")
  
    const titlePassword = document.querySelector(".mdp")
    if (reponse.status===200) {
        alert("Vous êtes connecté.")
        window.location.href ="index.html"
        titlePassword.innerHTML = ""
        titlePassword.innerHTML = "Vous êtes connecté!"
        console.log("Vous êtes connecté!")
    }else{
        titlePassword.innerHTML = ""
        titlePassword.innerHTML = "Mot de passe incorrect!"
        titlePassword.classList.add("wrong-pass")
        passwordLogin.innerHTML = ""
        console.log("Mot de passe incorrect")
        }
        })


   

    
    }

    
    // END FUNCTION

    const valueToken = window.localStorage.getItem("token")
    console.log(valueToken);
    if (valueToken===null) {
        postLogin()
    }else{
        window.location.href= "index.html"
        console.log("Vous êtes connecté");}


    
