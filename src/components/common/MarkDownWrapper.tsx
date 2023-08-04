import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  solarizedlight,
  duotoneDark,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

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
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, "")}
              style={solarizedlight}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  );
};
