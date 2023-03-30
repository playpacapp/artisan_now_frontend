import { FC } from "react";
import Image from "next/image"

type Props = {
    label: string;
    icon?: any; 
    size?: string
};

export const H3Icon: FC<Props> = (props) => {
    const { label, icon, size = "48px" } = props;
    return (
        <div className="flex flex-row items-end">
            {icon &&
                <div className={`mr-2 w-[${size}] h-[${size}]`}>
                    <Image src={icon} alt={""} style={{width:"100%", height:"100%"}} />
                </div>
            }
            <h3 className="w-full subtitle">
                {label}
            </h3>
        </div>        
    );
};
