import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="shadow-footer mt-[50px]">
      <section className="container-headnav pt-[50px] px-[50px] c3xl:px-[30px] clg:px-[0px] pb-[20px] flex flex-col gap-y-[50px]">
        <div className="flex cmd:flex-col justify-between items-center gap-y-[50px]">
          <div className="px-[50px] py-[30px] c2xl:px-[20px] c2xl:py-[20px] cd:w-[80vw] shadow rounded-[30px] flex flex-col gap-y-[30px] c2xl:gap-y-[20px] h-auto">
            <div className="flex items-center gap-x-[10px]">
              <img src="/img/gerb.svg" alt="" className="w-[50px]" />
              <span className="text-[18px] font-semibold">Baxrin MFY</span>
            </div>
            <div className="flex flex-col gap-y-[20px]">
              <div className="flex items-center gap-x-[25px]">
                <MdLocationOn className="text-stone-800 text-[28px] c2xl:text-[23px]" />
                <p className="text-stone-800 uppercase w-[485px] c3xl:w-[400px] cmd:w-[70vw] csm:w-[55vw] cxl:w-[300px] text-[17px] c3xl:text-[16px] c2xl:text-[14px] ">
                  120100, Guliston shahar, Islom Karimov ko'chasi 60 uy.
                </p>
              </div>
              <div className="flex items-center gap-x-[25px]">
                <FaPhoneAlt className="text-stone-800 text-[25px] c2xl:text-[20px]" />
                <p className="text-stone-800 uppercase w-[485px] c3xl:w-[400px] cmd:w-[70vw] csm:w-[55vw] cxl:w-[300px] text-[17px] c3xl:text-[16px] c2xl:text-[14px] ">
                  120100, Guliston shahar, Islom Karimov ko'chasi 60 uy.
                </p>
              </div>
              <div className="flex items-center gap-x-[25px]">
                <MdAccessTimeFilled className="text-stone-800 text-[25px] c2xl:text-[20px]" />
                <p className="text-stone-800 uppercase w-[485px] c3xl:w-[400px] cmd:w-[70vw] csm:w-[55vw] cxl:w-[300px] text-[17px] c3xl:text-[16px] c2xl:text-[14px] ">
                  120100, Guliston shahar, Islom Karimov ko'chasi 60 uy.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[20px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d309.87371646748505!2d72.55642446239435!3d40.66636993743115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1721131087579!5m2!1sen!2s"
              loading="lazy"
              className="rounded-[20px] w-[500px] h-[300px] c3xl:w-[400px] c3xl:h-[250px] clg:w-[330px] cmd:w-[80vw]"
            ></iframe>
          </div>
        </div>
        <div className="text-center">
          <p className="text-stone-800">Birnarsa nimadu bilmadim nimadur!</p>
        </div>
      </section>
    </footer>
  );
}
