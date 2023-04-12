import  Logo  from "../assets/image 30 (1).svg"
import { Btn } from "../elements/button"
import { Text } from "../elements/text"
import { Brand } from "./navbarbrand"

export const Footer=()=>{
    return(
        <div className="footer">
            <div className="d-flex justify-content-between mb-5 wrap">
                <div className="d-flex flex-column">
                    <div className="mb-5 footerbrand">
                        <Brand
                            color="text-white"
                            img={Logo}
                        />
                    </div>
                    <div className="d-flex wrap mb-2">
                        {
                            ["Aperçu","Caractéristiques","Tarification","Carrières","Aide","Confidentialité"].map((link,index)=>{
                                return(
                                    <a 
                                        href="#"
                                        className="links me-3 fw-bold"
                                        key={index}
                                    >{link}
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
                <form className="d-flex align-items-end wrap">
                    <div className="d-flex flex-column align-items-start me-2 mb-1" >
                        <label 
                            htmlFor="subscribe"
                            className="mb-3 text-white fonts-5"
                        >Tiens-toi à jour
                        </label>
                        <input 
                            type="text"
                            className="p-2 border border-white rounded footer-input"
                            placeholder="entrez votre email"
                        />
                    </div>
                    <div className="mb-1">
                        <Btn
                            value="Souscrire"
                            style="btn btn-primary btn-md p-2"
                        />
                    </div>
                </form>
                <div>

                </div>
            </div>
            <hr
                className="bg bg-white border border-white mb-3"
            />
            <div className="d-flex wrap justify-content-between align-items-center">
                <Text
                    title="© 2023 COBESS. Tous les droits sont réservés."
                    style="text-white fonts-5"
                />
                <div>
                    <a 
                        href="#"
                        className="me-2 links"
                    >
                        Terms
                    </a>
                    <a 
                        href="#"
                        className="me-2 links"
                    >
                        Condition
                    </a>
                </div>
            </div>
        </div>
    )
}