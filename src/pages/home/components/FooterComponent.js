import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCode,
    faRightFromBracket,
    faCodeCompare,
    faCodeBranch,
    faTerminal,
} from '@fortawesome/free-solid-svg-icons'

const ICONS = [
    {
        icon: faCode,
        link: 'https://profi.co/careers/junior-frontend-developer-react',
    },
]

export default function FooterComponent() {
    return (
        <footer>
            <div style={{ padding: '10px' }}>
                {ICONS.map((icon) => (
                    <a href={icon.link}>
                        <FontAwesomeIcon
                            icon={icon.icon}
                            style={{ width: '48px', height: '48px' }}
                        />
                    </a>
                ))}
            </div>
            {/*  <FontAwesomeIcon icon={faRightFromBracket} />
            <FontAwesomeIcon icon={faCodeCompare} />
            <FontAwesomeIcon icon={faCodeBranch} />
            <FontAwesomeIcon icon={faTerminal} /> */}
        </footer>
    )
}
