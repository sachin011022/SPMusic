import instagram from "../assets/icon/svgexport-26.svg";
import twitter from "../assets/icon/svgexport-27.svg";
import facebook from "../assets/icon/svgexport-28.svg";

function Footer() {
  const footerItem = [
    {
      heading: "Company",
      text: ["About", "Jobs", "For the Record"],
    },
    {
      heading: "Communities",
      text: [
        "For Artists",
        "Developers",
        "Advertising",
        "Inventors",
        "Vendors",
      ],
    },
    {
      heading: "Useful Links",
      text: ["Support", "Free Mobile App"],
    },
    {
      heading: "Spotify Plans",
      text: [
        "Premium",
        "Premium Duo",
        "Premium Family",
        "Premium Student",
        "Spotify Free",
      ],
    },
  ];
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-3 px-6 py-2 gap-2'>
      {footerItem.map((item, index) => (
        <div key={index} className='flex flex-col'>
          <h1 className='font-bold text-slate-50 text-xl'>{item.heading}</h1>
          <p className='text-slate-600 mt-2 flex flex-col gap-2'>
            {item.text.map((txt) => (
              <span key={txt}>{txt}</span>
            ))}
          </p>
        </div>
      ))}

      <div className='flex gap-x-3'>
        <img src={instagram} alt='instagram' className='w-6 h-6' />
        <img src={twitter} alt='twitter' className='w-6 h-6' />
        <img src={facebook} alt='facebook' className='w-6 h-6' />
      </div>
    </div>
  );
}

export default Footer;
