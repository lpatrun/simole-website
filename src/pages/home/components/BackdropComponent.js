import React from 'react'

export default function BackdropComponent({ dropdown, setDropdown }) {
    return (
        <>
            {dropdown ? (
                <button
                    onClick={() => setDropdown(!dropdown)}
                    className={`${dropdown && 'backdrop'}`}
                ></button>
            ) : null}
        </>
    )
}
