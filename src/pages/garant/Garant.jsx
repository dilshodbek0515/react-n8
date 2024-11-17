import "./Garant.scss"
import { memo, useEffect } from "react"
import { Link } from "react-router-dom"
const Garant = ({ language }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="garant">
            <div className="garant_top">
                <div className="oplata">
                    <div className="flex gap-5">
                        <Link to={"/"}>
                            <p>{language === "RU" ? "Главная" : "Home"}</p>
                        </Link>
                        <Link to={"/garant"}>
                            <p>{language === "RU" ? "Гарантии" : "Guarantees"}</p>
                        </Link>
                    </div>
                    <h2>{language === "RU" ? "Гарантии" : "Guarantees"}</h2>
                </div>
                <div className="garant_wrap">
                    <p className="garant_text1">{language === "RU" ? "Обмен и возврат по желанию покупателя" : "Exchange and return at the request of the buyer"}</p>
                    <p className="garant_text2">
                        {
                            language === "RU"
                                ?
                                "Все товары в магазине «NornLight» имеют гарантию. Она заявляется производителем и имеет определенный срок действия на различные группы товаров. Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно: Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа. Привезти товар к нам на склад или отправить его транспортной компанией. После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку. Обращаем внимание, что «А-Свет» не является сервисным центром, а выполняет роль посредника между клиентом и поставщиком. Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов."
                                :
                                "All products in the store come with a warranty. This warranty is provided by the manufacturer and has a specific validity period for different product categories.If your product fails within the warranty period, you can contact us for a free repair. To do this, you need to:Provide a receipt, an invoice, or provide the email or phone number used when placing the order.Bring the product to our warehouse or send it via a transportation company.The product will then be sent for inspection and repair. If repair is not possible, we will replace the item with an equivalent one or refund your purchase.Please note that is not a service center and acts as an intermediary between the customer and the supplier.Therefore, the repair time may vary for products from different brands."
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default memo(Garant)