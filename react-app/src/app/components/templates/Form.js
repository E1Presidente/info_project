import {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Form({name, options, submit, reducer, action}) {
  let inputSelectorValue
  const inputRef = useRef();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  useSelector(state => {
    console.log("Select render");
    if (state[reducer][action.name]) {
      inputSelectorValue = state[reducer][action.name];
      return null;
    }
  });

  useEffect(() => {
    if (inputSelectorValue && buttonDisabled) {
      inputRef.current.value = inputSelectorValue;
      setButtonDisabled(false);
    }
  }, [inputSelectorValue, buttonDisabled]);

  const inputChange = event => {
    if (event.target.value && buttonDisabled === true) {
      setButtonDisabled(false);  
    } else if (!event.target.value && buttonDisabled === false) {
      setButtonDisabled(true);
    }
    dispatch(action(event.target.value));
  };

  const formSubmit = event => {
    event.preventDefault();
    console.log("click");
  }

  console.log("Form render");

  return (
    <div className="Form">
      <h1>{name}</h1>
      <form onSubmit={formSubmit}>
        <label><p>Input computer name:</p> <input type="text" placeholder="Enter here..." ref={inputRef} onInput={inputChange} /></label>
        {options ?
          <>
            <p>Choose action:</p>
            <select>
              {options.map(element =>
                <option value={element} key={element}>{element}</option>
              )}
            </select>
          </> 
          : null
        }
        <input type="submit" value={submit} disabled={buttonDisabled} />
      </form>
    </div>
  );
}

export default Form;