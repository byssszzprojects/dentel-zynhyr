import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Reveal from "../components/Reveal.jsx";
import { CtaBand, PageHero } from "../components/Cards.jsx";
import { ArrowRightIcon } from "../components/Icons.jsx";
import { categories, formatDate, posts } from "../data/posts.js";

export default function Blog() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? posts : posts.filter((post) => post.category === active);
  const [featured, ...rest] = filtered;

  return (
    <>
      <Seo
        title="Dental Blog | Advice from Dentists in Austin"
        description="Practical dental advice from the Dentel team in Austin: prevention, treatments, insurance, children's dentistry and technology — written in plain language."
        path="/blog"
      />

      <PageHero
        eyebrow="The Dentel journal"
        title="Notes on teeth, habits and honest dentistry."
        lead="Short, practical articles written by our clinicians — no scare tactics, no jargon, and no promises about perfect results."
        chips={["Written by our dentists", "Reviewed for accuracy", "No jargon"]}
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section pt-10">
        <div className="container-page">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                  active === category
                    ? "border-teal-deep bg-teal-deep text-white"
                    : "border-line bg-white text-ink hover:border-teal-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-[16px] text-ink-soft">
              Nothing published in this category yet. Try another filter.
            </p>
          )}

          {featured && (
            <Reveal className="mt-8">
              <Link
                to={`/blog/${featured.slug}`}
                className="group grid overflow-hidden rounded-[28px] border border-line bg-white transition-shadow duration-300 hover:shadow-[0_24px_54px_#2a413c14] lg:grid-cols-[1.05fr_0.95fr]"
              >
                <div className="aspect-[16/10] overflow-hidden bg-cream-200">
                  <img
                    src={featured.image}
                    alt={featured.imageAlt}
                    width={featured.imageWidth}
                    height={featured.imageHeight}
                    style={{ objectPosition: featured.focus || "50% 50%" }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6 md:p-9">
                  <span className="chip chip-mint">{featured.category}</span>
                  <h2 className="mt-4 font-serif text-[28px] font-bold leading-[1.2] text-teal-deep md:text-[34px]">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-[16px] leading-[1.7] text-ink-soft">
                    {featured.excerpt}
                  </p>
                  <p className="mt-5 text-[13px] text-ink-soft">
                    {featured.author} · {formatDate(featured.date)} ·{" "}
                    {featured.readTime}
                  </p>
                  <span className="link-arrow mt-6">
                    Read the article
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-anim="stagger"
        >
            {rest.map((post, index) => (
              <Reveal key={post.slug} delay={index * 60}>
                <article className="group h-full">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_#2a413c14]"
                  >
                    <div className="overflow-hidden bg-cream-200">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        width={post.imageWidth}
                        height={post.imageHeight}
                        loading="lazy"
                        style={{ objectPosition: post.focus || "50% 50%" }}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <span className="chip chip-mint w-fit">{post.category}</span>
                      <h3 className="mt-3 font-serif text-[22px] font-bold leading-[1.25] text-teal-deep">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-[15px] leading-[1.65] text-ink-soft">
                        {post.excerpt}
                      </p>
                      <p className="mt-4 text-[12px] uppercase tracking-[0.06em] text-teal-500">
                        {formatDate(post.date)} · {post.readTime}
                      </p>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-[80ch] text-[12px] leading-[1.7] text-ink-soft">
            Articles are general information for patients of {`Dentel Dental Studio`}.
            They do not replace an examination and personalised advice. If you have
            a dental emergency, call the studio or, for facial swelling with
            difficulty breathing, call 911.
          </p>
        </div>
      </section>

      <CtaBand
        title="Have a question the internet cannot answer?"
        copy="Book an exam and bring your list. We would rather spend ten minutes explaining than have you guess."
      />
    </>
  );
}
