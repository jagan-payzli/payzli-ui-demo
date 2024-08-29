import React from "react";
import { ITab } from "../../models/Itab";
import styles from "./Tabs.module.css";

const Tab: React.FC<ITab> = (props: ITab) => {
	return (
		<button
			disabled={props.disabled}
			value={props.value}
			type="button"
			className={`${styles.tab_item} ${props.activeTab === props.value ? styles.active : ""}`}
			ref={props.ref}
		>
			{props.label}
			{props.badge ? <div className={`${styles.badge} ${props.badgeClassName ?? ""}`}>{props.badge}</div> : <></>}
		</button>
	);
};

Tab.displayName = "Tab";
export default Tab;
