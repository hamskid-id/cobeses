import rec1 from "../../../../assets/Rectangle 6.svg"
import rec2 from "../../../../assets/Rectangle 1.svg"
import rec3 from "../../../../assets/Rectangle 2.svg"
import rec4 from "../../../../assets/Rectangle 7.svg"
import solidx from "../../../../assets/Solidx.svg"
import calendar from "../../../../assets/calendar.svg"
import userEdit from "../../../../assets/user-edit.svg"
import { IconTag } from "../../components/icontag"
import { Text } from "../../../../elements/text"
import { useNavigate } from "react-router-dom"
export const Card=()=>{
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
    return(
        <div className="row">
            {
                books.map((book,index)=>{
                    const{
                        img
                    }=book;
                    return(
                        <div 
                            className="col-md-4 col-lg-3 col-sm-6 col-xs-6 btn"
                            key={index}
                            onClick={()=>navigate(`/télécharger/details/${index}`)}
                        >
                            <div className="p-3 br-8 border m-3">
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
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}