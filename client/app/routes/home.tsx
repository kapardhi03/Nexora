import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export const meta = () => ([
  { title: 'Nexora | Auth' },
  { name: 'description', content: 'Log into your account' },
])

export default function Home() {
  const navigate = useNavigate();
  const [isLoggegIn, setIsLoggedIn] = useState(false);

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
      logged in
    </div>
  );
}
