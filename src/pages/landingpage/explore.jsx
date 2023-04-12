import { Text } from "../../elements/text";
import image from "../../assets/Frame 2951.svg"

export const ExploreSection =()=>{
    return(
        <div className="spaceAside my-5">
            <Text
                style="explore-text text-center mb-2 m-auto"
                title="Explorer les connaissances, les cultures et les idées du monde."
            />
            <Text
                style="fs-7 faint text-center mb-4 explore-sub-text"
                title="— Cobess est la bibliothèque ultime pour plus de 30 écoles - regroupant tous vos besoins en matière de bibliothèque au même endroit."
            />
            <img 
                src={image}
                alt="object not found"
                className="w-100"
            />
        </div>
    )
}