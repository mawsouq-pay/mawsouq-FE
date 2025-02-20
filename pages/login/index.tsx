import LoginForm from "@/components/Features/Authentication/LoginForm";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const LoginPage = () => {
	const router = useRouter();
	const orderId = router.query.orderId;
	return (
		<PageContainer>
			<LoginForm orderId={(orderId as string) ?? undefined} />
		</PageContainer>
	);
};

const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	height: 80vh;
	height: 80dvh;
`;

export default LoginPage;
