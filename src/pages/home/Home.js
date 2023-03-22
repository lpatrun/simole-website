import React, { useEffect, useState } from 'react'
import BackdropComponent from './components/BackdropComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import MainComponent from './components/MainComponent'
import OurWorkComponent from './components/OurWorkComponent'
import PricingSection from './sections/PricingSection'

export default function Home() {
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            e.preventDefault()
            if (e.code === 'Escape') {
                dropdown && setDropdown(!dropdown)
            }
        })
    })

    return (
        <div>
            <BackdropComponent dropdown={dropdown} setDropdown={setDropdown} />

            <HeaderComponent dropdown={dropdown} setDropdown={setDropdown} />

            <MainComponent />

            <OurWorkComponent />

            <PricingSection />

            <FooterComponent />
        </div>
    )
}
