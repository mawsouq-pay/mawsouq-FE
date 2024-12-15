import { ActiveTransactionsIcon, StartTransactionIcon, ViewTransactionIcon, WalletIcon } from "@/assets/icons";
import ActionCard from "../ActionCard";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";
import { MainWrapper, DirectionFlex, Circle } from "./StatusSection.style";
import StatusCard from "../StatusCard";

const StatusSection = () => {
    const { locale } = useLocaleStore()
    const text = textTr(locale);
    console.log(locale)
    return (
        <MainWrapper>
            <DirectionFlex>
                <StatusCard Icon={ActiveTransactionsIcon} title={""} Status={<Circle>50</Circle>} />
                <StatusCard Icon={WalletIcon} title={""} Status={<h1>h</h1>} />
            </DirectionFlex>
        </MainWrapper>
    );
};
export default StatusSection