import React from "react";

interface TestProps {
  message: string;
  name: string;
}

export const Test: React.FC<TestProps> = ({ message, name }) => {
  return (
    <div>
      <h1>{message}</h1>
      <h1>{name}</h1>
    </div>
  );
};
