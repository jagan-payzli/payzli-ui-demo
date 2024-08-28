import React from "react";
import styles from "./Typography.module.css";
import { ITypography } from "../../models/ITypography";

const Typography: React.FC<ITypography> = ({
	size = "md",
	fontFamily = "regular",
	color = "primary",
	type = "text",
	style = {},
	...props
}: ITypography) => {
	return (
		<p
			className={`
                ${styles.typography} 
                ${styles["size_" + size]} 
                ${styles["color_" + color]} 
                ${styles["type_" + type]} 
                ${styles["font_" + fontFamily]}
                ${props.className ?? ""}
            `}
			style={style}
			ref={props.ref}
		>
			{props.children}
		</p>
	);
};

export default Typography;
