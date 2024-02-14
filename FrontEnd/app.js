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
                
                trashIcon.classList.add("trash-icon")
                trashIcon.innerHTML= `<i class="fa-solid fa-trash-can fa-sm" id="${works[i].id}"></i>`

                maBaliseFigure.appendChild(maBaliseImg)
                maBaliseFigure.appendChild(trashIcon)
        
                console.log("image créée via l'API");
            }
            
            
        }
        
        getWorksModal() 
        // const trashIcons = document.querySelectorAll(".gallery-modal i").forEach(i =>{
        //     i.addEventListener("click", async function (e) {
        //         e.preventDefault()
        //         console.log(e.target.id);
        //         const iD = e.target.id
        //        const token =  JSON.parse(window.localStorage.getItem("token"))
        //        console.log(token);
        //        const reponse = await fetch(`http://localhost:5678/api/works/${iD}`, {
        //         method: 'DELETE',
        //         headers: {'Authorization': 'Bearer '+ token} 
        //         })

        //         const worksDeleted = await reponse.json()
        //         console.log(worksDeleted);
            
               

        //     })
        // })
            
    }

    const deleteWorks = function (e) {
        let idWork = document.querySelector(e.target)
        console.log(idWork);
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

        // const loadPicture = function (e) {
        //     const photoPreview = document.querySelector(".photo-wrapper")
        //     photoPreview.innerHTML = ""
    
        //    let pictureLoaded = e.target.files
        //    for (let i=0 ; i<pictureLoaded.length; i++) {
        //     console.log(pictureLoaded[i].name);
        //     const img = document.createElement("img")
        //     img.src = window.URL.createObjectURL(pictureLoaded[i])
        //     photoPreview.appendChild(img)
        //    }
        // }

        function loadPicture (e) {
            console.log(this.files[0].name);
            if (this.files.length === 0) {
                console.log("Vous n'avez sélectionné aucun fichier");
                return
            }
            const file = this.files[0]
            const fileReader = new FileReader ()
            fileReader.readAsDataURL (file)
            fileReader.addEventListener('load', (event)=>{
                displayImage (event, file) 
            })
            const fileReaderBinary = new FileReader()
            fileReaderBinary.readAsBinaryString (file)
            fileReaderBinary.addEventListener('load', (event)=>{
                console.log(stringBinary (event,file))
            })

        }

        function displayImage (event,file) {
            const photoPreview = document.querySelector(".photo-wrapper")
            const photoPreviewEmpty = document.querySelector(".photo-wrapper-content")
            photoPreviewEmpty.style.display = 'none'
            const img = document.createElement("img")
            img.src = event.target.result
            photoPreview.appendChild(img)
        }

        function stringBinary (event,file) {
            const binaryStringResult = event.target.result
            return binaryStringResult
        }
        
        
        function getBinaryStringFile () {

            console.log(fileInput.files[0].name);
            if (fileInput.files.length === 0) {
                console.log("Vous n'avez sélectionné aucun fichier");
                return
            }
            const file = fileInput.files[0]
            const fileReader = new FileReader ()

            fileReader.readAsBinaryString (file)

            // fileReader.addEventListener('load', (e)=>{
            //     const binaryStringResult = e.target.result
            //     console.log(binaryStringResult);
            // } )
            const Result = fileReader.addEventListener('load', ()=>{
                const binaryStringResult = fileReader.result
                console.log(binaryStringResult);
            } )
            console.log(Result);
            
        }


       

        const fileInput = document.querySelector("#fileInput")
        fileInput.addEventListener("change", loadPicture)
        
        

        

        // ADDWORK

        const btnValider = document.querySelector("#btn-done-modal")
        btnValider.addEventListener ("click", async function (e) {
            e.preventDefault()
            console.log("j'ai cliqué sur Valider");

            function getCategoryFile () {
                const category = document.querySelectorAll("#category option")
                console.log(category);
                
                for (let i=0 ; i< category.length; i++) {
                    if (category[i].selected) {

                        const categorySelected = category [i].id
                        return categorySelected
                    }
                }

            }
            const newWorkPicture = document.getElementById("fileInput").files[0]
            console.log(newWorkPicture);
            const newWorksTitle = document.querySelector("#title").value
            console.log(newWorksTitle);
            const newWorkCategory = getCategoryFile ()
            console.log(newWorkCategory);
            

            const formData = new FormData
            formData.append ("image", newWorkPicture )
            formData.append ("title", newWorksTitle)
            formData.append ("category", newWorkCategory)


            const token =  JSON.parse(window.localStorage.getItem("token"))
            console.log(token);

            const reponse = await fetch ("http://localhost:5678/api/works",{
                method : "POST",
                body : formData,
                headers: {'Authorization': 'Bearer '+ token}
            })

            const addWorksReponse = await reponse.json()
            console.log(addWorksReponse);
    
        })


    }

    


    

document.querySelectorAll(".js-modal").forEach(a =>{
    a.addEventListener("click", openModal) 
})

 document.querySelectorAll(".gallery-modal i").forEach(i =>{
    i.addEventListener("click", async function (e) {
        e.preventDefault()
        console.log(e.target.id);
        const iD = e.target.id
       const token =  JSON.parse(window.localStorage.getItem("token"))
       console.log(token);
       const reponse = await fetch(`http://localhost:5678/api/works/${iD}`, {
        method: 'DELETE',
        headers: {'Authorization': 'Bearer '+ token} 
        })

        const worksDeleted = await reponse.json()
        console.log(worksDeleted);
    
       

    })
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