



export function modal () {


    const OpenModal = function() {

        const modalBody = document.createElement ("aside")
        modalBody.setAttribute("id","modal-body")
        
        const modalWrapper = document.createElement("div")
        modalWrapper.classList.add("modal-wrapper")
        modalWrapper.innerHTML = `<div class="exit-modal"><i class="fa-solid fa-xl fa-xmark"></i></div>
                                    <div class="title-modal">Galerie photo</div>
                                    <div class="gallery-modal"></div>
                                    <div class="gallery-border"></div>
                                    <input type="submit" value="Ajouter une photo" id="btn-add-modal">`
        

        const body = document.querySelector("body")
        body.appendChild(modalBody)
        modalBody.appendChild(modalWrapper)
        

        getWorksModal()

        async function getWorksModal () {
            const reponse = await fetch ("http://localhost:5678/api/works")
            console.log(reponse);
            const works = await reponse.json()
            const worksValue = JSON.stringify(works)
            console.log(works);
            console.log(works[0]);

            // LOCAL STORAGE

            // window.localStorage.setItem("works",worksValue)
            // const getWorks = window.localStorage.getItem("works")
            // const getWorksLocalStorage = JSON.parse(getWorks)
            // console.log(getWorksLocalStorage[0].title);
            
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
            }}
        }


    const btnModifier = document.querySelector(".btn-modifier")
    console.log(btnModifier);
    const modal = null

    btnModifier.addEventListener("click", OpenModal)
}
    