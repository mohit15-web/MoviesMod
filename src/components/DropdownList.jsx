// src/components/Dropdown.js
import { useState } from 'react';

const dropdown = [
  {
    id: 1,
    name: "HOME",
  },
  {
    id: 2,
    name: "MOVIES",
    droplist: [
      "AUDIO BASED",
      "LANGUAGE BASED",
      "LATEST RELEASED",
      "HOLLYWOOD",
      "ADULT MOVIES",
      "SHORT",
      "ANIME",
      "IMDB TOP MOVIES"
    ]
  },
  {
    id: 3,
    name: "GENRE",
    droplist: [
      "AUDIO BASED",
      "LANGUAGE BASED",
      "LATEST RELEASED",
      "HOLLYWOOD",
      "ADULT MOVIES",
      "SHORT",
      "ANIME",
      "IMDB TOP MOVIES"
    ]
  },
  {
    id: 4,
    name: "YEAR",
    droplist: [
      "AUDIO BASED",
      "LANGUAGE BASED",
      "LATEST RELEASED",
      "HOLLYWOOD",
      "ADULT MOVIES",
      "SHORT",
      "ANIME",
      "IMDB TOP MOVIES"
    ]
  },
  {
    id: 5,
    name: "OTT",
    droplist: [
      "AUDIO BASED",
      "LANGUAGE BASED",
      "LATEST RELEASED",
      "HOLLYWOOD",
      "ADULT MOVIES",
      "SHORT",
      "ANIME",
      "IMDB TOP MOVIES"
    ]
  },
  {
    id: 6,
    name: "WEB SERIES",
    droplist: [
      "AUDIO BASED",
      "LANGUAGE BASED",
      "LATEST RELEASED",
      "HOLLYWOOD",
      "ADULT MOVIES",
      "SHORT",
      "ANIME",
      "IMDB TOP MOVIES"
    ]
  },
  {
    id: 7,
    name: "SERIES GENRE",
    droplist: [
      "AUDIO BASED",
      "LANGUAGE BASED",
      "LATEST RELEASED",
      "HOLLYWOOD",
      "ADULT MOVIES",
      "SHORT",
      "ANIME",
      "IMDB TOP MOVIES"
    ]
  }
];

const DropdownList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <div>
      {dropdown.map((item, index) => (
        <div className="relative inline-block text-left" key={item.id}>
          <div>
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md  border-r-2 shadow-sm px-6 py-3 text-white text-sm font-semibold"
              id={`options-menu-${item.id}`}
              aria-haspopup="true"
              aria-expanded={openIndex === index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
              {item.droplist && (
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          {item.droplist && openIndex === index && (
            <div
              className="origin-top-right absolute -right-10 mt-2 w-40 rounded-md  text-white bg-[#484849]"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby={`options-menu-${item.id}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="py-1" role="none">
                {item.droplist.map((list, idx) => (
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm font-semibold hover:bg-[#3E3E46]"
                    role="menuitem"
                    key={idx}
                  >
                    {list}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownList;
