import {useSelector} from 'react-redux';
import Loader from './Loader';

function Response() {
  const selector = useSelector(state => {
      return state.resultReducer
    }
  );

  return (
    <div className="Response">
      {selector ?
        <>
        
        </>
        : <Loader />
      }
    </div>
  );
}

export default Response;