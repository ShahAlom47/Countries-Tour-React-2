import { useEffect, useState } from "react";
import PrintCountryCard from "./printCountryCard";



const LoadCountriesData = () => {
    const [visitedCnt, setVisitedCnt] = useState([])
    const [cntData, setCntData] = useState({})

    const [allCnt, setallCnt] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setallCnt(data))
    }, [])



    const visitedHandel = (country) => {

        setCntData({ countryN: country.name.common, flag: country.flags.png })
        setVisitedCnt([...visitedCnt, cntData])
    }

    return (
        <div>
            <h3>im from load</h3>
            <div className="p-5 m-5 border-4">
                <h2 className="text-center text-xl font-semibold">Visited Countries List</h2>
                <h5>Total Visited: {visitedCnt.length}</h5>
                <div className=" flex flex-wrap  gap-3">
                    {

                        visitedCnt.map((i) =><div key={i.countryN} className="p-3 m-3 border-4 rounded-xl"> 
                        <h3  className="text-lg font-semibold">{i.countryN}</h3>
                        <div className="h-24 w-24 p-3 ">
                        <img className="" src={i.flag} alt="" />
                        </div>
                         </div>)
                          


                        
                    }
                </div>
            </div>
            <div className=" grid grid-cols-3 gap-3">
                {
                    allCnt.map((country) =>

                        <PrintCountryCard key={country.ccn3} visitedHandel={visitedHandel} country={country}></PrintCountryCard>
                    )
                }
            </div>

        </div>
    );
};

export default LoadCountriesData;