export const Text=({
    style,
    title,
    handeClick
})=>{
    return <h6 className={style} onClick={handeClick}>{title}</h6>
}