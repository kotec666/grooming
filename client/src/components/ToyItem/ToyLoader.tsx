import React from "react"
import ContentLoader from "react-content-loader"

const ToyLoader = () => (
    <ContentLoader
        speed={1}
        width={270}
        height={520}
        viewBox="0 0 270 520"
        backgroundColor="#0098d9"
        foregroundColor="#0076a8"
    >
        <rect x="0" y="0" rx="10" ry="10" width="240" height="500" />
    </ContentLoader>
)

export default ToyLoader