import {getWorks} from "./works.js";
import { filtreTous,filterObjets, filterAppartements, filterHotelEtRestaurants } from "./filters.js";



//     // // GENERE PAGE 1ERE FOIS


const galleryGrid = document.querySelector(".gallery")

galleryGrid.innerHTML= ""

//Creation des balises via l'API
getWorks()

// Listener sur filtres
filtreTous()
filterObjets()
filterAppartements()
filterHotelEtRestaurants()

    




