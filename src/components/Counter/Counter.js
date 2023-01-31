import "./Counter.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, toggleShow } from "../../Store/couterSlice";

const Counter = () => {
  const { counter, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      {auth.isLoggedIn && (
        <div className="Counter">
          {counter.show && (
            <>
              <h2>Count: {counter.value} </h2>
              <div className="buttons">
                <button onClick={() => dispatch(increase(5))}>Increase</button>
                <button onClick={() => dispatch(decrease(2))}>Decrease</button>
              </div>
            </>
          )}
          <button onClick={() => dispatch(toggleShow())}>
            Show/Hide Counter
          </button>
        </div>
      )}
    </>
  );
};

export default Counter;
