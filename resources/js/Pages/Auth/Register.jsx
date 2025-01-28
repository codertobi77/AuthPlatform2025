import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function Register({groups, redirectUrl}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        tel: '',
        group_id: '',
        redirectUrl: redirectUrl,
        password: '',
        password_confirmation: '',
    });

    const { csrf_token } = usePage().props;

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="S'inscrire" />

            <form onSubmit={submit}>
                {/* Ajoute un champ caché avec le jeton CSRF */}
                <input type="hidden" name="_token" value={csrf_token} />
                <div>
                    <InputLabel htmlFor="name" value="Nom complet" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

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

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="group_id">
                        Groupe
                    </label>
                    <select
                        id="group_id"
                        name="group_id"
                        value={data.group_id}
                        onChange={(e) => setData('group_id', e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value=""> - - - - -</option>
                        {groups.map((group) => (
                            <option key={group.id} value={group.id}>
                                {group.name}
                            </option>
                        ))}
                    </select>
                    {errors.group_id && <p className="text-red-500 text-sm">{errors.group_id}</p>}
                </div>


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

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirmer le mot de passe"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={'login'+ (redirectUrl != '/dashboard' ? '?redirect_url='+redirectUrl : '')}
                        className="rounded-md text-sm text-indigo-600 underline hover:text-indigo-900 focus:outline-none"
                    >
                        Déjà inscrit ?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        S'inscrire
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
