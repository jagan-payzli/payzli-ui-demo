import { CaretDown, CaretUp } from "@phosphor-icons/react";
import React from "react";
import { Button, NumberInput, PopupSelect, Typography } from "../../components";
import { IAmountInputProps, ISelectInput } from "../../models";
import styles from "./InputField.module.css";

const defaultCurrency: ISelectInput = {
	value: "USD",
	label: "USD",
	symbol: "$"
};
const AmountInput: React.FC<IAmountInputProps> = (props: IAmountInputProps) => {
	const [popupVisible, setPopupVisible] = React.useState(false);
	const { selectedCurrency = defaultCurrency, handleSelectCurrency = () => {}, currencyOptions = [], ...otherProps } = props;

	const handlePopupVisible = (visible: boolean) => {
		setPopupVisible(visible);
	};
	return (
		<div>
			<NumberInput
				{...otherProps}
				leftIcon={
					<Typography size="md" fontFamily="regular" color="secondary">
						{selectedCurrency?.symbol || "$"}
					</Typography>
				}
				inputType="amount"
				className={styles.amount_input_field}
				thousandSeparator={true}
				thousandsGroupStyle={housandsGroupStyleEnum[selectedCurrency.value || "USD"]}
				sectionRightIcon={
					<PopupSelect
						target={
							<Button
								label={""}
								variant={"none"}
								iconPosition="right"
								rightIcon={
									popupVisible ? (
										<CaretUp size={"1.25rem"} className="icon-color" weight="bold" />
									) : (
										<CaretDown size={"1.25rem"} className="icon-color" weight="bold" />
									)
								}
								onClick={() => {}}
								className="pl-1"
								disabled={props.disableCurrency}
							>
								<Typography size="md" fontFamily="regular" color="secondary">
									{selectedCurrency.label || "USD"}
								</Typography>
							</Button>
						}
						value={selectedCurrency}
						setValue={handleSelectCurrency}
						selectOptions={currencyOptions}
						popupParentClass={props.popupParentClass}
						isLoading={props.isLoading}
						handlePopupVisible={handlePopupVisible}
					/>
				}
			/>
		</div>
	);
};

const housandsGroupStyleEnum: any = {
	INR: "lakh",
	WAN: "wan",
	USD: "thousand"
};
AmountInput.displayName = "AmountInput";
export default AmountInput;
