import { Link } from "react-router-dom"
import "./Vozvrat.scss"
import { memo, useEffect } from "react"

const Vozvrat = ({ language }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="vozvrat">
            <div className="vozvrat_top">
                <div className="oplata">
                    <div className="flex gap-5">
                        <Link to={"/"}>
                            <p>{language === "RU" ? "Главная" : "Home"}</p>
                        </Link>
                        <Link to={"/vozvrat"}>
                            <p>{language === "RU" ? "Возврат" : "Return"}</p>
                        </Link>
                    </div>
                    <h2>{language === "RU" ? "Возврат" : "Return"}</h2>
                </div>
                <div className="vozvrat_wrap">
                    <p className="vozvrat_text1">{language === "RU" ? "Обмен и возврат по желанию покупателя" : "Exchange and return at the request of the buyer"}</p>
                    <p className="vozvrat_text2">
                        {
                            language == "RU"
                                ?
                                "Если товар по каким-то причинам не подошел вам, вы имеете право вернуть его или обменять на другой в течение 7 дней* с момента покупки при соблюдении следующих условий: <br /> <br />Товар имеет первоначальный вид, имеется товарная кондиция;Товар имеет полную комплектацию, включая упаковочные материалы; Товар не имеет следов подключался и не имеет признаков монтажа; Упаковка товара не имеет повреждений, присутствует первоначальный товарный вид; Есть документ, подтверждающий покупку в нашем интернет-магазине. Для возврата товара необходимо привезти его к нам в офис. Товар из других городов можно прислать нам транспортной компанией, при этом услуги транспортной компании  оплачиваются клиентом.*В течение 14 дней для отдельных брендов. При оформлении заказа уточните у менеджера"
                                :
                                "If for any reason the product does not meet your expectations, you have the right to return or exchange it within 7 days* from the date of purchase, provided the following conditions are met:The product maintains its original appearance and condition; The product includes full packaging and all related materials; The product shows no signs of being connected or installed; The packaging is intact and retains its original appearance; A document confirming the purchase from our online store is available. To return the product, you must bring it to our office.Products from other cities can be sent to us via a shipping company, with shipping costs covered by the customer *For certain brands, the return period is up to 14 days. Please check with the manager when placing your order."
                        }
                    </p>
                    <p className="vozvrat_text3">{language === "RU" ? "Обмен и возврат по ошибке продавца" : "Exchange and return due to seller error"}</p>
                    <p className="vozvrat_text4">
                        {
                            language === "RU"
                                ?
                                "Причины обмена или возврата по ошибке продавца:Неполная комплектация товара или дефект товара Если вы выявили дефект, брак или неполную комплектацию товара, необходимо сделать фото дефекта и отправить на почту mail@at-svet.ru, указав краткое описание характера брака/ Мы заменим бракованный товар или довезем недостающие части. Доставка будет осуществлена бесплатно"
                                :
                                "Reasons for exchange or return due to seller error: Incomplete product package Product defect or defect If you have identified a defect, defect or incomplete product, you must take a photo of the defect and send it to mail@at-svet.ru, indicating a brief description of the nature of the defect/ We will replace defective goods or deliver missing parts. Delivery will be free"
                        }
                    </p>
                    <p className="vozvrat_text5">{language === "RU" ? "Возврат денежных средств" : "Refund"}</p>
                    <p className="vozvrat_text6">
                        {
                            language === "RU"
                                ?
                                "Возвратденежных средств осуществляется путем переводана банковские реквизиты покупателя при наличии заявления от покупателя."
                                :
                                "Refunds are made by transferring the buyer's bank details if there is an application from the buyer."
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default memo(Vozvrat)