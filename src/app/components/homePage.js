import { useEffect, useState } from "react";
import { fetchContent } from "../lib/umbracoApi";

const HomePage = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContent();
      setContent(data);
    };

    fetchData();
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        My Blog
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        Written by: <span className="font-semibold">Andreas Høgh</span> |{" "}
        {new Date().toLocaleDateString()}
      </p>

      <div className="mt-8 space-y-6">
        {content.items &&
          content.items.map((item, index) => (
            <article key={index}>
              <div className="prose max-w-none">
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.properties.blog.markup,
                  }}
                />
              </div>
            </article>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
