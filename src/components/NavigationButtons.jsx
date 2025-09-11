// NavigationButtons.jsx
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { pages } from "./pagesList";

const NavigationButtons = () => {
  const location = useLocation();
  const currentIndex = pages.findIndex((p) => p.path === location.pathname);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < pages.length - 1;

  return (
    <nav className="flex justify-between w-full px-6 mt-10">
      {hasPrev ? (
        <Link to={pages[currentIndex - 1].path}>
          <Button variant="outline" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faArrowLeft} />
            {pages[currentIndex - 1].label}
          </Button>
        </Link>
      ) : (
        <div />
      )}

      {hasNext ? (
        <Link to={pages[currentIndex + 1].path}>
          <Button variant="outline" className="flex items-center gap-2">
            {pages[currentIndex + 1].label}
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
};

export default NavigationButtons;
