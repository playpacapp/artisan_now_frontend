import { FC } from "react";

type Props = {    
    viewBox?: string;
    className?: string;
    size?: number;
    color?: string;
}

export const DestinationIcon: FC<Props> = (props) => {
    const {className} = props
    return (
        <svg
            className={className}
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="20" width="20"
            xmlns="http://www.w3.org/2000/svg">
            <g>
            </g>
        </svg>
    )
}
