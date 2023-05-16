import { useState } from "react"
import { Hrefx } from "../Href"
import { Img } from "../Img"
import "./Profile.css"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"


export function Profile({ userData }) {
    const [loading, setLoading] = useState(true)
    const [foundUser, setFoundUser] = useState([])
    let { userId } = useParams();
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${userId}`)
            .then((json => {
                setLoading(false); setFoundUser(json.data.data)
            }))
    })
    return (
        <div>
            {loading && <h1 style={{ color: "red" }}>loading...</h1>}
            {foundUser && (
                <section>
                    <Link to={"/"}>Back to home</Link>
                    <div style={{ width: "80%", margin: "50px auto", display: "flex", flexDirection: "column", alignContent: "space-between" }}>
                        <Img src={foundUser.avatar} alt={"profile"} >
                        </Img>
                        <Link></Link>
                        <h1>
                            First name:{foundUser.first_name}
                        </h1>
                        <h2>
                            Last name: {foundUser.last_name}
                        </h2>
                        <Link to={`mailto: {foundUser.email}`} >{foundUser.email}</Link>
                    </div>
                </section>)
            }
        </div>)
}