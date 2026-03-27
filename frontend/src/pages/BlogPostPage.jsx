import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../mockData';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogData.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="pt-24 min-h-screen bg-[#FDF5F0] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button className="bg-[#E31E24] hover:bg-[#B81820] text-white rounded-full px-6 py-3">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section with Featured Image */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-4xl">
            <span className="bg-[#E31E24] text-white px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-[#E31E24] hover:text-[#B81820] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Posts
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-serif text-gray-900 mt-8 mb-4">Overview</h2>
              <p>
                {post.content} This comprehensive article explores the latest developments and implications 
                in {post.category.toLowerCase()}, providing valuable insights for legal professionals and 
                business leaders navigating today's complex regulatory landscape.
              </p>

              <h2 className="text-3xl font-serif text-gray-900 mt-8 mb-4">Key Takeaways</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Understanding the current regulatory framework and recent changes</li>
                <li>Practical strategies for compliance and risk management</li>
                <li>Expert insights on emerging trends and future developments</li>
                <li>Case studies and real-world applications</li>
              </ul>

              <h2 className="text-3xl font-serif text-gray-900 mt-8 mb-4">Detailed Analysis</h2>
              <p>
                As businesses continue to evolve in response to changing market conditions and regulatory requirements, 
                staying informed about the latest legal developments is crucial. This article provides an in-depth 
                examination of the key issues and offers practical guidance for implementation.
              </p>

              <blockquote className="border-l-4 border-[#E31E24] pl-6 italic text-xl my-8">
                "Proactive legal compliance is not just about avoiding penalties—it's about creating 
                sustainable competitive advantage through strategic planning and risk management."
              </blockquote>

              <h2 className="text-3xl font-serif text-gray-900 mt-8 mb-4">Conclusion</h2>
              <p>
                The landscape of business law continues to evolve, requiring constant vigilance and adaptation. 
                By staying informed and working with experienced legal advisors, organizations can navigate these 
                challenges successfully and position themselves for long-term success.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-[#FDF5F0] rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-serif text-gray-900 mb-4">Need Expert Legal Guidance?</h3>
              <p className="text-gray-700 mb-6">
                Our team of experienced legal professionals is here to help you navigate complex business law challenges.
              </p>
              <Link to="/contact">
                <Button className="bg-[#E31E24] hover:bg-[#B81820] text-white rounded-full px-8 py-6 text-base">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-6 bg-[#FDF5F0]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogData
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                  <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img 
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif text-gray-900 mb-3 group-hover:text-[#E31E24] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{relatedPost.excerpt.substring(0, 100)}...</p>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;