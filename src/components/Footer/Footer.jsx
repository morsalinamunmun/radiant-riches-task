
const Footer = () => {
    return (
        <div className="bg-[#212731]">
            <footer className="footer p-10  max-w-5xl mx-auto">
                <nav>
                    <h6 className="text-base text-[#FFFFFF]">Categories</h6>
                    <a className="link link-hover text-[#B6BDC4] text-sm">Web Builder</a>
                    <a className="link link-hover text-[#B6BDC4] text-sm">Hosting</a>
                    <a className="link link-hover text-[#B6BDC4] text-sm">Data Center</a>
                    <a className="link link-hover text-[#B6BDC4] text-sm">Robotic-Automation</a>
                </nav>
                <nav>
                    <h6 className=" text-base text-[#FFFFFF]">Contact</h6>
                    <a className="link link-hover text-[#B6BDC4] text-sm">Contact</a>
                    <a className="link link-hover text-[#B6BDC4] text-sm">Privacy Policy</a>
                    <a className="link link-hover text-[#B6BDC4] text-sm">Terms Of Service</a>
                    <a className="link link-hover text-[#B6BDC4] text-sm">Categories</a>
                    <a className="link link-hover text-[#B6BDC4] text-sm">About</a>
                </nav>
                <nav className="my-20">
                    <select id="pricingType" name="pricingType"
                        className="text-sm w-full h-10  focus:outline-none  text-[#B6BDC4] bg-transparent  px-2 md:px-3 py-0 md:py-1 ">
                        <option value="Top" selected="">United States</option>
                        {/* */}
                    </select>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;