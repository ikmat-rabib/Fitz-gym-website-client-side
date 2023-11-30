
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useBlogs = () => {


    const axiosSecure = useAxiosSecure()

    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosSecure.get('/blogs')
            return res.data
        }
    })
    return [blogs]

};

export default useBlogs;