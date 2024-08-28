export interface ITextField {
	type: "text" | "email";
	id: string;
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className: string;
	required?: boolean;
	formSubmitted: boolean;
	name: string;
	label: string;
	errorMessage?: string;
	formClass?: string;
	leftIcon?: "search" | "email" | React.ReactNode;
	onBlur?: any;
	disabled?: boolean;
	disableAutoFill?: boolean;
	fieldType?: "url";
	autoFocus?: boolean;
	onClick?: any;
	readOnly?: boolean;
	disableValidation?: boolean;
	placeholder?: string;
	imputMode?: "text" | "search" | "email" | "tel" | "url" | "none" | "numeric" | "decimal";
	list?: string;
	pattern?: string; // pass regex pattern
	minLength?: number;
	maxLength?: number;
	showMaxLength?: boolean; // pass this to show max length message
	tooltip?: string; // Pass tooltip text to show on info icon click
	hintText?: string; // Pass hint text to show below the input field
	UiLanguage?: string; // Pass language for transformPhrase
	transformPhrase?: any; // (phrase: string, language: string, params: any) => string;
	ref?: any;
	sectionType?: "left" | "right" | "both";
	sectionLeftIcon?: React.ReactNode;
	sectionRightIcon?: React.ReactNode;
}
