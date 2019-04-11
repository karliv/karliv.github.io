import React, {Fragment} from 'react';

import cat_img from '../../assets/img/cat.png';
import Card from '../../components/Card/index'

const App = () => {
    return (
        <Fragment>
            <h3 className="title__h3">Ты сегодня покормил кота?</h3>
            <div className="cards">
                <Card taste="фуа-гра" portion="10" present={1} weight="0,5" img={cat_img} isDisabled={false} />
                <Card taste="рыбой" portion="40" present={2} weight="2" img={cat_img} isDisabled={false} />
                <Card taste="курой" portion="100" present={5} weight="5" img={cat_img} isDisabled={false} />
            </div>
        </Fragment>
    )
};

export default App