import { Hrefx } from "../Href"
import { Img } from "../Img"
import "./Profile.css"
import { useParams } from "react-router-dom"


export function Profile({ userData }) {
    let { userId } = useParams();
    console.log(userId);
    let foundUser = userData ? userData.find(user => user.id == userId) : null


    return (
        <>
            {
                foundUser && (
                    <section>
                        <Hrefx href={"/"}>Back to home</Hrefx>
                        <div style={{ width: "80%", margin: "50px auto", display: "flex", flexDirection: "column", alignContent: "space-between" }}>
                            <Img src={foundUser.avatar} alt={"profile"} >
                            </Img>
                            <h1>
                                First name:{foundUser.first_name}
                            </h1>
                            <h2>
                                Last name: {foundUser.last_name}
                            </h2>
                            <Hrefx href={`mailto: {foundUser.email}`} >{foundUser.email}</Hrefx>
                        </div>
                    </section>)
            }
        </>)
}