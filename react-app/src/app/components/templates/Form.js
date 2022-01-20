import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {inputChange} from '../../../redux/actions';

function Form({ name, options, submit }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const dispatch = useDispatch();
  const inputText = useSelector(state => {
    console.log(state);
  });

  const inputCheck = event => {
    console.log(event.target.value);
    if (event.target.value && buttonDisabled === true) {
      setButtonDisabled(false);  
    } else if (!event.target.value && buttonDisabled === false) {
      setButtonDisabled(true);
    }
    dispatch(inputChange(event.target.value));
  };

  const formSubmit = event => {
    event.preventDefault();
    console.log("click");
  }

  console.log("render");

  return (
    <div className="Form">
      <h1>{name}</h1>
      <form onSubmit={formSubmit}>
        <label><p>Input computer name:</p> <input type="text" placeholder="Enter here..." onInput={inputCheck} /></label>
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