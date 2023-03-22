import React from 'react'

export default function PricingPlanComponent({ plan }) {
    return (
        <div className="containerpr">
            <ul>
                <li
                    style={{
                        backgroundColor: plan.backgroundColor,
                    }}
                >
                    {plan.title}
                </li>
                <li>{plan.storage} Storage</li>
                <li>{plan.email} Emails</li>
                <li>{plan.domains} Domains</li>
                <li>Endless Support</li>
                <li>
                    <h2>$ {plan.price}</h2>
                    <p>per month</p>
                </li>
                <li>
                    <button>&#x2714; Sign Up</button>
                </li>
            </ul>
        </div>
    )
}
