
import {IconType} from 'react-icons'

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon = ({ icon: Icon, size=20, color="currentColor", className="" }: IconProps) => {
  return <Icon className={className} size={size} color={color} />;
};