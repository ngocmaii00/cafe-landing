
function Stories() {
  return (
    <div className="bg-gradient-to-t from-transparent via-[#cfb9a5] to-[#cfb9a5] -translate-y-12">
      <section className="flex flex-col items-center gap-4 mx-[380px] montserrat-font mb-6">
        <span className="title py-2 pt-16">
          Khám phá câu chuyện của những nghệ nhân tạo nên từng tách cà phê mà
          bạn đang thưởng thức
        </span>
        <p className="text-lg py-2">
          Giới thiệu các Nghệ Nhân của chúng tôi: Khám phá sự tận tâm và kỹ nghệ
          của các nghệ nhân cà phê NESCAFÉ®.
        </p>
      </section>
      <section className="flex flex-col items-center gap-8 montserrat-font mb-16">
        <span className="title text-center py-8">
          Gặp Gỡ Những Nghệ Nhân Cà Phê
        </span>
        <div className="relative">
          <img src="/line.webp" className="absolute top-6 scale-125 xl:block hidden" />
          <div className="flex items-center gap-12 lg:gap-20 mb-8 flex-col lg:flex-row">
            {elements1.map((item) => (
              <Element elements={item} />
            ))}
          </div>
        </div>
        <div className="relative">
          <img src="/line.webp" className="absolute scale-400 translate-y-10 xl:block hidden" />
          <div className="flex items-center gap-12 lg:gap-24 flex-col lg:flex-row">
            {elements2.map((item) => (
              <Element elements={item} />
            ))}
          </div>
        </div>
        <div className=""></div>
      </section>
    </div>
  );
}

export default Stories;

type ElementProps = {
  elements: {
    image: string;
    name: string;
  };
};

const Element = ({ elements }: ElementProps) => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <div className="img-container animation-pulse-opacity"></div>
      <img
        src={elements.image}
        alt={elements.name}
        className="w-20 translate-y-4"
      />
      <p className="mt-10">{elements.name}</p>
    </div>
  );
};

const elements1 = [
  {
    image: "/nong-dan.webp",
    name: "Nông Dân",
  },
  {
    image: "/nha-nong-hoc.webp",
    name: "Nhà Nông Học",
  },
  {
    image: "/nha-san-xuat.webp",
    name: "Nhà Sản Xuất",
  },
  {
    image: "/rang-ca-phe.webp",
    name: "Rang Cà Phê",
  },
  {
    image: "/xay-ca-phe.webp",
    name: "Xay Cà Phê",
  },
];

const elements2 = [
  {
    image: "/chiet-xuat.webp",
    name: "Chiết Xuất",
  },
  {
    image: "/nem-thu.webp",
    name: "Nếm Thử",
  },
];
