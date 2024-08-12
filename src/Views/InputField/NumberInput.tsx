import React, { useEffect, useRef, useState } from "react";
import NumberFormat from "react-number-format";
import styles from "./InputField.module.css";
import { phrases } from "../../utils/constant";
import { HideComponentWrapper } from "payzli-ui";
interface INumberInput {
	id: string; // unique id for input field
	value: string | number;
	onChange: any;
	name: string; // using as identifier for input field
	label: string; // label for input field
	placeholder?: string;
	required: boolean;
	className: string;
	formClass?: string;
	formSubmitted: boolean; // this helps to show error message on form submit
	disabled?: boolean;
	decimalPlace?: number; // default 2 decimal allowed, you can pass any number
	mask?: string;
	min?: number;
	max?: number;
	icon?: "currency" | "percentage";
	prefix?: string; // pass prefix in case of diffent icon
	suffix?: string; // pass suffix in case of diffent icon
	onFocus?: any;
	onBlur?: any;
	isError?: (err: { [name: string]: string }) => void;
	onContextMenu?: any;
	allowNegative?: boolean;
	skipValidation?: boolean;
	disableWarning?: boolean;
	readOnly?: boolean; // similar to disabled but can be selected & copied but not edited
	autoFocus?: boolean;
	minLength?: number;
	maxLength?: number;
	showMaxLength?: boolean; // pass this to show max length message
	tooltip?: string; // Pass tooltip text to show on info icon click
	hintText?: string; // Pass hint text to show below the input field
	errorMessage?: string; // Pass error message to show below the input field
	transformPhrase?: any;
	UiLanguage?: string;
}
const DEFAULT_MAX = 999999999999999;

const NumberInput: React.FC<INumberInput> = (props: INumberInput) => {
	const [value, setValue] = useState(props.value);
	const [error, setError] = useState(props.errorMessage);
	const optionalProps: any = {
		max: DEFAULT_MAX
	};
	if (props.maxLength) optionalProps["maxLength"] = props.maxLength;
	if (props.minLength) optionalProps["minLength"] = props.minLength;
	if (props.max) optionalProps["max"] = props.max;
	if (props.icon === "currency") optionalProps["prefix"] = "$";
	if (props.icon === "percentage") optionalProps["suffix"] = "%";

	let decimalPlaces = 0;
	if (props.icon === "currency" || props.icon === "percentage") {
		decimalPlaces = props.decimalPlace || 2;
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

	// useEffect(() => {
	//     props?.isError?.({ [props?.name]: error });
	// }, [error]);

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
		console.log("value", value);
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
		if (value && props.required && error === transformPhrase("fieldRequired")) {
			setError("");
		} else if (value && props.min && +value >= props.min && error === transformPhrase("minValueRequired")) {
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

	return (
		<div className={`${styles.form_group} ${props.formClass || ""}`}>
			<HideComponentWrapper show={!!props.label}>
				<label className={`${styles.form_label} ${props.required === true ? styles.required : styles.optional}`} htmlFor={props.id}>
					{props.label}
				</label>
			</HideComponentWrapper>
			<div className={styles.input_cont}>
				<HideComponentWrapper show={!!props.tooltip}>
					<div className={styles.help_icon}>
						<i className={`ph ph-question ${styles.form_field_info_icon}`}></i>
						<div className={styles.tooltip_popup}>{props.tooltip && <span>{props.tooltip}</span>}</div>
					</div>
				</HideComponentWrapper>
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
					min={props.min || 0}
					max={optionalProps.max}
					inputMode={"decimal"}
					placeholder={showPlaceHolder ? "__." + "_".repeat(decimalPlaces) : props.placeholder}
					aria-invalid={props.formSubmitted && typeof value !== "number" && !value && props.required}
					aria-valuetext={showPlaceHolder || value || value == 0 ? "true" : "false"}
					mask={props.mask}
					getInputRef={numberFormatterRef}
					decimalScale={decimalPlaces}
					fixedDecimalScale={!!decimalPlaces}
					isAllowed={handleAllowValues}
					allowNegative={props.allowNegative || false}
					onContextMenu={props.onContextMenu}
					thousandSeparator={props.icon === "currency"}
					readOnly={props.readOnly}
					autoFocus={props.autoFocus}
					aria-details={props.icon || "Number"}
					{...optionalProps}
				/>
				{getMessageText()}
			</div>
			{/* <label className={`px-0 form-label cursor-text ${props.required ? "required" : ""}`} htmlFor={props.id || props.name || props.label}>
                {props.label}
            </label> */}

			{/* {(error || props.error || (props.required && props.formSubmitted && typeof props.value !== "number" && !props.value)) && (
                <label htmlFor={props.id || props.name || props.label} className="error">
                    {transformPhrase(error || props.error || "fieldRequired", UiLanguage, {
                        name: props.label,
                        min: +props.value < props.min ? props.min : props.minLength || 0
                    })}
                </label>
            )}
            {!props.disableWarning && (
                <label htmlFor={props.id || props.name || props.label} className={"text-muted max_validation_message"} id="max_validation_message">
                    <i className="icon-info" />
                    {transformPhrase("max_amount_limit", UiLanguage, { min: props.min || 0, max: optionalProps.max })}
                </label>
            )} */}
		</div>
	);
};

export default NumberInput;
