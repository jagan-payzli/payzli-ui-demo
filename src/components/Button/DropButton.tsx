import React, { forwardRef, Ref, useEffect, useImperativeHandle, useRef, useState } from "react";
import { IDropButtonProps } from "../../models";
import HideComponentWrapper from "../HideComponentWrapper";
import popoverStyles from "../Popover/Popover.module.css";
import buttonStyles from "./styles.module.css";

interface IRefProps {
	closePopup(): void;
	openPopup(): void;
}
const DropButton: React.FC<IDropButtonProps> = forwardRef((props: IDropButtonProps, ref?: Ref<IRefProps>) => {
	const [counter, setCounter] = useState<number>();
	const popupRef = useRef<HTMLDivElement>(null);
	const [popupVisible, setPopupVisible] = useState(false);

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	useEffect(() => {
		if (counter && popupVisible) {
			setPopupVisible(false);
		}
	}, [counter]);
	const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		setPopupVisible(!popupVisible);
	};
	useImperativeHandle(ref, () => ({
		closePopup() {
			setCounter(Math.random);
		},
		openPopup() {
			setPopupVisible(true);
		}
	}));

	const handleOutsideClick = (e: MouseEvent) => {
		if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
			setPopupVisible(false);
		}
	};

	const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
		if (props.hoverTrigger) {
			setPopupVisible(true);
		}
	};

	const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
		if (props.hoverTrigger && !props.disableHoverOut) {
			setPopupVisible(false);
		}
	};

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
		<div ref={popupRef} className={`${popoverStyles.dropdown} ${props.dropdownClass || ""}`} title={props.mouseoverTitle ?? ""}>
			<div className={buttonStyles.dropdown_button_container}>
				<button
					className={`${buttonStyles.button} ${buttonStyles.type_button} ${buttonStyles[`button_${props.variant}`]} ${
						props.className ?? ""
					} ${buttonStyles[`type_${props.buttonType ?? "button"}`]}`}
					onClick={props.onClick}
					type="button"
					id={props.id ?? ""}
					disabled={props.disabled}
				>
					<HideComponentWrapper show={props.iconPosition === "left" || props.iconPosition === "both" || !props.iconPosition}>
						{getIcon("left")}
					</HideComponentWrapper>
					<span className={buttonStyles.button_text}>{props.label}</span>
					<HideComponentWrapper show={props.iconPosition === "right" || props.iconPosition === "both"}>
						{getIcon("right")}
					</HideComponentWrapper>
				</button>
				<div
					onMouseEnter={(e) => handleMouseEnter(e)}
					onMouseLeave={(e) => handleMouseLeave(e)}
					onClick={onClick}
					className={`${popoverStyles.dropbtn} ${props.iconContainerClass || ""}`}
				>
					<button
						className={`${buttonStyles.button} ${buttonStyles.dropdown_icon_button} ${buttonStyles.type_button} ${
							buttonStyles[`button_${props.variant}`]
						}`}
						type="button"
						disabled={props.disabled}
						style={props.dropdownStyles ?? {}}
						ref={props.ref}
					>
						{props.dropdownIcon ? props.dropdownIcon : <i className="ph-bold ph-caret-down" />}
					</button>
				</div>
			</div>
			<HideComponentWrapper hidden={!popupVisible}>
				<div
					style={props.parentStyle || {}}
					className={`${popoverStyles.popup_content} ${popoverStyles[props.position || "bottom"]} ${props.parentClass || ""}`}
				>
					{props.children}
				</div>
			</HideComponentWrapper>
		</div>
	);
});

DropButton.displayName = "DropButton";
export default DropButton;
