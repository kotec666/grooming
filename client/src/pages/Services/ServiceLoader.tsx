import React from "react"
import ContentLoader from "react-content-loader"

const ServiceLoader = () => (
    <ContentLoader
        speed={1}
        width={700}
        height={580}
        viewBox="0 0 700 580"
        backgroundColor="#0098d9"
        foregroundColor="#0076a8"
    >
        <rect x="120" y="80" rx="10" ry="10" width="470" height="26" />
        <rect x="60" y="130" rx="10" ry="10" width="580" height="68" />
        <rect x="60" y="210" rx="5" ry="5" width="580" height="141" />
        <rect x="60" y="370" rx="10" ry="10" width="580" height="68" />
        <rect x="60" y="450" rx="5" ry="5" width="580" height="141" />
    </ContentLoader>
)

export default ServiceLoader