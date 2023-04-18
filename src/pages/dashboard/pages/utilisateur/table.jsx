import Index from "../../../../assets/Table header.svg"
import { Text } from "../../../../elements/text"
import { useState } from "react"
import { DeleteNotification } from "../../components/deleteNotification"
import { SuccessNotification } from "../../components/successNotification"
import { Btn } from "../../../../elements/button"
import { Pagination } from "../../components/pagination"
import { CaptionFilter } from "../../components/tableFilterCaption"

export const Table=({
    hideModal,
    setModalBody
})=>{
    const[
        itemToDelete,
        setItemToDelete
    ]=useState([])

    const data=[
        {
            name:"Samuel Alfred",
            email:"olivia@untitledui.com",
            CanPublish:"No",
            action:"Créer un éditeur",
            fair:true
        },
        {
            name:"Samuel Alfred",
            email:"olivia@untitledui.com",
            CanPublish:"Yes",
            action:"Créer un éditeur",
            fair:true
        },
        {
            name:"Samuel Alfred",
            email:"olivia@untitledui.com",
            CanPublish:"Yes",
            action:"Accès révoqué",
            fair:false
        },{
            name:"Samuel Alfred",
            email:"olivia@untitledui.com",
            CanPublish:"No",
            action:"Créer un éditeur",
            fair:false
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
                            <div>
                                <span className="me-2 fs-8 fw-600">
                                    Utilisateurs de la bibliothèque 
                                </span>
                                <Text
                                    style=" px-2 fs-8 badge lightPrimary"
                                    title={data.length}
                                />
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
                        <CaptionFilter/>
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
                            ><img src={Index} alt="object not found"/></th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            >Nom</th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            >Adresse e-mail</th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            >Can Publish</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((person,index)=>{
                                    const{
                                        name,
                                        email,
                                        CanPublish,
                                        action,
                                        fair
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
                                                    title={name}
                                                />
                                            </td>
                                            <td  className="fs-8 text-start">{email}</td>
                                            <td  className="fs-8 text-start">{CanPublish}</td>
                                            <td  className={`${action === "Accès révoqué"?"rejectedStatus":"greyYellow"} fs-8 text-start`}>{action}</td>
                                            {fair?<td  className="fs-8 text-start text-primary">Faire administrateur</td>:<td  className="fs-8 text-start"></td>}
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
                        title="Empty"
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