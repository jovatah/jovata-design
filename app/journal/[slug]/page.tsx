import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ValueOfRestraintArticle from "@/components/articles/ValueOfRestraintArticle";
import HowToBeginInteriorProjectArticle from "@/components/articles/HowToBeginInteriorProjectArticle";
import SmartLivingInvisibleArticle from "@/components/articles/SmartLivingInvisibleArticle";
import WhyThoughtfulInteriorsMatterArticle from "@/components/articles/WhyThoughtfulInteriorsMatterArticle";
import type { Metadata } from "next";


export async function generateStaticParams() {
  return [
    { slug: "value-of-restraint" },
    { slug: "how-to-begin-an-interior-project" },
    { slug: "smart-living-should-feel-invisible" },
    { slug: "why-thoughtful-interiors-matter" },
  ];
}

const articles = {
  "value-of-restraint": {
  title: "The Value Of Restraint In Modern Interiors",
  description:
    "An article on why restraint creates calmer, more refined and longer-lasting interiors.",
  image: "/images/project-12.jpg",
  publishedTime: "2026-06-19",
  author: "Jovata Interiors",
  component: <ValueOfRestraintArticle />,
},

  "how-to-begin-an-interior-project": {
    title: "How To Begin An Interior Project",
    description:
      "A practical guide to establishing clarity, purpose and direction before design begins.",
    image: "/images/project-4.jpg",
    publishedTime: "2026-07-11",      author: "Jovata Interiors",
    component: <HowToBeginInteriorProjectArticle />,
  },

  "smart-living-should-feel-invisible": {
    title: "Smart Living Should Feel Invisible",
    description:
      "Why smart living technology should support comfort quietly without overwhelming the home.",
    image: "/images/project-2.jpg",
    publishedTime: "2026-05-23",
    author: "Jovata Interiors",
    component: <SmartLivingInvisibleArticle />,
  },

  "why-thoughtful-interiors-matter": {
    title: "Why Thoughtful Interiors Matter",
    description:
      "A guide to why proportion, comfort, material choices and planning shape better living.",
    image: "/images/project-1.jpg",
    publishedTime: "2026-06-02",
    author: "Jovata Interiors",
    component: <WhyThoughtfulInteriorsMatterArticle />,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return {
      title: "Article Not Found | Jovata Interiors",
    };
  }

  return {
  title: `${article.title} | Jovata Journal`,
  description: article.description,

  alternates: {
    canonical: `https://jovata.design/journal/${slug}`,
  },

  openGraph: {
    title: article.title,
    description: article.description,
    url: `https://jovata.design/journal/${slug}`,
    siteName: "Jovata Interiors",
    type: "article",
    images: [
      {
        url: `https://jovata.design${article.image}`,
        width: 1200,
        height: 630,
        alt: article.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.description,
    images: [`https://jovata.design${article.image}`],
  },
};
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return null;
  }

  const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  image: `https://jovata.design${article.image}`,
  author: {
    "@type": "Organization",
    name: article.author,
  },
  publisher: {
    "@type": "Organization",
    name: "Jovata Interiors",
    logo: {
      "@type": "ImageObject",
      url: "https://jovata.design/icon.png",
    },
  },
  datePublished: article.publishedTime,
  dateModified: article.publishedTime,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://jovata.design/journal/${slug}`,
  },
};

  return (
    <main className="min-h-screen bg-white text-black">
        <script
       type="application/ld+json"
       dangerouslySetInnerHTML={{
           __html: JSON.stringify(articleStructuredData),
        }}
        />
      <Navbar />
      {article.component}
      <Footer />
    </main>
  );
}