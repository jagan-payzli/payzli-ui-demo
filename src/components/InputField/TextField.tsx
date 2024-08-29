import React, { useEffect, useState } from "react";
import { EMAIL_REGEX, phrases, URL_REGEX } from "../../constant";
import { ITextField } from "../../models";
import HideComponentWrapper from "../HideComponentWrapper";
import styles from "./InputField.module.css";

const TextField: React.FC<ITextField> = ({ ...props }: ITextField) => {
	const [error, setError] = useState(props.errorMessage);
	const [value, setValue] = useState(props.value || "");

	useEffect(() => {
		setError(props.errorMessage);
	}, [props.errorMessage]);

	useEffect(() => {
		if (props.value !== value) {
			setValue(props.value);
		}
	}, [props.value]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (props.pattern) {
			props.onChange?.(e);
			return;
		}
		e.target.value = e.target.value.trimLeft();
		setValue(e.target.value);
		props.onChange?.(e);
	};
	const transformPhrase = (phrase: string) => {
		if (props.transformPhrase && typeof props.transformPhrase === "function" && props.UiLanguage) {
			return props.transformPhrase(phrase, props.UiLanguage, {});
		} else {
			return phrases[phrase] || phrase;
		}
	};

	const handleValidate = (e: React.FocusEvent<HTMLInputElement>) => {
		if (!props.required && !e.target.value) {
			e.target.classList.remove(styles.field_invalid);
			setError("");
			return true;
		}
		if (props.disableValidation) {
			return true;
		}
		if (!e.target.value && e.target.required) {
			e.target.classList.add(styles.field_invalid);
			setError(transformPhrase("fieldRequired"));
		} else if (e.target.type === "email") {
			if (!e.target.value.match(EMAIL_REGEX)) {
				e.target.classList.add(styles.field_invalid);
				setError(transformPhrase("invalidEmail"));
			} else {
				e.target.classList.remove(styles.field_invalid);
				setError("");
			}
		} else if (props.fieldType === "url" && e.target.required) {
			if (!e.target.value.match(URL_REGEX)) {
				e.target.classList.add(styles.field_invalid);
				setError(transformPhrase("invalidLink"));
			} else {
				e.target.classList.remove(styles.field_invalid);
				setError("");
			}
		} else {
			e.target.classList.remove(styles.field_invalid);
			e.target.classList.add(styles.field_validated);
			setError("");
		}
		props?.onBlur?.(e);
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
		} else if (props.maxLength && props.showMaxLength) {
			return <span className={`${styles.hint_text}`}>{`${value?.toString()?.length ?? 0}/${props.maxLength}`}</span>;
		}
	};

	return (
		<div className={`${styles.form_group} ${props.formClass ?? ""} ${props.fieldType ? styles["field_type_" + props.fieldType] : ""}`}>
			<HideComponentWrapper show={!!props.label}>
				<label className={`${styles.form_label} ${props.required === true ? styles.required : styles.optional}`} htmlFor={props.id}>
					{props.label}
				</label>
			</HideComponentWrapper>
			<div className={styles.input_cont}>
				<HideComponentWrapper show={!!props.tooltip}>
					<div className={styles.help_icon_cont}>
						<div className={styles.help_icon}>
							<i className={`ph ph-question ${styles.form_field_info_icon}`}></i>
						</div>
						<div className={styles.tooltip_popup}>{props.tooltip && <span>{props.tooltip}</span>}</div>
					</div>
				</HideComponentWrapper>
				<HideComponentWrapper show={!!props.leftIcon}>
					<div className={styles.left_icon_cont}>
						{props.leftIcon === "search" && (
							<i style={{ fontSize: "1.25rem" }} className={`ph ph-magnifying-glass icon-color ${styles.form_field_left_icon}`}></i>
						)}
						{props.leftIcon === "email" && (
							<i style={{ fontSize: "1.25rem" }} className={`ph ph-envelope-simple icon-color ${styles.form_field_left_icon}`}></i>
						)}
						{props.leftIcon !== "search" && props.leftIcon !== "email" && props.leftIcon}
					</div>
				</HideComponentWrapper>
				<div className={`${styles.multisection_cont} ${props.sectionType ? styles["section_type_" + props.sectionType] : ""}`}>
					<div hidden={!props.sectionType || props.sectionType === "right"} className={styles.multi_section_left}>
						{props.sectionLeftIcon}
					</div>
					<input
						id={props.id}
						name={props.name || props.label}
						className={`${styles.form_field} ${props.className}`}
						type={props.type}
						value={value}
						aria-invalid={props.formSubmitted && !value && props.required}
						aria-valuetext={String(!!value)}
						onBlur={handleValidate}
						onChange={handleChange}
						required={!!props.required}
						placeholder={props.placeholder}
						disabled={!!props.disabled}
						autoFocus={!!props.autoFocus}
						readOnly={props.readOnly}
						autoComplete={props.disableAutoFill ? "off" : "on"}
						onClick={props.onClick}
						aria-details={props.type}
						inputMode={props.imputMode || numbericModeByType[props.type]}
						maxLength={props.maxLength}
						minLength={props.minLength}
						list={props.list}
						pattern={props.pattern}
						ref={props.ref}
					/>
					<div hidden={!props.sectionType || props.sectionType === "left"} className={styles.multi_section_right}>
						{props.sectionRightIcon}
					</div>
				</div>
				{getMessageText()}
			</div>
		</div>
	);
};
const numbericModeByType: any = {
	email: "email",
	url: "url",
	password: "text",
	text: "text",
	null: "text",
	"": "text"
};

TextField.displayName = "TextField";
export default React.memo(TextField);
