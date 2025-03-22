import ResetPasswordForm from "@/components/Features/Authentication/ResetPasswordForm";
import router from "next/router";
import React from "react";

const ResetPassword = () => {
	const token = router.query.token;

	return <ResetPasswordForm token={token as string} />;
};

export default ResetPassword;
