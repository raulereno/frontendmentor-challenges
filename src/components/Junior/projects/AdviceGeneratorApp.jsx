import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomAdvice } from "../../../redux/slices/adviceSlice";

const AdviceGeneratorApp = () => {
  const { advice } = useSelector((state) => state.adviceGenerator);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomAdvice());
  }, [dispatch]);

  return (
    <div id="container_adviceGenerator">
      <div id="adviceGenerator">
        <h3>ADVICE #{advice.id}</h3>
        <p>"{advice.advice}"</p>

        <div id="divider"></div>

        <button
          className="container_dado"
          onClick={() => dispatch(getRandomAdvice())}
        >
          <div id="dado"></div>
        </button>
      </div>
    </div>
  );
};

export default AdviceGeneratorApp;
