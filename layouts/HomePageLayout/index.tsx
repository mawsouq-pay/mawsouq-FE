import MobileBottomNav from "@/components/Shared/MSBottomNavbar";
import Navbar from "@/components/Shared/MSNavBar";
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
			<Navbar />
			<LayoutWrapper>
				<Sidebar />
				<Content isOpen={isSideNavbarOpen}>{children}</Content>
			</LayoutWrapper>
			<MobileBottomNav />
		</>
	);
};

const LayoutWrapper = styled.div`
	background-color: ${colors.backgroundColor};
	min-height: 100vh;
`;

const Content = styled.div<{ isOpen: boolean }>`
	flex: 1;
	padding: 2px clamp(20px, 4vw, 80px);
	transition: margin 0.3s ease-in-out;

	${({ isOpen, theme }) => `
		${theme.direction === "rtl" ? "margin-right" : "margin-left"}: ${isOpen ? "240px" : "50px"};
	`}

	@media (max-width: 768px) {
		margin: 0;
		padding: 20px 20px 200px 20px;
	}
`;

export default HomePageLayout;
