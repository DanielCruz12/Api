import React, {useEffect, useState} from 'react'

const ApiFetch = () => {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errs, setErrs] = useState("");

    const getUsersFetch = () => {
        setTimeout(() => {
            try{
                fetch('https://reqres.in/api/users?page=2')
                .then((res) => res.json()).then(resultado_final => {
                    setUser(resultado_final.data)
                    setLoading(false);
                    console.log(resultado_final.data)
                });
            } catch(error){
                console.log(error.message)
                setErrs(error.message)
            }
        }, 1500)
    }

    useEffect(() => {
        getUsersFetch();
    }, [])

if(errs !== true){
    return (
        <>
            <div className='errores'>
                {errs}
            </div>
        </>
    )
}
    else if(loading === true) {
        return (
            <>
                <div>
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            </>
        )

    } else if(loading===false && errs===""){
        return (
            <>
                <div>
                    <ol className='usuarios' >
                        <h2>Listado de usuarios por fetch</h2>
                        {
                            users.map((user => {
                            return <>
                            <div  key={user.id}>
                                <li> {
                                    user.first_name
                                }</li>
                                <img src={
                                        user.avatar
                                    }
                                    alt='img' ></img>
                                    </div>
                            </>
                    }))
                    } </ol>
                </div>
            </>
        )
    }


}

export default ApiFetch
