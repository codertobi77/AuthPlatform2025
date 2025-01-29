import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
export default function Login({redirectUrl}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        redirectUrl: redirectUrl,
    });

    const { csrf_token } = usePage().props;

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Se connecter" />

            <div className="mb-6">
                {/* Heading ajouté ici */}
                <h1 className="text-2xl text-center font-semibold text-gray-800">Connexion à votre compte</h1>
                <p className="mt-2 text-sm text-center text-gray-600">Entrez vos informations pour accéder à votre compte.</p>
            </div>

            <form onSubmit={submit}>
                {/* Champ CSRF Token */}
                <input type="hidden" name="_token" value={csrf_token} />

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Mot de passe" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <label htmlFor="remember" className="text-sm text-gray-600">
                            <input
                                id="remember"
                                type="checkbox"
                                name="remember"
                                className="form-checkbox"
                            />
                            <span className="ml-2">Se souvenir de moi</span>
                        </label>
                    </div>

                    <div className="text-sm">
                        <Link
                            href="/password/reset"
                            className="text-indigo-600 hover:text-indigo-900"
                        >
                            Mot de passe oublié ?
                        </Link>
                    </div>
                </div>

                <div className="mt-6">
                    <PrimaryButton className="w-full" disabled={processing}>
                        Se connecter
                    </PrimaryButton>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Vous n'avez pas de compte ?{' '}
                        <Link href={'/register' + (redirectUrl !== '/dashboard' ? '?redirect_url=' + redirectUrl : '')} className="text-indigo-600 hover:text-indigo-900">
                            Créez un compte
                        </Link>
                    </p>
                </div>
            </form>
        </GuestLayout>
    );
}
