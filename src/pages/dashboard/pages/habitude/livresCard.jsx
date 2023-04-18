import rec1 from "../../../../assets/Rectangle 6.svg"
import rec2 from "../../../../assets/Rectangle 1.svg"
import rec3 from "../../../../assets/Rectangle 2.svg"
import rec4 from "../../../../assets/Rectangle 7.svg"
import userEdit from "../../../../assets/user-edit.svg"
import { IconTag } from "../../components/icontag"
import { Text } from "../../../../elements/text"
import bookOpen from "../../../../assets/Book-open.svg";
import { useNavigate } from "react-router-dom"
import { Pagination } from "../../components/pagination"

export const LivresCard=()=>{
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
            <div>
                <IconTag
                    text="Livres"
                    icon={bookOpen}
                />
            </div>
            <div className="row my-3">
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
                                <div 
                                    className="mb-3"
                                    onClick={()=>navigate(`/télécharger/details/${index}`)}
                                >
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
                                    <span>
                                        <Text
                                            style="fs-8 faint text-start"
                                            title="ReadTime:"
                                        />
                                    </span>
                                    <span>
                                        <Text
                                            style="fs-8 faint text-start"
                                            title="15Hrs 45Mins"
                                        />
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
             <Pagination
                handlePageClick={handlePageClick}
            />
        </div>
        
    )
}