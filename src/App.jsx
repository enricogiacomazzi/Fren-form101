import { useRef, useState, useId } from "react";
import clsx from "clsx";

const validation = {
  firstname: val => val.length > 0,
  lastname: val => val.length > 4,
  email: val => val.indexOf('@') >= 0
}

const App = () => {
  const [state, setState] = useState({
    firstname: '',
    lastname: '',
    email: ''
  });

  const [valid, setValid] = useState({
    firstname: false,
    lastname: false,
    email: false
  });

  const [dirty, setDirty] = useState({
    firstname: false,
    lastname: false,
    email: false
  });

  const firstnameId = useId();
  const lastnameId = useId();
  const emailId = useId();


  const hadleClick = () => {
    if(Object.values(valid).every(x => x)) {
      alert(`ciao ${JSON.stringify(state)}`);
    }
    else {
      setDirty({
        firstname: true,
        lastname: true,
        email: true
      });
    }
  }

  const changeHandler = (e) => {
    const {name, value} = e.currentTarget;
    setState({...state, [name]: value});
    setValid({...valid, [name]: validation[name](value)});
    setDirty({...dirty, [name]: true});
  } 

  console.log(state);

  return (
    <form>
      <div className="form-group">
        <label htmlFor={firstnameId}>Firstname</label>
        <input 
          name="firstname"
          value={state.firstname} 
          onChange={changeHandler} 
          type="text" 
          className={clsx('form-control', {'is-invalid': dirty.firstname && !valid.firstname, 'is-valid': dirty.firstname && valid.firstname})} 
          id={firstnameId}
          placeholder="firstname" />
          <div className={clsx('invalid-feedback', {'hide': !(dirty.firstname && !valid.firstname)})}>
            Il nome deve essere maggiore di 3 caratteri
          </div>
      </div>

      <div className="form-group">
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
      </div>
      <button onClick={hadleClick} type="button" className="btn btn-primary">
        Send
      </button>
    </form>
  )
}

export default App
