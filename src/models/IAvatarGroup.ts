export interface IAvatarGroup {
	children?: any;
	className?: string;
	max?: number;
	onClick?: (event: any) => void;
	handleClickMore?: (event: any) => void;
	handleAddNew?: (event: any) => void;
	size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
	showAddIcon?: boolean;
	showTooltip?: boolean;
	plusIconSize?: string;
	plusIconWidth?: string;
	plusIconHeight?: string;
	ref?: any;
}
