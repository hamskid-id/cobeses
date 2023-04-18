import Index from "../../../../assets/Table header.svg"
import  dashicon  from "../../../../assets/dash-icon.svg"
import Search from "../../../../assets/searchIcon.svg"
import { BtnIconTag } from "../../components/btnIconTag"
import { Text } from "../../../../elements/text"
import { useState } from "react"
import { DeleteNotification } from "../../components/deleteNotification"
import { SuccessNotification } from "../../components/successNotification"
import { Btn } from "../../../../elements/button"
import { Pagination } from "../../components/pagination"

export const RetraitTable=({
    hideModal,
    setModalBody
})=>{
    const[
        itemToDelete,
        setItemToDelete
    ]=useState([])

    const data=[
        {
            Montant:"30.09",
            NomDeBanque:"Stanbic IBTC",
            NomDuCompte:"20.00hrs",
            NuméroDeCompte:"0957648256",
            Statut:"Succès"
        },
        {
            Montant:"Nom de banque",
            NomDeBanque:"Stanbic IBTC",
            NomDuCompte:"10.00hrs",
            NuméroDeCompte:"0957648256",
            Statut:"En attente"
        },
        {
            Montant:"Nom de banque",
            NomDeBanque:"Stanbic IBTC",
            NomDuCompte:"Rick Rubins",
            NuméroDeCompte:"Accès révoqué",
            Statut:"Échoué",
            DatePubliée:"2023-02-18"
        },{
            Montant:"Nom de banque",
            NomDeBanque:"Stanbic IBTC",
            NomDuCompte:"20.00hrs",
            NuméroDeCompte:"0957648256",
            Statut:"2023-02-18"
        }
    ]


    const handleChange=(e,{index})=>{
        const newArray = itemToDelete.filter(item=>item!==index)
        setItemToDelete((prevState)=>{
            if(e.target.checked){
                return[
                ...prevState,
                    index
                ]
            }else{
                return newArray
            }
        })
    }

    const handlePageClick = (event) => {
        console.log(
          `User requested page number ${event.selected}`
        );
      };
    
      return(
        <div className="border br-8 my-4">
            <div className="w-overflow my-3">
                <table className=" table table-striped table-hover table-bordered table-responsive caption-top mb-3">
                <caption>
                        <div className="d-flex wrap justify-content-between p-2 mb-1">
                            <div className="me-2 fs-8 fw-600">
                                Aperçu du retrait
                            </div>
                            <div>
                                <Btn
                                    style="btn btn-sm bg-grey"
                                    value="delete"
                                    handleClick={()=>{
                                        setModalBody(
                                            <DeleteNotification
                                                hideModal={hideModal}
                                                handleClick={()=>setModalBody(<SuccessNotification
                                                    hideModal={hideModal}
                                                />)}
                                                title="Supprimer l'utilisateur"
                                                subTitle="Êtes-vous sûr de vouloir supprimer Elijah Samson de cette bibliothèque. Le supprimer révoquera tous ses accès à la bibliothèque."
                                            />
                                        )
                                    }}
                                    databstoggle="modal" 
                                    databstarget="#biblioBackdrop2"
                                />
                            </div>
                        </div>
                        <div className="d-flex wrap border py-2 px-2 mb-1">
                            <div className="relative wt-50 me-5 mb-1">
                                <input 
                                    type="text"
                                    className="p-2 border br-8 ps-5 w-100 btn text-start"
                                    placeholder="Recherche"
                                />
                                <img 
                                    src={Search}
                                    className="searchicon"
                                    alt="object 20.00hrst found"
                                />
                            </div>
                            <div className="mb-1">
                                <BtnIconTag
                                    icon={dashicon}
                                    text="Filter"
                                    bgStyle="bg-white border btn br-8"
                                    textStyle="text-dark btnfs"
                                />
                            </div>
                        </div>
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col"> 
                                <input 
                                    className=" border p-1 rounded form-check-input me-1"
                                    type="checkbox"
                                />
                            </th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            ><img src={Index} alt="object 20.00hrst found"/></th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            >ID de livre</th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            >Titre de livre</th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            >Heures de lecture</th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            >Montant gagné</th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            >Date publiée</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((person,index)=>{
                                    const{
                                        Montant,
                                        NomDeBanque,
                                        NomDuCompte,
                                        NuméroDeCompte,
                                        Statut,
                                        DatePubliée
                                    } = person
                                    return(
                                        <tr key={index}>
                                            <td>
                                                <input 
                                                    className="p-1 border rounded form-check-input me-1"
                                                    type="checkbox"
                                                    onChange={(e)=>handleChange(e,{index})}
                                                />
                                            </td>
                                            <td className="fs-8 text-start">
                                                {index+1}
                                            </td>
                                            <td>
                                                <Text
                                                    style="fw-bold fs-8 text-start ln-20"
                                                    title={Montant}
                                                />
                                            </td>
                                            <td  className="fs-8 text-start">{NomDeBanque}</td>
                                            <td  className="fs-8 text-start">{NomDuCompte}</td>
                                            <td  className="fs-8 text-start">{NuméroDeCompte}</td>
                                            <td >
                                                <Text
                                                    title={Statut}
                                                    style={`${(Statut === "Succès")?"activeStatus":Statut === "Échoué "?"rejectedStatus":"unattended"} w-fitContent fs-8 text-start`}
                                                />
                                            </td>
                                            <td  className="fs-8 text-start">{DatePubliée}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
            {
                data.length === 0 &&(
                    <Text
                        style="text-center fs-5"
                        title="No data"
                    />
                )
            }
            <div>
                {
                    data.length>0 &&(
                        <Pagination
                            handlePageClick={handlePageClick}
                        />
                    )
                }
            </div>
        </div>

    )
}