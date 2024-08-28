import React from "react";
import { INumberInput, ISelectInput } from "../../models";
import { PopupSelect, Button, NumberInput, Typography } from "../../components";
import { CaretDown } from "@phosphor-icons/react";
import styles from "./InputField.module.css";
interface IAmountInputProps extends INumberInput {
	handleSelectCurrency?: (value: ISelectInput) => void;
	currencyOptions?: ISelectInput[];
	selectedCurrency?: ISelectInput;

	popupParentClass?: string;
	isLoading?: boolean;
	disableCurrency?: boolean;
}
const defaultCurrency: ISelectInput = {
	value: "USD",
	label: "USD",
	symbol: "$"
};
const AmountInput: React.FC<IAmountInputProps> = (props: IAmountInputProps) => {
	const { selectedCurrency = defaultCurrency, handleSelectCurrency = () => {}, currencyOptions = [], ...otherProps } = props;

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
								rightIcon={<CaretDown size={"1.25rem"} className="icon-color" weight="bold" />}
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
export default AmountInput;
