import React from "react";
import { Select, Option } from "./MSBankDropdown.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

interface MSDropdownProps<T extends { name: string; code: string }> {
	options: T[];
	onChange: (selectedValue: T["code"]) => void;
	name?: string;
	defaultValue?: T["code"];
}

const MSBankDropdown = <T extends { name: string; code: string }>({
	options,
	onChange,
	name = "dropdown",
	defaultValue,
}: MSDropdownProps<T>) => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);

	return (
		<Select
			name={name}
			onChange={(e) => onChange(e.target.value as T["code"])}
			defaultValue={defaultValue}
		>
			{" "}
			<Option key={"title"} value={""}>
				{text.chooseAnOptions}
			</Option>
			{options.map((option) => (
				<Option key={option.code} value={option.code}>
					{option.name}
				</Option>
			))}
		</Select>
	);
};

export default MSBankDropdown;
