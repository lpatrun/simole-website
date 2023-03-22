import React from 'react'
import PricingPlanComponent from '../components/PricingPlanComponent'

export default function PricingSection() {
    return (
        <div>
            <h2>PRICING</h2>
            <p>Choose a pricing plan that fits your needs.</p>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    columnGap: '20px',
                    padding: '20px',
                }}
            >
                <PricingPlanComponent
                    plan={{
                        backgroundColor: 'red',
                        title: 'Basic',
                        storage: '10GB',
                        email: 100,
                        domains: 10,
                        price: 10,
                    }}
                />
                <PricingPlanComponent
                    plan={{
                        backgroundColor: 'green',
                        title: 'Basic',
                        storage: '10GB',
                        email: 100,
                        domains: 10,
                        price: 10,
                    }}
                />
                <PricingPlanComponent
                    plan={{
                        backgroundColor: 'blue',
                        title: 'Basic',
                        storage: '10GB',
                        email: 100,
                        domains: 10,
                        price: 10,
                    }}
                />
            </div>
        </div>
    )
}
