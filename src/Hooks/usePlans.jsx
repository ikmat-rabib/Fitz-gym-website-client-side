import { useEffect, useState } from "react";


const usePlans = () => {
    const [plans, setPlans] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('plans.json')
            .then(res => res.json())
            .then(data => {
                setPlans(data)
                setLoading(false)
            })
    }, [])
    return [plans, loading]
};

export default usePlans;