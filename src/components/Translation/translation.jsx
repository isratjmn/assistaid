import { useTranslation } from "next-i18next";
import React from "react";

function MyComponent() {
	const { t } = useTranslation("common");

	return <div>{t("welcome")}</div>;
}
