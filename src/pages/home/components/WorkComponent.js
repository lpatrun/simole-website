import React from 'react'

export default function WorkComponent({ work }) {
    return (
        <div className="workComponent">
            <img alt="slika" src={work.imgSRC} width={450} height={300} />
            <div className="workContent">
                <h3>{work.title}</h3>
                <h4>{work.subtitle}</h4>
                <p>{work.desc1}</p>
                <p>{work.desc2}</p>
                <p>{work.desc3}</p>
                <p>{work.desc4}</p>
            </div>
        </div>
    )
}
