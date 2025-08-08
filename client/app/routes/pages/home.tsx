import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Dashboard from './dashboard';

export const meta = () => ([
  { title: 'Nexora | Auth' },
  { name: 'description', content: 'Log into your account' },
])

export default function Home() {
  const navigate = useNavigate();
  const [isLoggegIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    if (!isLoggegIn) {
      navigate('/auth/sign_in');
    }

  }, []);

  if (!isLoggegIn) {
    return (
      <div>
        not logged in
      </div>
    );
  }

  return (
    <div>
      <Dashboard />
    </div>
  );
}
