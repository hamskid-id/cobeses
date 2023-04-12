import {FaEllipsisV } from "react-icons/fa";
import { Logo } from "./logo";
import deleteicon from "../../../../assets/deleteIcon.svg"
import edit from "../../../../assets/editicon.svg";
import livre from "../../../../assets/livre.svg"
import invite from "../../../../assets/inviteIcon.svg";
import member from "../../../../assets/memberIcon.svg";
import attente from "../../../../assets/attenteIcon.svg"
import { IconTag } from "../../components/icontag";


export const Bibliocard=()=>{
    
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
                            className="col-md-3 col-sm-6 col-xs-12"
                            key={index}
                        >
                            <div className="p-2 br-8 border m-3">
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
                                            <li className="dropItem px-2 py-1">
                                                <IconTag
                                                    text="Modifier la bibliothèque"
                                                    icon={edit}
                                                    style="fs-8 faint dropdown-item"
                                                />
                                            </li>
                                             <li className="dropItem px-2 py-1">
                                                <IconTag
                                                    text="Livres de la bibliothèque"
                                                    icon={livre}
                                                    style="fs-8 faint dropdown-item"
                                                />
                                            </li>
                                            <li className="dropItem px-2 py-1">
                                                <IconTag
                                                    text="Inviter à la bibliothèque"
                                                    icon={invite}
                                                    style="fs-8 faint dropdown-item"
                                                />
                                            </li>
                                            <li className="dropItem px-2 py-1">
                                                <IconTag
                                                    text="membres invetes"
                                                    icon={member}
                                                    style="fs-8 faint dropdown-item"
                                                />
                                            </li>
                                             <li className="dropItem px-2 py-1">
                                                <IconTag
                                                    text="Membres invités en attente"
                                                    icon={attente}
                                                    style="fs-8 faint dropdown-item"
                                                />
                                            </li>
                                            <li className="dropItem px-2 py-1">
                                                <IconTag
                                                    text="Supprimer la bibliothèque"
                                                    icon={deleteicon}
                                                    style="fs-8 faint dropdown-item"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                    <span>
                                        
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}