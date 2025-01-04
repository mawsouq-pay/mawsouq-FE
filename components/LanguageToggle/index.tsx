import {
	ToggleWrapper,
	ToggleLabel,
	ToggleSlider,
} from "./LanguageToggle.styles";

const LanguageToggle = (props: LanguageToggleProps) => {
	const { isArabic, onToggle } = props;
	return (
		<ToggleWrapper onClick={onToggle}>
			<ToggleLabel isSelected={!isArabic}>EN</ToggleLabel>
			<ToggleLabel isSelected={isArabic}>عربي</ToggleLabel>
			<ToggleSlider isArabic={isArabic} />
		</ToggleWrapper>
	);
};
export default LanguageToggle;
