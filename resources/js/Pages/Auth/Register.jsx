import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Register({groups, redirectUrl, services, filieres}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        tel: '',
        group_id: '',
        password: '',
        password_confirmation: '',
        firstname: '',
        lastname: '',
        service_id: '',
        filiere_id: '',
        active_status: 0,
        avatar: '/public/icons/avatar.svg',
        dark_mode: 0,
        messenger_color: 'blue',
        redirectUrl: redirectUrl,
    });

    const [isStudent, setIsStudent] = useState(false);
    const { csrf_token } = usePage().props;

    useEffect(() => {        
        // Vérifier si le groupe sélectionné est l'ID 7 (Étudiant)
        setIsStudent(String(data.group_id) === "7");

    }, [data.group_id]);
    

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="S'inscrire" />

            <div className="mb-6">
                {/* Heading ajouté ici */}
                <h1 className="text-2xl text-center font-semibold text-gray-800">Inscription</h1>
                <p className="mt-2 text-sm text-center text-gray-600">Veuillez remplir les informations suivantes pour créer votre compte.</p>
            </div>

            <form onSubmit={submit}>
                {/* Champ CSRF */}
                <input type="hidden" name="_token" value={csrf_token} />
                
                {/* Prénom */}
                <div>
                    <InputLabel htmlFor="firstname" value="Prénom" />
                    <TextInput
                        id="firstname"
                        name="firstname"
                        value={data.firstname}
                        className="mt-1 block w-full"
                        autoComplete="firstname"
                        isFocused={true}
                        onChange={(e) => setData('firstname', e.target.value)}
                        required
                    />
                    <InputError message={errors.firstname} className="mt-2" />
                </div>
                {/* Nom */}
                <div>
                    <InputLabel htmlFor="name" value="Nom" />
                    <TextInput
                        id="lastname"
                        name="lastname"
                        value={data.lastname}
                        className="mt-1 block w-full"
                        autoComplete="lastname"
                        onChange={(e) => setData('lastname', e.target.value)}
                        required
                    />
                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                {/* Email */}
                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                {/* Téléphone */}
                <div className="mt-4">
                    <InputLabel htmlFor="tel" value="Téléphone" />
                    <TextInput
                        id="tel"
                        type="number"
                        name="tel"
                        value={data.tel}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('tel', e.target.value)}
                        required
                    />
                    <InputError message={errors.tel} className="mt-2" />
                </div>

                {/* Groupe */}
                <div className='mt-4'>
                    <label className="block text-sm font-medium mb-1" htmlFor="group_id">
                        Groupe
                    </label>
                    <select
                        id="group_id"
                        name="group_id"
                        value={data.group_id}
                        onChange={(e) => setData('group_id', e.target.value)}
                        className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value=""> - - - - -</option>
                        {groups.map((group) => (
                            <option key={group.id} value={group.id}>
                                {group.data_cat}
                            </option>
                        ))}
                    </select>
                    {errors.group_id && <p className="text-red-500 text-sm">{errors.group_id}</p>}
                </div>

                {/* Afficher Filière uniquement si le groupe sélectionné est "Étudiant" */}
                {isStudent && (
                    <div className='mt-4'>
                        <InputLabel htmlFor="filiere_id" value="Filière" />
                        <select
                            id="filiere_id"
                            name="filiere_id"
                            value={data.filiere_id}
                            onChange={(e) => setData('filiere_id', e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value=""> - - - - -</option>
                            {filieres.map((filiere) => (
                                <option key={filiere.id} value={filiere.id}>
                                    {filiere.data_cat}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.filiere_id} className="mt-2" />
                    </div>
                )}

                {/* Afficher Service uniquement si ce n'est PAS un étudiant et un groupe est sélectionné */}
                {!isStudent && data.group_id && (
                    <div className='mt-4'>
                        <InputLabel htmlFor="service_id" value="Service" />
                        <select
                            id="service_id"
                            name="service_id"
                            value={data.service_id}
                            onChange={(e) => setData('service_id', e.target.value)}
                            className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value=""> - - - - -</option>
                            {services.map((service) => (
                                <option key={service.id} value={service.id}>
                                    {service.data_cat}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.service_id} className="mt-2" />
                    </div>
                )}

                {/* Mode sombre */}
                {/* <div className="mt-4">
                    <label htmlFor="dark_mode" className="block text-sm font-medium mb-1">
                        Mode sombre
                    </label>
                    <select
                        id="dark_mode"
                        name="dark_mode"
                        value={data.dark_mode}
                        onChange={(e) => setData('dark_mode', e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="0">Non</option>
                        <option value="1">Oui</option>
                    </select>
                </div> */}

                {/* Mot de passe */}
                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Mot de passe" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                {/* Confirmation du mot de passe */}
                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirmer le mot de passe" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                {/* Boutons d'action */}
                <div className="mt-6">
                    <PrimaryButton className="w-full" disabled={processing}>
                        S'inscrire
                    </PrimaryButton>
                </div>
                
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Vous avez déjà un compte ?{' '}
                        <Link
                            href={'login' + (redirectUrl != '/dashboard' ? '?redirect_url=' + redirectUrl : '')}
                            className="rounded-md text-sm text-indigo-600 underline hover:text-indigo-900 focus:outline-none"
                        >
                            Se connecter ?
                        </Link>
                    </p>
                </div>
            </form>
        </GuestLayout>
    );
}
