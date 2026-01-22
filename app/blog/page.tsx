import { supabaseServer } from '@/lib/supabase';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

async function getBlogPosts() {
  try {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const todayStr = today.toISOString().split('T')[0];

    // Obtener todos los posts primero, luego filtrar en el código
    const { data, error } = await supabaseServer
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }

    if (!data) return [];

    // Filtrar posts: publicados O (no publicados pero con fecha programada <= hoy)
    const filteredPosts = data.filter((post) => {
      if (post.published === true) return true;
      if (post.published === false && post.publish_date) {
        const publishDate = new Date(post.publish_date);
        return publishDate <= today;
      }
      return false;
    });

    return filteredPosts.slice(0, 20);
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-[#fef2f2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <div className="w-24 h-1 bg-[#dc2626] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Información, noticias y recursos sobre hemofilia y trastornos de coagulación
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No hay publicaciones disponibles aún.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                {post.image_url && (
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {format(new Date(post.created_at), "d 'de' MMMM, yyyy", { locale: es })}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt || post.content?.substring(0, 150)}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-[#dc2626] font-semibold hover:underline"
                  >
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


