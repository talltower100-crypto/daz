import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const blogPosts = [
  {
    id: 1,
    title: "The Art of the Perfect Fade: What Every Man Should Know",
    category: "Technique",
    date: "June 1, 2025",
    excerpt: "The fade is a classic. Understanding the different types of fades, from low to high to skin, can help you communicate exactly what you want.",
    image: "https://vibe.filesafe.space/1781208974742594917/assets/de7503bf-9e2f-4cf4-88e5-78f11beb031b.png",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Kids First Haircut: How to Make It a Great Experience",
    category: "Tips",
    date: "May 20, 2025",
    excerpt: "Bringing your child to the barbershop for the first time can be nerve-wracking for both of you. Here are our top tips for making the first haircut a positive memory that sets the tone for a lifetime of great grooming.",
    image: "https://vibe.filesafe.space/1781208974742594917/assets/a9ec60f3-9bba-44e1-a894-8132314d91b9.png",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Beard Care 101: Keeping Your Beard Sharp Between Visits",
    category: "Grooming",
    date: "May 10, 2025",
    excerpt: "A great beard trim from your barber is the foundation, but what you do at home between visits makes all the difference. Learn how to maintain your shape, condition your beard, and keep the edges clean.",
    image: "https://vibe.filesafe.space/1781208974742594917/assets/2a548418-df70-4c72-b36b-b39b767cd3ec.png",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Why a Hot Towel Shave is Worth Every Penny",
    category: "Services",
    date: "April 25, 2025",
    excerpt: "The classic hot towel shave remains the standard for a reason. Here's why you should experience a professional straight razor shave.",
    image: "https://vibe.filesafe.space/1781208974742594917/assets/26a545a9-ff5a-4a8c-82fb-1c63daa93918.png",
    readTime: "5 min read"
  },
  {
    id: 5,
    title: "Hair Color for Men: Breaking Down the Options",
    category: "Style",
    date: "April 12, 2025",
    excerpt: "More men than ever are exploring hair color, and for good reason. Whether you want to cover grays, try something bold, or add subtle dimension, our Cut n Color service can transform your look in just one hour.",
    image: "https://vibe.filesafe.space/1781208974742594917/assets/6365dc3d-b1ec-4318-b0db-a3ca64e9db50.png",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "The Kokutz Guide to Finding Your Perfect Haircut",
    category: "Style",
    date: "March 30, 2025",
    excerpt: "Not every cut works for every face shape, hair texture, or lifestyle. Our barbers have decades of experience matching clients to the perfect style. Here's how we think about it, and how you can apply this knowledge.",
    image: "https://vibe.filesafe.space/1781208974742594917/assets/395a9c05-e58e-4bb7-8e83-914e4d4e10a6.png",
    readTime: "7 min read"
  }
];

const Blog = () => {
  return (
    <main className="pt-20">
      <section className="py-28 px-6 bg-[oklch(0.08_0.005_270)]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-condensed text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.18_80)]">Insights and Tips</span>
            <h1 className="font-display text-6xl md:text-8xl text-white tracking-widest mt-3 mb-6 leading-none">THE BLOG</h1>
            <div className="gold-line w-24 mx-auto mb-8" />
            <p className="font-body text-xl text-[oklch(0.65_0.005_270)] max-w-2xl mx-auto">
              Expert grooming advice, style guides, and barbershop knowledge from the team at Kokutz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[oklch(0.11_0.005_270)]">
        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          <FadeIn className="mb-12">
            <div className="group grid grid-cols-1 lg:grid-cols-2 bg-[oklch(0.08_0.005_270)] border border-[oklch(0.18_0.005_270)] hover:border-[oklch(0.72_0.18_80)] transition-colors overflow-hidden">
              <div className="relative h-72 lg:h-auto overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[oklch(0.72_0.18_80)] px-3 py-1">
                  <span className="font-condensed text-xs font-bold text-[oklch(0.08_0.005_270)] tracking-widest uppercase">Featured</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-condensed text-xs tracking-widest uppercase text-[oklch(0.72_0.18_80)]">{blogPosts[0].category}</span>
                  <span className="text-[oklch(0.35_0.005_270)]">|</span>
                  <span className="font-condensed text-xs text-[oklch(0.45_0.005_270)]">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="font-display text-4xl text-white tracking-wider mb-4 group-hover:text-[oklch(0.72_0.18_80)] transition-colors leading-tight">{blogPosts[0].title}</h2>
                <p className="font-body text-[oklch(0.65_0.005_270)] leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-[oklch(0.45_0.005_270)]">
                    <Calendar size={13} />
                    <span className="font-condensed text-xs">{blogPosts[0].date}</span>
                  </div>
                  <button className="flex items-center gap-2 font-condensed text-xs tracking-widest uppercase text-[oklch(0.72_0.18_80)]">
                    Read Article <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.08}>
                <div className="group bg-[oklch(0.08_0.005_270)] border border-[oklch(0.18_0.005_270)] hover:border-[oklch(0.72_0.18_80)] transition-colors overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-[oklch(0.08_0.005_270)]/90 backdrop-blur-sm px-2 py-1 border border-[oklch(0.72_0.18_80)]">
                      <span className="font-condensed text-xs text-[oklch(0.72_0.18_80)] tracking-widest uppercase">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3 text-[oklch(0.45_0.005_270)]">
                      <Calendar size={11} />
                      <span className="font-condensed text-xs">{post.date}</span>
                      <span className="font-condensed text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="font-display text-2xl text-white tracking-wider mb-3 group-hover:text-[oklch(0.72_0.18_80)] transition-colors leading-tight flex-1">{post.title}</h3>
                    <p className="font-body text-sm text-[oklch(0.55_0.008_270)] leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-[oklch(0.72_0.18_80)]">
                      <span className="font-condensed text-xs tracking-widest uppercase">Read More</span>
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[oklch(0.08_0.005_270)]">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl text-white tracking-widest mb-6">BOOK YOUR<br />CUT</h2>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p className="font-body text-[oklch(0.65_0.005_270)] mb-8">Book your next appointment at Kokutz.</p>
          <a href="https://getsquire.com/booking/book/kokutz-hartford/barber/kokutz-rochester/services" target="_blank" rel="noopener noreferrer">
            <button className="btn-gold font-condensed text-sm tracking-widest">Book Now</button>
          </a>
        </FadeIn>
      </section>
    </main>
  );
};

export default Blog;
