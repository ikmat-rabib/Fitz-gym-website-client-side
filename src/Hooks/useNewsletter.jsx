import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";




const useNewsletter = () => {

    const axiosSecure = useAxiosSecure()

    const { data: newsletter = [] } = useQuery({
        queryKey: ['newsletter'],
        queryFn: async () => {
            const res = await axiosSecure.get('/newsletter')
            return res.data
        }
    })
    return [newsletter]
}

export default useNewsletter;