import { FC } from "react";
import { Spinner } from "@/src/components/ui";

type Props = {
  type?: "button" | "submit" | "reset";
  className?: string;
  label: string;
  action?: any;
  disabled?: boolean;
  isSubmitting?: boolean;
};

export const Button: FC<Props> = (props) => {
  const { disabled, type, label, action, className, isSubmitting } = props;
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={action}
      className={
        "disabled:bg-brown-300 disabled:cursor-not-allowed rounded-3xl px-5 py-2 md:px-10 md:py-3 text-lg font-medium text-center text-white border-2 border-brown-600/0 bg-brown-600 enabled:hover:border-2 enabled:hover:border-brown-600 enabled:hover:bg-brown-300/[.15] enabled:hover:text-brown-600 enabled:cursor-pointer leading-4 " +
        className
      }
    >
      {isSubmitting && 
          // <svg className="animate-spin h-5 w-5 mr-3 z-20" viewBox="0 0 24 24"></svg>
          <Spinner size={32} left={11} top={5} className="" /> 
      }
      {label}
    </button>
  );
};
