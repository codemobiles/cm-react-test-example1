import React from "react";

type Props = {};

export default function Demo3({}: Props) {
  return (
    <div>
      <span data-testid="not-empty">
        <span data-testid="empty"></span>
      </span>
      <span data-testid="with-whitespace"> </span>
      <span data-testid="with-comment">{/* comment */}</span>
    </div>
  );
}
