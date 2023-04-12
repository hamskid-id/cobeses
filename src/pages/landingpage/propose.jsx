import { Text } from "../../elements/text";
import image from "../../assets/image.svg";
export const ProposeSection=()=>{
    return(
        <div className="spaceTop faint-white">
            <div className="d-flex wrap justify-content-between mb-5">
                <Text
                    title="À propos de COBESS"
                    style="fw-600 fs-4 wt-50 text-start mb-2"
                />
                <Text
                    title="Le Consortium des Bibliothèques de l'Enseignement Supérieur du Sénégal (COBES) est un consortium coopératif de bibliothèques et de ressources d'information interinstitutionnel au Sénégal. Il sert de bibliothèque à l'Université Cheikh Anta Diop de Dakar et aux Instituts Universitaires de Technologie (IUT), tout en fournissant également des ressources d'information à d'autres établissements universitaires du pays. La principale mission du consortium est d'accroître l'accès et l'utilisation de l'information, de favoriser les échanges de connaissances et de promouvoir la collaboration et l'innovation grâce aux réseaux et aux ressources des bibliothèques."
                    style="faint fonts-6 wt-50 text-start"
                />
            </div>
            <img
                src={image}
                alt="object not found"
                className="w-100"
            />
        </div>
    )
}