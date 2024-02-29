import MyPostsPage from "../../pages/MyPostsPage";
import NewPostPage from "../../pages/NewPostPage";
import NotFoundPage from "../../pages/NotFoundPage";
import { Route } from "../types/route-types";

/**
 * Routes for the application
 */
const routes: Route[] = [
  {
    path: "/",
    component: MyPostsPage,
  },
  {
    path: "/new-post",
    component: NewPostPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  }
];

export default routes;
