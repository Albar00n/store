import { useContext } from "react";
import { CardContext } from "../../contexts/card"
import Button from "../button/button"
import CardItem from "../card-item/card-item"
import "./card.scss";

const CardDropdown = () => {
    const { cardItems } = useContext(CardContext);
    return (
        <div className="card-dropdown-container">
            <div className="card-item">
                {cardItems.map(item => <CardItem key={item.id} cardItem={item}/>)}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
};
export default CardDropdown;