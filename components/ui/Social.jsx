
import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaTwitter, FaInstagram} from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub/>, path:"https://github.com/SumairaZubair"
    },
    {
        icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/sumaira-zubair-461376278/"
    },
    {
        icon: <FaInstagram/>, path: "https://www.instagram.com/sumaira_zubair123/"
    },
    // {
    //     icon: <FaTwitter/>, path : ""
    // }
];
const Social = ({containerStyle, iconStyles}) => {
  return (
    <div className={containerStyle}>
        {socials.map((item, index)=>{
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social