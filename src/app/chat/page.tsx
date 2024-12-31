// 'use client'

// import React, { useEffect, useState } from 'react'

// function page() {
//     // const [messages, setMessages] = useState([])

//     useEffect(()=>{

//         const sse = new EventSource('http://localhost:4000/api/v1/chats/completions',{
//             withCredentials:true,
//         })

//         sse.onmessage = (event) => {
//             console.log(event.data)
//         }

//     },[])
   
//   return (
//     <div className='m-3'>page</div>
//   )
// }

// export default page