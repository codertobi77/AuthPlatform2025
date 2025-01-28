import ApplicationLogo from '@/Components/ApplicationLogo';
import Navbar from '@/Components/Navbar';

export default function GuestLayout({ children }) {
    return (
        <div className='flex w-screen flex-col pt-0 bg-blue-50'>
            <Navbar />
            <div className="flex min-h-screen w-full items-center flex-col pt-0 bg-blue-100 sm:justify-center">
                <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
