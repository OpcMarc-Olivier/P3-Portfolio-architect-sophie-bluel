export function appJs () {

    let modal = null
    const focusableSelector = "input,a,button,textarea"
    let focusables = []
    let prevouislyFocusElement = null
    
    const openModal = function(e) {
        e.preventDefault()
        console.log("j'ai cliqué sur le bouton qui ouvre la modal");
        modal = document.querySelector(e.target.getAttribute('href'))
        console.log(modal);
        focusables = Array.from(modal.querySelectorAll(focusableSelector))
        prevouislyFocusElement = document.querySelector(":focus")
        focusables [0].focus( )
        // modal.setAttribute("style","display = null")
        modal.style.display = null;
        console.log(modal);
        modal.removeAttribute ("aria-hidden")
        modal.setAttribute ("aria-modal", "true")
    
        modal.addEventListener("click", closeModal)
        modal.querySelector(".exit-modal").addEventListener("click", closeModal)
        modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation)
        
        


        async function getWorksModal () {
            const reponse = await fetch ("http://localhost:5678/api/works")
            console.log(reponse);
            const works = await reponse.json()
            const worksValue = JSON.stringify(works)
            console.log(works);

            const galleryGrid = document.querySelector(".gallery-modal")
        
            for (let i=0 ; i< works.length ; i++) {
                
                const maBaliseFigure = document.createElement ("figure")
                galleryGrid.appendChild (maBaliseFigure)
                
                const maBaliseImg = document.createElement ("img")
                const trashIcon = document.createElement("div")
                

                maBaliseImg.src = `${works[i].imageUrl}`
                trashIcon.setAttribute("id","trash-icon")
                trashIcon.innerHTML= `<i class="fa-solid fa-trash-can fa-sm"></i>`

                maBaliseFigure.appendChild(maBaliseImg)
                maBaliseFigure.appendChild(trashIcon)
        
                console.log("image créée via l'API");
            }
        }
        
            getWorksModal() 

    
    }

    const closeModal = function (e) {
        if (modal=== null) return
        if (prevouislyFocusElement !== null) prevouislyFocusElement.focus()
        e.preventDefault ()
        // modal.setAttribute("style","display: none;")
        modal.style.display = 'none';
        console.log(modal);
        modal.setAttribute ("aria-hidden", "true")
        modal.removeAttribute ("aria-modal")
        modal.removeEventListener ("click",closeModal)
        modal.querySelector(".exit-modal").removeEventListener("click", closeModal)
        modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation)
        modal = null
        const galleryModalGrid = document.querySelector(".gallery-modal")
        galleryModalGrid.innerHTML = ""
    }

    const stopPropagation = function (e){
        e.stopPropagation()
    }

    const focusInModal = function (e) {
        e.preventDefault()
        console.log(focusables);
    }



document.querySelectorAll(".js-modal").forEach(a =>{
    a.addEventListener("click", openModal) 
})

window.addEventListener("keyup", function (e) {
    if(e.key === "Escape" || e.key === "Esc") {closeModal(e)}
    if(e.key === "Tab" && modal !== null) {focusInModal(e)}
})


}