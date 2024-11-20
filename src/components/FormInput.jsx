import { useId } from "react";
import clsx from "clsx";

export const FormInput = ({title, registerRes, isDirty, errors, errorMessages}) => {
    const Id = useId();
    const error = errors[registerRes.name];
    return (
    <div className="form-group">
        <label htmlFor={Id}>{title}</label>
        <input 
        {...registerRes}
        className={clsx('form-control', {'is-invalid': isDirty && !!error, 'is-valid': isDirty && !error})} 
        id={Id}
        placeholder={title} />
        <div className={clsx('invalid-feedback', {'hide': !(isDirty && !!error)})}>
            {error && errorMessages[error.type]}
        </div>
    </div>
  )
}