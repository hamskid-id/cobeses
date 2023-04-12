import { Btn } from "../../elements/button"
import { Text } from "../../elements/text"
import { Universities } from "./universities"
import  ButtonImg from "../../assets/Button.svg"
import { Unicard } from "./universitiesCard"

export const AccedezSection=()=>{
    return(
        <div className="spaceAside">
            <Text
                title="Accédez à votre bibliothèque scolaire sur COBESS"
                style="fw-600 fs-2 text-center mb-2 accedez-header"
            />
            <Text
                title="Recherchez votre école ici afin de pouvoir y accéder."
                style="fs-7 text-center mb-5 faint"
            />
            <form className="input-cover">
                <input 
                    type="text"
                    className="p-2 rounded explore-input w-100 mb-4"
                    placeholder="Écoles d'entrée"
                /><br/>
                 <Btn
                    value="Rechercher des écoles"
                    style="btn text-white btn-md p-2 bg-greyYellow m-auto mb-4"
                />
            </form>
            <div className="row mb-2">
                {
                    Universities.map((uni,index)=>{
                        const{
                            icon
                        }=uni
                        return(
                            <Unicard
                                img={icon}
                                key={index}
                                title="Bibliotheque Centrale De L'ucad"
                                subTitle="Bibliotheque Centrale De L'ucad (BCU) is the central library of the Cheikh Anta Diop University in Dakar, Senegal."
                            />
                        )
                    })
                }
            </div>
            <button className="bg bg-white mb-5">
               <img 
                    src={ButtonImg}
                    alt="object not found"
                />
            </button>
        </div>
    )
}