import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const BeTrainerPage = () => {

    const auth = useContext(AuthContext);

    const handleAddJobs = e => {
        e.preventDefault();

        const form = e.target;

        const trainerName = form.trainerName.value;
        const trainer_email = form.trainer_email.value;
        const age = form.age.value;
        const yearsExp = form.yearsExp.value;
        const trainerPic = form.trainerPic.value;
        const socialLink = form.socialLink.value;
        const description = form.description.value;

        const skills = [];
        const skillCheckboxes = form.querySelectorAll('input[name^="skill"]');
        skillCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                skills.push(checkbox.value);
            }
        });

        const availableTimeInWeek = [];
        const weekCheckboxes = form.querySelectorAll('input[name^="availableTimeInWeek"]');
        weekCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                availableTimeInWeek.push(checkbox.value);
            }
        });

        const availableTimeInDay = [];
        const dayCheckboxes = form.querySelectorAll('input[name^="slot"]');
        dayCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                availableTimeInDay.push(checkbox.value);
            }
        });


        const newTrainer = { trainerName, trainer_email, age, trainerPic, yearsExp, socialLink, skills, availableTimeInWeek, availableTimeInDay, description };

        // console.log(newTrainer);

        fetch('http://localhost:5000/be-trainer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTrainer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <>
            <Helmet>
                <title>FitZ | Become Trainer</title>
            </Helmet>

            <div className="max-w-6xl mx-auto py-1 ">
                <form onSubmit={handleAddJobs} className="card-body my-16 bg-blue-4">
                    <h2 className="text-3xl font-bold text-center text-white">Become a <span className="text-[#219bff]">Trainer</span></h2>

                    {/* trainerName */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-white underline">Full Name:</span>
                        </label>
                        <input type="text" name="trainerName" placeholder="name" className="input input-bordered text-white" required />
                    </div>

                    {/* trainer_email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-white underline">Your Email:</span>
                        </label>
                        <input type="email" name="trainer_email" defaultValue={auth.user?.email} readOnly className="input input-bordered" required />
                    </div>

                    <div className="flex md:gap-5">

                        {/* age */}
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-white underline">Your Age:</span>
                            </label>
                            <input type="text" name="age" placeholder="Age" className="input input-bordered text-white" required />
                        </div>

                        {/* trainerPic */}
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-white underline">Profile Image URL:</span>
                            </label>
                            <input type="text" name="trainerPic" placeholder="Image" className="input input-bordered text-white" required />
                        </div>
                    </div>

                    <div className="flex md:gap-5">

                        {/* yearsExp */}
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-white underline">Your Experience in Year:</span>
                            </label>
                            <input type="text" name="yearsExp" placeholder="Experience" className="input input-bordered text-white" required />
                        </div>

                        {/* socialLink */}
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-white underline">Your Social Profile URL:</span>
                            </label>
                            <input type="text" name="socialLink" placeholder="Social Link" className="input input-bordered text-white" required />
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="form-control  text-white my-4">
                        <legend className="label-text text-xl font-semibold text-white underline">Your Skills:</legend>

                        <div className="flex gap-10 my-2">
                            <div>
                                <input type="checkbox" id="skill1" name="skill" value="Adaptability" />
                                <label htmlFor="skill1"> Adaptability</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="skill2" name="skill" value="Motivational Coaching" />
                                <label htmlFor="skill2"> Motivational Coaching</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="skill3" name="skill" value="Client Relationship Building" />
                                <label htmlFor="skill3"> Client Relationship Building</label><br />
                            </div>
                        </div>

                    </div>

                    {/* available time in week */}
                    <div className="form-control  text-white my-4">
                        <legend className="label-text text-xl font-semibold text-white underline">Your Available Time In Week:</legend>

                        <div className="flex gap-10 my-2">
                            <div>
                                <input type="checkbox" id="dSaturday" name="availableTimeInWeek" value="Saturday" />
                                <label htmlFor="saturday"> Saturday</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="dSunday" name="availableTimeInWeek" value="Sunday" />
                                <label htmlFor="sunday"> Sunday</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="dMonday" name="availableTimeInWeek" value="Monday" />
                                <label htmlFor="monday"> Monday</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="dTuesday" name="availableTimeInWeek" value="Tuesday" />
                                <label htmlFor="tuesday"> Tuesday</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="dWednesday" name="availableTimeInWeek" value="Wednesday" />
                                <label htmlFor="wednesday"> Wednesday</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="dThursday" name="availableTimeInWeek" value="Thursday" />
                                <label htmlFor="thursday"> Thursday</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="dFriday" name="availableTimeInWeek" value="Friday" />
                                <label htmlFor="friday"> Friday</label><br />
                            </div>
                        </div>
                    </div>

                    {/* available time in day */}
                    <div className="form-control  text-white my-4">
                        <legend className="label-text text-xl font-semibold text-white underline">Your Available Time Slots In A Day:</legend>

                        <div className="flex flex-wrap gap-x-10 gap-y-2 items-center my-2">
                            <div>
                                <input type="checkbox" id="slot1" name="slot" value="10am-11am" />
                                <label htmlFor="slot1"> 10am-11am</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="slot2" name="slot" value="11am-12pm" />
                                <label htmlFor="slot2"> 11am-12pm</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="slot3" name="slot" value="12pm-01pm" />
                                <label htmlFor="slot3"> 12pm-01pm</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="slot4" name="slot" value="01pm-02pm" />
                                <label htmlFor="slot4"> 01pm-02pm</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="slot5" name="slot" value="02pm-03pm" />
                                <label htmlFor="slot5"> 02pm-03pm</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="slot6" name="slot" value="03m-04pm" />
                                <label htmlFor="slot6"> 03m-04pm</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="slot7" name="slot" value="04pm-05pm" />
                                <label htmlFor="slot7"> 04pm-05pm</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="slot8" name="slot" value="05pm-06pm" />
                                <label htmlFor="slot8"> 05pm-06pm</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="slot9" name="slot" value="06pm-07pm" />
                                <label htmlFor="slot9"> 06pm-07pm</label><br />
                            </div>
                            <div>
                                <input type="checkbox" id="slot10" name="slot" value="07pm-08pm" />
                                <label htmlFor="slot10"> 07pm-08pm</label><br />
                            </div>
                        </div>

                    </div>

                    {/* description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold text-white">Job Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered text-white" name="description" id="" cols="30" rows="5" required></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn bg-[#0167BB] hover:bg-[#219bff] w-full text-white rounded-md uppercase hover:scale-105 hover:-skew-x-3 border-0" type="submit" value="Register as Trainer" />
                    </div>
                </form>
            </div>
        </>
    );
};



export default BeTrainerPage;