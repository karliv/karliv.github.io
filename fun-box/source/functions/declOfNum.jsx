import React, {Fragment} from "react";

const declOfNum = (present) => {
    let word;

    if (present === 1) word = `Мышь в подарок`;
    else if ((present === 1) || (present > 20 && present % 10 === 1))
        word = `${present !== 0 ? present : ''} мышь  в подарок`;
    else if ((present >= 2 && present <= 4) || (present > 20 && present % 10 >= 2 && present % 10 <= 4))
        word = `${present} мыши в подарок `;
    else word = <Fragment>{present} мышей в подарок <br/> заказчик доволен</Fragment>;

    return word;
};

export default declOfNum;