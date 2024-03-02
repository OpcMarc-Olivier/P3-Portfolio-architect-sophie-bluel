import {getWorks} from "./works.js";
export function appJs () {

    

    let modal = null
    let modal2 = null
    let previewLoaded = ""
    const focusableSelector = "input,a,button,textarea"
    let focusables = []
    let prevouislyFocusElement = null
    let fileInput = document.querySelector("#fileInput")
    
    const openModal = function(e) {
        e.preventDefault()
        console.log("j'ai cliqué sur le bouton qui ouvre la modal");
        
        modal = document.querySelector("#modal-body")
        focusables = Array.from(modal.querySelectorAll(focusableSelector))
        prevouislyFocusElement = document.querySelector(":focus")
        focusables [0].focus( )
        
        modal.style.display = null;
        modal.removeAttribute ("aria-hidden")
        modal.setAttribute ("aria-modal", "true")
    
        modal.addEventListener("click", closeModal)
        modal.querySelector(".exit-modal").addEventListener("click", closeModal)
        modal.querySelector(".js-modal-stop").addEventListener("click", stopPropagation)

        async function getWorksModal () {
            const reponse = await fetch ("http://localhost:5678/api/works")
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
                
                trashIcon.classList.add("trash-icon")
                trashIcon.innerHTML= `<i class="fa-solid fa-trash-can fa-sm" id="${works[i].id}"></i>`

                maBaliseFigure.appendChild(maBaliseImg)
                maBaliseFigure.appendChild(trashIcon)
        
                console.log("image créée via l'API");
            }
            
            deleteWorks ()
            
        }
        
        getWorksModal() 
            
    }

    function deleteWorks () {
        const trashIcons = document.querySelectorAll(".gallery-modal .fa-trash-can")
        for (let i=0; i<trashIcons.length; i++) {
            trashIcons[i].addEventListener("click", async function (e) {
                e.preventDefault()
                console.log(e.target.id);
                const iD = e.target.id
                const tokenTest = window.localStorage.getItem("token")
                console.log(tokenTest);
                const token =  JSON.parse(window.localStorage.getItem("token"))
                console.log(token);
                console.log(trashIcons[i]);
                const reponse = await fetch(`http://localhost:5678/api/works/${iD}`, {
                method: 'DELETE',
                headers: {'Authorization': 'Bearer '+ token} 
                })
                console.log(reponse);
                if (reponse.status===204 || reponse.status ===200) {
                    alert("Le projet à bien été suprrimé.")
                    closeModal(e)

                const galleryGrid = document.querySelector(".gallery")
                galleryGrid.innerHTML= ""
                getWorks(e)
                }
            })
        }
    }
    

    const closeModal = function (e) {
        if (modal=== null) return
        if (prevouislyFocusElement !== null) prevouislyFocusElement.focus()
        e.preventDefault ()
        modal.style.display = 'none';
        modal.setAttribute ("aria-hidden", "true")
        modal.removeAttribute ("aria-modal")
        modal.removeEventListener ("click",closeModal)
        modal.querySelector("#exit-cross-modal").removeEventListener("click", closeModal)
        modal.querySelector(".js-modal-stop").removeEventListener("click", stopPropagation)
        modal = null
        const galleryModalGrid = document.querySelector(".gallery-modal")
        galleryModalGrid.innerHTML = ""
    }

    function resetPicturePreview (e) {
        e.preventDefault
        const imgPreviewCreated= document.querySelectorAll(".photo-wrapper img")
        for (let i=0; i<imgPreviewCreated.length;i++) {
            imgPreviewCreated[i].remove()
        }
        
        const photoPreviewEmpty = document.querySelector(".photo-wrapper-content")
        photoPreviewEmpty.style.display = null
        const formModal2 = document.querySelector("#add-work")
        formModal2.reset()
        
        console.log(fileInput.files);
        
    
    }

    const closeModal2 = function(e) {
        if ( modal2 === null ) return
        if (prevouislyFocusElement !== null) prevouislyFocusElement.focus()
        e.preventDefault ()
        
        resetPicturePreview (e)

        

        modal2.style.display = 'none';
        modal2.setAttribute ("aria-hidden", "true")
        modal2.removeAttribute ("aria-modal")
        modal2.removeEventListener ("click",closeModal2)
        modal2.querySelector("#exit-cross-modal2").removeEventListener("click", closeModal)
        modal2.querySelector(".js-modal2-stop").removeEventListener("click", stopPropagation)
        modal2 = null
        fileInput.removeEventListener("change",loadPicture)

        
    }

    const stopPropagation = function (e){
        e.stopPropagation()
    }

    const focusInModal = function (e) {
        e.preventDefault()
        console.log(focusables);
    }

    function loadPicture () {

        console.log(this.files);
        
        if (this.files.length === 0) {
            console.log("Vous n'avez sélectionné aucun fichier");
            return
        }
        const file = this.files[0]
        const fileReader = new FileReader ()
        fileReader.readAsDataURL (file)
        fileReader.addEventListener('load', (e)=>{
            console.log(previewLoaded);
            if (previewLoaded===true) {
                const imgPhotoWrapper = document.querySelectorAll(".photo-wrapper img")
                for (let i=0; i<imgPhotoWrapper.length;i++){
                    imgPhotoWrapper[i].remove()
                }
            }
            const photoPreview = document.querySelector(".photo-wrapper")
        const photoPreviewEmpty = document.querySelector(".photo-wrapper-content")
        photoPreviewEmpty.style.display = 'none'
        const img = document.createElement("img")
        img.src = e.target.result
        photoPreview.appendChild(img)
        previewLoaded = true
        console.log(previewLoaded);
        })
    }

    const openModal2 = function (e) {
        e.preventDefault()
       const monInput = document.querySelector("#fileInput")
       console.log(monInput.files);
      
        console.log("j'ai cliqué sur le bouton qui ouvre la modal2");
        modal2 = document.querySelector("#modal-body2")
        
        focusables = Array.from(modal2.querySelectorAll(focusableSelector))
        prevouislyFocusElement = document.querySelector(":focus")
        focusables [0].focus( )
        modal2.style.display = null;
        
        modal2.removeAttribute ("aria-hidden")
        modal2.setAttribute ("aria-modal", "true")
    
        modal2.addEventListener("click", closeModal2)

        const modalExit2 = document.querySelector("#exit-cross-modal2")
        modalExit2.addEventListener("click",closeModal2)

        modal2.querySelector(".js-modal2-stop").addEventListener("click", stopPropagation)
  
        const previousPageArrow = document.querySelector("#previous-page-arrow")
        previousPageArrow.addEventListener("click",(e)=>{
            closeModal2(e)
            openModal(e)
        })

        // PREVIEW FILE
      

        const fileInput = document.querySelector("#fileInput")
        fileInput.addEventListener("change", loadPicture)
        

        // VALID FORM

        const newWorksTitle = document.querySelector("#title")
        let validateButton= document.querySelector("#btn-done-modal")
        const category = document.querySelector("#category")
    
        
        fileInput.addEventListener("input", validFormButton);
        newWorksTitle.addEventListener("change", validFormButton);
        category.addEventListener("change",validFormButton)
        
        function validFormButton() { 
            if (
                category.value !== "" &&
                fileInput.files.length > 0 && 
                newWorksTitle.value !== "" 
                ) {
                console.log("Le formulaire est VALIDE");
                validateButton.setAttribute("id","btn-done-modal-true")
            } else {
                console.log("Le formulaire n'est PAS VALIDE");
                validateButton.setAttribute("id","btn-done-modal" )
            }
        }
        
        
        
        
        // ADDWORK

        const formAddWork = document.querySelector("#add-work")
        formAddWork.addEventListener ("submit", async function (e) {
            e.preventDefault()

            function getCategoryFile () {
                const category = document.querySelectorAll("#category option")
                for (let i=0 ; i< category.length; i++) {
                    if (category[i].selected) {

                        const categorySelected = category [i].id
                        return categorySelected
                    }
                }
            }

            const newWorkPicture = document.getElementById("fileInput").files[0]
            const newWorksTitle = document.querySelector("#title").value
            const newWorkCategory = getCategoryFile ()
            
            

            const formData = new FormData
            formData.append ("image", newWorkPicture )
            formData.append ("title", newWorksTitle)
            formData.append ("category", newWorkCategory)


            const token =  JSON.parse(window.localStorage.getItem("token"))
            console.log(token);

            const reponse = await fetch ("http://localhost:5678/api/works",{
                method : "POST",
                headers: {'Authorization': 'Bearer '+ token},
                body : formData
            })
            console.log(reponse.status);
            if( reponse.status === 401) {
                alert("Echec de l'ajout du projet")
                console.log(reponse);}
            else {
                alert("Nouveau projet ajouté!")
                closeModal2 (e)
                const galleryGrid = document.querySelector(".gallery")
                galleryGrid.innerHTML= ""
                alert("J'actualise la galerie sans rechagement de la page")
                getWorks()
            }

        })


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