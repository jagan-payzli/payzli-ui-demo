import { AmountInput, Button, IconButton, InputField, NumberInput, Typography } from "../components";
import React from "react";
import Section from "../components/Section";
import { ISelectInput } from "../models";
import MaskInput from "../components/InputField/MaskInput";
import PhoneNumberInput from "../components/InputField/PhoneNumberInput";
import { CreditCard } from "@phosphor-icons/react";
import CardInput from "../components/InputField/CardInput";
import CardIcon from "../assets/icons/card.png";
import Textarea from "../components/InputField/Textarea";
const currencyOptions = [
	{ label: "USD", value: "USD", symbol: "$" },
	{ label: "INR", value: "INR", symbol: "₹" },
	{ label: "EUR", value: "EUR", symbol: "€" },
	{ label: "GBP", value: "GBP", symbol: "£" },
	{ label: "JPY", value: "JPY", symbol: "¥" },
	{ label: "AUD", value: "AUD", symbol: "$" },
	{ label: "CAD", value: "CAD", symbol: "$" },
	{ label: "CHF", value: "CHF", symbol: "CHF" },
	{ label: "CNY", value: "CNY", symbol: "¥" }
];
const countryCodeOptions = [
	{ value: "US", label: "US", code: "+1", format: "+1 (###) ###-####", country: "United States" },
	{ value: "IN", label: "IN", code: "+91", format: "+91 (###) ###-####", country: "India" },
	{ value: "UK", label: "UK", code: "+44", format: "+44 (###) ###-####", country: "United Kingdom" },
	{ value: "JP", label: "JP", code: "+81", format: "+81 (###) ###-####", country: "Japan" },
	{ value: "AU", label: "AU", code: "+61", format: "+61 (###) ###-####", country: "Australia" }
];
const InputFieldSection = () => {
	const [formSubmitted, setFormSubmitted] = React.useState<boolean>(false);
	const [state, setState] = React.useState<any>({
		default: "This is existing text",
		disabled: "This is disabled text",
		maskInput: "",
		selectedCurrency: { label: "USD", value: "USD", symbol: "$" }
	});
	const handleSelect = (value: ISelectInput, key: string) => {
		setState((pre: any) => ({ ...pre, [key]: value }));
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const key = e.target.name;
		setState({ ...state, [key]: e.target.value });
		console.log({ [key]: e.target.value });
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormSubmitted(true);
	};

	return (
		<Section title={"# Input Field"}>
			<div className="d-flex justify-content-end">
				<Button onClick={handleSubmit} label={"Form Submit"} variant={"primary"} />
			</div>

			<Typography className="bold">Textarea </Typography>
			<div className="d-flex flex-wrap gap1 divider">
				<Textarea
					id={"textarea"}
					rows={4}
					placeholder="write..."
					value={state.textarea}
					onChange={handleChange}
					className={""}
					required={false}
					formSubmitted={formSubmitted}
					name={"textarea"}
					label={"Textarea"}
				/>
				<Textarea
					id={"textarea2"}
					rows={4}
					placeholder="write..."
					value={state.textarea2}
					onChange={handleChange}
					className={""}
					required={true}
					formSubmitted={formSubmitted}
					name={"textarea2"}
					label={"Textarea"}
					maxLength={100}
				/>
				<Textarea
					id={"textarea3"}
					rows={4}
					placeholder="write..."
					value={state.textarea3}
					onChange={handleChange}
					className={""}
					required={false}
					disabled={true}
					formSubmitted={formSubmitted}
					name={"textarea3"}
					label={"Textarea"}
					hintText="This is a hint text."
				/>
				<Textarea
					id={"textarea4"}
					rows={3}
					placeholder="write..."
					value={state.textarea4}
					onChange={handleChange}
					className={""}
					required={false}
					formSubmitted={formSubmitted}
					name={"textarea4"}
					label={"Textarea"}
					errorMessage="This is a error message."
				/>
				<Textarea
					id={"textarea4"}
					rows={3}
					placeholder="write..."
					value={state.textarea4}
					onChange={handleChange}
					className={""}
					required={false}
					formSubmitted={formSubmitted}
					name={"textarea4"}
					label={"Textarea"}
					// hintText="This is a error message."
					maxLength={100}
					minLength={10}
				/>
			</div>

			<Typography className="bold">Card Input </Typography>
			<div className="d-flex flex-wrap gap1 divider">
				<CardInput
					id={"cardInput"}
					name={"cardInput"}
					label={"Card Input"}
					value={state.cardInput}
					onChange={handleChange}
					className={""}
					required={false}
					formSubmitted={formSubmitted}
				/>
				<CardInput
					format="#### #### #### ####"
					mask="_"
					cardIcon={<img src={CardIcon} width={"100%"} height={"auto"} alt="Mastercard" />}
					id={"cardInput2"}
					name={"cardInput2"}
					label={"Card Input"}
					value={state.cardInput2}
					onChange={handleChange}
					className={""}
					required={true}
					formSubmitted={formSubmitted}
					tooltip="Note: pass sectionLeftIcon & sectionType='left'"
				/>
				<CardInput
					format="#### #### #### ####"
					mask=""
					id={"cardInput4"}
					name={"cardInput4"}
					label={"Card Input"}
					value={state.cardInput4}
					onChange={handleChange}
					className={""}
					required={true}
					formSubmitted={formSubmitted}
					tooltip="Note: pass sectionLeftIcon & sectionType='left'"
				/>
				<CardInput
					id={"cardInput3"}
					name={"cardInput3"}
					label={"Card Input"}
					value={state.cardInput3}
					onChange={handleChange}
					className={""}
					required={false}
					formSubmitted={formSubmitted}
					disabled={true}
					tooltip="Note: pass sectionLeftIcon & sectionType='left'"
				/>
			</div>

			<Typography className="bold">Phone Number Input </Typography>
			<div className="d-flex flex-wrap gap1 divider">
				<PhoneNumberInput
					countryCodeOptions={countryCodeOptions}
					selectedCountryCode={state.selectedCountryCode}
					handleSelectCountryCode={(item) => handleSelect(item, "selectedCountryCode")}
					id={"phoneNumber"}
					name={"phoneNumber"}
					label={"PhoneNumber Input"}
					value={state.phoneNumber}
					onChange={handleChange}
					className={""}
					required={false}
					formSubmitted={formSubmitted}
					placeholder="Enter phone number"
					// placeholder="+1 (___) ___-____"
					// mask=" "
					tooltip="Note: pass sectionLeftIcon & sectionType='left'"
				/>
				<PhoneNumberInput
					countryCodeOptions={countryCodeOptions}
					selectedCountryCode={state.selectedCountryCode}
					handleSelectCountryCode={(item) => handleSelect(item, "selectedCountryCode")}
					id={"phoneNumber2"}
					name={"phoneNumber2"}
					label={"PhoneNumber Input"}
					value={state.phoneNumber2}
					onChange={handleChange}
					className={""}
					required={true}
					formSubmitted={formSubmitted}
					// placeholder="+1 (___) ___-____"
					// mask="_"
					tooltip="Note: pass sectionLeftIcon & sectionType='left'"
				/>
				<PhoneNumberInput
					countryCodeOptions={countryCodeOptions}
					selectedCountryCode={state.selectedCountryCode}
					handleSelectCountryCode={(item) => handleSelect(item, "selectedCountryCode")}
					id={"phoneNumber3"}
					name={"phoneNumber3"}
					label={"PhoneNumber Input"}
					value={state.phoneNumber3}
					onChange={handleChange}
					className={""}
					required={false}
					formSubmitted={formSubmitted}
					disabled={true}
					placeholder="write..."
					tooltip="Note: pass sectionLeftIcon & sectionType='left'"
				/>
			</div>
			<Typography className="bold">Mask Input </Typography>
			<div className="d-flex flex-wrap gap1 divider">
				<MaskInput
					type={"number"}
					id={"maskInput"}
					name={"maskInput"}
					label={"Mask Input"}
					value={state.maskInput}
					onChange={handleChange}
					className={""}
					required={false}
					formSubmitted={formSubmitted}
					placeholder="write..."
					tooltip="Note: pass sectionRightIcon & sectionType='right'"
				/>
				<MaskInput
					id={"maskInput"}
					name={"maskInput"}
					label={"Mask Input"}
					value={state.maskInput}
					onChange={handleChange}
					className={""}
					required={false}
					formSubmitted={formSubmitted}
					placeholder="write..."
					tooltip="Note: pass sectionRightIcon & sectionType='right'"
				/>
				<MaskInput
					format="##-##-####"
					placeholder="__-__-____"
					type={"number"}
					id={"maskInput2"}
					name={"maskInput2"}
					label={"Mask Input"}
					value={state.maskInput2}
					onChange={handleChange}
					className={""}
					required={true}
					tooltip="Note: pass sectionRightIcon & sectionType='right'"
					formSubmitted={formSubmitted}
				/>
				<MaskInput
					format="+91 (###) ###-####"
					placeholder="+91 (###) ###-####"
					type={"number"}
					id={"maskInput3"}
					name={"maskInput3"}
					label={"Mask Input"}
					value={state.maskInput3}
					onChange={handleChange}
					className={""}
					required={false}
					formSubmitted={formSubmitted}
				/>
			</div>

			<Typography className="bold">Currency Input </Typography>
			<div className="d-flex flex-wrap gap1 divider">
				<AmountInput
					id={"amount"}
					label={"Amount"}
					placeholder="write..."
					value={state.amount}
					selectedCurrency={state.selectedCurrency}
					currencyOptions={currencyOptions}
					handleSelectCurrency={(item) => handleSelect(item, "selectedCurrency")}
					sectionType="right"
					name={"amount"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					tooltip="Note: pass sectionRightIcon & sectionType='right'"
					decimalPlace={2}
				/>
				<AmountInput
					id={"amount"}
					label={"Amount"}
					placeholder="write..."
					value={state.amount}
					selectedCurrency={state.selectedCurrency}
					currencyOptions={currencyOptions}
					handleSelectCurrency={(item) => handleSelect(item, "selectedCurrency")}
					sectionType="right"
					name={"amount"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={formSubmitted}
					tooltip="Note: pass sectionRightIcon & sectionType='right'"
					decimalPlace={3}
				/>
				<AmountInput
					id={"amount"}
					label={"Amount"}
					placeholder="write..."
					value={state.amount}
					selectedCurrency={state.selectedCurrency}
					currencyOptions={currencyOptions}
					handleSelectCurrency={(item) => handleSelect(item, "selectedCurrency")}
					sectionType="right"
					name={"amount"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={formSubmitted}
					tooltip="Note: pass sectionRightIcon & sectionType='right'"
					disableCurrency={true}
					decimalPlace={2}
					showDecimalPlaceholder={true}
					fixedDecimalScale={true}
				/>
				<AmountInput
					id={"amount"}
					label={"Amount"}
					placeholder="write..."
					value={state.amount}
					selectedCurrency={state.selectedCurrency}
					currencyOptions={currencyOptions}
					handleSelectCurrency={(item) => handleSelect(item, "selectedCurrency")}
					sectionType="right"
					name={"amount"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={formSubmitted}
					tooltip="Note: pass sectionRightIcon & sectionType='right'"
					disableCurrency={true}
					disabled={true}
				/>
			</div>
			<Typography className="bold">Multisection Input - You can pass custom components for sections. </Typography>
			<div className="d-flex flex-wrap gap2 divider">
				<InputField
					type={"text"}
					id={"url"}
					label={"Website"}
					placeholder="write..."
					value={state.website}
					fieldType={"url"}
					sectionType={"left"}
					name={"website"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					tooltip="Note: pass sectionLeftIcon & sectionType='left'"
					hintText={"Note: pass sectionLeftIcon & sectionType='left'"}
					sectionLeftIcon={<Button disabled={true} onClick={() => {}} label={"https://"} variant={"none"} />}
					disabled={true}
				/>
				<InputField
					type={"text"}
					id={"copy"}
					label={"Copy url"}
					fieldType="url"
					placeholder="write..."
					value={state.website}
					sectionType="right"
					name={"website"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={formSubmitted}
					errorMessage={"Note: pass sectionRightIcon & sectionType='right'"}
					sectionRightIcon={
						<Button onClick={() => {}} label={"Copy"} leftIcon={<i className="ph ph-copy" />} iconPosition="left" variant={"none"} />
					}
				/>
				<InputField
					type={"text"}
					id={"copy"}
					label={"Copy url"}
					fieldType="url"
					placeholder="write..."
					value={state.website}
					sectionType="both"
					name={"website"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={formSubmitted}
					hintText={"Note: pass sectionLeftIcon, sectionRightIcon & sectionType='both'"}
					sectionLeftIcon={<Button onClick={() => {}} label={"https://"} variant={"none"} />}
					sectionRightIcon={
						<Button onClick={() => {}} label={"Copy"} leftIcon={<i className="ph ph-copy" />} iconPosition="left" variant={"none"} />
					}
				/>
				<NumberInput
					id={"url"}
					label={"Amount"}
					placeholder="write..."
					value={state.amount}
					sectionType={"left"}
					name={"amount"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={formSubmitted}
					tooltip="Note: pass sectionLeftIcon & sectionType='left'"
					hintText={"Note: pass sectionLeftIcon & sectionType='left'"}
					sectionLeftIcon={<div className="px-3">$</div>}
				/>
				<NumberInput
					id={"url"}
					label={"Amount"}
					placeholder="write..."
					value={state.amount}
					sectionType={"both"}
					name={"amount"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={formSubmitted}
					tooltip="Note: pass sectionLeftIcon & sectionType='left'"
					hintText={"Note: pass sectionLeftIcon & sectionType='left'"}
					sectionLeftIcon={<div className="px-3">$</div>}
					sectionRightIcon={<Button onClick={() => {}} label={"USD"} variant={"none"} />}
				/>
			</div>

			<div className="divider_hr"></div>
			<Typography className="bold">Number Input </Typography>
			<div className="d-flex flex-wrap gap1 ">
				<NumberInput
					id={"number"}
					label={"Number"}
					value={state.simpleNumber}
					name={"simpleNumber"}
					onChange={handleChange}
					placeholder="123..."
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					// maxLength={100} // max text length
					// tooltip={"This is a tooltip"}
					// hintText={"This is a hint text to help user."}
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
				<NumberInput
					id={"number"}
					label={"Number"}
					value={state.requiredNumber}
					name={"requiredNumber}"}
					onChange={handleChange}
					placeholder="123..."
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={formSubmitted}
					// maxLength={100} // max text length
					tooltip={"This is a tooltip"}
					// hintText={"This is a hint text to help user."}
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
				<NumberInput
					id={"number"}
					label={"Percentage"}
					value={state.percentage}
					name={"percentage}"}
					onChange={handleChange}
					placeholder="Ex: 80.00%"
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					icon="percentage"
					min={0}
					max={100}
					// maxLength={100} // max text length
					// tooltip={"This is a tooltip"}
					// hintText={"This is a hint text to help user."}
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
				<NumberInput
					id={"number"}
					label={"Amount"}
					value={state.amount}
					name={"amount"}
					onChange={handleChange}
					placeholder="Ex: $100.00"
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					icon="currency"
					tooltip={"This is a tooltip"}
					hintText={"This is a hint text to help user."}
					// maxLength={100} // max text length
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
				<NumberInput
					id={"number"}
					label={"Min"}
					value={state.Min}
					name={"Min"}
					onChange={handleChange}
					placeholder="Ex: $100.00"
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					icon="currency"
					min={5}
					// tooltip={"This is a tooltip"}
					// hintText={"This is a hint text to help user."}
					// maxLength={100} // max text length
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
				<NumberInput
					id={"number"}
					label={"Max"}
					value={state.Max}
					name={"Max"}
					onChange={handleChange}
					placeholder="Ex: $100.00"
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					icon="currency"
					max={999}
					// tooltip={"This is a tooltip"}
					// hintText={"This is a hint text to help user."}
					// maxLength={100} // max text length
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
				<NumberInput
					id={"number"}
					label={"3 decimals"}
					value={state.threeDecimals}
					name={"threeDecimals"}
					onChange={handleChange}
					placeholder="Ex: $100.00"
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					icon="currency"
					max={999}
					decimalPlace={3}
					// tooltip={"This is a tooltip"}
					// hintText={"This is a hint text to help user."}
					// maxLength={100} // max text length
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
				<NumberInput
					id={"number"}
					label={"Disabled"}
					value={state.disabledNumber}
					name={"disabledNumber"}
					onChange={handleChange}
					placeholder="$100.000"
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					icon="currency"
					disabled={true}
					// tooltip={"This is a tooltip"}
					// hintText={"This is a hint text to help user."}
					// maxLength={100} // max text length
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
				<NumberInput
					id={"number"}
					label={"Read Only"}
					value={state.readOnly}
					name={"readOnly"}
					onChange={handleChange}
					placeholder="$100.000"
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					readOnly={true}
					tooltip={"This is read only number input field."}
					// hintText={"This is a hint text to help user."}
					// maxLength={100} // max text length
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
			</div>
			<div className="divider_hr"></div>
			<Typography className="bold">Simple Text Input - Optional | Required</Typography>
			<div className="d-flex flex-wrap gap1 ">
				<InputField
					type={"text"}
					id={"title"}
					label={"Title"}
					placeholder="write..."
					value={state.optional}
					name={"optional"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					// maxLength={100} // max text length
					// tooltip={"This is a tooltip"}
					// hintText={"This is a hint text to help user."}
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
				<InputField
					type={"text"}
					id={"title"}
					label={"Title"}
					placeholder="write..."
					value={state.required}
					name={"required"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={formSubmitted}
					// maxLength={100} // max text length
					// tooltip={"This is a tooltip"}
					// hintText={"This is a hint text to help user."}
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
			</div>
			<Typography>Text input with Max Characters | with tooltip </Typography>
			<div className="d-flex flex-wrap gap1 ">
				<InputField
					type={"text"}
					id={"title"}
					label={"Title"}
					placeholder="write..."
					value={state.maxChars}
					name={"maxChars"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					maxLength={20} // max text length
					showMaxLength={true} // show max length counter
					// tooltip={"This is a tooltip"}
					// hintText={"This is a hint text to help user."}
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
				<InputField
					type={"text"}
					id={"title"}
					label={"Title"}
					placeholder="write..."
					value={state.withoutLabel}
					name={"withoutLabel"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					tooltip="This is a tooltip"
					// hintText={"Hint: example@payzli.com"}
					// maxLength={20} // max text length
					// showMaxLength={true} // show max length counter
					// tooltip={"This is a tooltip"}
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
			</div>
			<Typography>Text input with hints</Typography>
			<div className="d-flex flex-wrap gap1 ">
				<InputField
					type={"text"}
					id={"title"}
					label={"Title"}
					placeholder="write..."
					value={state.hints}
					name={"hints"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					hintText={"This is a hint text to help user."}
					// maxLength={20} // max text length
					// showMaxLength={true} // show max length counter
					// tooltip={"This is a tooltip"}
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
			</div>
			<Typography>Text input with default value | disabled</Typography>
			<div className="d-flex flex-wrap gap1 ">
				<InputField
					type={"text"}
					id={"title"}
					label={"Title"}
					placeholder="write..."
					value={state.default}
					name={"default"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					// hintText={"This is a hint text to help user."}
					// maxLength={20} // max text length
					// showMaxLength={true} // show max length counter
					// tooltip={"This is a tooltip"}
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
				<InputField
					type={"text"}
					id={"title"}
					label={"Title"}
					placeholder="write..."
					value={state.disabled}
					name={"disabled"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					disabled={true}
					// hintText={"This is a hint text to help user."}
					// maxLength={20} // max text length
					// showMaxLength={true} // show max length counter
					// tooltip={"This is a tooltip"}
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
			</div>
			<Typography>Text input (Email)</Typography>
			<div className="d-flex flex-wrap gap1 ">
				<InputField
					type={"email"}
					id={"title"}
					label={"Email"}
					placeholder="write..."
					value={state.email}
					name={"email"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={formSubmitted}
					hintText={"Hint: example@payzli.com"}
					leftIcon="email"
					// maxLength={20} // max text length
					// showMaxLength={true} // show max length counter
					// tooltip={"This is a tooltip"}
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
			</div>
			<Typography>Text input without label</Typography>
			<div className="d-flex flex-wrap gap1 ">
				<InputField
					type={"text"}
					id={"title"}
					label={""}
					placeholder="write..."
					value={state.withoutLabel}
					name={"withoutLabel"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					// hintText={"Hint: example@payzli.com"}
					// maxLength={20} // max text length
					// showMaxLength={true} // show max length counter
					// tooltip={"This is a tooltip"}
					// errorMessage={"This is a error message."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
			</div>
			<Typography>Text input with custom error message</Typography>
			<div className="d-flex flex-wrap gap1 ">
				<InputField
					type={"text"}
					id={"title"}
					label={""}
					placeholder="write..."
					value={state.customError}
					name={"customError"}
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={formSubmitted}
					// hintText={"Hint: example@payzli.com"}
					// maxLength={20} // max text length
					// showMaxLength={true} // show max length counter
					// tooltip={"This is a tooltip"}
					errorMessage={"This is custom error from parent component."}
					// UiLanguage={"en"}
					// transformPhrase={transformPhrase}
				/>
			</div>
		</Section>
	);
};

export default InputFieldSection;
