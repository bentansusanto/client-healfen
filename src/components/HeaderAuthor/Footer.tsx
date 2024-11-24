import { footerData } from "@/libs/NavFootData";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-[#000C1A] px-5 py-3 md:mt-0 md:px-8 lg:px-20 xl:px-40">
      <div className="flex flex-col-reverse items-center space-x-0 md:flex-row md:space-y-0 lg:justify-between lg:space-x-20">
        <footer className="text-gray-400 mt-5">
            ©{date}, Healfen Solution Indonesia
        </footer>
        <ul className="flex flex-wrap space-x-0 items-center gap-5 md:space-y-0">
            {footerData.support.map((list: any, idx: any) => (
            <li key={idx} className="text-gray-400">
                <Link href={list.link}>{list.page}</Link>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;

{
  /* social media */
}
{
  /* <div className='flex items-center justify-center space-x-3'>
                {
                    ctaData.socialMedia?.map((social:any, idx:any) => (
                        <div key={idx} className='bg-white p-3 border border-gray-200 
                        rounded-full text-blue hover:text-white
                         hover:bg-blue hover:border-blue transition-all duration-500'>
                                                            {
                                    social.icon === 'Instagram' ? 
                                    (<Link href={social.link}>
                                        <FaInstagram className='text-xl'/>
                                    </Link>) :
                                    (<Link href={social.link}>
                                        <FaTiktok className='text-xl'/>
                                    </Link>)
                                }
                        </div>
                    ))
                }
            </div> */
}
