import { colors } from "@/constants/theme";
import { Menu } from "lucide-react";
import styled from "styled-components";

export const DropdownWrapper = styled.div`
	position: relative;
	display: inline-block;
`;

export const MenuIcon = styled(Menu)`
	font-size: 24px;
	cursor: pointer;
	color: ${colors.green};
`;

export const DropdownMenu = styled.div`
	position: absolute;
	top: 40px;
	right: 0;
	background: white;
	border-radius: 8px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	min-width: 160px;
	z-index: 1000;
	overflow: hidden;
`;

export const DropdownItem = styled.button`
	width: 100%;
	text-align: left;
	padding: 10px 15px;
	background: white;
	border: none;
	cursor: pointer;
	font-size: 14px;
	color: black;

	&:hover {
		background: #f5f5f5;
	}
`;
