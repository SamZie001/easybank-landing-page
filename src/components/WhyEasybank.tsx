import api from "../assets/icon-api.svg";
import onboarding from "../assets/icon-onboarding.svg";
import budgeting from "../assets/icon-api.svg";
import online from "../assets/icon-online.svg";

interface ICard {
  logo: string;
  title: string;
  desc: string;
}

const WhyEasybank = () => {
  const cards: ICard[] = [
    {
      logo: online,
      title: "Online Banking",
      desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      logo: budgeting,
      title: "Simple Budgeting",
      desc: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    },
    {
      logo: onboarding,
      title: "Fast Onboarding",
      desc: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      logo: api,
      title: "Open API",
      desc: "Manage your savings. investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <div className="bg-light-grayish-blue">
      <div className="container">
        <div className="text-grayish-blue flex-1 md:py-14 px-3 text-center md:text-left">
          <p className="header-text">Why choose Easybank?</p>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub.
          </p>
          <p>Control your finances like never before</p>
        </div>

        <div className="mt-14 md:mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {cards.map((card, ind) => (
            <div key={ind} className="mx-3 my-4 md:my-0 flex flex-col items-center md:items-start text-center md:text-left space-y-5">
              <div>
                <img src={card.logo} alt={card.title} />
              </div>
              <p className="text-primary text-xl font-semibold">{card.title}</p>
              <p className="px-8 md:px-0 text-grayish-blue text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyEasybank;
