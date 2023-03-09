
import {IconType} from 'react-icons'

interface HeroIconProps {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
}

export const HeroIcon = ({ icon: Icon, size=20, color="currentColor", className="" }: HeroIconProps) => {
  return <Icon className={className} size={size} color={color} />;
};