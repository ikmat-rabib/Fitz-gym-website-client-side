import Swal from "sweetalert2";
import Container from "../../../Components/Container/Container";


const Newsletter = () => {

    const handleSubscribe = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;

        const newNewsletter = { name, email };

        console.log(newNewsletter);

        fetch('http://localhost:5000/newsletter', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNewsletter)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Subscribed to our Newsletter',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className="bg-[#0167BB]">
            <Container>
                <div className="text-center space-y-2 mb-10">
                    <h3 className="text-4xl font-bold text-white">Join our <span className="text-[#13234e]">Newsletter</span></h3>
                    <p className="font-medium text-slate-200">Get updated regularly by our Newsletter</p>
                </div>

                <div className="flex justify-center">
                    <form onSubmit={handleSubscribe} className="md:space-x-10 flex flex-wrap justify-center">
                        <input className="py-2 md:w-60 rounded-lg bg-[#13234e] pl-2" placeholder="Name" type="text" name="name" id="" />
                        <input className="py-2 md:w-60 rounded-lg bg-[#13234e] pl-2" placeholder="Email" type="email" name="email" id="" />
                        <input className="btn bg-[#0167BB] hover:bg-[#219bff] text-white rounded-md uppercase hover:scale-110 hover:-skew-x-12 hover:border-0" type="submit" value="Subscribe now" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Newsletter;