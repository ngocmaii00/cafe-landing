// Stories.tsx

type ElementProps = {
  elements: {
    image: string;
    name: string;
  };
  index: number;
};

const Element = ({ elements, index }: ElementProps) => {
  const imageClass = `
    ${index === 0 ? "w-20" : "w-24"} 
    ${index === 5 ? "translate-y-4" : ""} 
  `;

  return (
    <div className="flex flex-col items-center gap-4 min-h-[180px]">
      <div className="img-container animation-pulse-opacity"></div>
      <img
        src={elements.image}
        alt={elements.name}
        className={`${imageClass.trim()} mt-6`}
      />
      <p className="text-center">{elements.name}</p>
    </div>
  );
};

const elements = [
  {
    image: "/1.png",
    name: "",
  },
  {
    image: "/2.png",
    name: "",
  },
  {
    image: "/3.png",
    name: "",
  },
  {
    image: "/4.png",
    name: "",
  },
  {
    image: "/5.png",
    name: "",
  },
  {
    image: "/6.png",
    name: "",
  },
];

function Stories() {
  return (
    <div className="bg-gradient-to-t from-transparent via-[#81b085] to-[#81b085] -translate-y-13">
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

      <section className="flex flex-col items-center gap-8 montserrat-font">
        <span className="title text-center py-8">
          Gặp Gỡ Những Nghệ Nhân Cà Phê
        </span>
        <div className="flex items-center gap-12 lg:gap-20 mb-8 flex-row">
          {elements.map((item, index) => (
            <Element key={index} elements={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Stories;
