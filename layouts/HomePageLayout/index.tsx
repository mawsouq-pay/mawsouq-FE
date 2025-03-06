import Sidebar from "@/components/Shared/MSSideNavbar";
import { colors } from "@/constants/theme";
import { useLocaleStore } from "@/store";
import { styled } from "styled-components";

const HomePageLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const { isSideNavbarOpen } = useLocaleStore();
	return (
		<>
			<LayoutWrapper>
				<Sidebar />
				<Content isOpen={isSideNavbarOpen}>{children}</Content>
			</LayoutWrapper>
		</>
	);
};

const LayoutWrapper = styled.div`
	display: flex;
	min-height: 100vh;
	background-color: ${colors.backgroundColor};
`;

const Content = styled.div<{ isOpen: boolean }>`
	flex: 1;
	padding: 30px clamp(30px, 5vw, 120px);
	transition: margin 0.3s ease-in-out;

	${({ isOpen, theme }) => `
    ${theme.direction === "rtl" ? "margin-right" : "margin-left"}: ${
			isOpen ? "240px" : "50px"
		};
  `}
`;

export default HomePageLayout;
