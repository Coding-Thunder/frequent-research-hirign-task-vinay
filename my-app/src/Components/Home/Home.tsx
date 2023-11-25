import React, { useState } from 'react'
import "./Home.css"
import {
    CitySelect,
    CountrySelect,
    StateSelect,
}
    //@ts-ignore
    from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

//@ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyAxios from '../../axios';





const Home: React.FC = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState({ name: "", id: "" });
    const [state, setState] = useState({ name: "", id: "" });
    const [city, setCity] = useState("");
    const [gender, setGender] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [age,setAge] = useState("")

    const handleSubmit =async  () => {
        try {
            let dateOfBirth = new Date(startDate).toDateString()
           let created = await  MyAxios.post("/user",{
                firstName, lastName, email, country:country.name, state:state.name, city, gender,dateOfBirth,age
            })
            if(created) {
                window.location.href = "/user?page=1"

            }
        } catch (error:any) {
            console.log(error.message)
        }
    }
    return (
        <div className='home'>

            <div className='home__form'>
                <form onFocus={(event) => {
                    event.target.setAttribute('autocomplete', 'off');
                }}
                    onSubmit={e => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" className="form-control" id="firstname" placeholder="Enter first name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" className="form-control" id="lastname" placeholder="Enter last name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <CountrySelect
                        onChange={(e: any) => {
                            setCountry({ name: e?.name, id: e?.id });
                        }}
                        placeHolder="Select Country"
                    />
                    <StateSelect
                        countryid={country.id}
                        onChange={(e: any) => {
                            setState({ name: e?.name, id: e?.id });
                        }}
                        placeHolder="Select State"
                    />
                    <CitySelect
                        countryid={country.id}
                        stateid={state.id}
                        onChange={(e: any) => {
                            setCity(e?.name)
                        }}
                        placeHolder="Select City"
                    />
                    <div>

                        <div>
                            Select Gender
                            <div className="form-check">
                                <input value="Male" onChange={e => setGender(e.target.value)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input value="Female" onChange={e => setGender(e.target.value)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        Date of Birth <br/>
                        <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />

                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input value={age} onChange={e => setAge(e.target.value)} type="text" className="form-control" id="age" placeholder="Enter age" />
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div >
    )
}

export default Home
