import React from 'react';
import '../styles/history-table.css'

const CardWidget = ({children, title, style, titleFil}) => (
    <div className="card" style={style}>
        <div className="title" style={{background: titleFil}}>{title}</div>
        <div className="content">
            {children}
        </div>
    </div>
);

export default CardWidget;
