import { useEffect, useRef, useState } from "react";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Characteristics() {
  const featureRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) observer.unobserve(featureRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative">
      <div
        className={`pointer-events-none fixed bottom-0 right-10 w-full h-[480px] bg-[url('/notation.webp')] bg-cover bg-no-repeat z-[-5] transition-opacity duration-600 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="flex flex-col items-center">
        <img
          src="/hat-ca-phe-up.webp"
          className={`transition-opacity duration-700 ${
            visible ? "animation-move-left" : "opacity-0"
          }`}
          alt=""
        />
        <span className="colatin-font text-5xl">Làm với đam mê</span>
        <img
          src="/hat-ca-phe.webp"
          className={`transition-opacity duration-700 ${
            visible ? "animation-move-right" : "opacity-0"
          }`}
          alt=""
        />
      </div>

      <div ref={featureRef}>
        <Feature visible={visible} />
      </div>
    </div>
  );
}

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
          <span className="colatin-font text-3xl">Bạn có biết ?</span>
          <div className="text-sm">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Characteristics;

const Feature = ({ visible }: { visible: boolean }) => {
  return (
    <div className="flex flex-col translate-x-[-4em]">
      <Feature1 visible={visible} />
      <Feature2 visible={visible} />
    </div>
  );
};

const Feature1 = ({ visible }: { visible: boolean }) => {
  return (
    <>
      <div className="absolute">
        <div className="">
          <img
            src="/hat-don.webp"
            alt="cf-bean"
            loading="lazy"
            className="bean-motion-1"
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
        </div>

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
              className={`transition-opacity duration-700 absolute z-1 scale-115 top-10 left-41 rotate-4 ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/zGbszVP.svg"
              alt="line"
              loading="lazy"
            />
            <img
              className={`transition-opacity duration-700 absolute right-[-3em] top-64 z-0 scale-70 rotate-4 ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="/nong-dan.webp"
              alt="nông dân"
              loading="lazy"
            />
            <img
              className="absolute left-[-1em] top-6 z-[-1] rotate-10 scale-125 h-80"
              src="/nong-dan-1.webp"
              alt="nông dân"
              loading="lazy"
            />
            <img
              className="absolute left-[-2.5em] top-9 z-[-2] rotate-7 scale-125 h-80"
              src="/nong-dan-2.webp"
              alt="nông dân"
              loading="lazy"
            />
            <img
              className="absolute left-[-4em] top-12 z-[-3] rotate-4 scale-125 h-80"
              src="/nong-dan-3.webp"
              alt="nông dân"
              loading="lazy"
            />
          </picture>
          <img
            className={`transition-opacity duration-700 absolute z-[-4] scale-200 top-36 left-[-5em] ${
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
    </>
  );
};

const Feature2 = ({ visible }: { visible: boolean }) => {
  return (
    <>
      <div className="absolute top-[500px]">
        <div className="translate-x-4 -translate-y-3">
          <img
            src="/hat-don.webp"
            alt="cf-bean"
            loading="lazy"
            className="bean-motion-2"
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
              stroke="#72BD96"
              stroke-width="3"
            ></path>
          </svg>
        </div>

        <div className="relative">
          <div className="relative top-36 left-[28em] z-2 rounded-full bg-[#ffffff76] size-14 -rotate-4 cursor-pointer">
            <FontAwesomeIcon
              icon={faPlay}
              size="xl"
              className="absolute top-4 left-5"
            />
          </div>
          <picture>
            <img
              className={`transition-opacity duration-700 absolute z-1 scale-110 top-48 right-0 -rotate-6 ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="https://www.nescafe.com/vn/themes/custom/nescafe/UI/build/images/3Lf_B7T.svg"
              alt="line"
              loading="lazy"
            />
            <img
              className={`transition-opacity duration-700 absolute left-[30em] z-0 scale-50 bottom-[-2em] ${
                visible ? "animation-move-right" : "opacity-0"
              }`}
              src="/nha-nong-hoc.webp"
              alt="nông dân"
              loading="lazy"
            />
            <img
              className="absolute left-[23.5em] top-[-1em] -rotate-4 scale-125 h-80 z-[-2]"
              src="/nha-nong-hoc-1.webp"
              alt="nông dân"
              loading="lazy"
            />
          </picture>
          <img
            className={`transition-opacity duration-700 absolute z-[-4] top-[-2em] left-[20em] scale-90 ${
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
    </>
  );
};
