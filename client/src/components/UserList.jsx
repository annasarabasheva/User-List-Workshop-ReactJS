import Pagination from "./Padination"
import Search from "./Search"
import UserListTable from "./UserListTable"

function UserList() {
    return  (
        <section className="card users-container">
            <Search/>
            <UserListTable/>
            <button className="btn-add btn">Add new user</button>
            <Pagination/>
        </section>
    )
}
export default UserList