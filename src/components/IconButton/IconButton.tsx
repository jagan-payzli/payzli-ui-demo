import React from "react";
import styles from "../Button/styles.module.css";
import { IIconButtonProps } from "../../models/IIconButton";

const IconButton: React.FC<IIconButtonProps> = (props: IIconButtonProps) => {
	const { onClick, variant, className = "", size = "medium", buttonType = "button", id = "", disabled, children, ref } = props;
	return (
		<React.Fragment>
			<button
				className={`${styles.icon_button} ${styles[`button_${variant}`]} ${className} ${styles[`type_${buttonType}`]}`}
				onClick={onClick}
				type="button"
				id={id}
				disabled={disabled}
				style={{ fontSize: size }}
				ref={ref}
			>
				{children}
			</button>
		</React.Fragment>
	);
};

IconButton.displayName = "IconButton";
export default IconButton;
