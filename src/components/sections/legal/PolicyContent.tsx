import { cls } from "@/lib/utils";

type ContentItem =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "numbered-list"; items: string[] };

type ContentSection = {
  heading: string;
  content: ContentItem[];
};

const PolicyContent = ({
  title,
  subtitle,
  sections,
}: {
  title: string;
  subtitle?: string;
  sections: ContentSection[];
}) => {
  return (
    <article aria-label="Policy content" className="w-content-width mx-auto pt-36 md:pt-40 pb-20 md:pb-30">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{title}</h1>
          {subtitle && (
            <p className="text-base opacity-70">{subtitle}</p>
          )}
        </div>

        <div className="w-full h-px bg-foreground/20" />

        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <section key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl font-semibold leading-snug">{section.heading}</h2>
              {section.content.map((item, i) => {
                if (item.type === "paragraph") {
                  return (
                    <p key={i} className="text-base opacity-85 leading-relaxed">
                      {item.text}
                    </p>
                  );
                }

                const ListTag = item.type === "numbered-list" ? "ol" : "ul";

                return (
                  <ListTag
                    key={i}
                    className={cls(
                      "flex flex-col gap-3 pl-5 text-base opacity-85 leading-relaxed",
                      item.type === "numbered-list" ? "list-decimal" : "list-disc"
                    )}
                  >
                    {item.items.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ListTag>
                );
              })}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PolicyContent;
