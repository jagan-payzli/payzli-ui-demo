import React from "react";
import { IBreadcrumbs } from "../../models/IBreadcrumb";
import HideComponentWrapper from "../HideComponentWrapper";
import Styles from "./Breadcrumbs.module.css";

/**
 * @description component for breadcrumb
 * @author jagannath
 * @param dynamic: if dynamic: false, then send UiLanguage key
 */
const Breadcrumbs: React.FC<IBreadcrumbs> = (props: IBreadcrumbs) => {
	const { breadcrumbs = [], className = "", type = "primary" } = props;
	return (
		<div ref={props.ref} className={`${Styles.breadcrumb_container} ${className || ""}`}>
			<a href={props.homeRoute || "/homepage"} className={Styles.homepage_icon}>
				{props.homeIcon || <i className="ph-bold ph-house" />}
			</a>
			{breadcrumbs.map((item, index) => (
				<React.Fragment key={`${item.title}-${index}`}>
					<div className={Styles.breadcrumb_separator}>{props.seprator || <i className="ph-bold ph-caret-right" />}</div>
					<HideComponentWrapper hidden={item.hidden}>
						{item.customComp ? (
							<a href={item.path}>{item.customComp(item.title)}</a>
						) : item.active ? (
							<p className={`${Styles.breadcrumb_item} ${Styles.breadcrumb_item_readonly} ${Styles[type]}`}>{item.title}</p>
						) : (
							<a href={item.path} className={`${Styles.breadcrumb_item}`}>
								{item.title}
							</a>
						)}
					</HideComponentWrapper>
				</React.Fragment>
			))}
		</div>
	);
};

export default Breadcrumbs;
