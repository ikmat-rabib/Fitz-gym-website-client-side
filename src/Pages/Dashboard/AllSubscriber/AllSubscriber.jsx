import useNewsletter from "../../../Hooks/useNewsletter";


const AllSubscriber = () => {

    const [newsletter] = useNewsletter()

    return (
        <div>
            <h2>All subs {newsletter.length}</h2>
        </div>
    );
};

export default AllSubscriber;