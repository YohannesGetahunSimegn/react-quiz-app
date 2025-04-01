import React from "react";

export default function Progress({
  points,
  i,
  numQuestions,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={i + Number(answer !== null)} />
      <p>
        <strong>
          {i + 1} / {numQuestions}
        </strong>
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
