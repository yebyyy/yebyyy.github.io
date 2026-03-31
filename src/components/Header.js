import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

function Header() {
    return (
        <div className="text-center p-10 bg-gray-100">
            <img src="https://github.com/yebyyy/Profile-Portfolio/blob/main/public/images/Profilepic.jpeg?raw=true" alt="Profile" className="rounded-full mx-auto max-w-xs max-h-xs w-36 h-36 object-cover" />
            <h1 className="text-4xl font-bold mt-2">Xiaomeng Ye</h1>
            <p className="text-gray-500 text-lg">xye87@gatech.edu</p>
            <div className="flex justify-center space-x-4 mt-4">
                {/* <a href="mailto:xye87@gatech.edu" className="text-blue-700 hover:underline font-medium">
                    Email
                </a> */}
                <a href="https://www.linkedin.com/in/xiaomeng-ye-61aa55290/">
                    <FaLinkedin className="text-blue-600" size="24" />
                </a>
                <a href="https://scholar.google.com/citations?user=6-v3_1IAAAAJ&hl=en">
                    <SiGooglescholar className="text-blue-700" size="24" />
                </a>
                <a href="https://github.com/yebyyy">
                    <FaGithub className="text-black" size="24" />
                </a>
            </div>
        </div>
    );
}


export default Header;
