import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-Italiana mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.{" "}
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-swiper-theme"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
