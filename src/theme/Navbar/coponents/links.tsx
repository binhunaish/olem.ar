import Link from "@docusaurus/Link";

const Links = () => {
  return (
    <>
      <Link className="text-gray-300 hover:text-white" to={"/search"}>
        الوثائق
      </Link>
      <Link className="text-gray-300 hover:text-white" to={"/books"}>
        كتب
      </Link>
      <Link className="text-gray-300 hover:text-white" to={"/roadmaps"}>
        مسارات
      </Link>
      <Link className="text-gray-300 hover:text-white" to={"/dictionary"}>
        معجم
      </Link>
    </>
  );
};

export default Links;