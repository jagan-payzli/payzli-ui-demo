import { IButtonProps } from ".";

export interface IDropButtonProps extends IButtonProps {
	parentStyle?: object; // style for the popup container
	parentClass?: string; // class for the popup container
	children: React.ReactNode;
	dropdownIcon?: React.ReactNode; // icon for the dropdown button // default is caret down
	hoverTrigger?: boolean; // if true, the popup will be shown on hover
	iconContainerClass?: string; // class for drop icon container div
	dropdownClass?: string; // class for DropButton parent div
	mouseoverTitle?: string; // title for the DropButton component
	disableHoverOut?: boolean; // if you don't want to close the popup on mouse out
	position?: "left" | "right" | "bottom" | "bottom-left" | "bottom-right" | "top"; // position of the popup
	disableDropBtn?: boolean; // disable the dropdown button
}
