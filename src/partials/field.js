import React from 'react';
import Stable from './stable';

export default ({ x, y, label, stable }) => {
    const lines = label.split(' ');
    const fontSize = lines.length > 2 ? (15/lines.length) + 2 : 15;
    return <svg fill="none" x={`${x*9}vw`} y={`${y*9}vh`} width="9vw" height="9vh">
        <rect width="100%" height="100%"/>
        {stable && <Stable x={x} y={y} stable={stable} horseName={label}/>}
        {!stable && <text y={`${(lines.length > 2 ? 90/lines.length : 90)}%`} fontSize={fontSize} stroke="none" fill="blue">
            {lines.length > 2 ? lines.map((line, key) => <tspan x="5" key={key} dy={key ? fontSize : 0}>
                {line}
            </tspan>) : label}
        </text>}
        
    </svg>;
};
