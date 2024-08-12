import { Button, Typography } from "payzli-ui";
import React from "react";
import Section from "../components/Section";
import { InputField, NumberInput } from "./InputField";
// import { InputField } from "payzli-ui";

const InputFieldSection = () => {
	const [formSubmitted, setFormSubmitted] = React.useState<boolean>(false);
	const [state, setState] = React.useState<any>({
		default: "This is existing text",
		disabled: "This is disabled text"
	});
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
			<Typography>Number Input </Typography>
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
			<Typography>Simple Text Input - Optional | Required</Typography>
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
