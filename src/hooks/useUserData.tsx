import { User } from '@/lib/utils';
import React from 'react';
import { useQuery } from 'react-query';

const fetchUserData = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
  const data = await res.json();
  return data;
};

const useUserData = () => {
  const query = useQuery<User[]>({
    queryKey: ['User'],
    queryFn: fetchUserData,
  });

  return query;
};

export default useUserData;
