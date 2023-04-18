import ActiveSolid from "../../../assets/Solid.svg";
import biblio from "../../../assets/biblio.svg";
import tele from "../../../assets/tele.svg";
import habi from "../../../assets/habi.svg";
import uti from "../../../assets/uti.svg";
import reve from "../../../assets/reve.svg";
import sup from "../../../assets/sup.svg";
import solidicon from "../../../assets/solidicon.svg";
import par from "../../../assets/par.svg";

export const routes=[
    {
        name:"Tableau de bord",
        icon:solidicon,
        activeIcon:ActiveSolid,
        location:"/tableau"
        
    },
    {
        name:"Ma bibliothèque",
        icon:biblio,
        activeIcon:"",
        location:"/bibliothèque"
    },
    {
        name:"Télécharger",
        icon:tele,
        activeIcon:"",
        location:"/télécharger"
    },
    {
        name:"Habitudes de lecture",
        icon:habi,
        activeIcon:"",
        location:"/lecture"
    },
    {
        name:"Utilisateurs",
        icon:uti,
        activeIcon:"",
        location:"/utilisateurs"
    },{
        name:"Revenus",
        icon:reve,
        activeIcon:"",
        location:"/revenus"
    }
]

export const supportRoutes=[
    {
        name:"Supporte'",
        icon:sup,
        activeIcon:"",
        location:"/supporte"
    },
    {
        name:"Paramètres",
        icon:par,
        activeIcon:"",
        location:"/parametres"
    }
]