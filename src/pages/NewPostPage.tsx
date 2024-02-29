import CenterLayout from "../components/layouts/CenterLayout";
import CreatePostForm from "../components/forms/NewPostForm";
import { motion } from "framer-motion";

/**
 * Component representing new post page
 */
export default function NewPostPage() {
  return (
    <CenterLayout>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-medium">New post</h1>
        <div className="bg-zinc-200 h-[1px] my-4 w-16 mx-auto" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        <CreatePostForm />
      </motion.div>
    </CenterLayout>
  );
}
