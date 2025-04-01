import React from "react";

export default function NextButton({ dispatch, answer, i, numQuestion }) {
  if (answer === null) return null;
  if (i < numQuestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (i === numQuestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        finished
      </button>
    );
}
