import React, { useCallback, useEffect, useState } from 'react'
import MyAxios from '../../axios'
import "./Listing.css"

const Listing: React.FC = () => {

  const [users, setUsers] = useState([])
  const [page,setPage] = useState(1)

  const fetchUsers = useCallback(async () => {
    let { data: { data } }: Record<string, any> = await MyAxios.get(`/user?page=${page}`)
    setUsers(data)
  }, [page])


  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  return (
    <>
      <div style={{padding:"10px"}}>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button onClick={() => {
            if(page>=2) {
              setPage(page-1)
            }
          }} type="button" className="btn btn-secondary">Prev</button>
          <button onClick={() => {
              setPage(page+1)
          }}  type="button" className="btn btn-secondary">Next</button>
        </div>
      </div>
      <div className='users'>
        {users?.map((user: any) => (
          <div className='card'>
            <p><span>Name :</span> <span>{user.firstName + " " + user.lastName}</span></p>
            <p><span>Age :</span> <span>{user.age}</span></p>
            <p><span>Email :</span> <span>{user.email}</span></p>
            <p><span>Gender :</span> <span>{user.gender}</span></p>
          </div>
        ))}
      </div>
    
    </>
  )
}

export default Listing
