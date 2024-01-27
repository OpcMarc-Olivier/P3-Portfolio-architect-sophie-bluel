  export function editionMode () {

        const body = document.querySelector("body")
        const editMode = document.createElement ("div")
        editMode.innerHTML =`<span><i class="fa-regular fa-pen-to-square"></i></span><p>Mode Edition</p>`
        body.prepend(editMode)
        editMode.classList.add("edit-mode")

        const logOut = document.getElementById("logout")
        console.log(logOut);
        logOut.innerHTML = ""
        logOut.innerHTML = "logout"

        const divModifier = document.createElement ("div")
        divModifier.innerHTML =`<span><i class="fa-regular fa-pen-to-square"></i></span><p>Modifier</p>`
        const btnModifier = document.querySelector("#portfolio h2")
        btnModifier.appendChild(divModifier)
        divModifier.classList.add("btn-modifier")


        const filtres = document.querySelector(".filtres")
        filtres.classList.add("filtres-display-none")

        // Listener LOGOUT

        logOut.addEventListener("click", function (event) {
            event.preventDefault()
            window.localStorage.removeItem("token")
            const token = window.localStorage.getItem("token")
            console.log(token);
            window.location.href="index.html"
            console.log("je me suis déconnecté");
        })




}

