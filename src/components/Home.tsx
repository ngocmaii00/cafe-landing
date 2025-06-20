import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className="montserrat-font">
      <div className="">
        <div className="bg-gradient-to-b from-transparent via-transparent to-[#302216c2] w-full h-[945px] top-0 absolute"></div>
        <img src="/desktop.jpg" alt="photo" className="mt-22 w-full" />
      </div>

      <div className="flex flex-col items-center gap-4 text-white -translate-y-24">
        <FontAwesomeIcon
          icon={faArrowDownLong}
          size="1x"
          className="animate-bounce"
        />
        <div className="font-medium text-sm">Kéo xuống để khám phá thêm</div>
      </div>
    </div>
  );
}

export default Home;
