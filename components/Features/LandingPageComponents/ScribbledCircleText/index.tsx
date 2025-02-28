import useCustomBreakpoint from "@/helpers/screenSizes";
import React, { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const ScribbledCircleText = ({ text }: { text: string }) => {
	const textRef = useRef<HTMLDivElement>(null);
	const [svgWidth, setSvgWidth] = useState(380);
	const { isMobile, xxl } = useCustomBreakpoint();

	useEffect(() => {
		const updateWidth = () => {
			if (textRef.current) {
				const textWidth = textRef.current.offsetWidth;
				setSvgWidth(textWidth + (isMobile ? 20 : 40));
			}
		};
		updateWidth();
		const observer = new ResizeObserver(() => updateWidth());
		if (textRef.current) {
			observer.observe(textRef.current);
		}
		return () => {
			if (textRef.current) {
				observer.unobserve(textRef.current);
			}
		};
	}, [isMobile]);
	return (
		<div
			style={{
				display: "inline-flex",
				alignItems: "center",
				position: "relative",
				alignSelf: isMobile ? "center" : "flex-start",
			}}
		>
			<div
				ref={textRef}
				style={{
					fontSize: "2.5rem",
					fontWeight: "900",
					position: "relative",
					zIndex: 2,
					textAlign: isMobile ? "center" : "left",
				}}
			>
				{" "}
				{text}
			</div>
			<svg
				width={svgWidth}
				height={(svgWidth / 380) * 121}
				viewBox="0 0 380 121"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: 1,
				}}
			>
				<g clipPath="url(#clip0_270_394)">
					<path
						d="M6.3832 49.9515C36.7521 5.39748 356.801 6.28786 372.873 44.7291C398.2 105.31 107.937 118.757 65.2829 101.192C63.7032 100.542 63.8622 99.1376 65.1617 99.3518C178.852 118.088 381.714 88.1735 361.55 45.4745C339.427 13.3921 11.424 10.9882 13.1269 57.0529C14.2482 87.3829 162.273 106.277 267.397 90.2279C270.583 90.3953 268.202 92.2018 264.759 92.7783C152.029 109.942 -15.9791 92.0246 6.3832 49.9515Z"
						fill="#b3fcdf"
					/>
				</g>
				<defs>
					<clipPath id="clip0_270_394">
						<rect
							width="373.94"
							height="95.517"
							fill="white"
							transform="translate(0.102051 25.4794) rotate(-3.76589)"
						/>
					</clipPath>
				</defs>
			</svg>
		</div>
	);
};

export default ScribbledCircleText;
