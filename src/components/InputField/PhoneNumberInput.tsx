import { CaretDown, CaretUp } from "@phosphor-icons/react";
import React from "react";
import { Button, MaskInput, PopupSelect, Typography } from "../../components";
import { IPhoneInput } from "../../models/IMaskInputProps";

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
		mask = "_",
		value,
		label,
		onChange,
		className,
		...otherProps
	} = props;
	const [popupVisible, setPopupVisible] = React.useState(false);
	const handlePopupVisible = (visible: boolean) => {
		setPopupVisible(visible);
	};
	return (
		<MaskInput
			{...otherProps}
			type={"tel"}
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
							rightIcon={
								popupVisible ? (
									<CaretUp size={"1.25rem"} className="py_icon_color" weight="bold" />
								) : (
									<CaretDown size={"1.25rem"} className="py_icon_color" weight="bold" />
								)
							}
							onClick={() => {}}
							className="pr-0 py_currency_code_btn"
							disabled={props.disableCurrency || props.disabled}
						>
							<Typography className="py_currency_code" size="md" fontFamily="regular" color="secondary">
								{selectedCountryCode.label || "USD"}
							</Typography>
						</Button>
					}
					value={selectedCountryCode}
					setValue={handleSelectCountryCode}
					selectOptions={countryCodeOptions}
					popupParentClass={props.popupParentClass}
					isLoading={props.isLoading}
					handlePopupVisible={handlePopupVisible}
				/>
			}
		/>
	);
};
PhoneNumberInput.displayName = "PhoneNumberInput";
export default PhoneNumberInput;
