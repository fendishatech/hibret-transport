import { besufekad } from "../../../assets";
import { CiMail } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Staff = () => {
  const director = {
    name: "አቶ ባይሳ አየለ አባተ",
    image: besufekad,
    position: "የዳይሬክተሮች ቦርድ ሰብሳቢ",
    tel: "0911123456",
    email: "bay@gmail.com",
  };

  const staff = [
    {
      name: "አቶ በፍቃዱ አገኘሁ ወርቅነህ",
      image: besufekad,
      position: "ም/የዳይሬክተሮች ቦርድ ሰብሳቢ",
      tel: "0911514468",
      email: "baefage2@gmail.com",
    },
    {
      name: "አቶ አንዳርጋቸው በቀለ ዘመንፈስ",
      image: besufekad,
      position: "አባል",
      tel: "0911123456",
      email: "bay@gmail.com",
    },
    {
      name: "አቶ ሰለሞን አለሙ በቀለ",
      image: besufekad,
      position: "አባል",
      tel: "0911123456",
      email: "bay@gmail.com",
    },
    {
      name: "አቶ ወሰንኑ አህመድ አሊ",
      image: besufekad,
      position: "አባል",
      tel: "0911123456",
      email: "bay@gmail.com",
    },
    {
      name: "አቶ ሀፍቶም ጠዐመ ተስፋዬ",
      image: besufekad,
      position: "አባል",
      tel: "0911123456",
      email: "bay@gmail.com",
    },
    {
      name: "አቶ ኃ/ሚካኤል ወልዱ ኪዳኑ",
      image: besufekad,
      position: "አባል",
      tel: "0911123456",
      email: "bay@gmail.com",
    },
  ];

  return (
    <div>
      <h1 className="my-8 text-4xl text-center text-slate-700 font-bold mb-4">
        የዳይሬክተሮች ቦርድ አባላት
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <StaffSection staffMember={director} />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
        {staff.map((staffMember, index) => (
          <StaffSection key={index} staffMember={staffMember} />
        ))}
      </div>
    </div>
  );
};

const StaffSection = ({ staffMember }) => {
  return (
    <div className="bg-white overflow-hidden shadow-md hover:shadow-xl rounded-lg">
      <div className="px-4 py-5 sm:p-6 flex flex-col items-center">
        <img
          className="w-full rounded-full object-contain"
          src={staffMember.image}
          alt=""
        />

        <h1 className="mt-8 text-center text-xl text-slate-700 font-semibold">
          {staffMember.name}
        </h1>
        <h1 className="mt-2  text-md text-companyPink-400 font-semibold">
          {staffMember.position}
        </h1>

        <div className="flex gap-4 mt-4">
          <Link to={`tel:${staffMember.tel}`}>
            <FaPhone className="text-slate-500 text-xl" />
          </Link>
          <Link to={`mailto:${staffMember.email}`}>
            <CiMail className="text-slate-500 text-xl" />
          </Link>
          <FaTelegramPlane className="text-slate-500 text-xl" />
        </div>

        {/* {staffMember.tel} */}

        {/* {staffMember.email} */}
      </div>
    </div>
  );
};

export default Staff;
