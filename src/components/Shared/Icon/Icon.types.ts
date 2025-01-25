export type TIconType =
  | "Instagram"
  | "Facebook"
  | "User"
  | "Bed"
  | "Phone"
  | "Telegram"
  | "Youtube"
  | "Arrow";

export interface IIconProps {
  iconType: TIconType;
  width?: number;
  height?: number;
  color?: string;
  hoverColor?: string;
}
