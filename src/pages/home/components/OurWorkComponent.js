import React from 'react'
import WorkComponent from './WorkComponent'

const WORK_DATA = [
    {
        imgSRC: 'https://www.w3schools.com/w3images/snow.jpg',
        title: 'Kadnit',
        subtitle: 'Osijek',
        desc1: 'Čokolads',
        desc2: 'Kakao',
        desc3: 'Bombomnjera',
        desc4: 'Čokoladice',
    },
    {
        imgSRC: 'https://www.w3schools.com/w3images/lights.jpg',
        title: 'Aurora borealis',
        subtitle: 'Norveška',
        desc1: 'Svjetla',
        desc2: 'Zelena',
        desc3: 'Plava',
        desc4: 'Crna',
    },
    {
        imgSRC: 'https://www.w3schools.com/w3images/mountains.jpg',
        title: 'Planine',
        subtitle: 'Skandinavija',
        desc1: 'Cesta',
        desc2: 'Rijeka',
        desc3: 'Brda',
        desc4: 'Pogled',
    },
]

export default function OurWorkComponent() {
    return (
        <div className="ourWork">
            <div className="message">
                <h2>Our Work</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>

            {WORK_DATA.map((work) => (
                <WorkComponent work={work} />
            ))}
        </div>
    )
}
