export interface IPopoverProps {
	parentStyle?: object;
	parentClass?: string;
	children: React.ReactNode;
	hoverTrigger?: boolean; // if true, the popup will be shown on hover
	title?: string;
	titleClass?: string;
	target?: React.ReactNode;
	iconContainerClass?: string;
	dropdownClass?: string;
	position?: "left" | "right" | "bottom" | "bottom-left" | "bottom-right" | "top";
	mouseoverTitle?: string;
	disableHoverOut?: boolean; // if you don't want to close the popup on mouse out
	handlePopupVisible?: (visible: boolean) => void;
	ref?: any;
}
