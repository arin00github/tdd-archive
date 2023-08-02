import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkDownWrapperProps {
  children: string;
}

export const MarkDownWrapper = ({ children }: MarkDownWrapperProps) => {
  return (
    <ReactMarkdown
      components={{
        h1: "h2",
        h2: "h3",
        pre: ({ ...props }) => (
          <pre style={{ background: "#f4f5f8", padding: "12px" }} {...props} />
        ),
        code: ({ ...props }) => <code {...props} />,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  );
};
