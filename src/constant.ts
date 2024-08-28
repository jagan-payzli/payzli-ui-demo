export const EMAIL_REGEX = /^\w+(?:[\.-]?\w+)*@\w+(?:[\.-]?\w+)*(\.\w{2,5})+$/;
export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[!_?;:.,€¢£¥₹`"'{}~|/><()+=@#$%^&*-])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
export const URL_REGEX = /^(http(s)?:\/\/)?(www.)?([a-zA-Z0-9])+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/[^\s]*)?$/gm;

export const phrases: any = {
	fieldRequired: "Oops. Looks like you missed this.",
	invalidEmail: "Please enter a valid email. Don’t worry, we hate spam too.",
	invalidLink: "Please enter a valid URL.",
	invalid_field: "Invalid field",
	invalidPhone: "Invalid phone number"
};
