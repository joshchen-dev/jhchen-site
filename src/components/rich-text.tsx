// Renders **bold** and `code` spans in short data strings without pulling in a Markdown parser.
export function RichText({ text }: { text: string }) {
  return <>{text.split(/(\*\*[^*]+\*\*|`[^`]+`)/).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) return <b key={index}>{part.slice(2, -2)}</b>;
    if (part.startsWith("`") && part.endsWith("`")) return <code key={index} className="inline-code">{part.slice(1, -1)}</code>;
    return part;
  })}</>;
}
