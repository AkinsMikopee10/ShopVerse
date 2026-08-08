import { Link } from "react-router-dom";

const ProductBreadcrumb = ({ productName }) => {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto mb-6 max-w-7xl">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link to="/" className="text-gray-400 transition hover:text-white">
            Home
          </Link>
        </li>

        <li className="text-gray-600" aria-hidden="true">
          /
        </li>

        <li className="truncate text-gray-200" aria-current="page">
          {productName}
        </li>
      </ol>
    </nav>
  );
};

export default ProductBreadcrumb;
