import React, { useEffect, useState } from "react";
import { EMAIL_REGEX, URL_REGEX } from "payzli-ui";
import styles from "./InputField.module.css";
import { HideComponentWrapper } from "payzli-ui";
import { phrases } from "../../utils/constant";
type Props = {
	type: "text" | "email";
	id: string;
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	className: string;
	required?: boolean;
	formSubmitted: boolean;
	name: string;
	label: string;
	errorMessage?: string;
	formClass?: string;
	icon?: "search";
	onBlur?: any;
	disabled?: boolean;
	disableAutoFill?: boolean;
	fieldType?: string;
	autoFocus?: boolean;
	onClick?: any;
	readOnly?: boolean;
	disableValidation?: boolean;
	placeholder?: string;
	imputMode?: "text" | "search" | "email" | "tel" | "url" | "none" | "numeric" | "decimal";
	list?: string;
	pattern?: string; // pass regex pattern
	minLength?: number;
	maxLength?: number;
	showMaxLength?: boolean; // pass this to show max length message
	tooltip?: string; // Pass tooltip text to show on info icon click
	hintText?: string; // Pass hint text to show below the input field
	UiLanguage?: string; // Pass language for transformPhrase
	transformPhrase?: any; // (phrase: string, language: string, params: any) => string;
};

const InputField = ({ ...props }: Props) => {
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
			console.log("styles.field_invalid", styles);
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
		if (error) {
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
			<div className="position-relative">
				<HideComponentWrapper show={!!props.tooltip}>
					<div className={styles.help_icon}>
						<i className={`ph ph-question ${styles.form_field_info_icon}`}></i>
						<div className={styles.tooltip_popup}>{props.tooltip && <span>{props.tooltip}</span>}</div>
					</div>
				</HideComponentWrapper>
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
				/>
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

export default React.memo(InputField);
