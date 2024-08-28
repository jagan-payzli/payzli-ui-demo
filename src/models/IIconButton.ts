export interface IIconButtonProps {
	onClick: (event: any) => void;
	variant: "primary" | "secondary" | "tertiary" | "none";
	className?: string;
	size?: string; // "small" | "medium" | "large";
	buttonType?: "button" | "text";
	id?: string;
	disabled?: boolean;
	children: any;
	ref?: any;
}
