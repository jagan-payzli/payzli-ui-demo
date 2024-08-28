import React from "react";
import { Button, MaskInput, PopupSelect, Typography } from "../../components";
import { ISelectInput } from "../../models";
import { IMaskInputProps } from "../../models/IMaskInputProps";
import styles from "./InputField.module.css";
import { CaretDown } from "@phosphor-icons/react";
interface IPhoneInput extends IMaskInputProps {
	handleSelectCountryCode: (value: ISelectInput) => void;
	countryCodeOptions: ISelectInput[];
	selectedCountryCode: ISelectInput;

	popupParentClass?: string;
	isLoading?: boolean;
	disableCurrency?: boolean;
}
const defaultCountryCode = {
	value: "US",
	label: "US",
	code: "+1",
	format: "+1 (###) ###-####",
	country: "United States"
};
const PhoneNumberInput: React.FC<IPhoneInput> = (props: IPhoneInput) => {
	const {
		selectedCountryCode = defaultCountryCode,
		handleSelectCountryCode = () => {},
		countryCodeOptions = [],
		type = "tel",
		mask = "_",
		value = defaultCountryCode.value,
		label = defaultCountryCode.label,
		onChange,
		className,
		...otherProps
	} = props;
	return (
		<MaskInput
			{...otherProps}
			type={type}
			mask={mask}
			format={selectedCountryCode.format}
			value={value}
			onChange={onChange}
			label={label}
			className={className}
			sectionType="left"
			sectionLeftIcon={
				<PopupSelect
					target={
						<Button
							label={""}
							variant={"none"}
							iconPosition="right"
							rightIcon={<CaretDown size={"1.25rem"} className="icon-color" weight="bold" />}
							onClick={() => {}}
							className="pr-0"
							disabled={props.disableCurrency || props.disabled}
						>
							<Typography size="md" fontFamily="regular" color="secondary">
								{selectedCountryCode.label || "USD"}
							</Typography>
						</Button>
					}
					value={selectedCountryCode}
					setValue={handleSelectCountryCode}
					selectOptions={countryCodeOptions}
					popupParentClass={props.popupParentClass}
					isLoading={props.isLoading}
				/>
			}
		/>
	);
};

export default PhoneNumberInput;
