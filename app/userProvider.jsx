'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
export const userContext = createContext({});

async function getData() {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_PROFILE,
      {
        credentials: 'include',
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }
    const data = await res.json();
    if (data.success) {
      return data.profileInfo;
    }
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // throw error; // Re-throw for handling elsewhere
  }
}

export const UserProvider = ({ children }) => {
  console.log('Inside user Provider');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      // setError(null);

      try {
        const data = await getData();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch only once

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

// export const useUser = () => useContext(UserContext);
