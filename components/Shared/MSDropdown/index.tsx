import React from "react";
import { Select, Option } from "./MSDropdown.styles";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

interface MSDropdownProps<T extends { label: string; value: string }> {
	options: T[];
	onChange: (selectedValue: T["value"]) => void;
	name?: string;
	defaultValue?: T["value"];
}

const MSDropdown = <T extends { label: string; value: string }>({
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
			onChange={(e) => onChange(e.target.value as T["value"])}
			defaultValue={defaultValue}
		>
			<Option key={"title"} value={""}>
				{text.chooseAnOptions}
			</Option>
			{options.map((option) => (
				<Option key={option.value} value={option.value}>
					{option.label}
				</Option>
			))}
		</Select>
	);
};

export default MSDropdown;
