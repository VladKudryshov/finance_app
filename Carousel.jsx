import React from 'react';
import './styles/carousel.css'

const Carousel = ({children, style, prev, next, childrenType}) => (
    <div className="carousel">
        <div className="box" >
            <ul className="cards" style={style}>
                {children}
            </ul>
        </div>
        <div className={childrenType}>
            <a className="control-prev" onClick={prev}>Prev</a>
            <a className="control-next disabled" onClick={next}>Next</a>
        </div>
    </div>
);


export default Carousel;
