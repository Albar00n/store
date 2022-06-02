import { useContext } from 'react';
import { CardContext } from '../../contexts/card'

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import "./card.scss";

const CardIcon = () => {
    const {isCardOpen, setIsCardOpen, cardCount } = useContext(CardContext);

    const toggleIsCardOpen = () => setIsCardOpen(!isCardOpen);
    return (
        <div className="card-icon-container" onClick={toggleIsCardOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cardCount}</span>
        </div>
    );
};

export default CardIcon;