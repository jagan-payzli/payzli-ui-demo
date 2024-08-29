import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useRef } from "react";
import Select, { components } from "react-select";
import { HideComponentWrapper, Typography } from "../../components";
import { IPopupSelect } from "../../models";
import { Popover } from "../Popover";
import styles from "./PopupSelect.module.css";

const selectStyles: any = {
	control: (provided: any) => ({
		...provided,
		minWidth: 240,
		margin: 0,
		border: "none",
		color: "#667085",
		boxShadow: "none"
	}),
	menu: () => ({ boxShadow: "inset 0 1px 0 rgba(0, 0, 0, 0.1)" }),
	input: (provided: any) => ({
		...provided,
		marginLeft: "4px" // Adjust to create space between the icon and text
	}),
	placeholder: (provided: any) => ({
		...provided,
		marginLeft: "24px" // Align placeholder with input text
	}),
	dropdownIndicator: (provided: any) => ({
		...provided,
		color: "#6c757d"
	})
};

const PopupSelect: React.FC<IPopupSelect> = (props: IPopupSelect) => {
	const viewPopupRef = useRef(null);
	const handleSelectValue = (newValue: any) => {
		props.setValue(newValue);
		if (props.ref && props.ref.current) {
			props.ref.current?.closePopup();
		} else {
			(viewPopupRef?.current as any)?.closePopup();
		}
	};
	const CustomInput = (props: any) => (
		<div className={styles.inputWrapper}>
			<MagnifyingGlass size={"1.25rem"} className="icon-color" />
			<components.Input {...props} className={styles.input} />
		</div>
	);
	const defaultOption = ({ data, innerProps }: any) => {
		return (
			<div {...innerProps} className={`${styles.custom_option} ${props.value?.value === data.value ? styles.active : ""}`}>
				<div className="d-flex align-items-center spacing-md">
					<Typography size="md" fontFamily="regular" type="text" color="primary">
						{data.label}
					</Typography>
					<HideComponentWrapper show={!!data.email}>
						<Typography size="sm" fontFamily="regular" type="text" color="tertiary">
							{data.email}
						</Typography>
					</HideComponentWrapper>
				</div>
				<i className={`ph ph-check ${styles.activecheck}`}></i>
			</div>
		);
	};
	const getCustomComponents = () => {
		let item: any = {
			IndicatorSeparator: () => null,
			Input: CustomInput,
			Option: defaultOption,
			DropdownIndicator: null
		};
		if (props.CustomOption) {
			item = {
				...item,
				Option: props.CustomOption
			};
		}
		return item;
	};
	return (
		<Popover
			target={props.target}
			ref={props.ref || viewPopupRef}
			parentClass={`${styles.popup_select_cont} ${props.popupParentClass ?? "mt-1"}`}
			handlePopupVisible={props.handlePopupVisible}
		>
			<Select
				autoFocus
				backspaceRemovesValue={false}
				components={getCustomComponents()}
				controlShouldRenderValue={false}
				hideSelectedOptions={false}
				isClearable={false}
				menuIsOpen
				onChange={handleSelectValue}
				options={props.selectOptions}
				placeholder="Search..."
				styles={props.selectStyles || selectStyles}
				tabSelectsValue={false}
				value={props.value}
				isLoading={props.isLoading}
			/>
		</Popover>
	);
};

PopupSelect.displayName = "PopupSelect";
export default PopupSelect;
