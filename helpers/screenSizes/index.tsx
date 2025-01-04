import { useEffect, useMemo, useState } from "react";

function useCustomBreakpoint(): {
	xxl: boolean;
	xl: boolean;
	lg: boolean;
	isMobile: boolean;
} {
	const [width, setWidth] = useState(window.innerWidth);
	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);
		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	const ComputedValues = useMemo(
		() => ({
			xxl: width > 1599,
			xl: width > 1199,
			lg: width > 991,
			isMobile: width <= 900,
		}),
		[width]
	);

	return ComputedValues;
}
export default useCustomBreakpoint;
