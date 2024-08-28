export interface IAvatar {
	size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
	statusIcon?: "online" | "offline" | "verified" | "company" | "merchant" | "user" | "admin" | "partner" | JSX.Element;
	src?: string; // image url
	src_text: string; // text to show when image is not available
	placeholderIcon?: boolean; // icon to show when image & text are not available
	onClick?: (event: any) => void;
	id: string;
	image_hash: string; // image hash for api route + provide apiRoutePrefix
	mime_type: string; // image mime type for api route + provide apiRoutePrefix (eg: image/png)
	height?: string;
	width?: string;
	loading?: "lazy" | "eager";
	alt?: string;
	className?: string; // img tag className
	style?: object; // img tag style
	tooltip?: string;
	user_type?: string; // "admin" | "user" | "merchant" | "company" | "partner" ...etc.
	parentClass?: string; // parent div className
	apiRoutePrefix?: string; // prefix for api route eg: https://api.payzli.com/v1/Auth/get_file
	iconSize?: string; // icon size
	statusIconSize?: string; // status icon size
	ref?: any;
}
