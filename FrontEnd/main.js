import {getWorks} from "./works.js";
import { filtreTous,filterObjets, filterAppartements, filterHotelEtRestaurants } from "./filters.js";
import { editionMode } from "./editionMode.js";



//     // // GENERE PAGE 1ERE FOIS

const token = window.localStorage.getItem("token")
console.log(`token: ${token}`);
if (token===null) {

const galleryGrid = document.querySelector(".gallery")

galleryGrid.innerHTML= ""
    //Creation des balises via l'API
getWorks()

// Listener sur filtres
filtreTous()
filterObjets()
filterAppartements()
filterHotelEtRestaurants()

    
}else{
    
console.log("L'utilisateur Sophie est connecté")

const galleryGrid = document.querySelector(".gallery")

galleryGrid.innerHTML= ""

//Creation des balises via l'API
getWorks()
editionMode()
}




    




