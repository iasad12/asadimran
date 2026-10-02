import { projects } from "@/data/projects";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ProjectDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectDetailsPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.id === slug);

    if (!project) {
        return {
            title: "Project Not Found - Asad Imran Shah",
        };
    }

    return {
        title: `${project.title} - Asad Imran Shah`,
        description: project.description,
        openGraph: {
            title: `${project.title} - Asad Imran Shah`,
            description: project.description,
            type: "article",
        },
    };
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  // Split description by newlines for paragraph rendering
  const descriptionParagraphs = (project.fullDescription || project.description).split('\n\n');

  return (
    <>
      <PageHeader
        title={project.title}
        description={project.description}
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.title, href: `/projects/${project.id}` },
        ]}
      />

      <section className="pt-2 md:pt-4 pb-16 md:pb-24 bg-[#0a001f]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Cover Image */}
              {project.images.length > 0 && (
                <div className="rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} cover`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Description */}
              <div className="prose prose-invert max-w-none text-gray-400">
                <h2 className="text-3xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                  Project Overview
                </h2>
                {descriptionParagraphs.map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Gallery */}
              {project.images.length > 1 && (
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.slice(1).map((img, index) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden border border-white/10 hover:border-[#00ff9d] transition-colors"
                      >
                        <img
                          src={img}
                          alt={`${project.title} screenshot ${index + 2}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#0f0529] border border-white/10 p-8 rounded-lg sticky top-32">
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4">
                  Project Info
                </h3>

                <div className="space-y-6">
                  {/* Category */}
                  <div>
                    <span className="text-sm text-gray-500 uppercase tracking-widest block mb-1">
                      Category
                    </span>
                    <span className="text-white font-medium">{project.category}</span>
                  </div>

                  {/* Tags */}
                  <div>
                    <span className="text-sm text-gray-500 uppercase tracking-widest block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-[#00ff9d] rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-3">
                    <span className="text-sm text-gray-500 uppercase tracking-widest block mb-2">
                      Links
                    </span>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full py-3 flex items-center justify-center gap-2"
                      >
                        View Live Project
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    ) : null}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 flex items-center justify-center gap-2 border border-white/10 text-white hover:bg-white/5 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.696 1.028 1.59 1.028 2.683 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View on Github
                      </a>
                    )}

                    {!project.link && !project.github && (
                      <span className="block w-full py-3 text-center text-gray-500 border border-white/10 cursor-not-allowed">
                        Internal / Private Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="py-12 bg-[#0a001f] border-t border-white/10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/projects" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
            ← Back to Projects
          </Link>
          <Link href="/contact" className="text-[#00ff9d] hover:text-white flex items-center gap-2 transition-colors">
            Start Your Project →
          </Link>
        </div>
      </section>
    </>
  );
}
