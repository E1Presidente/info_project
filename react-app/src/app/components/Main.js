import {useSelector} from 'react-redux';
import {infoInput, operationInput, controlInput, operationSelect, controlSelect} from '../../redux/actions';
import Form from './templates/Form';

function Main() {
  let inputProps;
  let selectProps;
  let resultProps;

  useSelector(state => {
    console.log('Main selector update');
    console.log(state);
    inputProps = state.inputReducer;
    selectProps = state.selectReducer;
    resultProps = state.resultReducer;
  });

  console.log('Main render');

  return (
    <div className="Main">
      <Form 
        name={"Get hardware info"} 
        submit={"Search"}
        input={inputProps.infoInput} 
        actions={{"input": infoInput}}
        result={resultProps.result}
      />
      <Form 
        name={"Repeat operation to get latest information"} 
        submit={"Commit"} 
        input={inputProps.operationInput}
        select={{"options": selectProps.operationSelect, "selected": selectProps.operationSelected}}
        actions={{"input": operationInput, "select": operationSelect}}
      />
      <Form 
        name={"Open remote control on computer"} 
        submit={"Commit"}
        input={inputProps.controlInput} 
        select={{"options": selectProps.controlSelect, "selected": selectProps.controlSelected}}
        actions={{"input": controlInput, "select": controlSelect}}
      />
    </div>
  );
}

export default Main;