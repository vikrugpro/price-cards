import '../Card/card.css'

function Card(props) {
    const style = props.style;
    const name = `${style.name} cost__name `;
    const cost = `${style.rate} cost__rate `;
    let rate;
    Number(props.rate === 550)
        ? (rate = 'cost larger')
        : (rate = 'cost');
    return (
        <div className={rate}>
            <div className={name}>{props.name}</div>
            <div className={cost}>
                {props.rate} <span className="rate__box"> руб/мес</span>
            </div>
            <div className="rate__speed info">до {props.speed} Мбит/сек</div>
            <div className="rate__info info">{props.info}</div>
        </div>
    );
}
export default Card;