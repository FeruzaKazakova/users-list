import { UsersItem } from '../UsersItem/UsersItem'
import './UsersList.css'

export const UsersList = ({users, setUsers}) => {

    const sorted = users.slice().sort(function(a, b) { 
      if(a.number < b.number) return 1;
      if(a.number > b.number) return -1;
      return 0;
     });

  return (
    <div>
        <ul className='list'>
        {sorted.map((user) => (
           <UsersItem key={user.id} user={user} setUsers={setUsers}/>
            ))}
        </ul>
    </div>
  )
}
