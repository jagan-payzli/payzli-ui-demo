import { ISelectInput } from ".";

export interface INumberInput {
	id: string; // unique id for input field
	value: string | number;
	onChange: any;
	name: string; // using as identifier for input field
	label: string; // label for input field
	placeholder?: string;
	required: boolean;
	className: string;
	formClass?: string;
	formSubmitted: boolean; // this helps to show error message on form submit
	disabled?: boolean;
	decimalPlace?: number; // default 2 decimal allowed, you can pass any number
	mask?: string;
	min?: number;
	max?: number;
	icon?: "currency" | "percentage";
	leftIcon?: React.ReactNode;
	prefix?: string; // pass prefix in case of diffent icon
	suffix?: string; // pass suffix in case of diffent icon
	onFocus?: any;
	onBlur?: any;
	isError?: (err: { [name: string]: string }) => void;
	onContextMenu?: any;
	allowNegative?: boolean;
	skipValidation?: boolean;
	disableWarning?: boolean;
	readOnly?: boolean; // similar to disabled but can be selected & copied but not edited
	autoFocus?: boolean;
	minLength?: number;
	maxLength?: number;
	showMaxLength?: boolean; // pass this to show max length message
	tooltip?: string; // Pass tooltip text to show on info icon click
	hintText?: string; // Pass hint text to show below the input field
	errorMessage?: string; // Pass error message to show below the input field
	transformPhrase?: any;
	UiLanguage?: string;
	ref?: any;
	sectionType?: "left" | "right" | "both";
	sectionLeftIcon?: React.ReactNode;
	sectionRightIcon?: React.ReactNode;
	leftIconClass?: string;
	inputType?: "amount" | "number";
	thousandSeparator?: boolean;
	thousandsGroupStyle?: "thousand" | "lakh" | "wan";
	showDecimalPlaceholder?: boolean; // if true then only it will show decimal placeholder
	fixedDecimalScale?: boolean; // this will fix desimal scale and default 00 will be shown
}

export interface IAmountInputProps extends INumberInput {
	handleSelectCurrency?: (value: ISelectInput) => void;
	currencyOptions?: ISelectInput[];
	selectedCurrency?: ISelectInput;

	popupParentClass?: string;
	isLoading?: boolean;
	disableCurrency?: boolean;
}
