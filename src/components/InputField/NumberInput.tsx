import React, { useEffect, useRef, useState } from "react";
import NumberFormat from "react-number-format";
import styles from "./InputField.module.css";
import { HideComponentWrapper } from "../../components";
import { phrases } from "../../constant";
import { INumberInput } from "../../models";

const DEFAULT_MAX = 999999999999999;

const NumberInput: React.FC<INumberInput> = (props: INumberInput) => {
	console.log("props", props);
	const [value, setValue] = useState(props.value);
	const [error, setError] = useState(props.errorMessage);
	const sectionRightIconRef = useRef<HTMLDivElement | null>(null);
	const [sectionWidth, setSectionWidth] = useState<number>(0);
	const optionalProps: any = {
		max: DEFAULT_MAX
	};
	if (props.maxLength) optionalProps["maxLength"] = props.maxLength;
	if (props.minLength) optionalProps["minLength"] = props.minLength;
	if (props.max) optionalProps["max"] = props.max;
	if (props.icon === "currency") optionalProps["prefix"] = "$";
	if (props.icon === "percentage") optionalProps["suffix"] = "%";

	let decimalPlaces = props.decimalPlace ?? 0;
	if (props.icon === "currency" || props.icon === "percentage") {
		decimalPlaces = props.decimalPlace ?? 2;
	}

	const [showPlaceHolder, setShowPlaceHolder] = useState<boolean>(false);
	const numberFormatterRef = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		if (props.value !== value) {
			setValue(props.value);
		}
	}, [props.value]);
	useEffect(() => {
		setError(props.errorMessage);
	}, [props.errorMessage]);

	const transformPhrase = (phrase: string) => {
		if (props.transformPhrase && typeof props.transformPhrase === "function" && props.UiLanguage) {
			return props.transformPhrase(phrase, props.UiLanguage, {});
		} else {
			return phrases[phrase] || phrase;
		}
	};

	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		setShowPlaceHolder(false);
		let strValue: string = event.target.value.replace(/[%$,]/g, "");
		event.target.value = strValue;
		let value: number = +strValue || 0;
		if (props.skipValidation) {
			setError("");
		} else if (props.required && !value) {
			event.target.classList.add(styles.field_invalid);
			setError(transformPhrase("fieldRequired"));
		} else if (value && props.min && value < props.min) {
			event.target.classList.add(styles.field_invalid);
			setError(transformPhrase("minValueRequired"));
		} else if (optionalProps.minLength && strValue.length < optionalProps.minLength) {
			event.target.classList.add(styles.field_invalid);
			setError(transformPhrase("minLengthRequired"));
		} else {
			event.target.classList.remove(styles.field_invalid);
			event.target.classList.add(transformPhrase("field_validated"));
			numberFormatterRef.current?.classList.remove("max_validation_warning");
			setError("");
		}
		props.onBlur?.(event);
	};
	const handleChange = (values: any, sourceInfo: any) => {
		if (sourceInfo.source === "event") {
			let event = sourceInfo.event;
			event.target.value = values.value;
			setValue(values.value);
			props.onChange(event);
		}
	};
	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		props.onFocus?.(e);
		setShowPlaceHolder(decimalPlaces && !+props.value ? true : false);
	};

	const handleAllowValues = (values: any) => {
		if (values.floatValue < 0 && !props.allowNegative) return false;
		if (values.floatValue > optionalProps.max) {
			numberFormatterRef.current?.classList.add("max_validation_warning");
			return false;
		}
		numberFormatterRef.current?.classList.remove("max_validation_warning");
		return true;
	};

	const getMessageText = () => {
		if (
			(value && props.required && error === transformPhrase("fieldRequired")) ||
			(value && props.min && +value >= props.min && error === transformPhrase("minValueRequired"))
		) {
			setError("");
		}

		if (error) {
			return <span className={`${styles.error_text}`}>{error}</span>;
		} else if (props.formSubmitted && !value && props.required) {
			setError(transformPhrase("fieldRequired"));
			return <span className={`${styles.error_text}`}>{error}</span>;
		} else if (props.hintText) {
			return <span className={`${styles.hint_text}`}>{props.hintText}</span>;
		} else if (props.errorMessage) {
			return <span className={`${styles.error_text}`}>{props.errorMessage}</span>;
		} else if (props.maxLength && props.showMaxLength) {
			return <span className={`${styles.hint_text}`}>{`${value?.toString()?.length ?? 0}/${props.maxLength}`}</span>;
		}
	};
	useEffect(() => {
		if (props.tooltip && (props.sectionType === "right" || props.sectionType === "both") && props.sectionRightIcon) {
			console.log(sectionRightIconRef.current?.clientWidth);
			setSectionWidth(sectionRightIconRef.current?.clientWidth ?? 0);
		}
	}, []);

	return (
		<div className={`${styles.form_group} ${props.formClass ?? ""}`}>
			<HideComponentWrapper show={!!props.label}>
				<label className={`${styles.form_label} ${props.required === true ? styles.required : styles.optional}`} htmlFor={props.id}>
					{props.label}
				</label>
			</HideComponentWrapper>
			<div className={styles.input_cont}>
				<HideComponentWrapper show={!!props.tooltip}>
					<div className={styles.help_icon_cont}>
						<div
							style={
								props.inputType === "amount"
									? { right: `calc(${sectionWidth}px + var(--spacing-md))` }
									: { right: `calc(${sectionWidth}px + var(--spacing-lg))` }
							}
							className={styles.help_icon}
						>
							<i className={`ph ph-question ${styles.form_field_info_icon}`}></i>
						</div>
						<div style={{ right: `calc(${sectionWidth}px + 0.26rem` }} className={styles.tooltip_popup}>
							{props.tooltip && <span>{props.tooltip}</span>}
						</div>
					</div>
				</HideComponentWrapper>
				<HideComponentWrapper show={!!props.leftIcon}>
					<div className={props.leftIconClass ?? styles.amount_left_icon}>{props.leftIcon}</div>
				</HideComponentWrapper>
				<div className={`${styles.multisection_cont} ${props.sectionType ? styles["section_type_" + props.sectionType] : ""}`}>
					<div
						hidden={!props.sectionType || props.sectionType === "right"}
						className={styles.multi_section_left}
						aria-disabled={props.disabled}
					>
						{props.sectionLeftIcon}
					</div>
					<NumberFormat
						onBlur={handleBlur}
						onValueChange={handleChange}
						onFocus={handleFocus}
						type="text"
						value={value}
						required={!!props.required}
						id={props.id}
						name={props.name}
						className={`${styles.form_field} ${props.className}`}
						disabled={props.disabled}
						min={props.min ?? 0}
						max={optionalProps.max}
						inputMode={"decimal"}
						placeholder={showPlaceHolder && props.showDecimalPlaceholder ? "__." + "_".repeat(decimalPlaces) : props.placeholder}
						aria-invalid={props.formSubmitted && typeof value !== "number" && !value && props.required}
						aria-valuetext={showPlaceHolder || value || value == 0 ? "true" : "false"}
						mask={props.mask}
						getInputRef={numberFormatterRef}
						decimalScale={decimalPlaces}
						fixedDecimalScale={props.fixedDecimalScale}
						isAllowed={handleAllowValues}
						allowNegative={props.allowNegative || false}
						onContextMenu={props.onContextMenu}
						thousandSeparator={props.thousandSeparator || props.icon === "currency"}
						thousandsGroupStyle={props.thousandsGroupStyle ?? "thousand"}
						readOnly={props.readOnly}
						autoFocus={props.autoFocus}
						aria-details={props.icon ?? "Number"}
						ref={props.ref}
						{...optionalProps}
					/>
					<div
						ref={sectionRightIconRef}
						aria-disabled={props.disabled}
						hidden={!props.sectionType || props.sectionType === "left"}
						className={`${styles.multi_section_right} ${props.inputType === "amount" ? styles.amount_right_icon : ""}`}
					>
						{props.sectionRightIcon}
					</div>
				</div>
				{getMessageText()}
			</div>
		</div>
	);
};

NumberInput.displayName = "NumberInput";
export default NumberInput;
