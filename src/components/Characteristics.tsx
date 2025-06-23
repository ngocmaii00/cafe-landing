import { useEffect, useRef, useState } from "react";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useVisibleOnScroll } from "../hooks/useVisibleOnScroll";

function Characteristics() {
  const { ref, visible } = useVisibleOnScroll();
  return (
    <div className="flex flex-col items-center relative">
      <div ref={ref}>
        <img
          src="/lam-voi-dam-me.png"
          className={`transition-opacity duration-700 animation-move-left ${
            visible ? "animation-move-left" : "opacity-0"
          }`}
          alt=""
        />
      </div>

      <Feature />
      <div ref={ref}>
        <div
          className={`pointer-events-none fixed bottom-0 right-10 w-full h-[480px] bg-[url('/notation.webp')] bg-cover bg-no-repeat z-[-5] transition-opacity duration-600 ease-in-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
}
export default Characteristics;

const Content = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="montserrat-font">
      <span className="text-4xl font-bold">{title}</span>
      <div className="font-semibold flex gap-2 items-center">
        <span className="py-2">Tìm hiểu thêm</span>
        <FontAwesomeIcon
          icon={faArrowRight}
          size="xs"
          className="text-red-800"
        />
      </div>
      <div className="mt-6">
        <img src="/content-green.webp" className="w-[380px] h-[200px]" />
        <div className="font-medium w-[220px] translate-y-[-10em] translate-x-[4em]">
          <span className="dancing-font text-3xl">Bạn có biết ?</span>
          <div className="text-sm mt-2">{description}</div>
        </div>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <div className="flex flex-col translate-x-[-4em]">
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Feature5 />
    </div>
  );
};

const Feature1 = () => {
  const { ref, visible } = useVisibleOnScroll();
  return (
    <div ref={ref}>
      <div className="absolute mt-4">
        <div className="">
          <img
            src="/bean.png"
            alt="cf-bean"
            loading="lazy"
            className={visible ? "bean-motion-1 drop-shadow-lg" : "opacity-0"}
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
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </div>

        <div className="relative">
          <div className="relative top-36 left-12 z-0 rounded-full bg-[#ffffff76] size-14 rotate-4 cursor-pointer">
            <FontAwesomeIcon
              icon={faPlay}
              size="xl"
              className="absolute top-4 left-5"
            />
          </div>
          <picture>
            <img
              className={`transition-opacity duration-700 absolute z-1 scale-115 top-8 left-40 -rotate-2 ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/zGbszVP.svg"
              alt="line"
              loading="lazy"
            />
            <img
              className={`transition-opacity duration-700 absolute right-[-4em] top-64 z-0 scale-70 ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="/1.png"
              alt="nông dân"
              loading="lazy"
            />
            <img
              className="absolute left-[-1em] top-10 z-[-1] rotate-4 scale-130 h-70 border-4 border-white shadow-lg"
              src="/anh-1.jpg"
              alt="nông dân"
              loading="lazy"
            />
          </picture>
          <img
            className={`transition-opacity duration-700 absolute z-[-4] scale-200 top-28 left-[-4em] ${
              visible ? "animation-move-left" : "opacity-0"
            }`}
            src="/bg-nong-dan.webp"
            loading="lazy"
          />
        </div>
      </div>
      <div
        className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative left-[280px] top-[120px] ${
          visible ? "animation-move-right" : "opacity-0"
        }`}
      >
        <Content
          title="Nông Dân"
          description="Chúng tôi đang hợp tác với các nông dân trong việc áp dụng các phương pháp nông nghiệp tái sinh."
        />
      </div>
    </div>
  );
};

const Feature2 = () => {
  const { ref, visible } = useVisibleOnScroll();

  return (
    <div ref={ref}>
      <div className="mt-16">
        <div className="translate-x-8 -translate-y-3">
          <img
            src="/bean.png"
            alt="cf-bean"
            loading="lazy"
            className={visible ? "bean-motion-2 drop-shadow-lg" : "opacity-0"}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="314"
            height="84"
            viewBox="0 0 314 84"
            fill="none"
          >
            <path
              d="M1.29688 1.69336C53.1774 93.6787 248.733 -14.6328 312.221 82.2264"
              stroke="white"
              stroke-width="3"
            ></path>
          </svg>
        </div>

        <div className="relative">
          <div className="relative top-30 left-[28em] z-2 rounded-full bg-[#ffffff76] size-14 -rotate-4 cursor-pointer">
            <FontAwesomeIcon
              icon={faPlay}
              size="xl"
              className="absolute top-4 left-5"
            />
          </div>
          <picture>
            <img
              className={`transition-opacity duration-700 absolute z-1 scale-110 top-48 right-2 -rotate-6 ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
              alt="line"
              loading="lazy"
            />
            <img
              className={`transition-opacity duration-700 absolute left-[24em] z-0 scale-40 bottom-[-2em] ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="/2.png"
              alt="nông dân"
              loading="lazy"
            />
            <img
              className="absolute left-[22em] top-[-2em] -rotate-4 h-90 w-60 z-[-2] border-4 border-white shadow-lg"
              src="/anh-2.jpg"
              alt="nông dân"
              loading="lazy"
            />
          </picture>
          <img
            className={`transition-opacity duration-700 absolute z-[-4] top-[-2em] left-[20em]  ${
              visible ? "animation-move-right" : "opacity-0"
            }`}
            src="/bg-nha-nong-hoc.webp"
            loading="lazy"
          />
        </div>
        <div
          className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative left-[-6em] top-[-2em] ${
            visible ? "animation-move-left" : "opacity-0"
          }`}
        >
          <Content
            title="Nhà Nông Học"
            description="Các nhà nông học là cầu nối giữa khoa học và nông nghiệp."
          />
        </div>
      </div>
    </div>
  );
};

const Feature3 = () => {
  const { ref, visible } = useVisibleOnScroll();

  return (
    <div ref={ref}>
      <div className="-mt-24">
        <div className="translate-x-36">
          <img
            src="/bean.png"
            alt="cf-bean"
            loading="lazy"
            className={visible ? "bean-motion-3 drop-shadow-lg" : "opacity-0"}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="356"
            height="75"
            viewBox="0 0 356 75"
            fill="none"
          >
            <path
              d="M354 1C285.588 118.746 109 26 0.999996 73"
              stroke="white"
              stroke-width="3"
            ></path>
          </svg>
        </div>

        <div className="relative">
          <div className="relative top-36 left-[1em] z-2 rounded-full bg-[#ffffff76] size-14 cursor-pointer">
            <FontAwesomeIcon
              icon={faPlay}
              size="xl"
              className="absolute top-4 left-5"
            />
          </div>
          <picture>
            <img
              className={`transition-opacity duration-700 absolute z-1 scale-110 bottom-4 rotate-90 ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
              alt="line"
              loading="lazy"
            />
            <img
              className={`transition-opacity duration-700 absolute left-[-2em] z-0 scale-40 top-52 ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="/3.png"
              alt="nông dân"
              loading="lazy"
            />
            <img
              className="absolute left-[-5em] top-[-0.5em] h-90 w-60 z-[-2] border-4 border-white shadow-lg"
              src="/anh-3.jpg"
              alt="nông dân"
              loading="lazy"
            />
          </picture>
          <img
            className={`transition-opacity duration-700 absolute z-[-4] top-[-2em] left-[-12em] scale-80  ${
              visible ? "animation-move-right" : "opacity-0"
            }`}
            src="/bg-nha-san-xuat.webp"
            loading="lazy"
          />
        </div>
        <div
          className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative left-[280px] ${
            visible ? "animation-move-right" : "opacity-0"
          }`}
        >
          <Content
            title="Nông Dân"
            description="Chúng tôi đang hợp tác với các nông dân trong việc áp dụng các phương pháp nông nghiệp tái sinh."
          />
        </div>
      </div>
    </div>
  );
};

const Feature4 = () => {
  const { ref, visible } = useVisibleOnScroll();

  return (
    <div ref={ref}>
      <div className="-mt-20">
        <div className="translate-x-8 -translate-y-3">
          <img
            src="/bean.png"
            alt="cf-bean"
            loading="lazy"
            className={visible ? "bean-motion-2 drop-shadow-lg" : "opacity-0"}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="314"
            height="84"
            viewBox="0 0 314 84"
            fill="none"
          >
            <path
              d="M1.29688 1.69336C53.1774 93.6787 248.733 -14.6328 312.221 82.2264"
              stroke="white"
              stroke-width="3"
            ></path>
          </svg>
        </div>

        <div className="relative">
          <div className="relative top-30 left-[28em] z-2 rounded-full bg-[#ffffff76] size-14 -rotate-4 cursor-pointer">
            <FontAwesomeIcon
              icon={faPlay}
              size="xl"
              className="absolute top-4 left-5"
            />
          </div>
          <picture>
            <img
              className={`transition-opacity duration-700 absolute z-1 scale-110 top-48 right-2 -rotate-6 ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
              alt="line"
              loading="lazy"
            />
            <img
              className={`transition-opacity duration-700 absolute left-[26em] z-0 scale-40 top-[10em] ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="/4.png"
              alt="nông dân"
              loading="lazy"
            />
            <img
              className="absolute left-[22em] top-[-2em] -rotate-4 h-90 w-60 z-[-2] border-4 border-white shadow-lg"
              src="/anh-4.jpg"
              alt="nông dân"
              loading="lazy"
            />
          </picture>
          <img
            className={`transition-opacity duration-700 absolute z-[-4] top-[-2em] left-[20em]  ${
              visible ? "animation-move-right" : "opacity-0"
            }`}
            src="/bg-rang-ca-phe.webp"
            loading="lazy"
          />
        </div>
        <div
          className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative left-[-6em] top-[-2em] ${
            visible ? "animation-move-left" : "opacity-0"
          }`}
        >
          <Content
            title="Nhà Nông Học"
            description="Các nhà nông học là cầu nối giữa khoa học và nông nghiệp."
          />
        </div>
      </div>
    </div>
  );
};

const Feature5 = () => {
  const { ref, visible } = useVisibleOnScroll();

  return (
    <div ref={ref}>
      <div className="-mt-16">
        <div className="translate-x-36">
          <img
            src="/bean.png"
            alt="cf-bean"
            loading="lazy"
            className={visible ? "bean-motion-3 drop-shadow-lg" : "opacity-0"}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="356"
            height="75"
            viewBox="0 0 356 75"
            fill="none"
          >
            <path
              d="M354 1C285.588 118.746 109 26 0.999996 73"
              stroke="white"
              stroke-width="3"
            ></path>
          </svg>
        </div>

        <div className="relative">
          <div className="relative top-36 left-0 z-2 rounded-full bg-[#ffffff76] size-14 cursor-pointer rotate-4">
            <FontAwesomeIcon
              icon={faPlay}
              size="xl"
              className="absolute top-4 left-5"
            />
          </div>
          <picture>
            <img
              className={`transition-opacity duration-700 absolute z-1 scale-110 bottom-4 rotate-90 ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
              alt="line"
              loading="lazy"
            />
            <img
              className={`transition-opacity duration-700 absolute left-[-3em] z-0 scale-50 top-52 ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="/5.png"
              alt="nông dân"
              loading="lazy"
            />
            <img
              className="absolute left-[-6em] top-[-1em] h-90 w-60 z-[-2] rotate-4 border-4 border-white shadow-lg"
              src="/anh-5.jpg"
              alt="nông dân"
              loading="lazy"
            />
          </picture>
          <img
            className={`transition-opacity duration-700 absolute z-[-4] top-[-2em] left-[-16em] scale-70  ${
              visible ? "animation-move-right" : "opacity-0"
            }`}
            src="/bg-xay-ca-phe.webp"
            loading="lazy"
          />
        </div>
        <div
          className={`transition-opacity duration-700 flex flex-col gap-4 montserrat-font relative left-[280px] ${
            visible ? "animation-move-right" : "opacity-0"
          }`}
        >
          <Content
            title="Nông Dân"
            description="Chúng tôi đang hợp tác với các nông dân trong việc áp dụng các phương pháp nông nghiệp tái sinh."
          />
        </div>
      </div>
    </div>
  );
};
