
import React, {FC, ReactEventHandler} from "react";
import { HeroIcon } from "./Icons";
import { IconType } from "react-icons";

interface Props extends Omit<ReactEventHandler<HTMLInputElement>, ""> {
  type: string;
  placeholder?: string;
  name?: string;
  className?: string;
  icon?: IconType;
  register?: any;
}

export const Input: FC<Props> = (props) => {
    return (
      <div className={`flex items-center relative ${props.className}`}>
        {props.icon && <HeroIcon className="absolute left-4 z-10" icon={props.icon} />}
        <input
          className="leading-none rounded-3xl text-left text-gray-600 px-10 py-3 w-full border border-gray-400 outline-none"
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          // {props.register && <>{...props.register(props.name)}</>}
        />
      </div>
    );
  };