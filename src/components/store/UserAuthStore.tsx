import { User } from '@/lib/utils';
import React from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const UserAuthStore = create<AuthState>()(
  persist<AuthState>(
    set => ({
      user: null,
      login: user => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-store',
    },
  ),
);

export default UserAuthStore;
