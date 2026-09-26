import Link from "@docusaurus/Link";

const Links = () => {
  return (
    <>
      <Link className="text-(--olem-text2) hover:text(--olem-text1)" to={"/search"}>
        الوثائق
      </Link>
      <Link className="text-(--olem-text2) hover:text(--olem-text1)" to={"/books"}>
        كتب
      </Link>
      <Link className="text-(--olem-text2) hover:text(--olem-text1)" to={"/roadmaps"}>
        مسارات
      </Link>
      <Link className="text-(--olem-text2) hover:text(--olem-text1)" to={"/dictionary"}>
        معجم
      </Link>
    </>
  );
};

export default Links;