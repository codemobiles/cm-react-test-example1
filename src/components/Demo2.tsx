import React from "react";

type Props = {};

export default function Demo2({}: Props) {
  return (
    <>
      <button data-testid="button" type="submit" disabled>
        submit
      </button>
      <fieldset disabled>
        <input type="text" data-testid="input" />
      </fieldset>
      <button data-testid="button2" type="submit">
        submit
      </button>
    </>
  );
}
