import Pagination from "./Padination"
import Search from "./Search"
import UserListTable from "./UserListTable"

function UserList() {
    return  (
        <section className="card users-container">
            <Search/>
            <UserListTable/>
           
            <Pagination/>
        </section>
    )
}
export default UserList