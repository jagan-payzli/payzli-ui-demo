import React from "react";
import { MaskInput } from "../../components";
import { IMaskInputProps } from "../../models";
import { CreditCard } from "@phosphor-icons/react";
import styles from "./InputField.module.css";
interface ICardInputProps extends IMaskInputProps {
	cardIcon?: React.ReactNode;
}

const CardInput: React.FC<ICardInputProps> = (props: ICardInputProps) => {
	const { ...otherProps } = props;

	return (
		<MaskInput
			{...otherProps}
			formClass={styles.card_input_cont}
			sectionType="left"
			sectionLeftIcon={<div className={styles.card_input_icon}>{props.cardIcon || <CreditCard className="icon-color" />}</div>}
		/>
	);
};

const housandsGroupStyleEnum: any = {
	INR: "lakh",
	WAN: "wan",
	USD: "thousand"
};
export default CardInput;
