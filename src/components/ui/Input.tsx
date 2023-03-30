import React, { FC, ReactEventHandler } from "react";
import { Icon } from "./Icon";
import { IconType } from "react-icons";

interface Props extends Omit<ReactEventHandler<HTMLInputElement>, ""> {
  id?: string;
  type: string;
  placeholder?: string;
  name?: string;
  className?: string;
  icon?: IconType;
  register?: any;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<Props> = (props) => {
  const {id, type, icon, className, placeholder, name, value, onChange} = props
  return (
    <div className={`flex items-center relative ${className}`}>
      {icon && (
        <Icon className="absolute left-4 z-10" icon={icon} />
      )}
      <input
        id = {id} className="leading-none rounded-3xl text-left text-gray-600 px-10 py-3 w-full border border-gray-400 outline-none"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        // {props.register && <>{...props.register(props.name)}</>}
      />
    </div>
  );
};
