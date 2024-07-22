export default function UserResponse({
    response,
}: {
    response: string | undefined;
}) {
    return (
        <div className="flex-grow border-l-2 border-black p-3">
            <h3 className="underline font-semibold">AI ideated response</h3>
            <p className="leading-4">{response}</p>
        </div>
    );
}