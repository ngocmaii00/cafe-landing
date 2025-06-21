import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Characteristics() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        <img src="/hat-ca-phe-up.webp" alt="" />
        <span className="colatin-font text-5xl">Làm với đam mê</span>
        <img src="/hat-ca-phe.webp" alt="" />
      </div>
      <Feature1 />
    </div>
  );
}

export default Characteristics;

const Feature1 = () => {
  return (
    <div className="absolute top-[280px] left-[500px]">
      <div className="absolute">
        <img
          src="/hat-don.webp"
          alt="cf-bean"
          loading="lazy"
          className="bean-motion"
        />
        <svg
          width="173"
          height="83"
          viewBox="0 0 173 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M171.617 1.48242C137.635 76.7144 66 44.999 36 55.9993C6 66.9995 1.64822 82.146 1.64822 82.146"
            stroke="#72BD96"
            strokeWidth="3"
            fill="none"
          />
        </svg>
        <div className="relative">
          <div className="relative top-44 left-10 z-0 rounded-full bg-[#ffffff76] size-14 rotate-10 cursor-pointer">
            <FontAwesomeIcon
              icon={faPlay}
              size="xl"
              className="absolute top-4 left-5"
            />
          </div>
          <picture>
            <img
              className="absolute z-1 scale-115 top-10 left-41 rotate-4"
              src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/zGbszVP.svg"
              alt="line"
            />
            <img
              className="sct-makers--section-image--main-img absolute left-[-1em] top-6 z-[-1] rotate-10 scale-125 h-80"
              src="/nong-dan-1.webp"
              alt="nông dân"
            />
            <img
              className="sct-makers--section-image--main-img absolute left-[-2.5em] top-9 z-[-2] rotate-7 scale-125 h-80"
              src="/nong-dan-2.webp"
              alt="nông dân"
            />
            <img
              className="sct-makers--section-image--main-img absolute left-[-4em] top-12 z-[-3] rotate-4 scale-125 h-80"
              src="/nong-dan-3.webp"
              alt="nông dân"
            />
          </picture>
          <img
            src="/bg-nong-dan.webp"
            alt=""
            className="absolute z-[-4] scale-200 top-36 left-[-5em]"
          />
        </div>
      </div>
      <Content
        title="Nông Dân"
        description="Chúng tôi đang hợp tác với các nông dân trong việc áp dụng các phương pháp nông nghiệp tái sinh."
      />
    </div>
  );
};

const Content = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-4 montserrat-font relative left-[280px] top-[100px]">
      <span className="text-3xl font-bold">{title}</span>
      <div className="font-semibold flex gap-2 items-center">
        <span>Tìm hiểu thêm</span>
        <FontAwesomeIcon
          icon={faArrowRight}
          size="xs"
          className="text-red-800"
        />
      </div>
      <div className="mt-10">
        <img
          src="/content-green.webp"
          className="w-[400px] h-[200px] relative"
        />
        <div className="absolute top-40 left-16 font-medium w-[220px]">
          <span className="colatin-font text-3xl">Bạn có biết ?</span>
          <div className="text-sm mt-2">{description}</div>
        </div>
      </div>
    </div>
  );
};
