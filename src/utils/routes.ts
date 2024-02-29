import MyPostsPage from "../pages/MyPostsPage";
import NotFoundPage from "../pages/NotFoundPage";
import CreatePostPage from "../pages/CreatePostPage";
import { Route } from "./types/route-types";

/**
 * Routes for the application
 */
const routes: Route[] = [
  {
    path: "/create-post",
    component: CreatePostPage,
  },
  {
    path: "/",
    component: MyPostsPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  }
];

export default routes;
