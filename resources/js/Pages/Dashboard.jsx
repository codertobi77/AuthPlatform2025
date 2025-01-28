import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';


export default function Dashboard({ redirectUrl, user }) {
    const [redirecting, setRedirecting] = useState(false); // Indicateur pour démarrer la redirection après 5 secondes
    useEffect(() => {
        if (redirectUrl != '/dashboard' && redirectUrl != undefined) {
            setRedirecting(true);
            setTimeout(() => {
                window.location.href = redirectUrl; // Rediriger vers l'URL du module appelant
            }, 5000); // 5000 ms = 5 secondes
        }
    }, [redirectUrl]);


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tableau de bord
                </h2>
            } 
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <p>Bienvenue sur votre tableau de bord !</p>
                            {/* Récupérer et afficher le nom du profil depuis l'URL */}
                            <p>Nom du Profil: {user.profile_name}</p>
                            {/* Message indiquant que l'utilisateur sera redirigé */}
                            {redirecting && <p>Vous serez redirigé dans 5 secondes...</p>}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
