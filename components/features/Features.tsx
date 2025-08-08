import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { cn } from "@/lib/utils";

interface FeaturesProps {
  content?: typeof defaultContent;
}

export function Features({ content = defaultContent }: FeaturesProps) {
  const colors = [
    theme.features.colors.item1, 
    theme.features.colors.item2, 
    theme.features.colors.item3,
    theme.features.colors.item4
  ];
  
  return (
    <section 
      id="features" 
      className={cn(
        "mb-24",
        theme.layout.section.spacing,
        theme.layout.section.scrollMargin  // 添加统一的滚动偏移量
      )}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{content.features.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {content.features.items.map((feature, index) => (
          <div key={index} className="p-4 md:p-6 bg-gray-50 rounded-lg">
            <h3 className={cn("text-lg md:text-xl font-bold mb-3 md:mb-4", colors[index])}>
              {feature.title}
            </h3>
            <p className="text-gray-700 text-left text-sm md:text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


