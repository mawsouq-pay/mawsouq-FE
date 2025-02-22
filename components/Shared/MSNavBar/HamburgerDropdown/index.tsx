import React, { useState, useRef } from "react";
import {
	DropdownWrapper,
	MenuIcon,
	DropdownMenu,
	DropdownItem,
} from "./HamburgerDropdown.styles";
import { HamburgerDropdownProps } from "./types";
import { colors } from "@/constants/theme";

const HamburgerDropdown = (props: HamburgerDropdownProps) => {
	const { buttonsList } = props;
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	//useOnClickOutside(dropdownRef, () => setIsOpen(false));

	return (
		<DropdownWrapper ref={dropdownRef}>
			<div
				style={{
					backgroundColor: `${colors.white}`,
					borderRadius: 5,
					width: "fit-content",
					padding: 2,
				}}
			>
				<MenuIcon onClick={() => setIsOpen((prev) => !prev)} />
			</div>

			{isOpen && (
				<DropdownMenu>
					{buttonsList.map((item) => {
						return (
							<DropdownItem onClick={item.onPress}>{item.label}</DropdownItem>
						);
					})}
				</DropdownMenu>
			)}
		</DropdownWrapper>
	);
};

export default HamburgerDropdown;
