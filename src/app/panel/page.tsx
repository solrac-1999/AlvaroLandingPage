'use client';

import { useSession } from 'next-auth/react';

export default function Panel() {
    const { data: session, status } = useSession();
  
    if (status === 'loading') {
      return <div>Cargando...</div>;
    }
  
    if (!session) {
      return <div>No has iniciado sesión</div>;
    }
  
    return (
      <div>
        <h1>Bienvenido {session.user.name}</h1>
        <p>Correo electrónico: {session.user.email}</p>
      </div>
    );
  }