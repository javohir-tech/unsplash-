import React from 'react'

export default function ImageBox({ url, alt }) {
    return (
        <>
            <img src={url.regular} alt={alt} style={{ display: "block", width: "100%" }} />
        </>
    )
}
