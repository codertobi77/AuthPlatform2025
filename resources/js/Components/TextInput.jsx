import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);
    const [inputType, setInputType] = useState(type);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    const togglePasswordVisibility = () => {
        setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
    };

    return (
        <div className="relative">
            <input
                {...props}
                type={inputType}
                className={
                    'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' +
                    className
                }
                ref={localRef}
            />
            {type === 'password' && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-2"
                >
                    {inputType === 'password' ? (
                        <EyeIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                        <EyeOffIcon className="h-5 w-5 text-gray-500" />
                    )}
                </button>
            )}
        </div>
    );
});
