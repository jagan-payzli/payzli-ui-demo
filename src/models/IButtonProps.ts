export interface IButtonProps {
	onClick: any;
	label: string; // button text
	variant: "primary" | "secondary" | "tertiary" | "none";
	className?: string;
	buttonType?: "button" | "text" | "link" | "dropdown";
	size?: "small" | "medium" | "large";
	id?: string;
	disabled?: boolean;
	iconComp?: React.ReactNode; // icon component if position is both, this will set same icon for both side
	leftIcon?: React.ReactNode; // icon component if position is left
	rightIcon?: React.ReactNode; // icon component if position is right
	iconPosition?: "left" | "right" | "both"; // icon position in button
	onDropdownClick?: any; // on click of dropdown icon
	dropdownIcon?: React.ReactNode; // dropdown icon component
	dropdownClass?: string; // dropdown button class
	dropdownStyles?: React.CSSProperties;
	children?: React.ReactNode;
	ref?: any;
}
