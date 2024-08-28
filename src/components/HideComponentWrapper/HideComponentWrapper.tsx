import React from "react";
import { IHideComponentWrapper } from "../../models/IHideComponentWrapper";

const HideComponentWrapper: React.FC<IHideComponentWrapper> = ({
	hidden = false,
	noPermission = false,
	show = true,
	...props
}: IHideComponentWrapper) => {
	if (hidden) {
		return <React.Fragment></React.Fragment>;
	} else if (noPermission) {
		return (
			<div className="w-100" ref={props.ref}>
				<div className={`d-flex justify-content-center align-items-center py-5 w-100 vh-100`}>
					<div className="text-center inner-page-placeholder-container">
						<h3 className={`text-smoke text-sm`}>{props.label}</h3>
						<br />
					</div>
				</div>
			</div>
		);
	} else if (show && !hidden) {
		return <React.Fragment>{props.children}</React.Fragment>;
	} else {
		return <React.Fragment></React.Fragment>;
	}
};

export default HideComponentWrapper;
