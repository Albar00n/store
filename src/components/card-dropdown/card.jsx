import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardContext } from "../../contexts/card"
import Button from "../button/button"
import CardItem from "../card-item/card-item"
import "./card.scss";

const CardDropdown = () => {
    const { cardItems } = useContext(CardContext);
    const navigate = useNavigate();

    const goToChackoutHandler = () => {
        navigate('/checkout');
    };
    return (
        <div className="card-dropdown-container">
            <div className="card-item">
                {cardItems.map(item => <CardItem key={item.id} cardItem={item}/>)}
            </div>
            <Button onClick={goToChackoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
};
export default CardDropdown;