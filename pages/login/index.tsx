import LoginForm from "@/components/Features/Authentication/LoginForm";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const LoginPage = () => {
	const router = useRouter();
	const orderId = router.query.orderId;
	return (
		<PageContainer>
			<LoginForm />
		</PageContainer>
	);
};

const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	overflow: hidden;
	height: 90vh;
	height: 90dvh;
`;

export default LoginPage;
