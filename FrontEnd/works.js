export async function getWorks () {
    const reponse = await fetch ("http://localhost:5678/api/works")
    console.log(reponse);
    const works = await reponse.json()
    const worksValue = JSON.stringify(works)
    console.log(works);
    console.log(works[0]);
    console.log(works[0].title);

    window.localStorage.setItem("works",worksValue)
    const getWorks = window.localStorage.getItem("works")
    const getWorksLocalStorage = JSON.parse(getWorks)
    console.log(getWorksLocalStorage[0].id);
    
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


        console.log("image créée via l'API");

    }
 }