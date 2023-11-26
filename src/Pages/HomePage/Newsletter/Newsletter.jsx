import Container from "../../../Components/Container/Container";


const Newsletter = () => {
    return (
        <div className="bg-[#0167BB]">
            <Container>
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">Join our <span className="text-[#13234e]">Newsletter</span></h3>
                    <p className="font-medium text-slate-200">Get updated regularly by our Newsletter</p>
                </div>

                <div className="flex justify-center">
                    <form action="" className="space-x-10 ">
                        <input className="py-2 w-60 rounded-lg bg-[#13234e]" type="text" name="name" id="" />
                        <input className="py-2 w-60 rounded-lg bg-[#13234e]" type="email" name="email" id="" />
                        <input className="btn bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 hover:border-0" type="submit" value="Subscribe now" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Newsletter;