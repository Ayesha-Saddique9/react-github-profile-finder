import React, { useEffect, useState } from 'react'
import './App.css'
import UserNotFound from './UserNotFound';

function GithubFinder() {
    const [Name , setName] = useState('');
    const [userData,setuserData] = useState(null);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);
       async function getData() {
           setLoading(true);
           setError(false);
           setuserData(null);
         const response = await fetch(`https://api.github.com/users/${Name}`);
       const data =await response.json();
       console.log(data)
       if(response.ok){
        setuserData(data);
        setError(false);
        setLoading(false);
       }
       else{
        setuserData(null);
        setError(true)
        setLoading(false)
       }
       }

  return (
    <div className="bg-slate-900 min-h-screen">
    <div className='bg-slate-800 flex justify-center p-4'>
      <h1 className='text-white font-bold text-2xl'>🔍 GitHub Profile Finder</h1>
    </div>
<div className='flex justify-center gap-4 mt-10'>
    <input type="text" name="" id=""  placeholder='Enter GitHub username...'
     className='text-white bg-slate-800 p-3 rounded-lg w-100 outline-none focus:ring-2 focus:ring-blue-500'
     onChange={(e)=> setName(e.target.value)}
    />
    <button className='bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-lg p-3 w-30 transition-all' onClick={getData}>Search</button>
    </div>
    <br />
    {loading && <h1 className='text-white text-center'>Loading</h1>}
    {userData &&( <div className='bg-slate-800 p-6 rounded-xl mt-10 max-w-md flex justify-center flex-col mx-auto'>
       <img src={userData.avatar_url} alt="Ayesha-img" className='w-32 h-32 text-white rounded-full mx-auto'/><br />
       <h2 className='text-white text-2xl mx-auto'>{userData.name}</h2>
       <p className='text-white mx-auto mt-3'>@{userData.login}</p>
       <p className='text-white text-center mt-3'>{userData.bio}</p>
       <div className='flex justify-between text-white mt-9 gap-3'>
        <div className="bg-slate-700 px-4 py-2 rounded-lg text-center w-full">
   <p className="text-slate-400 text-xs">Repos</p>
   <p className="font-bold text-lg">{userData.public_repos}</p>
</div>
<div className="bg-slate-700 px-4 py-2 rounded-lg text-center w-full">
   <p className="text-slate-400 text-xs">Followers</p>
   <p className="font-bold text-lg">{userData.followers}</p>
</div>
<div className="bg-slate-700 px-4 py-2 rounded-lg text-center w-full">
   <p className="text-slate-400 text-xs">Following</p>
   <p className="font-bold text-lg">{userData.following}</p>
</div>
       </div>
       <a href={userData.html_url} target='_blank' className='mx-auto bg-blue-600  hover:bg-blue-700 w-full text-center text-white p-2 rounded-lg mt-10'>View Profile</a>
    </div>)}

    {error && (<UserNotFound/>)}
   
    </div>
  )
}

export default GithubFinder
