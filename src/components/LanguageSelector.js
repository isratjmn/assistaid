// components/LanguageSelector.js
import React from "react";
import { useTranslation } from "next-i18next";

function LanguageSelector() {
	const { i18n } = useTranslation();

	const handleLanguageChange = (event) => {
		const selectedLanguage = event.target.value;
		i18n.changeLanguage(selectedLanguage);
	};

	return (
		<select
			onChange={handleLanguageChange}
			value={i18n.language}
			style={{ color: "black" }}
		>
			<option value="en">English</option>
			<option value="es">Spanish</option>
			<option value="bn">Bangla</option>
		</select>
	);
}

export default LanguageSelector;
