import { BtnIconTag } from "../../components/btnIconTag"
import Livre from "../../../../assets/livd.svg"
import Ajot from  "../../../../assets/ajot.svg"
import dropadj from "../../../../assets/daj.svg"
import dropcre from  "../../../../assets/cre.svg"
import booImage from  "../../../../assets/detb.svg"
import { Text } from "../../../../elements/text"
import porbtn from "../../../../assets/poSolid.svg"
import { IconTag } from "../../components/icontag"
import { useState } from "react"
import { NotificationModal } from "./notificationModal"
import { Modal } from "../../../../components/modal/modal"

export const DetailsContent=()=>{
    const [
        modal,
        setModal
    ]=useState({
        size:null,
        body:null
    });
    return(
        <div className="row py-3 mb-5">
            <div className="col-md-4">
                <div>
                    <div className="p-2 br-8 border mb-3">
                        <img 
                            src={booImage}
                            alt="object not found"
                            className="w-100 br-8"
                        />
                    </div>
                    <div 
                        className="mt-3"
                        data-bs-toggle="modal" 
                        data-bs-target="#bookStaticBackdrop"
                        onClick={()=>{
                            setModal({
                                size:"small",
                                body:<NotificationModal
                                    setModal={setModal}
                                />
                            })
                        }}
                    >
                        <BtnIconTag
                            text="Lire un livre"
                            icon={Livre}
                            bgStyle="btn bg-greyYellow btn-md w-100"
                        />
                    </div>
                     <div className="mt-3 w-100 dropdown">
                        <BtnIconTag
                            text="Ajouter à la bibliothèque"
                            icon={Ajot}
                            bgStyle="faintbg  btn btn-md w-100"
                            textStyle="greyYellow fw-bold fs-8"
                            role="button" 
                            dataBsToggle="dropdown" 
                            ariaExpanded="false"
                        />
                        <ul className="dropdown-menu py-2">
                            <li className="dropItem px-2 py-1">
                                <IconTag
                                    text="Ajouter à la bibliothèque existante"
                                    icon={dropadj}
                                    style="fs-8 faint dropdown-item"
                                />
                            </li>
                            <li className="dropItem px-2 py-1">
                                <IconTag
                                    text="Créer une nouvelle bibliothèque"
                                    icon={dropcre}
                                    style="fs-8 faint dropdown-item"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3 w-100">
                         <BtnIconTag
                            text="Partager le livre"
                            icon={porbtn}
                            bgStyle="bg bg-white  btn btn-md w-100"
                            textStyle="greyYellow fw-bold fs-8"
                        />
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="p-3">
                    <div className="d-flex mb-3">
                        <Text
                            style="me-3 rejectedStatus fs-8 fw-600"
                            title="Livres audio"
                        />
                         <Text
                            style="unattended fs-8"
                            title="Motivational"
                        />
                    </div>
                    <div className="border-bottom pb-4 mb-3">
                        <Text
                            style="me-3 fw-600 text-start"
                            title="The 48 Laws of Power Summary,Review and Full List"
                        />
                        <Text
                            style="fs-8 faint text-start"
                            title={`Se sentir impuissant est une expérience misérable. Si on leur donnait le choix, tout le monde opterait pour plus plutôt que moins de puissance. Pourtant, être si ouvertement dans ses tentatives d'accéder au pouvoir est mal vu. Pour atteindre le pouvoir, vous devez être subtil, rusé et démocratique mais sournois. Par conséquent, dans son livre controversé, "Les 48 lois du pouvoir", l'auteur à succès Robert Greene affirme que si vous parvenez à séduire, charmer et tromper vos adversaires, vous atteindrez le pouvoir ultime.
                            Greene déclare que plus vous deviendrez apte à transmettre le pouvoir, meilleur vous deviendrez ami, amant et personne. C'est parce que vous apprenez à faire en sorte que les autres se sentent bien dans leur peau, ce qui les rend dépendants de vous comme une source de grand plaisir à côtoyer.`}
                        />
                    </div>
                    <div >
                        <Text
                            style="fw-bold text-start"
                            title="Informasi"
                        />
                        <div>
                            <div className="d-flex">
                                <span className="me-3">
                                    <Text
                                        style="faint fs-8 text-start"
                                        title="Langue"
                                    />
                                </span>
                                <span className="me-3">
                                    <Text
                                        style="faint fs-8 text-start"
                                        title="English"
                                    />
                                </span>
                            </div>
                            <div className="d-flex">
                                <span className="me-3">
                                    <Text
                                        style="faint fs-8 text-start"
                                        title="Éditeur"
                                    />
                                </span>
                                <span className="me-3">
                                    <Text
                                        style="faint fs-8 text-start"
                                        title="Samji Diamond"
                                    />
                                </span>
                            </div>
                            <div className="d-flex">
                                <span className="me-3">
                                    <Text
                                        style="faint fs-8 text-start"
                                        title="Auteurs"
                                    />
                                </span>
                                <span className="me-3">
                                    <Text
                                        style="faint fs-8 text-start"
                                        title="Samji Diamond"
                                    />
                                </span>
                            </div>
                            <div className="d-flex">
                                <span className="me-3">
                                    <Text
                                        style="faint fs-8 text-start"
                                        title="Date publiée"
                                    />
                                </span>
                                <span className="me-3">
                                    <Text
                                        style="faint fs-8 text-start"
                                        title="2022-06"
                                    />
                                </span>
                            </div>
                            <div className="d-flex">
                                <span className="me-3">
                                    <Text
                                        style="faint fs-8 text-start"
                                        title="ISBN or ISSN"
                                    />
                                </span>
                                <span className="me-3">
                                    <Text
                                        style="faint fs-8 text-start"
                                        title="2022-06"
                                    />
                                </span>
                            </div>
                            <div className="d-flex">
                                <span className="me-3">
                                    <Text
                                        style="faint fs-8 text-start"
                                        title="Sujette"
                                    />
                                </span>
                                <span className="me-3">
                                    <Text
                                        style="faint fs-8 text-start"
                                        title="University or College"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                body={modal.body}
                small={modal.size==="small"?true:false}
                large={modal.size==="large"?true:false}
                id="bookStaticBackdrop"
            />
        </div>
    )
}