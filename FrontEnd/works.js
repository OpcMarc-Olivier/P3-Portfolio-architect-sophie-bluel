export async function getWorks () {
    const reponse = await fetch ("http://localhost:5678/api/works")
    const works = await reponse.json()
    const worksValue = JSON.stringify(works)
    console.log(works);

    window.localStorage.setItem("works",worksValue)
    const getWorks = window.localStorage.getItem("works")
    const getWorksLocalStorage = JSON.parse(getWorks)
    
    const galleryGrid = document.querySelector(".gallery")

    for (let i=0 ; i< works.length ; i++) {
        
        const maBaliseFigure = document.createElement ("figure")
        galleryGrid.appendChild (maBaliseFigure)
        
        const maBaliseImg = document.createElement ("img")
        maBaliseImg.src = `${works[i].imageUrl}`
        maBaliseFigure.appendChild(maBaliseImg)
        
        const maBaliseFigcaption = document.createElement ("figcaption")
        maBaliseFigcaption.innerText = works[i].title
        maBaliseFigure.appendChild(maBaliseFigcaption)


        console.log("images créées via l'API");

    }
 }