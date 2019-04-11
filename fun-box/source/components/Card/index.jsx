import React, {Component} from 'react';
import declOfNum from '../../functions/declOfNum';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: false,
            isHover: false
        };
    };

    onSelected = (e) => {
        const {isSelected} = this.state;
        const {isDisabled} = this.props;

        if (!isDisabled) {
            if (e.target.tagName === 'SPAN') {
                e.target.parentNode.parentNode.parentNode.classList.add('cards__item_selected', 'cards__item_selected_hover');
                this.setState({isSelected: !isSelected});

                return;
            }

            if (e.target.parentNode.classList.contains('cards__item_selected')) {
                e.target.parentNode.className = 'cards__item';

                this.setState({
                    isSelected: false,
                    isHover: false
                });

            } else {
                e.target.parentNode.classList.toggle('cards__item_selected');
                this.setState({isSelected: !isSelected});
            }
        }
    };

    onHover = (e) => {
        const {isHover} = this.state;

        if (e.target.parentNode.classList.contains('cards__item_selected_hover')) {
            return isHover ? this.setState({isHover: !isHover}) : this.setState({isHover: !isHover});
        }

        if (e.target.parentNode.classList.contains('cards__item_selected')) {
            return e.target.parentNode.classList.add('cards__item_selected_hover');
        }
    };

    render() {
        const {taste, portion, present, weight, img, isDisabled} = this.props;
        const {isSelected, isHover} = this.state;

        let  description = '',
             preview = '';

        isSelected ? description = <p>Головы щучьи с чесноком да свежайшая сёмгушка.</p> :
            description = <p>Чего сидишь? Порадуй котэ, <span onClick={this.onSelected}>купи.</span></p>;

        isHover ? preview = 'Котэ не одобряет?' : preview = 'Сказочное заморское яство.';

        isDisabled ? description = <p>Печалька, с {taste} закончился.</p> : '';

        return (
            <div className={isDisabled ? 'cards__item cards__item_disabled' : 'cards__item'}>
                <div className="card" onClick={this.onSelected} onMouseLeave={this.onHover} onMouseEnter={this.onHover}>
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
    }
};