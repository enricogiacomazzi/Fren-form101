import { useRef, useState, useId } from "react";
import {useForm} from 'react-hook-form';
import clsx from "clsx";
import { FormInput } from "./components/FormInput";

const validation = {
  firstname: val => val.length > 0,
  lastname: val => val.length > 4,
  email: val => val.indexOf('@') >= 0
}


// const App = () => {
//   const {register, handleSubmit, formState} = useForm();

//   const validSubmit = (aaa) => {
//     console.log('submitted');
//   }

//   const invalidSubmit = (aaa) => {
//     console.log('ma no cazzo!');
//   }

//   console.log(formState.errors);

//   // validate: {topolino: myValidator}

//   const myValidator = v => {
//     return v.includes('ciao');
//   }

//   return (
//     <form onSubmit={handleSubmit(validSubmit, invalidSubmit)}>
//       <input {...register("giancarlo", {validate: {topolino: myValidator}})}  />
//       <input type="submit" value="Salva"/>
//     </form>
//   )
// }

const App = () => {
  const {register, handleSubmit, formState: {isDirty, errors, isValid}} = useForm({mode: 'all'});

  const firstnameErrorMessages = {
    required: 'Il campo nome è obbligatorio',
    minLength: 'Il campo nome deve essere maggiore di 3 caratteri'
  }

  const lastnameErrorMessages = {
    required: 'Il campo cognome è obbligatorio',
    minLength: 'Il campo cognome deve essere maggiore di 5 caratteri'
  }

  const validSub = data => {
    alert(JSON.stringify(data));
  }


  console.log(isDirty, errors);

  return (
    <form onSubmit={handleSubmit(validSub)}>
      <FormInput 
        title="Firstname" 
        registerRes={register('firstname', {required: true, minLength: 3})} 
        isDirty={isDirty || true}
        errors={errors}
        errorMessages={firstnameErrorMessages}
      />

      <FormInput 
        title="Lastname" 
        registerRes={register('lastname', {required: true, minLength: 5})} 
        isDirty={isDirty}
        errors={errors}
        errorMessages={lastnameErrorMessages}
      />
 
 


      {/* <div className="form-group">
        <label htmlFor={lastnameId}>Lastname</label>
        <input 
          name="lastname"
          value={state.lastname} 
          onChange={changeHandler} 
          type="text" 
          className={clsx('form-control', {'is-invalid': dirty.lastname && !valid.lastname, 'is-valid': dirty.lastname && valid.lastname})} 
          id={lastnameId} placeholder="lastname" />
          <div className={clsx('invalid-feedback', {'hide': !(dirty.lastname && !valid.lastname)})}>
            Il cognome deve essere maggiore di 3 caratteri
          </div>
      </div>

      <div className="form-group">
        <label htmlFor={emailId}>Email</label>
        <input 
          name="email"
          value={state.email} 
          onChange={changeHandler} 
          type="text" 
          className={clsx('form-control', {'is-invalid': dirty.email && !valid.email, 'is-valid': dirty.email && valid.email})} 
          id={emailId} placeholder="email" />
            <div className={clsx('invalid-feedback', {'hide': !(dirty.email && !valid.email)})}>
              La mail deve essere maggiore di 3 caratteri
            </div>
      </div> */}
      <input 
        type="submit" 
        className={clsx('btn', {'btn-primary': isValid, 'btn-danger': !isValid})} 
        value="Send" 
        disabled={!isValid} 
      />
    </form>
  )
}

export default App
