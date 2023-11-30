import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";




const useNewsletter = () => {
    
    const auth = useContext(AuthContext);

    const axiosSecure = useAxiosSecure()

    const { refetch, data: newsletter = [] } = useQuery({
        queryKey: ['newsletter', auth?.user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/newsletter')
            return res.data
        }
    })
    return [newsletter, refetch]
}

export default useNewsletter;