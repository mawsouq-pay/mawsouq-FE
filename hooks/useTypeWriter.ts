import { useState, useEffect } from "react";

const useTypewriter = (
	texts: string[],
	speed = 50,
	delayBetweenTexts = 1000
) => {
	const [displayText, setDisplayText] = useState("");
	const [textIndex, setTextIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0); // Track the current character index

	useEffect(() => {
		const currentText = texts[textIndex];

		if (charIndex < currentText.length) {
			// If there are still characters to type, schedule the next character
			const timeoutId = setTimeout(() => {
				setDisplayText((prevText) => prevText + currentText.charAt(charIndex));
				setCharIndex((prevIndex) => prevIndex + 1); // Move to the next character
			}, speed);

			return () => clearTimeout(timeoutId); // Cleanup the timeout
		} else {
			// If the current text is fully typed, move to the next text after a delay
			const timeoutId = setTimeout(() => {
				setDisplayText(""); // Reset the display text
				setCharIndex(0); // Reset the character index
				setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text
			}, delayBetweenTexts);

			return () => clearTimeout(timeoutId); // Cleanup the timeout
		}
	}, [textIndex, texts, speed, delayBetweenTexts, charIndex]);

	return displayText;
};

export default useTypewriter;
