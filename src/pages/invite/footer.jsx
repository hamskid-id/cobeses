import Logo from "../../assets/logo 1.svg";
import { FaTwitter,FaFacebook,FaLinkedin } from "react-icons/fa";
import { LinkIcon } from "../../elements/iconLink";
import { Text } from "../../elements/text";

export const InviteFooter=()=>{
    const Location=[
        {
            name:"USA:",
            address:"8 The Green, St Dover, DE 19901"
        },
        {
            name:"Senegal:",
            address:"Point E, Rue Ambassades Immeuble Djaraf, DER Hub, Dakar"
        },
        {
            name:" Nigeria:",
            address:"1A Akin Osiyemi Street, Allen Avenue Ikeja - Lagos"
        }
    ]
    return(
        <div  className="footer bg-purple">
            <hr
                className="bg bg-white border border-white mb-3"
            />
            <div className="d-flex wrap mb-4">
                {
                    ["Termes","Confidentialité","Contactez-nous"].map((link,index)=>{
                        return(
                            <a 
                                href="#"
                                className="links me-3 fw-bold border-bottom border-white"
                                key={index}
                            >{link}
                            </a>
                        )
                    })
                }
            </div>
            <div className="d-flex flex-column align-items-start mb-3">
                {
                    Location.map((place,index)=>{
                        const{
                            name,
                            address
                        }=place;
                        return(
                            <div 
                                className="d-flex"
                                key={index}
                            >
                                <Text
                                    title={name}
                                    style="fw-bold fonts-7 text-white me-1"
                                />
                                <Text 
                                    title={address}
                                    style="break fonts-7 text-white"
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="d-flex wrap justify-content-between align-items-center">
                <span>
                    <img 
                        src={Logo}
                        alt="object not found"
                        className="invitefooterImg"
                    />
                </span>
                <span className="d-flex wrap">
                    {
                        [
                            {
                                icon:<FaTwitter
                                    color="white"
                                    size="1.5rem"
                                />
                            }, {
                                icon:<FaFacebook
                                    color="white"
                                    size="1.5rem"
                                />
                            }, {
                                icon:<FaLinkedin
                                    color="white"
                                    size="1.5rem"
                                />
                            }
                        ].map((icons,index)=>{
                            const{
                                icon
                            }=icons;
                            return(
                                <LinkIcon
                                    key={index}
                                    icon={icon}
                                    route="#"
                                />
                            )
                        })
                    }
                </span>
            </div>
        </div>
    )
}