"use client";
export default function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {
    return(
        <div>
            <h1>Error occur: {error.message} <button onClick={reset}>Try again</button></h1>
        </div>
    )
};