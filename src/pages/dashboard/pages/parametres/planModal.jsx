import { Text } from "../../../../elements/text"
import whitebase from "../../../../assets/whitebase.svg"
import featured1 from "../../../../assets/planFeatured icon (1).svg"
import coloredbase from "../../../../assets/coloredbase.png"
import featured from "../../../../assets/planFeatured icon.svg"
import btnBase from "../../../../assets/_Button base.svg"
import { Btn } from "../../../../elements/button"


export const PlanModal=()=>{
    return(
        <div>
            <div className="br-08">
                <div className="d-flex justify-content-between plansectionHead">
                    <div className="d-flex">
                        <span className="me-2">
                            <img 
                                src={featured}
                                alt="object not found"
                            />
                        </span>
                        <span>
                            <Text
                                style="fw-600 fs-7"
                                title="Plan mensuel"
                            />
                        </span>
                    </div>
                    <div>
                        <img 
                            src={coloredbase}
                            alt="object not found"
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-between planpricesection border">
                    <div>
                        <Text
                            style="fw-bold fs-7 text-start"
                            title="$6 par mois"
                        />
                        <Text
                            style="faint fs-8 text-start"
                            title="Facturation mensuelle, résiliation à tout moment"
                        />
                    </div>
                    <div>
                        <Text
                            style="activeStatus fs-8"
                            title="Régime actif"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-3 br-08">
                <div className="d-flex justify-content-between plansectionHead bg bg-white border">
                    <div className="d-flex">
                        <span className="me-2">
                            <img 
                                src={featured1}
                                alt="object not found"
                            />
                        </span>
                        <span>
                            <Text
                                style="fw-600 fs-7"
                                title="Plan annuel"
                            />
                        </span>
                    </div>
                    <div>
                        <img 
                            src={whitebase}
                            alt="object not found"
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-between planpricesection border">
                    <div>
                        <Text
                            style="fw-bold fs-7 text-start"
                            title="$66 par an"
                        />
                        <Text
                            style="faint fs-8 text-success text-start"
                            title="(Économisez 8+%) par mois Facturation annuelle, annulez à tout moment"
                        />
                    </div>
                    <div>
                        <img 
                            src={btnBase}
                            alt="object not found"
                            className="btn"
                        />
                    </div>
                </div>
            </div>
            <form className="d-flex flex-column align-items-center my-2 py-2">
                <div className="wt-50">
                    <input 
                        type="text"
                        placeholder="Entrer le code de réduction"
                        className=" btn m-auto border my-4 w-100"
                    />
                </div>
                <div className="d-flex">
                    <span className="me-2">
                        <Btn
                            style=" btn border"
                            value="Réinitialiser"
                        />
                    </span>
                    <span>
                        <Btn
                            style="btn bg-greyYellow text-white"
                            value="Soumettre"
                        />
                    </span>
                </div>
            </form>
        </div>
    )
}