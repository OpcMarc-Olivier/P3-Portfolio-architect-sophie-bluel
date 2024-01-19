// Filtre TOUS

export async function filtreTous () {
    const reponse = await fetch ("http://localhost:5678/api/works")
    console.log(reponse);
    const works = await reponse.json()
    console.log(works);
    
    const filtreTous = document.querySelector(".filtres .btn-tous")
    console.log(filtreTous);

    filtreTous.addEventListener("click",()=> {

    const galleryGrid = document.querySelector(".gallery")
    
    galleryGrid.innerHTML= ""

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
})
 }
// Filtre OBJET

export async function filterObjets () {
    const reponse = await fetch ("http://localhost:5678/api/works")
    console.log(reponse);
    const works = await reponse.json()
    console.log(works);

    const filtreObjets = document.querySelector(".filtres .btn-objets")
    console.log(filtreObjets);

    filtreObjets.addEventListener("click",()=> {
        const worksObjetFilter = works.filter (function(a) {
            return a.categoryId === 1
        })
        console.log(worksObjetFilter);
    
        const galleryGrid = document.querySelector(".gallery")
    
        galleryGrid.innerHTML= ""
    
        for (let i=0 ; i< works.length ; i++) {
            
            const maBaliseFigure = document.createElement ("figure")
            galleryGrid.appendChild (maBaliseFigure)
            
            const maBaliseImg = document.createElement ("img")
            maBaliseImg.src = `${worksObjetFilter[i].imageUrl}`
            maBaliseFigure.appendChild(maBaliseImg)
            
            const maBaliseFigcaption = document.createElement ("figcaption")
            maBaliseFigcaption.innerText = worksObjetFilter[i].title
            maBaliseFigure.appendChild(maBaliseFigcaption)
    
    
            console.log("image filtrées via l'API");
    
        }
    })

    
}

// Filtre APPARTEMENT

export async function filterAppartements () {
    const reponse = await fetch ("http://localhost:5678/api/works")
    console.log(reponse);
    const works = await reponse.json()
    console.log(works);

    const filtreAppartements = document.querySelector(".filtres .btn-appartements")
    console.log(filtreAppartements);

    filtreAppartements.addEventListener("click",()=> {
        const worksAppartementsFilter = works.filter (function(a) {
            return a.categoryId === 2
        })
        console.log(worksAppartementsFilter);
    
        const galleryGrid = document.querySelector(".gallery")
    
        galleryGrid.innerHTML= ""
    
        for (let i=0 ; i< works.length ; i++) {
            
            const maBaliseFigure = document.createElement ("figure")
            galleryGrid.appendChild (maBaliseFigure)
            
            const maBaliseImg = document.createElement ("img")
            maBaliseImg.src = `${worksAppartementsFilter[i].imageUrl}`
            maBaliseFigure.appendChild(maBaliseImg)
            
            const maBaliseFigcaption = document.createElement ("figcaption")
            maBaliseFigcaption.innerText = worksAppartementsFilter[i].title
            maBaliseFigure.appendChild(maBaliseFigcaption)
    
    
            console.log("image filtrées via l'API");
    
        }
    })

    
}

// Filtre HOTEL ET RESTAURANTS

export async function filterHotelEtRestaurants () {
    const reponse = await fetch ("http://localhost:5678/api/works")
    console.log(reponse);
    const works = await reponse.json()
    console.log(works);

    const filterHotelEtRestaurants = document.querySelector(".filtres .btn-hotels-restaurants")
    console.log(filterHotelEtRestaurants);

    filterHotelEtRestaurants.addEventListener("click",()=> {
        const worksHotelEtRestaurantFilter = works.filter (function(a) {
            return a.categoryId === 3
        })
        console.log(worksHotelEtRestaurantFilter);
    
        const galleryGrid = document.querySelector(".gallery")
    
        galleryGrid.innerHTML= ""
    
        for (let i=0 ; i< works.length ; i++) {
            
            const maBaliseFigure = document.createElement ("figure")
            galleryGrid.appendChild (maBaliseFigure)
            
            const maBaliseImg = document.createElement ("img")
            maBaliseImg.src = `${worksHotelEtRestaurantFilter[i].imageUrl}`
            maBaliseFigure.appendChild(maBaliseImg)
            
            const maBaliseFigcaption = document.createElement ("figcaption")
            maBaliseFigcaption.innerText = worksHotelEtRestaurantFilter[i].title
            maBaliseFigure.appendChild(maBaliseFigcaption)
    
    
            console.log("image filtrées via l'API");
    
        }
    })

    
}