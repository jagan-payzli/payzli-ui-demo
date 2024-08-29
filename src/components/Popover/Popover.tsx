import { CaretRight, DotsThree } from "@phosphor-icons/react";
import React, { forwardRef, Ref, useEffect, useImperativeHandle, useRef, useState } from "react";
import { IPopoverProps } from "../../models/IPopoverProps";
import HideComponentWrapper from "../HideComponentWrapper";
import styles from "./Popover.module.css";

interface IRefProps {
	closePopup(): void;
	openPopup(): void;
}
const Popover: React.FC<IPopoverProps> = forwardRef((props: IPopoverProps, ref?: Ref<IRefProps>) => {
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
		props.handlePopupVisible && props.handlePopupVisible(popupVisible);
	}, [popupVisible]);

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
	const renderComponent = () => {
		if (props.target) {
			return (
				<div
					onMouseEnter={(e) => handleMouseEnter(e)}
					onMouseLeave={(e) => handleMouseLeave(e)}
					onClick={onClick}
					className={`${styles.dropbtn} ${props.iconContainerClass || ""}`}
				>
					{props.target}
				</div>
			);
		} else if (props.title) {
			return (
				<div
					onMouseEnter={(e) => handleMouseEnter(e)}
					onMouseLeave={(e) => handleMouseLeave(e)}
					onClick={onClick}
					className={`${styles.dropbtn} d-flex align-items-center font-regular ${props.titleClass || ""}`}
				>
					{props.title}
					<CaretRight className={styles.dropbtn} />
				</div>
			);
		} else
			return (
				<div onMouseEnter={(e) => handleMouseEnter(e)} onMouseLeave={(e) => handleMouseLeave(e)} onClick={onClick}>
					<DotsThree className={`${styles.dropbtn} ${props.iconContainerClass}`} weight="bold" />
				</div>
			);
	};
	return (
		<div ref={popupRef} className={`${styles.dropdown} ${props.dropdownClass || ""}`} title={props.mouseoverTitle ?? ""}>
			{renderComponent()}
			<HideComponentWrapper hidden={!popupVisible}>
				<div
					style={props.parentStyle || {}}
					className={`${styles.popup_content} ${styles[props.position || "bottom-right"]} ${props.parentClass || ""}`}
				>
					{props.children}
				</div>
			</HideComponentWrapper>
		</div>
	);
});

Popover.displayName = "Popover";
export default Popover;
