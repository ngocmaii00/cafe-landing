function Characteristics() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        <img src="/hat-ca-phe-up.webp" alt="" />
        <span className="colatin-font text-5xl">Làm với đam mê</span>
        <img src="/hat-ca-phe.webp" alt="" />
      </div>
      <div className="absolute top-[280px] left-[500px]">
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
      </div>
    </div>
  );
}

export default Characteristics;
