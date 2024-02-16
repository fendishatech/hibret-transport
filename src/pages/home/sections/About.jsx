import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col">
      <h1 className="my-8 text-4xl text-center text-slate-700 font-bold mb-4">
        ስለ ሕብረት ትራንስፖርት አክሲዮን ማህበር
      </h1>
      <div className="flex">
        <div className="flex-1">
          <p className="text-xl text-slate-700">
            ህብርት ትራንስፖርት አክሲዮን ማህበር የተመሰረተው በጭነት ትራንስፖርት እና በህዝብ ትራንስፖርት ኢንዱስትሪ
            ከፍተኛ ልምድ ባለው እና በዘርፉ 30 ዓመት በላይ ሙያዊ ልምድ ባካበቱ ባለሙያዎች እና ባለሃብቶች ነው።
            ህብርት ትራንስፖርት አክሲዮን ማህበር በንግድ ህግ መስረት በአክሲዮን ማህበርነት የተቋቋመ ስለሆነ ውስን
            ተጠያቂነት ያላቸው ድርጅቶች ውስጥ ይመደባል::
          </p>
        </div>
        <div className="flex-1">Right</div>
      </div>
      <Link
        to="/about"
        className="mt-10 w-[120px] px-4 py-2 rounded-md border-2  text-white  bg-companyPink-400"
      >
        የበለጠ ለማወቅ
      </Link>
    </div>
  );
};

export default About;
