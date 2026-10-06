// Renders **bold** spans in short data strings without pulling in a Markdown parser.
export function RichText({ text }: { text: string }) { return <>{text.split("**").map((part, index) => index % 2 ? <b key={index}>{part}</b> : part)}</>; }
