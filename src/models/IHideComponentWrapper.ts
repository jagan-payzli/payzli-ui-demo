export interface IHideComponentWrapper {
	hidden?: boolean;
	children: any;
	show?: boolean;
	noPermission?: boolean; // use this only if you want to show permission error.
	label?: string;
	ref?: any;
}
