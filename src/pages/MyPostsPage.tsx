import Post from "../components/posts/Post";
import Layout from "../components/layouts/Layout";
import { motion } from "framer-motion";
import { httpGet } from "../utils/http-client";
import { PostType } from "../utils/types/global-types";
import { useState, useEffect } from "react";

/**
 * Component representing my posts page
 */
export default function MyPostsPage() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts
  const fetchPosts = async () => {
    const response = await httpGet("/formdata/-/my");

    if (response.error) {
      setError("Failed to fetch posts. Try reload the page.");
    } else {
      setPosts(response.response?.data.data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Layout>
      <div className="pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-4xl font-medium">My Posts</h1>
          <div className="bg-zinc-200 h-[1px] my-4 w-16 mx-auto" />
        </motion.div>
        {error && <div className="text-red-500 text">{error}</div>}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {posts ? (
            <>
              {posts.map((post, i) => (
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (i + 1) * 0.25 }}
                  key={post.id}
                >
                  <Post
                    id={post.id}
                    firstName={post.firstName}
                    lastName={post.lastName}
                    birthDate={post.birthDate}
                  />
                </motion.div>
              ))}
            </>
          ) : (
            <div className="text">You didn't create any post yet.</div>
          )}
        </div>
      </div>
    </Layout>
  );
}
