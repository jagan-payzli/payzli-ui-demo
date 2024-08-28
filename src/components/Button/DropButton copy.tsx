import React from "react";
import styles from "./styles.module.css";
import HideComponentWrapper from "../HideComponentWrapper";
import { IButtonProps } from "../../models";

const DropButton: React.FC<IButtonProps> = (props: IButtonProps) => {
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
		<div className={styles.dropdown_button_container}>
			<button
				className={`${styles.button} ${styles.type_button} ${styles[`button_${props.variant}`]} ${props.className ?? ""} ${
					styles[`type_${props.buttonType ?? "button"}`]
				}`}
				onClick={props.onClick}
				type="button"
				id={props.id ?? ""}
				disabled={props.disabled}
			>
				<HideComponentWrapper show={props.iconPosition === "left" || props.iconPosition === "both" || !props.iconPosition}>
					{getIcon("left")}
				</HideComponentWrapper>
				<span className={styles.button_text}>{props.label}</span>
				<HideComponentWrapper show={props.iconPosition === "right" || props.iconPosition === "both"}>{getIcon("right")}</HideComponentWrapper>
			</button>
			{props.children ? (
				props.children
			) : (
				<button
					className={`${styles.button} ${styles.dropdown_icon_button} ${styles.type_button} ${styles[`button_${props.variant}`]} ${
						props.dropdownClass ?? ""
					} `}
					onClick={props.onDropdownClick}
					type="button"
					disabled={props.disabled}
					style={props.dropdownStyles ?? {}}
					ref={props.ref}
				>
					{props.dropdownIcon ? props.dropdownIcon : <i className="ph-bold ph-caret-down" />}
				</button>
			)}
		</div>
	);
};

export default DropButton;
