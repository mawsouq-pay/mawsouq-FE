import {
	Body,
	Container,
	Heading,
	Html,
	Text,
	Section,
} from "@react-email/components";
import * as React from "react";

interface disputeNotificationEmailProps {
	senderName: string;
	disputeType: string;
	description: string;
	orderId: string;
	orderTitle: string;
	orderTotal: string;
	orderDate: string;
}

const blockStyle = {
	marginBottom: "20px",
};

export const disputeNotificationEmail = ({
	senderName,
	disputeType,
	description,
	orderId,
	orderTitle,
	orderTotal,
	orderDate,
}: disputeNotificationEmailProps) => {
	return (
		<Html>
			<Body
				style={{
					fontFamily: "Arial, sans-serif",
					backgroundColor: "#fff",
					padding: "24px",
				}}
			>
				<Container style={{ maxWidth: "600px", margin: "0 auto" }}>
					<Heading as="h2" style={{ color: "#D7263D" }}>
						🛠️ New Complaint Submitted
					</Heading>

					<Section style={blockStyle}>
						<Text>
							<strong>Submitted by:</strong> {senderName}
						</Text>
					</Section>

					<Section style={blockStyle}>
						<Heading as="h3">📦 Order Details</Heading>
						<Text>
							<strong>Order ID:</strong> {orderId}
						</Text>
						<Text>
							<strong>Title:</strong> {orderTitle}
						</Text>
						<Text>
							<strong>Total:</strong> {orderTotal} EGP
						</Text>
						<Text>
							<strong>Date:</strong> {orderDate}
						</Text>
					</Section>

					<Section style={blockStyle}>
						<Heading as="h3">📄 Dispute Details</Heading>
						<Text>
							<strong>Type:</strong> {disputeType}
						</Text>
						<Text>
							<strong>Description:</strong>
						</Text>
						<Text
							style={{
								backgroundColor: "#f5f5f5",
								padding: "12px",
								borderRadius: "6px",
								whiteSpace: "pre-wrap",
								marginTop: "8px",
							}}
						>
							{description}
						</Text>
					</Section>

					<Text
						style={{ fontStyle: "italic", color: "#555", marginTop: "32px" }}
					>
						Our team will review the dispute and get back to you within 48
						hours.
					</Text>
				</Container>
			</Body>
		</Html>
	);
};

export default disputeNotificationEmail;
