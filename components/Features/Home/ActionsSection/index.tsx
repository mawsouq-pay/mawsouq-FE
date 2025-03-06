import { StartTransactionIcon, ViewTransactionIcon } from "@/assets/icons";
import { MainWrapper, RowFlex } from "./ActionSection.style";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import MSText from "../../../Shared/MSText";
import { clientRoutes } from "@/routes";
import { useRouter } from "next/router";
import ActionCard from "../ActionCard";
import { PlusCircleIcon, PlusSquareIcon, ViewIcon } from "lucide-react";

const ActionSection = () => {
	const { locale } = useLocaleStore();
	const text = textTr(locale);
	const { push } = useRouter();
	return (
		<MainWrapper>
			<RowFlex>
				<ActionCard
					Icon={PlusCircleIcon}
					title={text.createANewTransaction}
					onPress={() => {
						push(clientRoutes.startTransaction);
					}}
				/>
			</RowFlex>
		</MainWrapper>
	);
};
export default ActionSection;
