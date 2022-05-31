// react | remix
import { Link } from "remix";

export const Pagination = ({ volume, partname }) => {
  const currentPage = volume.content.findIndex((contentItem) => {
    return contentItem.partslug.current === partname;
  });

  const nextPageIndex = currentPage + 1;
  const prevPageIndex = currentPage - 1;

  const nextPage = volume.content[nextPageIndex];
  const prevPage = volume.content[prevPageIndex];

  const path = "/read/the-demons-wish/read/";

  const nextPageLink = nextPage ? (
    <Link
      className="blue_link next_page"
      to={`${path}${volume.slug.current}/${nextPage.partslug.current}`}
    >
      Next Page
    </Link>
  ) : null;

  const prevPageLink = prevPage ? (
    <Link
      className="blue_link prev_page"
      to={`${path}${volume.slug.current}/${prevPage.partslug.current}`}
    >
      Previous Page
    </Link>
  ) : null;

  let empty;
  if (nextPageLink === null) {
    empty = <p className="gray">End of Volume</p>;
  }

  return (
    <div className="center">
      {empty} <br /> <br />
      {prevPageLink} {nextPageLink}
    </div>
  );
};
export default Pagination;
