import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import { Breadcrumbs, CtaBand } from "../components/Cards.jsx";
import { ArrowRightIcon } from "../components/Icons.jsx";
import { clinic } from "../data/clinic.js";
import { formatDate, getPost, posts } from "../data/posts.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <Navigate to="/404" replace />;

  const more = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${post.title} | Dentel Dental Studio`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Person", name: post.author },
          publisher: {
            "@type": "Organization",
            name: clinic.name,
            url: "https://www.denteldental.com",
          },
          mainEntityOfPage: `https://www.denteldental.com/blog/${post.slug}`,
        }}
      />

      <article className="pt-6 md:pt-10">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: "Blog", to: "/blog" },
              { label: post.category, to: "/blog" },
            ]}
          />

          <div className="mt-6 max-w-[820px]">
            <span className="chip chip-mint">{post.category}</span>
            <h1 className="display-1 mt-4 max-w-[22ch] text-[clamp(32px,5vw,52px)]" data-anim="lines">
              {post.title}
            </h1>
            <p className="lead mt-5" data-anim="fade">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line pt-4 text-[13px] text-ink-soft">
              <span className="font-medium text-teal-deep">{post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[26px] border border-line bg-cream-200">
            <img
              src={post.image}
              alt={post.imageAlt}
              width={post.imageWidth}
              height={post.imageHeight}
              style={{ objectPosition: post.focus || "50% 50%" }}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-14">
            <div className="prose max-w-[720px]">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 data-anim="heading">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="mt-10 rounded-[18px] border border-line bg-white p-5">
                <p className="text-[13px] leading-[1.7] text-ink-soft">
                  This article is general information, not a diagnosis. Treatment
                  suitability and results vary between patients. Book an
                  examination for advice about your own teeth.
                </p>
              </div>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[20px] border border-line bg-white p-5">
                <p className="eyebrow text-[11px]" data-anim="fade" data-anim-y="16">Written by</p>
                <p className="mt-2 font-serif text-[19px] font-bold text-teal-deep">
                  {post.author}
                </p>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
                  Part of the clinical team at {clinic.name} in {clinic.city}.
                </p>
                <Link to="/about/dentists" className="link-inline mt-3 block text-[14px]">
                  Meet our dentists
                </Link>
              </div>
              <div className="rounded-[20px] bg-mint p-5">
                <p className="font-serif text-[19px] font-bold text-teal-deep">
                  Due for a check-up?
                </p>
                <p className="mt-1 text-[14px] leading-[1.6] text-ink">
                  Same-week appointments, and we verify insurance before you come
                  in.
                </p>
                <Link to="/book" className="btn btn-primary btn-sm mt-4 w-full">
                  Book appointment
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display-2" data-anim="heading" data-highlight="Keep reading">Keep reading</h2>
            <Link to="/blog" className="link-arrow">
              All articles
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div
          className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          data-anim="stagger"
        >
            {more.map((item, index) => (
              <Reveal key={item.slug} delay={index * 50}>
                <Link
                  to={`/blog/${item.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white transition-shadow duration-300 hover:shadow-[0_18px_40px_#2a413c14]"
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    loading="lazy"
                    style={{ objectPosition: item.focus || "50% 50%" }}
                    className="aspect-[16/10] w-full bg-cream-200 object-cover"
                  />
                  <div className="p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-teal-500">
                      {item.category}
                    </span>
                    <h3 className="mt-2 font-serif text-[20px] font-bold leading-[1.3] text-teal-deep">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
