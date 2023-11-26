import { useEffect, useState } from "react";


const useTrainers = () => {
    const [trainers, setTrainers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('trainers.json')
            .then(res => res.json())
            .then(data => {
                setTrainers(data)
                setLoading(false)
            })
    }, [])
    return [trainers, loading]
};

export default useTrainers;