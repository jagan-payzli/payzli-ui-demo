import { EMAIL_REGEX, phrases, URL_REGEX } from "../../constant";
import React, { useEffect, useState } from "react";
import styles from "./InputField.module.css";
import HideComponentWrapper from "../HideComponentWrapper";
import { ITextField } from "../../models";
interface ITextareaProps {
	id: string;
	rows: number;
	value: string | number;
	onChange: any;
	className: string;
	required: boolean;
	formSubmitted: boolean;
	name: string;
	label: string;
	lang?: string;
	errorMessage?: string;
	formClass?: string;
	min?: number;
	max?: number;
	maxLength?: number;
	minLength?: number;
	icon?: "currency" | "percentage";
	onBlur?: any;
	disabled?: boolean;
	hideMaxLength?: boolean;
	maxLengthPos?: "bottom" | "top" | "bottom_left";
	placeholder?: string;
	customPosClassName?: string;
	transformPhrase?: (phrase: string, lang: string, params: any) => string;
	UiLanguage?: string;
	hintText?: string;
	ref?: any;
}
const Textarea: React.FC<ITextareaProps> = ({ ...props }: ITextareaProps) => {
	const [error, setError] = useState(props.errorMessage);
	const [value, setValue] = useState(props.value || "");
	const optionalProps: any = {};
	if (props.min) optionalProps["min"] = props.min;
	if (props.max) optionalProps["max"] = props.max;
	if (props.maxLength) optionalProps["maxLength"] = props.maxLength;
	if (props.minLength) optionalProps["minLength"] = props.minLength;
	useEffect(() => {
		setError(props.errorMessage);
	}, [props.errorMessage]);

	useEffect(() => {
		if (props.value !== value) {
			setValue(props.value);
		}
	}, [props.value]);
	const handleChange = (e: any) => {
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
		if (!e.target.value && e.target.required) {
			e.target.classList.add(styles.field_invalid);
			setError(transformPhrase("fieldRequired"));
		} else {
			e.target.classList.remove(styles.field_invalid);
			e.target.classList.add(styles.field_validated);
			setError("");
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
		} else if (props.maxLength && !props.hideMaxLength) {
			return <span className={`${styles.hint_text}`}>{`${value?.toString()?.length ?? 0}/${props.maxLength}`}</span>;
		}
	};

	return (
		<div className={`${styles.form_group} ${props.formClass ?? ""}`}>
			<HideComponentWrapper show={!!props.label}>
				<label className={`${styles.form_label} ${props.required === true ? styles.required : styles.optional}`} htmlFor={props.id}>
					{props.label}
				</label>
			</HideComponentWrapper>
			<div className={styles.textarea_cont}>
				<textarea
					id={props.id || props.name || props.label}
					name={props.name || props.label}
					className={`${styles.form_field} ${props.className}`}
					rows={props.rows || 3}
					value={value}
					aria-invalid={props.formSubmitted && !props.value && props.required}
					aria-valuetext={String(!!props.value)}
					onBlur={handleValidate}
					onChange={handleChange}
					required={!!props.required}
					disabled={!!props.disabled}
					placeholder={props.placeholder || ""}
					{...optionalProps}
					ref={props.ref}
				/>
				{getMessageText()}
			</div>
		</div>
	);
};

export default Textarea;
