import {useState, useEffect} from 'react';


// 4 - custom hook
export const useFetch = (url) => {
    // working with datas comes from api, as we don't know which datas comes, put null
    const [data, setData] = useState(null);

    // 5 - restructuring post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6 - loading
    const [loading, setLoading] = useState(false);

    // 7 treating errors
    const [error, setError] = useState(null);

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            setMethod(method);
        }else if(method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }
    }

    // GET
    useEffect(() => {

        const fetchData = async() => {

            // 6 - loading
            setLoading(true)

            try {
                const res = await fetch(url)

                const json = await res.json()
                setData(json);

            }catch(e) {
                setError("There is a some error in loading the datas")
                //e.message
            }
            
            setLoading(false);
        }
        fetchData();

    }, [url, callFetch]); // callFetch: after post bring the uptated datas

    // 5 - restructuring POST
    useEffect(() => {
       const httpRequest = async() => {
        if(method === "POST") {
            let fetchOptions = [url, config];
            
            const res = await fetch(...fetchOptions)

            const json = await res.json()   
            setCallFetch(json);

        }else if(method === "DELETE") {
            let fetchOptions = [url, config];
            const res = await fetch(...fetchOptions)
        }
       }

       httpRequest();
        
    }, [config, method, url])

    
    return {data, httpConfig, loading, error};
    
}