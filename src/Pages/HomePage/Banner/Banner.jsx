



const Banner = () => {
    return (
        <>
            <div className=" min-h-screen bg-cover relative flex items-center" style={{ backgroundImage: 'url(https://i.ibb.co/vLxSzmv/banner-home.jpg)' }}>

                <div className="max-w-6xl mx-auto  ">
                    <div className="w-1/2 space-y-5 ">
                        <h2 className="mb-5 text-5xl font-bold text-white">Sculpt Your <span className="text-[#219bff]">Strength</span>, Elevate Your <span className="text-[#219bff]">Fitness</span> Journey with Us!</h2>
                        <p className="text-slate-300 font-medium">Transform your body and mind through expert guidance, state-of-the-art equipment, and a supportive community. Join us!</p>
                        <button className="btn bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 hover:border-0">Our Classes</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Banner;