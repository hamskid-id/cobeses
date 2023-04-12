export const Btn =({
    style,
    value,
    handleClick,
    loadingStatus,
})=>{
    return (
        <>
            {
                loadingStatus === "pending"?(
                    <button
                        className={style}
                        disabled
                    >
                        <span 
                            className="spinner-border spinner-border-sm" 
                            role="status" 
                            aria-hidden="true">
                        </span>
                    </button>
                    ):(
                        <button 
                            className={style} 
                            onClick={handleClick}>
                                {value}
                        </button>
                )
            }
        </>
    )
    
}