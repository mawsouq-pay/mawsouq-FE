import Start from "@/assets/images/start.png";
import Deposit from "@/assets/images/deposit.png";
import Deliver from "@/assets/images/deliver.png";
import Release from "@/assets/images/release.png";
export const steps = [
	{
		title: "Buyer and Seller Agree on Terms",
		description:
			"The buyer and seller agree on the details of the transaction, including the item, price, and delivery timeline, and register on Mawsouq.",
		imageSource: Start,
	},
	{
		title: "Buyer Secures Funds with Mawsouq",
		description:
			"The buyer deposits the agreed amount into Mawsouq’s secure escrow account, ensuring both parties are protected.",
		imageSource: Deposit,
	},
	{
		title: "Seller Delivers the Goods or Services",
		description:
			"Once the funds are secured, the seller proceeds to deliver the goods or provide the agreed services as per the transaction terms.",
		imageSource: Deliver,
	},
	{
		title: "Buyer Confirms Receipt",
		description:
			"After receiving the goods or services, the buyer reviews and confirms that everything is as agreed.",
		imageSource: Release,
	},
	{
		title: "Mawsouq Releases the Funds",
		description:
			"Once the buyer confirms receipt, Mawsouq releases the funds to the seller, ensuring a secure and smooth transaction.",
		imageSource: Deliver,
	},
];
