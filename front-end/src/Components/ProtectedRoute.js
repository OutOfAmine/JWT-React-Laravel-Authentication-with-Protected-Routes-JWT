import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ProtectedRoute() {
  const [userData,setuserData]=useState({})
  const [loading, setLoading] = useState(true);
  const fetchUserData = async () => {      
    try {
        const authToken = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/api/user-data', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setuserData(response.data.user)
    } catch (error) {
      console.error(error.response.data);
    } finally{
      setLoading(false)
    }
  };
  useEffect(()=>{
    fetchUserData()
  },[])

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
              Happy day monsieur {userData.name}
            </h1>
          </div>
        </header>
      )}
    </div>
  );
}

export default ProtectedRoute