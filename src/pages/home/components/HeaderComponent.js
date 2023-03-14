import React from 'react'

export default function HeaderComponent({ dropdown, setDropdown }) {
    return (
        <header>
            <nav className="desktopNav">
                <ul>
                    <li>
                        <a href="#">Logo</a>
                    </li>
                    <li>
                        <a href="#ourTeam">Team</a>
                    </li>
                    <li>
                        <a href="">Work</a>
                    </li>
                    <li>
                        <a href="">Price</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <button onClick={() => setDropdown(!dropdown)}>
                            Dropdown &#9660;
                        </button>

                        <ul
                            className={`dropdown ${
                                dropdown && 'dropdown-active'
                            }`}
                        >
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <nav className="mobileNav">
                <p>Logo</p>
                <p>|||</p>

                <div className="mobileMenu">
                    <ul>
                        <li>Team</li>
                        <li>Work</li>
                        <li>Price</li>
                        <li>Contact</li>
                        <li>Search</li>
                    </ul>
                </div>
            </nav>
            <div className="search">O-</div>
        </header>
    )
}
