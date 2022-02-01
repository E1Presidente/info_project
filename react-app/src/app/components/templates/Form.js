import {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {request} from './Request';
import Response from './Response';

function Form({name, submit, input, select, actions, result}) {
  const inputRef = useRef();
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [formSubmit, setFormSubmit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (input && submitDisabled) {
      inputRef.current.value = input;
      setSubmitDisabled(false);
    }
    if (!result && buttonDisabled) {
      setButtonDisabled(false);
    }
  }, [input, result, submitDisabled, buttonDisabled]);

  const inputChange = event => {
    if (event.target.value && submitDisabled === true) {
      setSubmitDisabled(false);  
    } else if (!event.target.value && submitDisabled === false) {
      setSubmitDisabled(true);
    }
    dispatch(actions.input(event.target.value));
  };

  const selectChange = event => {
    console.log(event.target.value);
    dispatch(actions.select(event.target.value));
  };

  const formSubmitting = event => {
    event.preventDefault();
    setFormSubmit(true);
    console.log(event.target);
  }

  const buttonClick = (event) => {
    event.preventDefault();
    request(123, 123);
  }

  console.log("Form render");

  return (
    <div className="Form">
      {!formSubmit ?
        <>
          <h1>{name}</h1>
          <form onSubmit={formSubmitting}>
            <label>
              <p>Input computer name:</p>
              <input type="text" placeholder="Enter here..." ref={inputRef} onInput={inputChange} />
            </label>
            {select ?
              <>
                <p>Choose action:</p>
                <select defaultValue={select.selected} onChange={selectChange} >
                  {select.options.map(element =>
                    <option value={element} key={element}>{element}</option>
                  )}
                </select>
              </> 
              : null
            }
            <input type="submit" value={submit} disabled={submitDisabled} />
            {!select ? 
              <button disabled={buttonDisabled} onClick={buttonClick} >Previous</button>
              : null
            }
          </form>
        </>
        : <Response />
      }
    </div>
  );
}

export default Form;