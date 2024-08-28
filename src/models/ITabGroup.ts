export interface ITabGroup {
	children: React.ReactNode;
	onChange: (event: React.MouseEvent<HTMLDivElement>, newValue: any) => void;
	value: any;
	className?: string;
	type: "primary" | "secondary" | "tertiary" | "underline" | "underline-primary" | "button";
	size: "sm" | "md";
	fullwidth?: boolean;
	ref?: any;
}
