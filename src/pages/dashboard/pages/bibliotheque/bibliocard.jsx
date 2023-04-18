import {FaEllipsisV } from "react-icons/fa";
import { Logo } from "./logo";
import deleteicon from "../../../../assets/deleteIcon.svg"
import edit from "../../../../assets/editicon.svg";
import livre from "../../../../assets/livre.svg"
import invite from "../../../../assets/inviteIcon.svg";
import member from "../../../../assets/memberIcon.svg";
import attente from "../../../../assets/attenteIcon.svg"
import { IconTag } from "../../components/icontag";
import { EditLibrary } from "./editLibrary";
import { useNavigate } from "react-router-dom";
import { DeleteNotification } from "../../components/deleteNotification";
import { SuccessNotification } from "../../components/successNotification";
import { InviteUsersToLibrary } from "./inviteToLibrary";

export const Bibliocard=({
    setModalBody,
    hideModal
})=>{
    const navigate = useNavigate();
    return(
        <div className="row">
            {
                Logo.map((book,index)=>{
                    const{
                        img,
                        name
                    }=book;
                    return(
                        <div 
                            className="col-md-3 col-sm-6 col-6"
                            key={index}
                        >
                            <div className="p-3 br-8 border m-3 btn">
                                <div className="mb-3">
                                    <img 
                                        src={img}
                                        alt="oject not found"
                                        className="w-100 br-8"
                                    />
                                </div>
                                <div className="d-flex justify-content-between w-100">
                                    <span>{name}</span>
                                    <div className="dropdown">
                                        <FaEllipsisV
                                            size="2rem"
                                            color="grey"
                                            className="btn dropdown-toggle fl-r"
                                            role="button" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                        />
                                        <ul className="dropdown-menu py-2">
                                            <li 
                                                className="dropItem px-2 py-1"
                                                data-bs-toggle="modal" 
                                                data-bs-target="#biblioBackdrop"
                                                onClick={
                                                    ()=>setModalBody(
                                                        <EditLibrary
                                                            defaultName={name}
                                                        />
                                                    )
                                                }
                                                >
                                                <IconTag
                                                    text="Modifier la bibliothèque"
                                                    icon={edit}
                                                    style="fs-8 faint dropdown-item"
                                                />
                                            </li>
                                             <li 
                                                className="dropItem px-2 py-1"
                                                onClick={()=>navigate(`/bibliothèque/library/${index}`)}
                                            >
                                                <IconTag
                                                    text="Livres de la bibliothèque"
                                                    icon={livre}
                                                    style="fs-8 faint dropdown-item"
                                                />
                                            </li>
                                            <li 
                                                className="dropItem px-2 py-1"
                                                data-bs-toggle="modal" 
                                                data-bs-target="#biblioBackdrop"
                                                onClick={
                                                    ()=>setModalBody(
                                                        <InviteUsersToLibrary/>
                                                    )
                                                }
                                            >
                                                <IconTag
                                                    text="Inviter à la bibliothèque"
                                                    icon={invite}
                                                    style="fs-8 faint dropdown-item"
                                                />
                                            </li>
                                            <li 
                                                className="dropItem px-2 py-1"
                                                onClick={()=>navigate(`/bibliothèque/membre/invites/${index}`)}
                                            >
                                                <IconTag
                                                    text="membres invetes"
                                                    icon={member}
                                                    style="fs-8 faint dropdown-item"
                                                />
                                            </li>
                                             <li 
                                                className="dropItem px-2 py-1"
                                                onClick={()=>navigate(`/bibliothèque/membre/invites/${index}`)}
                                            >
                                                <IconTag
                                                    text="Membres invités en attente"
                                                    icon={attente}
                                                    style="fs-8 faint dropdown-item"
                                                />
                                            </li>
                                            <li 
                                                className="dropItem px-2 py-1"
                                                onClick={
                                                    ()=>setModalBody(
                                                        <DeleteNotification
                                                            hideModal={hideModal}
                                                            handleClick={()=>setModalBody(<SuccessNotification
                                                                hideModal={hideModal}
                                                            />)}
                                                            title="Supprimer la bibliothèque"
                                                            subTitle="Voulez-vous vraiment supprimer cette bibliothèque? Cela supprimera tous les membres dela bibliothèque"
                                                        />
                                                    )
                                                }
                                                data-bs-toggle="modal" 
                                                data-bs-target="#biblioBackdrop"
                                            >
                                                <IconTag
                                                    text="Supprimer la bibliothèque"
                                                    icon={deleteicon}
                                                    style="fs-8 faint dropdown-item"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}