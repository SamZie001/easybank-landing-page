import confetti from "../assets/image-confetti.jpg";
import currency from "../assets/image-currency.jpg";
import plane from "../assets/image-plane.jpg";
import restaurant from "../assets/image-restaurant.jpg";

interface ICard {
  logo: string;
  by: string;
  title: string;
  desc: string;
}

const LatestArticles = () => {
  const cards: ICard[] = [
    {
      by: "Claire Robinson",
      logo: currency,
      title: "Online Banking",
      desc: "The world is getting smaller and we're becoming more mobile. So why should you be torced to only receive money tn a single ...",
    },
    {
      by: "Wilson Hutton",
      logo: restaurant,
      title: "Simple Budgeting",
      desc: "Our simple budgeting feature allows you to separate out you spending and set realistic limit each month. That means you ...",
    },
    {
      by: "Wilson Hutton",
      logo: plane,
      title: "Fast Onboarding",
      desc: "We want you to enjoy your travels. This IS why we don't charge any tees on purchases while you're abroad. Welt even show you ...",
    },
    {
      by: "Claire Robinson",
      logo: confetti,
      title: "Open API",
      desc: "After a lot of hard work by the whole team. we're excited to launch our closed beta. It's easy to request an Invite through the site ...",
    },
  ];
  return (
    <div className="bg-secondary py-12">
      <div className="container">
        <p className="header-text">Latest Articles</p>
        <div className="mt-14 md:mt-3 grid grid-cols-1 px-8 md:px-0 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
          {cards.map((card, ind) => (
            <div
              key={ind}
              className="mx-1 my-4 md:my-0 space-y-3 bg-white rounded-md overflow-hidden"
            >
              <img src={card.logo} alt={card.title} className="h-40 w-full" />
              <div className="space-y-3 px-5 py-6">
                <p className="text-xs text-grayish-blue">By {card.by}</p>
                <a href="#" className="text-primary text-xl font-semibold">
                  {card.title}
                </a>
                <p className="text-grayish-blue text-sm">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
