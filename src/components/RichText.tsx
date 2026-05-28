import type { TextPart } from "@/types/site-content";

export function RichText({ parts }: { parts: TextPart[] }) {
  return (
    <>
      {parts.map((part, index) =>
        part.highlight ? (
          <span key={index} className="text-[#FFCC00]">
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </>
  );
}
