export const InputField=({
    placeHolder,
    name,
    type,
    errors,
    register,
    labelTitle,
    defaultValue,
    labelStyle,
    selectArrayOption,
    selectOption,
    style
})=>{
    switch(type){
        case "checkbox":
            return(
                <div className="d-flex align-items-center mb-3">
                    <input 
                        className={style}
                        type={type}
                        name={name}
                        placeholder={placeHolder}
                        {...register(
                            `${name}`
                        )
                    }
                    />
                    <label
                        className={labelStyle}
                        htmlFor={name}>
                        {labelTitle}
                    </label>
                </div>
            )
            break;

        case "password" :
            return(
                <div className="d-flex justify-content-between justify-content-start align-items-start w-100 mb-2 border-bottom py-2">
                    <label
                        className={labelStyle}
                        htmlFor={name}>
                        {labelTitle}
                    </label>
                    <input 
                        className={style}
                        type={type}
                        name={name}
                        defaultValue={defaultValue?defaultValue:null}
                        placeholder={placeHolder}
                        {...register(
                            `${name}`, 
                            {
                                required:`${labelTitle} field is invalid`,
                                minLength: {
                                    value: 8,
                                    message: "password must not be less than 8 characters"                   
                                }
                            }
                        )
                    }
                    />
                    {errors && (<p className="text-danger ">{errors.message}</p>)}
                </div>
            )
            break;

            case "select" :
            return(
                <div className="d-flex justify-content-between justify-content-start align-items-start w-100 mb-2 border-bottom py-2 wrap">
                    <label
                        className={labelStyle}
                        htmlFor={name}>
                        {labelTitle}
                    </label>
                    <select
                        className={style}
                        name={name}
                        defaultValue={defaultValue?defaultValue:null}
                        placeholder={placeHolder}
                        {...register(
                            `${name}`, 
                            {
                                required:`${labelTitle} field is invalid`
                            }
                        )
                    }
                    >
                        { 
                            selectArrayOption && selectArrayOption.map((option,index)=>{
                                return(
                                    <option value={option} key={index}>{option}</option>
                                )
                            })
                        }
                        {
                            selectOption && <option value={selectOption}>{selectOption}</option>
                        }
                    </select>
                    {errors && (<p className="text-danger ">{errors.message}</p>)}
                </div>
            )
            break;

            default :
                return(
                    <div className="d-flex justify-content-between justify-content-start align-items-start w-100 mb-2 border-bottom py-2 wrap">
                        <label
                            className={labelStyle}
                            htmlFor={name}>
                            {labelTitle}
                        </label>
                        <input 
                            className={style}
                            type={type}
                            name={name}
                            defaultValue={defaultValue?defaultValue:null}
                            placeholder={placeHolder}
                            {...register(
                                `${name}`, 
                                {
                                    required:`${labelTitle} field is invalid`,
                                }
                            )
                        }
                        />
                        {errors && (<p className="text-danger ">{errors.message}</p>)}
                    </div>
                )
    }
}