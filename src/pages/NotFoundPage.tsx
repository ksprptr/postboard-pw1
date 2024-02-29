import LinkButton from "../components/common/LinkButton";
import CenterLayout from "../components/layouts/CenterLayout";

/**
 * Component representing 404 page
 */
export default function NotFoundPage() {
  return (
    <CenterLayout>
      <h1 className="text-2xl font-medium">404 | Page not found</h1>
      <LinkButton href="/" className="text-sm mt-8">
        Return to home page
      </LinkButton>
    </CenterLayout>
  );
}
