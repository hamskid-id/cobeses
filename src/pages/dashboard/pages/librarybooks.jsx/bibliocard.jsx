import rec1 from "../../../../assets/Rectangle 6.svg"
import rec2 from "../../../../assets/Rectangle 1.svg"
import rec3 from "../../../../assets/Rectangle 2.svg"
import rec4 from "../../../../assets/Rectangle 7.svg"
import solidx from "../../../../assets/Solidx.svg"
import calendar from "../../../../assets/calendar.svg"
import userEdit from "../../../../assets/user-edit.svg"
import { IconTag } from "../../components/icontag"
import { Text } from "../../../../elements/text"
import deleteicon from "../../../../assets/deleteIcon.svg"
import invite from "../../../../assets/inviteIcon.svg";
import member from "../../../../assets/memberIcon.svg";
import attente from "../../../../assets/attenteIcon.svg"
import { FaEllipsisV, FaRegBookmark } from "react-icons/fa"
import ReactPaginate from 'react-paginate';
import { DeleteNotification } from "../../components/deleteNotification";
import { SuccessNotification } from "../../components/successNotification";
import { InviteUsersToLibrary } from "../bibliotheque/inviteToLibrary"
import { useNavigate } from "react-router-dom"

export const BiblioCard=({
    setModalBody,
    hideModal
})=>{
    const navigate = useNavigate();
    const books=[
        {
            img:rec1
        },{
            img:rec2
        },{
            img:rec3
        },{
            img:rec4
        },{
            img:rec1
        },{
            img:rec2
        },{
            img:rec3
        },{
            img:rec4
        }
    ]
    const handlePageClick = (event) => {
        console.log(
          `User requested page number ${event.selected}`
        );
      };
      
    return(
        <div>
            <div className="row">
            {
                books.map((book,index)=>{
                    const{
                        img
                    }=book;
                    return(
                        <div 
                            className="col-md-3 col-sm-6 col-xs-12"
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
                                <div>
                                    <Text
                                        style="fs-6 fw-600 text-start"
                                        title="48 Laws of Power"
                                    />
                                </div>
                                <div>
                                    <IconTag
                                        text="Robert Greene"
                                        icon={userEdit}
                                        style="fs-8 faint"
                                    />
                                </div>
                                <div className="d-flex">
                                    <div className="me-2">
                                        <IconTag
                                            text="Nov 2011"
                                            icon={calendar}
                                            style="fs-8 faint"
                                        />
                                    </div>
                                        <div>
                                        <IconTag
                                            text="124 Pages"
                                            icon={solidx}
                                            style="fs-8 faint"
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between w-100">
                                    <span>
                                        <FaRegBookmark
                                            size="1rem"
                                            color="grey"
                                        />
                                    </span>
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
             <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={30}
                previousLabel="previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
            />
        </div>
        
    )
}