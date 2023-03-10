import { FC } from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  className?: string;
  label: string;
  action?: any;
  disabled?: boolean;
  isSubmitting?: boolean;
}

export const Button: FC<Props> = (props) => {
    return (
      <button
        disabled={props.disabled}
        type={props.type}
        onClick = {props.action}
        className={
          "rounded-3xl px-5 py-2 md:px-10 md:py-3 text-lg font-medium text-center text-white border-2 border-brown-600/0 bg-brown-600 hover:border-2 hover:border-brown-600 hover:bg-brown-300/[.15] hover:text-brown-600 leading-4 " +
          props.className
        }
      >
        {props.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
        {props.label}
      </button>
    );
  };