import React, { createContext, useContext, useEffect } from "react";
import styles from "./Tabs.module.css";

interface ITabProps {
	label: string;
	value: string;

	activeTab?: string;
}
const Tab = (props: ITabProps) => {
	return (
		<button value={props.value} type="button" className={`${styles.tab_item} ${props.activeTab === props.value ? styles.active : ""}`}>
			{props.label}
		</button>
	);
};

export default Tab;
