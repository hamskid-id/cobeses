export const Btn =({
    style,
    value,
    handleClick,
    databstoggle, 
    databstarget,
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
                            data-bs-toggle={databstoggle}
                            data-bs-target={databstarget}
                            className={style} 
                            onClick={handleClick}>
                                {value}
                        </button>
                )
            }
        </>
    )
    
}