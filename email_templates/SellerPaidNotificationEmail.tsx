import React from "react";

interface SellerPaidNotificationEmailProps {
	sellerName: string;
	buyerName: string;
	productTitle: string;
	price: number;
	deliveryDate: string;
	orderId: string;
	orderLink: string;
}

const SellerPaidNotificationEmail = ({
	sellerName,
	buyerName,
	productTitle,
	price,
	deliveryDate,
	orderId,
	orderLink,
}: SellerPaidNotificationEmailProps): JSX.Element => {
	return (
		<div
			style={{
				fontFamily: "Arial, sans-serif",
				color: "#333",
				padding: 24,
				backgroundColor: "#f7f7f7",
			}}
		>
			<div
				style={{
					maxWidth: 600,
					margin: "0 auto",
					backgroundColor: "#fff",
					padding: 24,
					borderRadius: 8,
				}}
			>
				<h2 style={{ color: "#01796f", marginBottom: 10 }}>
					🎉 Order Payment Received!
				</h2>
				<p style={{ fontSize: 16 }}>
					Hello <strong>{sellerName}</strong>,
				</p>
				<p style={{ fontSize: 15 }}>
					Great news! <strong>{buyerName}</strong> has successfully paid for the
					order. You're now expected to prepare and deliver the product.
				</p>

				<div
					style={{
						margin: "24px 0",
						borderTop: "1px dashed #ccc",
						borderBottom: "1px dashed #ccc",
						padding: "16px 0",
					}}
				>
					<h3 style={{ marginBottom: 12, color: "#01796f" }}>
						📦 Order Details
					</h3>
					<p>
						<strong>Order ID:</strong> {orderId}
					</p>
					<p>
						<strong>Product:</strong> {productTitle}
					</p>
					<p>
						<strong>Price:</strong> {price} EGP
					</p>
					<p>
						<strong>Delivery Date:</strong> {deliveryDate}
					</p>
				</div>

				<p style={{ fontSize: 15 }}>
					Once the product is out for delivery, don't forget to update the order
					status.
				</p>

				<div style={{ textAlign: "center", marginTop: 30 }}>
					<a
						href={orderLink}
						style={{
							display: "inline-block",
							backgroundColor: "#01796f",
							color: "#fff",
							padding: "12px 24px",
							borderRadius: 6,
							textDecoration: "none",
							fontWeight: 600,
							fontSize: 16,
						}}
					>
						🔎 View Order
					</a>
				</div>

				<p style={{ fontSize: 13, marginTop: 40, color: "#888" }}>
					Thank you for using <strong>Mawsouq</strong> – the trusted way to buy
					& sell safely.
				</p>
			</div>
		</div>
	);
};

export default SellerPaidNotificationEmail;
