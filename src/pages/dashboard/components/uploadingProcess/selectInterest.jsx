
import { Btn } from "../../../../elements/button"
import { Text } from "../../../../elements/text"
import dot from "../../../../assets/Dot.svg"
import { UploadType } from "./uploadtype"
import interest from "../../../../assets/interes.svg"

export const SelectInterest=({
    setModal
})=>{
    const interestArea=[
        "Accounting","Agriculture","Architecture","Arts","Botany","Administration","Geology","Ecology","Zoology","Engineering"
    ]
    return(
        <div className="d-flex flex-column align-items-center">
            <div className="mb-3">
                <img
                    src={interest}
                    alt="object not found"
                />
            </div>
            <div>
                <Text
                    style="fs-6 fw-600"
                    title="Intérêts"
                />
            </div>
            <div className="w-100 border-bottom mb-4 pb-2">
                <Text
                    style="fs-8 fw-600 faint"
                    title="Choisissez 5 choses ou plus que vous aimeriez voir dans votre flux d'accueil"
                />
            </div>
            <div className="mb-3 d-flex wrap">
                {
                    interestArea.map((text,index)=>{
                        return(
                            <div className="d-flex interest px-2 me-2 mb-2 aling-items-center">
                                <span className="me-1">
                                    <img
                                        src={dot}
                                        alt="object not found"
                                    />
                                </span>
                                <span>
                                    <Text
                                        style="fs-8"
                                        title={text}
                                    />
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="d-flex w-100 justify-content-between">
                <Btn
                    value="Skip"
                    style="text-white bgBlue btn btn-md wt-50 mb-1 me-2"
                    handleClick={()=>setModal({
                        size:null,
                        body:<UploadType
                            setModal={setModal}
                        />
                    })}
                />
                <Btn
                    value="Set Interest"
                    style=" text-white mb-1 btn btn-md wt-50 bg-greyYellow"
                    handleClick={()=>setModal({
                        size:null,
                        body:<UploadType
                            setModal={setModal}
                        />
                    })}
                />
            </div>
        </div>
    )
}