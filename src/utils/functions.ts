export const defaultOnClick = () => {
	alert("Button Clicked");
};
export const transformPhrase = (phrase: string, language: string, params: any) => {
	return phrase.toLocaleUpperCase();
};
