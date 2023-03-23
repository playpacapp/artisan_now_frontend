import React from "react";

type Props = {
  label: string;
  action: () => void;
  isSelected: boolean;
};

const getClasses = (selected: boolean) =>
  `w-fit border-b-2 border-gray-100 hover:border-gray-600 text-600 text-lg text-600 px-3 py-2 ${
    selected ? "border-gray-600" : "border-gray-100"
}`;

export const Tab: React.FC<Props> = ({ label, action, isSelected }) => (
  <button onClick={action} className={getClasses(isSelected)}>
    {label}
  </button>
);