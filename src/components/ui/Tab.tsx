import React from "react";

type Props = {
  label: string;
  action: () => void;
  isSelected: boolean;
};

const getClasses = (selected: boolean) =>
  `w-fit border-b-2 border-brown-200 hover:border-brown-600 text-2xl px-3 py-2 ${
    selected ? "border-brown-600" : "border-brown-100/[.3]"
}`;

export const Tab: React.FC<Props> = ({ label, action, isSelected }) => (
  <button onClick={action} className={getClasses(isSelected)}>
    {label}
  </button>
);