import { StartTransactionIcon, ViewTransactionIcon } from "@/assets/icons";
import ActionCard from "../ActionCard";
import { MainWrapper, RowFlex } from "./ActionSection.style";
import { useLocaleStore } from "@/store/LocaleStore";
import { textTr } from "@/constants/locales";

const ActionSection = () => {
    const { locale } = useLocaleStore()
    const text = textTr(locale);
    console.log(locale)
    return (
        <MainWrapper>
            <h1>{text.whatWouldYouLikeToDoTod}</h1>
            <RowFlex>
                <ActionCard Icon={StartTransactionIcon} title={text.createANewTransaction} onPress={() => { console.log("Start Transaftion") }} />
                <ActionCard Icon={ViewTransactionIcon} title={text.viewMyTransactions} onPress={() => { console.log("Start Transaftion") }} />
            </RowFlex>
        </MainWrapper>
    );
};
export default ActionSection