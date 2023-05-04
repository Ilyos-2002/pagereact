import "./Img.css"


export function Img({ src, alt = "Profile" }) {
    return (
        <img src={src} width={100} height={100} alt={alt} />
    )
}