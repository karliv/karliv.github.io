import React from 'react';
import declOfNum from '../../functions/declOfNum';

const Card2 = ({taste, portion, present, weight, img, isDisabled, isSelected, isHover}) =>  {

    function onSelected(e) {
        if (!isDisabled) {
            if (e.target.tagName === 'SPAN') {
                e.target.parentNode.parentNode.parentNode.classList.add('cards__item_selected', 'cards__item_selected_hover');
                isSelected = !isSelected;

                return;
            }

            if (e.target.parentNode.classList.contains('cards__item_selected')) {
                e.target.parentNode.className = 'cards__item';

                isSelected = false;
                isHover = false;

            } else {
                e.target.parentNode.classList.toggle('cards__item_selected');
                isSelected = !isSelected;
            }
        }
    }

    function onHover(e) {
        if (e.target.parentNode.classList.contains('cards__item_selected_hover')) {
            return isHover ? isHover = !isHover : isHover = !isHover;
        }

        if (e.target.parentNode.classList.contains('cards__item_selected')) {
            return e.target.parentNode.classList.add('cards__item_selected_hover');
        }
    }

    let  description = '',
         preview = '';

    isSelected ? description = <p>Головы щучьи с чесноком да свежайшая сёмгушка.</p> :
        description = <p>Чего сидишь? Порадуй котэ, <span onClick={onSelected}>купи.</span></p>;

    isHover ? preview = 'Котэ не одобряет?' : preview = 'Сказочное заморское яство.';

    isDisabled ? description = <p>Печалька, с {taste} закончился.</p> : '';


    return (
        <div className={isDisabled ? 'cards__item cards__item_disabled' : 'cards__item'}>
            <div className="card" onClick={onSelected} onMouseLeave={onHover} onMouseEnter={onHover}>
                <div className="card__text">
                    <p className="card__preview">
                        {preview}
                    </p>
                    <h2 className="card__title">
                        Нямушка <span>с {taste}</span>
                    </h2>
                    <p className="card__composition">
                        <span>{portion}</span> порций <br/>
                        {declOfNum(present)}
                    </p>
                </div>
                <div className="card__img"  style={{backgroundImage: `url(${img})`}} />
                <div className="card__weight">
                    <p className="count">{weight}</p>
                    <p className="dimension">кг</p>
                </div>
            </div>
            <div className="card-description">
                {description}
            </div>
        </div>
    )
};

export default Card2;