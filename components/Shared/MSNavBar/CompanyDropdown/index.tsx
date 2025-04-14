import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { clientRoutes } from "@/routes";
import { useLocaleStore } from "@/store";
import { textTr } from "@/constants/locales";
import { colors } from "@/constants/theme";
import { CircleChevronDown } from "lucide-react";
import MSText from "../../MSText";
import { CompanyButton } from "./CompanyDropdown.styles";

const CompanyDropdown = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const router = useRouter();

	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (path?: string) => {
		setAnchorEl(null);
		if (path) router.push(path);
	};

	return (
		<>
			<CompanyButton onClick={handleClick}>
				<MSText fontWeight="500" fontSize="14px">
					{text.company}
				</MSText>
				<CircleChevronDown size={15} color={colors.green} />{" "}
			</CompanyButton>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={() => handleClose()}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
				transformOrigin={{ vertical: "top", horizontal: "left" }}
			>
				<MenuItem onClick={() => handleClose(clientRoutes.aboutUs)}>
					<MSText fontSize="14px">{text.aboutUs}</MSText>
				</MenuItem>
				<MenuItem onClick={() => handleClose(clientRoutes.contactUs)}>
					<MSText fontSize="14px">{text.contactUs}</MSText>
				</MenuItem>
			</Menu>
		</>
	);
};

export default CompanyDropdown;
