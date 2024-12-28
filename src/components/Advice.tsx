import { getAdvice } from "../state/advice/adviceSlice";
import { AppDisptach, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";


const Advice = () => {

  const advice = useSelector((state: RootState) => state.advice.advice);
  const dispatch = useDispatch<AppDisptach>();

  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={() => dispatch(getAdvice())}>Get Advice</button>
    </div>
  )
  
}

export default Advice;