import { useState } from "react"
import { Text } from "../../../../elements/text"
import  Avatar  from "../../../../assets/tabAvatar.svg"
import { Btn } from "../../../../elements/button";
import { DeleteNotification } from "../../components/deleteNotification";
import { SuccessNotification } from "../../components/successNotification";
import { Pagination } from "../../components/pagination";

export const MemberTable=({
    setModalBody,
    hideModal
})=>{
    const[
        itemToDelete,
        setItemToDelete
    ]=useState([])

    const data=[
        {
            name:"Olivia Rhye",
            email:"olivia@untitledui.com",
            status1:"Accepté",
            status2:"Retirer",
            username:"@olivia"
        },
        {
            name:"Olivia Rhye",
            email:"olivia@untitledui.com",
            status1:"En attente",
            status2:"Retirer",
            username:"@olivia"
        },
        {
            name:"Olivia Rhye",
            email:"olivia@untitledui.com",
            status1:"Rejeté",
            status2:"Retirer",
            username:"@olivia"
        },{
            name:"Olivia Rhye",
            email:"olivia@untitledui.com",
            status1:"Active",
            status2:"Retirer",
            username:"@olivia"
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
                            >Nom</th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            >Adresse e-mail</th>
                            <th 
                                scope="col"
                                className="fs-8 text-start"
                            >Statut</th>
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
                                        name,
                                        email,
                                        status1,
                                        status2,
                                        username
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
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="me-2">
                                                        <img
                                                            src={Avatar}
                                                            alt="object not found"
                                                        />
                                                    </span>
                                                    <span>
                                                        <Text
                                                            style="fw-bold fs-8 text-start ln-20"
                                                            title={name}
                                                        />
                                                        <Text
                                                            style="faint fs-8 text-start ln-20"
                                                            title={username}
                                                        />
                                                    </span>
                                                </div>
                                            </td>
                                            <td  className="fs-8 text-start">{email}</td>
                                            <td>
                                                <Text
                                                    title={status1}
                                                    style={`${(status1 === "Accepté"||status1 === "Active")?"activeStatus":status1 === "Rejeté"?"rejectedStatus":"unattended"} w-fitContent fs-8 text-start`}
                                                />
                                            </td>
                                            <td  className="fs-8 text-start retire">{status2}</td>
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
                        title="No one has being invited"
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