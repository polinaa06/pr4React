import s from './Catalog.module.css'
import { Item } from '../Item/Item'

export function Catalog() {
    return(
        <div className={s.catalog}>
            <div className={s.content}>
                <h2>Каталог товаров</h2>

                <div className={s.categories}>
                    <p>Категории:</p>
                    <div className={s.categories_btn}>
                        <button className={s.btn_active}>Все товары</button>
                        <button className={s.btn}>Шины/колеса</button>
                        <button className={s.btn}>Масла</button>
                        <button className={s.btn}>Ароматизаторы</button>
                    </div>
                </div>

                <div className={s.items}>
                    <Item image='https://ir-3.ozone.ru/s3/multimedia-1-7/wc1000/7029624787.jpg' name='Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина' price='335'/>
                    <Item image='https://ir-3.ozone.ru/s3/multimedia-1-n/wc1000/7029623651.jpg' name='Ароматизатор для автомобиля "Tobacco Vanille" / автопарфюм / пахучка в машину' price='370'/>
                    <Item image='https://ir-3.ozone.ru/s3/multimedia-1-p/wc1000/7029621853.jpg' name='Ароматизатор для автомобиля "Lost Cherry" (Лост Черри) / автопарфюм / пахучка в машину' price='363'/>
                    <Item image='https://ir-3.ozone.ru/s3/multimedia-1-g/wc1000/7029633184.jpg' name='Ароматизатор для автомобиля "Aventus" (Авентус) / Автопарфюм / Пахучка в машину' price='370'/>
                    <Item image='https://ir-3.ozone.ru/s3/multimedia-1-8/wc1000/7077535460.jpg' name='Gazpromneft Premium L 5W-40 Масло моторное, Полусинтетическое, 4 л' price='1 133'/>
                    <Item image='https://ir-3.ozone.ru/s3/multimedia-1-k/wc1000/7096538636.jpg' name='ЛУКОЙЛ (LUKOIL) СУПЕР 10W-40 Масло моторное, Полусинтетическое, 5 л' price='1 068'/>
                    <Item image='https://ir-3.ozone.ru/s3/multimedia-1-4/wc1000/7037046508.jpg' name='Ароматизатор для автомобиля "Black Afgano" (Блэк Афгано) / автопарфюм в машину / пахучка' price='363'/>
                    <Item image='https://ir-3.ozone.ru/s3/multimedia-1-0/wc1000/7104239208.jpg' name='Складной металлический магнитный автомобильный держатель телефона Magsafe' price='1 080'/>
                    <Item image='https://ir-3.ozone.ru/s3/multimedia-h/wc1000/6832842389.jpg' name='Держатель для телефона автомобильный в машину, на стекло, на панель.' price='493'/>

                </div>

                <div className={s.catalog_button}>
                    <button className={s.catalog_btn}>Загрузить еще товары</button>
                </div>
            </div>
        </div>
    )
}