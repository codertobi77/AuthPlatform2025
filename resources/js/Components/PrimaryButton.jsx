export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={`
                inline-flex 
                items-center 
                justify-center 
                rounded-md 
                border 
                border-transparent 
                bg-indigo-800 
                px-4 
                py-2 
                text-xs 
                font-semibold 
                uppercase 
                tracking-widest 
                text-white 
                text-center
                transition 
                duration-150 
                ease-in-out 
                hover:bg-indigo-700 
                focus:bg-indigo-700 
                focus:outline-none 
                focus:ring-2 
                focus:ring-indigo-500 
                focus:ring-offset-2 
                active:bg-indigo-900 
                ${disabled ? 'opacity-25' : ''} 
                ${className}
            `}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
