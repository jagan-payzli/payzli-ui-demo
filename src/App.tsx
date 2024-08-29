import { useEffect, useState } from "react";
import "./App.css";
import { IconButton } from "./components";
import AccordionSection from "./Views/AccordionSection";
import AvatarGroupSection from "./Views/AvatarGroupSection";
import AvatarSection from "./Views/AvatarSection";
import BreadcrumbSection from "./Views/BreadcrumbSection";
import ButtonSection from "./Views/ButtonSection";
import CardSection from "./Views/CardSection";
import IconButtonSection from "./Views/IconButtonSection";
import InputFieldSection from "./Views/InputFieldSection";
import TabsSection from "./Views/TabsSection";
import TypographySection from "./Views/TypographySection";
import SelectInput from "./Views/SelectInput";
import PopoverSection from "./Views/PopoverSection";

function App() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const activeTheme = localStorage.getItem("theme") || "light";
		document.body.setAttribute("theme", activeTheme); // setting default theme
		setTheme(activeTheme);
	}, []);
	const handleClickTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		document.body.setAttribute("theme", newTheme); // = newTheme;
		// document.body.classList.add(theme === "light" ? "dark" : "light");
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};
	return (
		<div className="App">
			<header className="App-header">
				<h4 className="m-0">Payzli UI Components</h4>
				<IconButton onClick={handleClickTheme} variant={"primary"}>
					{theme === "dark" ? <i className="ph-fill ph-moon"></i> : <i className="ph-fill ph-sun"></i>}
				</IconButton>
			</header>
			<div className="App-body">
				<InputFieldSection />
				{/* <SelectInput />
				<PopoverSection />
				<TabsSection />
				<ButtonSection />
				<IconButtonSection />
				<BreadcrumbSection />
				<AccordionSection />
				<AvatarSection />
				<AvatarGroupSection />
				<CardSection />
				<TypographySection /> */}
				<br />
				<br />
				<br />
				<br />
			</div>
		</div>
	);
}

export default App;
