import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {

    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const fetchUser = async () => {
        try {
            // 요청이 시작될때에는 error, user를 초기화
            setError(null)
            setUsers(null)
            // loading 상태를 true로 바꾼다.
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(res.data)
        }
        catch (e){
            setError(e)
        }
        setLoading(false)
    }
    useEffect(()=> {
        fetchUser()
    },[])

    if(loading) return <div className='axios_etc'>로딩중...</div>
    if(error) return <div className='axios_etc'>에러가 발상했습니다.</div>
    if(!users) return null


    return (
        <div className="axios_wrap">
            <h1>AXIOS</h1>
            <ul className="axios_list">
                {users.map((user)=> (
                    <li 
                        className="axios_item"
                        key={user.id}    
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button className="btn" onClick={fetchUser}>다시 불러오기</button>
        </div>
    )
}

export default Axios