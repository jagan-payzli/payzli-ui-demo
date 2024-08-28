export interface IBreadcrumbItem {
	title: string;
	path: string;
	active?: boolean;
	disabled?: boolean;
	dynamic?: boolean;
	hidden?: boolean;
	customComp?: any;
	ref?: any;
}
export interface IBreadcrumbs {
	homeIcon?: any;
	seprator?: any;
	breadcrumbs: IBreadcrumbItem[];
	className?: string;
	homeRoute?: string; // default is /homepage
	type?: "primary" | "secondary" | "tertiary";
	ref?: any;
}
