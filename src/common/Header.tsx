import {
  faBars,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const title = ["Cà phê", "Công thức sáng tạo", "Phát triển bền vững"];

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 montserrat-font w-full z-50 transition-all duration-500 ${
        scrolled ? "shadow-md translate-y-0" : ""
      } ${scrolled ? "animate-slide-down" : ""}`}
    >
      <div className="flex justify-between items-center px-16 py-6 bg-[#302216]">
        <img src="/logo.webp" alt="logo" className="w-24 mb-2" />
        <div className="text-white font-semibold text-base flex items-center gap-28">
          <div className="flex gap-10">
            {title.map((item) => (
              <a
                href="###"
                key={item}
                className={`${
                  item === "Cà phê" ? "underline underline-offset-6" : ""
                } hover:text-[#f2cbcb] duration-300 cursor-pointer`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="border border-white py-2 px-6 rounded-br-lg hover:bg-white hover:text-[#302216] hover:duration-300 cursor-pointer">
              Mua Cà Phê Nescafé
            </button>
            <button className="btn-effect">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button className="btn-effect">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
        </div>
      </div>
      <SubHeader />
    </header>
  );
}

export default Header;

const SubHeader = () => {
  return (
    <div className="bg-[#30221699] text-white flex justify-start items-center px-16 py-3 text-xs font-medium gap-4">
      <div className="">Trang chủ</div>
      <FontAwesomeIcon icon={faChevronRight} size="xs" />
      <div className="">Gặp Gỡ Những Nghệ Nhân Cà Phê Của Chúng Tôi</div>
    </div>
  );
};
