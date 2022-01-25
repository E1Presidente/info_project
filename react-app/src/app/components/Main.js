import Form from './templates/Form';
import {infoInput, operationInput, controlInput} from '../../redux/actions';

function Main() {
  const operationOptions = [
    "Hardware",
    "1C"
  ]
  const controlOptions = [
    "Share",
    "Remote access"
  ]

  return (
    <div className="Main">
      <Form 
        name={"Get hardware info"} 
        submit={"Search"} 
        reducer={"formReducer"} 
        action={infoInput}
      />
      <Form 
        name={"Repeat operation to get latest information"} 
        option={operationOptions} 
        submit={"Commit"} 
        reducer={"formReducer"}
        action={operationInput} 
      />
      <Form 
        name={"Open remote control on computer"} 
        option={controlOptions} 
        submit={"Commit"} 
        reducer={"formReducer"} 
        action={controlInput}
      />
    </div>
  );
}

export default Main;