import React, { useEffect, useRef, useState } from "react";
import NumberFormat from "react-number-format";
import styles from "./InputField.module.css";
import { phrases } from "../../constant";
import { HideComponentWrapper } from "../../components";
import { IMaskInputProps } from "../../models/IMaskInputProps";

/**
 * @description use this component for making input fields
 * @author jagannath
 * @param mask - "_"
 * @param format = "##-#######"
 */
const MaskInput = (props: IMaskInputProps) => {
	const { mask = "_" } = props;
	const [error, setError] = useState(props.errorMessage);
	const [value, setValue] = useState(props.value || "");
	const sectionRightIconRef = useRef<HTMLDivElement | null>(null);
	const [sectionWidth, setSectionWidth] = useState<number>(0);
	const optionalProps: any = {};
	if (props.format) optionalProps["format"] = props.format;
	if (props.prefix) optionalProps["prefix"] = props.prefix;
	if (props.suffix) optionalProps["suffix"] = props.suffix;
	if (props.inputType === "number-psssword") optionalProps["number-psssword"] = "password";
	if (props.disableCopyPaste) {
		optionalProps["onCopy"] = (e: any) => disableCopyPaste(e);
		optionalProps["onPaste"] = (e: any) => disableCopyPaste(e);
	}
	let decimalPlaces: any = null;
	const [showPlaceHolder, setShowPlaceHolder] = useState<boolean>(false);
	const numberFormatterRef = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		if (props.value !== value) {
			setValue(props.value);
		}
	}, [props.value]);
	useEffect(() => {
		setError(props.errorMessage);
		if (props.errorMessage === "") numberFormatterRef.current?.classList.remove(styles.field_invalid);
		else if (props.errorMessage) numberFormatterRef.current?.classList.add(styles.field_invalid);
	}, [props.errorMessage]);

	useEffect(() => {
		props?.isError?.({ [props.name]: error || "" });
	}, [error]);

	const disableCopyPaste = (e: any) => {
		e.preventDefault();
		return false;
	};

	const handleValidate = (e: any) => {
		if (!props.required && !e.target.value) {
			e.target.classList.remove(styles.field_invalid);
			setError("");
			return true;
		}
		if (props.inputType === "number-psssword") e.target.type = "password";
		setShowPlaceHolder(false);
		if (props.skipValidation) {
			setError("");
		} else if (mask && e.target.value.includes(mask)) {
			e.target.classList.add(styles.field_invalid);
			if (props.type === "tel") {
				setError(transformPhrase("invalidPhone"));
			} else {
				setError(transformPhrase("invalid_field"));
			}
		} else {
			e?.target?.classList.remove(styles.field_invalid);
			e?.target?.classList.add("field-validated");
			setError("");
		}
		props.onBlur?.(e);
	};

	const handleChange = (e: any) => {
		if (props.type === "number") {
			e.target.value = e.target.value.replace(/[%$,]/g, "");
			if (e.target.value === ".") e.target.value = "0.";
		}
		props.onChange(e);
	};
	const handleFocus = (e: any) => {
		props.onFocus?.(e);
		if (props.inputType === "number-psssword") e.target.type = "text";
	};

	const transformPhrase = (phrase: string, options = {}) => {
		if (props.transformPhrase && typeof props.transformPhrase === "function" && props.UiLanguage) {
			return props.transformPhrase(phrase, props.UiLanguage, options);
		} else {
			return phrases[phrase] || phrase;
		}
	};
	const getMessageText = () => {
		if (value && props.required && error === transformPhrase("fieldRequired")) {
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
		}
	};

	return (
		<div className={`${styles.form_group} ${styles.mask_input_cont} ${props.formClass ?? ""}`}>
			<HideComponentWrapper show={!!props.label}>
				<label className={`${styles.form_label} ${props.required === true ? styles.required : styles.optional}`} htmlFor={props.id}>
					{props.label}
				</label>
			</HideComponentWrapper>
			<div className={styles.input_cont}>
				<HideComponentWrapper show={!!props.tooltip}>
					<div className={styles.help_icon_cont}>
						<div style={{ right: `calc(${sectionWidth}px + var(--spacing-lg))` }} className={styles.help_icon}>
							<i className={`ph ph-question ${styles.form_field_info_icon}`}></i>
						</div>
						<div style={{ right: `calc(${sectionWidth}px + 0.26rem` }} className={styles.tooltip_popup}>
							{props.tooltip && <span>{props.tooltip}</span>}
						</div>
					</div>
				</HideComponentWrapper>
				<HideComponentWrapper show={!!props.tooltip}>
					<div className={styles.help_icon_cont}>
						<div className={styles.help_icon}>
							<i className={`ph ph-question ${styles.form_field_info_icon}`}></i>
						</div>
						<div className={styles.tooltip_popup}>{props.tooltip && <span>{props.tooltip}</span>}</div>
					</div>
				</HideComponentWrapper>
				<div className={`${styles.multisection_cont} ${props.sectionType ? styles["section_type_" + props.sectionType] : ""}`}>
					<div
						hidden={!props.sectionType || props.sectionType === "right"}
						aria-disabled={props.disabled}
						className={styles.multi_section_left}
					>
						{props.sectionLeftIcon}
					</div>
					<NumberFormat
						type="text"
						getInputRef={numberFormatterRef}
						value={props.value}
						onBlur={handleValidate}
						decimalScale={decimalPlaces}
						allowLeadingZeros
						mask={mask || ""}
						required={!!props.required}
						onChange={handleChange}
						id={props.id || props.name || props.label}
						name={props.name}
						allowNegative={props.allowNegative ?? true}
						className={`${styles.form_field} ${props.className}`}
						aria-invalid={props.formSubmitted && typeof props.value !== "number" && !props.value && props.required}
						aria-not-empty={showPlaceHolder || typeof props.value === "number" ? "true" : String(!!props.value)}
						onFocus={handleFocus}
						disabled={props.disabled || false}
						onCopy={props.onCopy}
						onCut={props.onCut}
						onContextMenu={props.onContextMenu}
						{...optionalProps}
						inputMode={numbericModeByType[props.type]}
						placeholder={props.placeholder}
					/>
					<div
						ref={sectionRightIconRef}
						aria-disabled={props.disabled}
						hidden={!props.sectionType || props.sectionType === "left"}
						className={`${styles.multi_section_right}`}
					>
						{props.sectionRightIcon}
					</div>
				</div>
				{getMessageText()}
			</div>
		</div>
	);
};
const numbericModeByType: any = {
	number: "decimal",
	tel: "tel",
	email: "email",
	url: "url",
	password: "text",
	text: "text",
	null: "text",
	"": "text",
	date: "numberic"
};
export default MaskInput;
