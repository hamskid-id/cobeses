import { useState } from "react"
import { Text } from "../../../../elements/text"
import { Btn } from "../../../../elements/button";
import { DeleteNotification } from "../../components/deleteNotification";
import { SuccessNotification } from "../../components/successNotification";
import { Pagination } from "../../components/pagination";

export const PlanTable=({
    setModalBody,
    hideModal
})=>{
    const[
        itemToDelete,
        setItemToDelete
    ]=useState([])

    const data=[
        {
            invoice:"Plan de base – décembre 2022",
            Montant:"10,00 $US",
            Date:"1 déc. 2022",
            Statut:"Payé"
        },
        {
            invoice:"Plan de base – novembre 2022",
            Montant:"10,00 $US",
            Date:"1 novembre 2022",
            Statut:"Payé"
        },
        {
            invoice:"Plan de base – octobre 2022",
            Montant:"10,00 $US",
            Date:"1 octobre 2022",
            Statut:"Payé"
        },{
            invoice:"Plan de base – septembre 2022",
            Montant:"10,00 $US",
            Date:"1 sept. 2022",
            Statut:"Payé"
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
        <div>
            <div className="w-overflow">
                <table className=" table table-striped table-hover table-bordered table-responsive caption-top mb-3">
                    <caption>
                        <div className="d-flex wrap justify-content-between">
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
                            >invoice</th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            >Montant</th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            > Date</th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            >Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((person,index)=>{
                                    const{
                                        invoice,
                                        Montant,
                                        Date,
                                        Statut
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
                                            <td className="text-start fs-8">{invoice}</td>
                                            <td  className="fs-8 text-start">{Montant}</td>
                                            <td  className="fs-8 text-start retire">{Date}</td>
                                            <td>
                                                <Text
                                                    style="activeStatus fs-8"
                                                    title={Statut}
                                                />
                                            </td>
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