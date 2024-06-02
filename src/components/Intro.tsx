import intro_desktop from "../assets/bg-intro-desktop.svg";
import intro_mobile from "../assets/bg-intro-mobile.svg";
import mockups from "../assets/image-mockups.png";

const Intro = () => {
  return (
    <div className="container | flex flex-col-reverse md:flex-row md:gap-10 items-center">
      <div className="text-grayish-blue flex-1 md:py-14 px-3 space-y-6 text-center md:text-left">
        <p className="header-text">
          Next generation <br />
          digital banking
        </p>
        <p>
          Takr your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="btn | my-0 mx-auto md:m-0">Request Invite</button>
      </div>
      {/* Intro Image */}
      <div className="hidden md:block flex-1 bg-cover z-10 -translate-y-24 relative">
        <img src={intro_desktop} alt="" className="scale-150" />
        <img
          src={mockups}
          alt=""
          className="absolute -top-6 w-full translate-x-9"
        />
      </div>
      <div className="block md:hidden flex-1 bg-cover z-10 -translate-y-20 relative">
        <img src={intro_mobile} alt="" className="scale-150" />
        <img src={mockups} alt="" className="absolute -top-6 my-0 mx-auto" />
      </div>
    </div>
  );
};

export default Intro;
