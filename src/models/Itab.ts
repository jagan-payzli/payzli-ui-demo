export interface ITab {
	label: string;
	value: string;
	activeTab?: string;
	badge?: string | JSX.Element;
	badgeClassName?: string;
	disabled?: boolean;
	ref?: any;
}
