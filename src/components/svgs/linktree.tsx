import * as React from 'react';

export default function Linktree({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Linktree"
            data-sb-field-path={props['data-sb-field-path'] as string}
            {...props}
        >
            <path
                fill="currentColor"
                d="M12 0c-.6 0-1.1.5-1.1 1.1v6.2L6.2 2.6c-.4-.4-1.1-.4-1.5 0-.4.4-.4 1.1 0 1.5l4.7 4.7H3.1c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h6.3l-4.7 4.7c-.4.4-.4 1.1 0 1.5.4.4 1.1.4 1.5 0l4.7-4.7v6.3c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1v-6.3l4.7 4.7c.4.4 1.1.4 1.5 0 .4-.4.4-1.1 0-1.5l-4.7-4.7h6.3c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1h-6.3l4.7-4.7c.4-.4.4-1.1 0-1.5-.4-.4-1.1-.4-1.5 0l-4.7 4.7V1.1C13.1.5 12.6 0 12 0z"
            />
        </svg>
    );
}
