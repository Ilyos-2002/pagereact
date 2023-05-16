import { Link } from "react-router-dom"
import { Hrefx } from "../Href/"
import { Item } from "../Item"
import "./List.css"

export function List({ userData }) {
    // console.log(userData);
    return (
        <div>
            <ul>
                {
                    userData && userData.map((user, najim) => (
                        <Item key={najim}>
                            <p className="text-[red] ">{user.id}</p>
                            <Link to={`/user/${user.id}`}>
                                {user.first_name}
                            </Link>
                        </Item>
                    ))
                }

            </ul>
        </div>
    )
}