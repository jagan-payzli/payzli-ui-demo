export interface ITypography {
	children: React.ReactNode;
	size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
	color?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "quaternary"
		| "primary_on_brand"
		| "secondary_on_brand"
		| "tertiary_brand"
		| "quaternary_brand"
		| "white"
		| "disabled"
		| "placeholder"
		| "placeholder_subtle"
		| "brand_primary"
		| "brand_secondary"
		| "brand_tertiary"
		| "brand_tertiary_alt"
		| "error_primary"
		| "warning_primary"
		| "success_primary"
		| "muted";
	fontFamily?: "regular" | "medium" | "semibold" | "bold" | "thin";
	type?: "heading" | "text";
	style?: React.CSSProperties;
	className?: string;
	ref?: any;
}
