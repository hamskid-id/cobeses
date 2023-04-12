export const LinkIcon=({
    icon,
    route
})=>{
    return(
        <a 
            href={route} 
            className="Link me-2"
        >
            {icon}
        </a>
    )
}