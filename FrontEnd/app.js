export function appJs () {

    let modal = null
    let modal2 = null
    const focusableSelector = "input,a,button,textarea"
    let focusables = []
    let prevouislyFocusElement = null
    
    const openModal = function(e) {
        e.preventDefault()
        console.log("j'ai cliqué sur le bouton qui ouvre la modal");
        // modal = document.querySelector("e.target.getAttribute('href')")
        modal = document.querySelector("#modal-body")
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
            galleryGrid.innerHTML =""
        
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
        modal.querySelector("#exit-cross-modal").removeEventListener("click", closeModal)
        modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation)
        modal = null
        const galleryModalGrid = document.querySelector(".gallery-modal")
        galleryModalGrid.innerHTML = ""
    }

    const closeModal2 = function(e) {
        if ( modal2 === null ) return
        if (prevouislyFocusElement !== null) prevouislyFocusElement.focus()
        e.preventDefault ()
        modal2.style.display = 'none';
        console.log(modal2);
        modal2.setAttribute ("aria-hidden", "true")
        modal2.removeAttribute ("aria-modal")
        modal2.removeEventListener ("click",closeModal2)
        modal2.querySelector("#exit-cross-modal2").removeEventListener("click", closeModal)
        modal2.querySelector(".js-modal2-stop").removeEventListener("click", stopPropagation)
        modal2 = null

        // const fileInput = document.querySelector("#fileInput")
        // console.log(fileInput);
        // fileInput.removeEventListener("change", loadPicture)

       

    }


    const stopPropagation = function (e){
        e.stopPropagation()
    }

    const focusInModal = function (e) {
        e.preventDefault()
        console.log(focusables);
    }

    const openModal2 = function (e) {
        e.preventDefault()
        console.log("j'ai cliqué sur le bouton qui ouvre la modal2");
        modal2 = document.querySelector("#modal-body2")
        console.log(modal2);
        focusables = Array.from(modal2.querySelectorAll(focusableSelector))
        prevouislyFocusElement = document.querySelector(":focus")
        focusables [0].focus( )
        modal2.style.display = null;
        console.log(modal2);
        modal2.removeAttribute ("aria-hidden")
        modal2.setAttribute ("aria-modal", "true")
    
        modal2.addEventListener("click", closeModal2)

        const modalExit2 = document.querySelector("#exit-cross-modal2")
        modalExit2.addEventListener("click",closeModal2)

        // modal2.querySelector("#exit-cross-modal2").addEventListener("click", closeModal2)
        modal2.querySelector(".js-modal2-stop").addEventListener("click", stopPropagation)
  
        const previousPageArrow = document.querySelector("#previous-page-arrow")
        console.log(previousPageArrow);
        previousPageArrow.addEventListener("click",(e)=>{
            closeModal2(e)
            openModal(e)
        })

    //     const modalExit2 = document.querySelector(".exit-cross-modal2")
    //     modalExit2.addEventListener("click",closeModal2)

        const fileInput = document.querySelector("#fileInput")
        console.log(fileInput);
        fileInput.addEventListener("change", loadPicture)
    }

    const loadPicture = function (e) {
        const photoPreview = document.querySelector(".photo-wrapper")
        photoPreview.innerHTML = ""

       let pictureLoaded = e.target.files
       for (let i=0 ; i<pictureLoaded.length; i++) {
        console.log(pictureLoaded [i]);
        const img = document.createElement("img")
        img.src = window.URL.createObjectURL(pictureLoaded[i])
        console.log(img);
        photoPreview.appendChild(img)
       }
       



       

    }


document.querySelectorAll(".js-modal").forEach(a =>{
    a.addEventListener("click", openModal) 
})

document.querySelector("#btn-add-modal").addEventListener("click",(e)=>{
    closeModal(e)
    openModal2 (e)

})

window.addEventListener("keyup", function (e) {
    if(e.key === "Escape" || e.key === "Esc") {closeModal(e)}
    if(e.key === "Tab" && modal !== null) {focusInModal(e)}
})


}