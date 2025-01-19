export type TIconType = "Instagram" | "Facebook" | "User" | "Bed";

export interface IIconProps {
  iconType: TIconType;
  width?: number;
  height?: number;
  color?: string;
  hoverColor?: string;
}
