import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const usePlans = () => {
    const axiosSecure = useAxiosSecure()

    const { data: plans = [] } = useQuery({
        queryKey: ['plans'],
        queryFn: async () => {
            const res = await axiosSecure.get('/plans')
            return res.data
        }
    })
    return [plans]
};

export default usePlans;