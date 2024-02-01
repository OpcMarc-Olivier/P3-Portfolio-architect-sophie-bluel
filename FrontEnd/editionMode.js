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
        divModifier.classList.add("btn-modifier")
        divModifier.innerHTML =`<i class="fa-regular fa-pen-to-square"></i><a>Modifier</a>`
        const btnModifier = document.querySelector("#portfolio h2")
        btnModifier.appendChild(divModifier)
        const modalLink = document.querySelector("#portfolio h2 a")
        console.log(modalLink);
        modalLink.classList.add("js-modal")
        modalLink.setAttribute("href","#modal-body")
        modalLink.setAttribute("id","modal-link" )
       


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

