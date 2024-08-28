export interface IAccordion {
	onClick: any;
	title: any;
	open: boolean;
	subtitle?: string;
	headerClass?: string;
	bodyClass?: string;
	class?: string; // class for accordion card (parent)
	openHeaderClass?: string; // this will be applied only when the accordion is open
	children: JSX.Element;
	titleComponent?: any;
	flat?: boolean;
	titleClass?: string;
	subtitleClass?: string;
	id?: string;
	ref?: any;
}
