import Link from "next/link";
import { Facebook, Twitter, LucideIcon } from "lucide-react";
import { theme } from "@/config/theme";
import { content } from "@/config/content";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const SocialIcons: Record<string, LucideIcon> = {
  Facebook,
  Twitter,
};

export function Footer() {
  if (!layout.footer.isVisible) return null;

  const footerClassName = cn(
    theme.footer.colors.border,
    theme.footer.colors.background
  );

  const containerClassName = cn(
    theme.footer.layout.container,
    theme.footer.layout.padding
  );

  const gridClassName = cn(theme.footer.layout.grid);

  return (
    <footer className={footerClassName}>
      <div className={containerClassName}>
        <div className={gridClassName}>
          {/* About Section */}
          {layout.footer.sections.about && (
            <div>
              <h3 className={cn("font-semibold", theme.footer.spacing.sectionTitle)}>
                {content.footer.about.title}
              </h3>
              <p className={theme.footer.colors.mutedText}>
                {content.footer.about.description}
              </p>
            </div>
          )}

          {/* Games Section */}
          {layout.footer.sections.games && (
            <div>
              <h3 className={cn("font-bold", theme.footer.spacing.sectionTitle)}>
                {content.footer.games.title}
              </h3>
              <ul className={theme.footer.spacing.linkList}>
                {content.footer.games.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm",
                        theme.footer.colors.mutedText,
                        theme.footer.colors.hover
                      )}
                      target="_blank"
                      rel="noopener nofollow"  // 添加 nofollow 防止权重传递
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Quick Links Section */}
          {layout.footer.sections.quickLinks && (
            <div>
              <h3 className={cn("font-bold", theme.footer.spacing.sectionTitle)}>
                {content.footer.quickLinks.title}
              </h3>
              <ul className={theme.footer.spacing.linkList}>
                {content.footer.quickLinks.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm",
                        theme.footer.colors.mutedText,
                        theme.footer.colors.hover
                      )}
                      target="_blank"
                      rel="noopener nofollow"  // 添加 nofollow 防止权重传递
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social Links Section */}
          {layout.footer.sections.social && (
            <div>
              <h3 className={cn("font-bold", theme.footer.spacing.sectionTitle)}>
                {content.footer.social.title}
              </h3>
              <div className="space-y-4">
                {content.footer.social.links.map((link) => {
                  const Icon = SocialIcons[link.icon];
                  return (
                    <div key={link.href} className="flex items-center space-x-2">
                      <Icon className="h-5 w-5" />
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener nofollow"  // 使用 nofollow 防止权重传递
                        className={cn(
                          "text-sm",
                          theme.footer.colors.mutedText,
                          theme.footer.colors.hover
                        )}
                      >
                        {link.icon}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Copyright and Legal Section - 重新设计的部分 */}
        <div className="mt-8 pt-8 border-t">
          {/* Updated Copyright and Legal Links Section */}
          <div className="text-center">
            {/* Copyright Line */}
            <p className={cn("text-sm", theme.footer.colors.mutedText, "mb-2 md:mb-4")}>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>

            {/* Links Line */}
            {(() => {
              const allLegalLinks = content.footer.legal.links;
              const desiredOrder = ["About Us", "Privacy Policy", "Terms of Service", "Contact Us"];
              const orderedLinks = desiredOrder
                .map(text => allLegalLinks.find(link => link.text === text))
                .filter(link => link !== undefined) as { text: string; href: string }[];

              if (layout.footer.sections.legal && orderedLinks.length > 0) {
                return (
                  <nav aria-label="Footer legal links">
                    <ul className="flex flex-wrap justify-center">
                      {orderedLinks.map((link, index) => (
                        <li key={link.href} className="flex items-center">
                          <Link
                            href={link.href}
                            className={cn(
                              "text-sm",
                              theme.footer.colors.mutedText,
                              theme.footer.colors.hover,
                              "px-2" // Add padding for spacing around pipes
                            )}
                          >
                            {link.text}
                          </Link>
                          {index < orderedLinks.length - 1 && (
                            <span className={cn("text-sm", theme.footer.colors.mutedText)} aria-hidden="true">|</span>
                          )}
                        </li>
                      ))}
                      {/* Add Sitemap Link */}
                      <li className="flex items-center">
                        <span className={cn("text-sm", theme.footer.colors.mutedText)} aria-hidden="true">|</span>
                        <Link
                          href="/sitemap.xml"
                          className={cn(
                            "text-sm",
                            theme.footer.colors.mutedText,
                            theme.footer.colors.hover,
                            "px-2"
                          )}
                        >
                          Sitemap
                        </Link>
                      </li>
                    </ul>
                  </nav>
                );
              }
              return null;
            })()}
          </div>

        </div>
      </div>
    </footer>
  );
}
