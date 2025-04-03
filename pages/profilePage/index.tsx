import ProfileManagement from "@/components/Features/ProfileManagement";
import HomePageLayout from "@/layouts/HomePageLayout";
import { withMeta } from "@/layouts/MetaLayout";
import React from "react";

const ProfilePage = () => {
	return <ProfileManagement />;
};

ProfilePage.CustomLayout = HomePageLayout;

export default withMeta("profilePage", ProfilePage);
