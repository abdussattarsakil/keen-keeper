
const Footer = () => {
    return (
        <div className="bg-green-900 p-12">
            <div className="text-center space-y-4">
                <h1 className="text-6xl text-white font-bold">KeenKeeper</h1>
                <p className="text-gray-300">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <h4 className="text-xl text-gray-200">Social Links</h4>
                <div className="flex justify-center gap-3">
                    <img src="/assets/instagram.png" alt="instagram" />
                    <img src="/assets/facebook.png" alt="facebook" />
                    <img src="/assets/twitter.png" alt="twitter" />
                </div>                
            </div>
            <div className="container mx-auto h-[px] border-t bg-gray-500 m-5"></div>
            <div className="flex justify-around">
                <p className="text-gray-400">© 2026 KeenKeeper. All rights reserved.</p>
                <div className="flex gap-5 text-gray-400">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;