import { Hrefx } from "../Href"
import { Img } from "../Img"
import "./Profile.css"
import { useParams } from "react-router"


export function Profile({ userData }) {
    let { userId } = useParams();
    let foundUser = userData.find(user => user.id == userId)


    return

    <>



        {
            foundUser && <section>
                <Hrefx href={"/"}>Back to home</Hrefx>
                <div style={{ width: "80%", margin: "50px auto" }}>
                    <Img src={foundUser.avatar} alt={"profile"} >
                    </Img>
                    <h1>
                        `First name:{foundUser.first_name}`
                    </h1>
                    <h2>
                        `Last name: {foundUser.last_name}`
                    </h2>
                    <Hrefx href={`mailto: {foundUser.email}`} >{foundUser.email}</Hrefx>
                </div>
            </section>

        }
    </>




}