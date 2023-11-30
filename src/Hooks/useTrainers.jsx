import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useTrainers = () => {
    const axiosSecure = useAxiosSecure()

    const { data: trainers = [] } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/trainers')
            return res.data
        }
    })
    return [trainers]
};

export default useTrainers;