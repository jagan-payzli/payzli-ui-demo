import React from "react";
import Section from "../components/Section";
import InputField from "./InputField";
import { transformPhrase } from "../utils/functions";
// import { InputField } from "payzli-ui";

const InputFieldSection = () => {
	const [state, setState] = React.useState<any>({
		existing_value: "This is existing text"
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const key = e.target.name;
		setState({ ...state, [key]: e.target.value });
	};
	return (
		<Section title={"# Input Field"}>
			<div className="d-flex flex-wrap gap1 ">
				<InputField
					type={"text"}
					id={"optional"}
					name={"optional"}
					label={"Optional"}
					value={state.optional}
					onChange={handleChange}
					placeholder="Start typing here"
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={false}
					maxLength={100} // max text length
					tooltip={"This is a tooltip"}
					hintText={"This is a hint text to help user."}
					errorMessage={"This is a error message."}
					UiLanguage={"en"}
					transformPhrase={transformPhrase}
				/>
				<InputField
					type={"text"}
					id={"optional"}
					name={"required"}
					label={"Required"}
					value={state.required}
					onChange={handleChange}
					placeholder="Start typing here"
					className={"m-0"}
					formClass=""
					required={false}
					formSubmitted={false}
					maxLength={100} // max text length
					tooltip={"This is a tooltip"}
					hintText={"This is a hint text to help user."}
					errorMessage={"This is a error message."}
					UiLanguage={"en"}
					transformPhrase={transformPhrase}
				/>
				<InputField
					type={"text"}
					id={"error_msg"}
					name={"error_msg"}
					label={"Error Message"}
					value={state.error_msg}
					placeholder="Start typing here"
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={false}
					tooltip={"This is a tooltip"}
					errorMessage={"This is an error message."}
					UiLanguage={"en"}
					transformPhrase={transformPhrase}
				/>
				<InputField
					type={"text"}
					id={"max_chars"}
					name={"max_chars"}
					value={state.max_chars}
					label={"With max chars"}
					placeholder="Start typing here"
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={false}
					maxLength={100} // max text length & send showMaxLength to show counter
					showMaxLength={true} // show max length counter
					tooltip={"This is a tooltip"}
					UiLanguage={"en"}
					transformPhrase={transformPhrase}
				/>
				<InputField
					type={"text"}
					id={"existing_value"}
					name={"existing_value"}
					label={"With existing value"}
					value={state.existing_value}
					placeholder="Start typing here"
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={false}
					UiLanguage={"en"}
					transformPhrase={transformPhrase}
				/>
				<InputField
					type={"text"}
					id={"disabled"}
					name={"disabled"}
					value={state.disabled}
					label={"Disabled Input"}
					placeholder="Start typing here"
					onChange={handleChange}
					className={"m-0"}
					formClass=""
					required={true}
					formSubmitted={false}
					maxLength={100} // max text length
					disabled={true}
					showMaxLength={false}
					UiLanguage={"en"}
					transformPhrase={transformPhrase}
				/>
				<InputField
					type={"email"}
					id={"email"}
					value={state.email}
					placeholder="Email Input"
					onChange={handleChange}
					className={""}
					formClass=""
					required={true}
					formSubmitted={false}
					name={"email"}
					label={"Email"}
				/>
				<br />
				<InputField
					type={"text"}
					id={"without_label"}
					name={"without_label"}
					label=""
					value={state.without_label}
					placeholder="Input without label"
					onChange={handleChange}
					className={""}
					formClass=""
					formSubmitted={false}
				/>
			</div>
		</Section>
	);
};

export default InputFieldSection;
