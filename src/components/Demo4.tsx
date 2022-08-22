import React from "react";

type Props = {};

export default function Demo4({}: Props) {
  return (
    <div>
      <span data-testid="ancestor">
        <span data-testid="descendant"></span>
      </span>

      <span data-testid="does-not-exist"></span>
    </div>
  );
}
