import { Hrefx } from "../Href/"
import { Item } from "../Item"
import "./List.css"

export function List({ userData }) {
    console.log(userData);
    return (
        <div>
            <ul>
                {
                    userData && userData.map((user, najim) => (
                        <Item key={najim}>
                            <p>{user.id}</p>
                            <Hrefx href={`/user/${user.id}`}>
                                {user.first_name}
                            </Hrefx>
                        </Item>
                    ))
                }

            </ul>
        </div>
    )
}