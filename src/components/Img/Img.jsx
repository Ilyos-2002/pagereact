import "./Img.css"


export function Img({ src, alt = "Profile" }) {
    return (
        <img style={{ borderRadius: "50%" }} src={src} width={100} height={100} alt={alt} />
    )
}