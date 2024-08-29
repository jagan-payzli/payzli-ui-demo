import React from "react";
import styles from "./styles.module.css";
import HideComponentWrapper from "../HideComponentWrapper";
import { IButtonProps } from "../../models";

/**
 * @param title: string;
 * @param icon?: "jsx" | "plus" | "close";
 * @param type: "primary" | "secondary" | "tertiary" | "none";
 * @param size?: "small" | "medium" | "large";
 */
const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
	const getIcon = (pos: "left" | "right" | "both") => {
		if (pos === "left" && props.leftIcon) {
			return props.leftIcon;
		} else if (pos === "right" && props.rightIcon) {
			return props.rightIcon;
		} else {
			return props.iconComp;
		}
	};
	return (
		<React.Fragment>
			<button
				className={`${styles.button} ${styles[`button_${props.variant}`]} ${props.className ?? ""} ${
					styles[`type_${props.buttonType ?? "button"}`]
				}`}
				onClick={props.onClick}
				type="button"
				id={props.id ?? ""}
				disabled={props.disabled}
				ref={props.ref}
			>
				<HideComponentWrapper show={props.iconPosition === "left" || props.iconPosition === "both" || !props.iconPosition}>
					{getIcon("left")}
				</HideComponentWrapper>
				<span className={styles.button_text}>{props.label || props.children}</span>
				<HideComponentWrapper show={props.iconPosition === "right" || props.iconPosition === "both"}>{getIcon("right")}</HideComponentWrapper>
			</button>
		</React.Fragment>
	);
};

Button.displayName = "Button";
export default Button;
