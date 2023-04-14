import { Btn } from "../../../../elements/button";
import { Text } from "../../../../elements/text"
import check from "../../../../assets/Check icon.svg"

export const PricingCard=()=>{
    const details=[
        {
            title:"6$/Mois",
            subtitle:"Facturation mensuelle, résiliation à tout moment",
            benefit:["Accès illimité à la bibliothèque de Qataloog composée de millions de manuels électroniques, de vidéos et de livres audio",
                    "Définir l'intérêt de la mise au point de votresujet principal","Créer une bibliothèque d'apprentissage de groupe et inviter des pairs",
                    "Gagnez du temps grâce aux fonctions avancées de recherche et de référence","Lecture et synchronisation hors ligne sur tous les appareils",
                    "Tarification flexible, pas de contrat"]
        },{
            title:"66 $/Annuel",
            subtitle:"Facturation annuelle, résiliation à tout moment",
            benefit:["Accès illimité à la bibliothèque de Qataloog composée de millions de manuels électroniques, de vidéos et de livres audio, de vidéos et de livres audio",
                    "Définir l'intérêt de la mise au point de votresujet principal","Créer une bibliothèque d'apprentissage de groupe et inviter des pairs",
                    "Gagnez du temps grâce aux fonctions avancées de recherche et de référence","Lecture et synchronisation hors ligne sur tous les appareils",
                    "Tarification flexible, pas de contrat","Plusieurs eTexts ou vidéos sans DRM chaque mois à conserver",
                    "Remises exclusives sur les impressions"]
        }
    ]
    return(
        <div className="p-3">
            <Text
                title="Continue"
                style="fw-600 text-center mb-1"
            />
            <Text
                title="Vous n'êtes pas abonné à Cobess. Veuillez le faire pour profiter de superbes lectures du monde entier"
                style="faint text-center fs-8"
            />
            <div className="row">
                {
                    details.map((detail,index)=>{
                        const{
                            title,
                            subtitle,
                            benefit
                        }=detail;
                        return(
                            <div 
                                className="col-md-6"
                                key={index}
                            >
                                <div className="d-flex flex-column p-3 py-5 br-8 shadow m-3 pricecard">
                                    <Text
                                        title={title}
                                        style="fs-2 fw-600 text-center mb-3"
                                    />
                                    <div>
                                        <Text
                                            title={subtitle}
                                            style="fs-8 fw-600 text-center mb-3"
                                        />
                                        {
                                            index!==0 &&(
                                                <Text
                                                    title="(Économisez 8+%) par mois"
                                                    style="econ fw-600 fs-4 mb-3"
                                                />
                                            )
                                        }
                                        <div className={`${index===0?"mb-5 pb-5":null}`}>
                                            {
                                                benefit.map((text,index)=>{
                                                    return(
                                                        <div 
                                                            className="d-flex mb-2"
                                                            key={index}
                                                        >
                                                            <span className="me-2">
                                                                <img 
                                                                    src={check}
                                                                    alt="object not found"
                                                                />
                                                            </span>
                                                            <span>
                                                            <Text
                                                                title={text}
                                                                style="fs-8 faint text-start"
                                                            />
                                                            </span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className={`${index===0?"mt-5 pt-5":null} w-100 mt-5`}>
                                        <Btn
                                            value="Commencez l'essai gratuit de 7 jours"
                                            style="bg bg-md orangeBg text-white w-100 fs-8"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}