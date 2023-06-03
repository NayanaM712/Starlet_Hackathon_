import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Text, List } from 'components';
import Footer from 'components/Footer';

const EventList = () => {


    const nav = useNavigate()
    const [value, setValue] = useState({})


    const handlechange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
        console.log(e.target.value)
        console.log("val", value)
        console.log({ ...value })
    }

    const onregestering = async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                },
            }
            const data = await axios.post("http://localhost:4009/eventgen", value, config)
            console.log(data)
            nav("/EventList")
            return data
        }
        catch (error) {
            console.log("couldn't login", error)
        }
    }

    const [col, setCol] = useState(false)
    const fun3 = () => {
        setCol(true)
    }




    const [Events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch the event data from the backend API
        axios.get("http://localhost:4009/getEvents")
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);
    return (

        <div >
            <div className="font-black text-center font-merriweather text-indigo_900 text-xl">
                <p>
                    Events and Communities
                </p>
            </div>

            <div className="flex flex-col md:gap-20 gap-[50px] items-center justify-center mb-[35px] mt-[65px] mx-auto w-[100%] bg-gray_600 h-50">

                <div className="flex md:flex-1 sm:flex-col flex-row gap-[40px] items-start justify-center md:mt-0 mt-[35px] w-[85%] md:w-full ">
                    <p className='font-medium font-publicsans text-white_A700' >Step into a world of unity, connection, and celebration at our extraordinary Community Event!
                        Join us as we bring together people from all walks of life, transcending boundaries and fostering a sense of belonging. This event is a vibrant tapestry of diverse cultures, ideas, and passions, where we come together as a community to create lasting memories and forge lifelong connections.</p>
                </div>
                <div>

                </div>
            </div>
            <div  style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {Events.map(event => (
                    // <List
                    //     className="sm:flex-col gap-20 flex flex-wrap justify-center grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-1356px mt-150px mx-auto md:px-5 rounded-5px w-full">
                        <div key={event._id} style={{ boxShadow: '1px 2px 9px #7B8FA1', borderRadius: '10px', margin: '20px', width: '300px', backgroundColor: 'white', padding: '20px' }}>

                            <img src={`${process.env.PUBLIC_URL}https://tse1.mm.bing.net/th?id=OIP.JZUa8VFEO_SmdjbBgh5mzgHaE7&pid=Api&P=0&h=180`} alt={event.title} className="event-image gap-[15px]" />
                            <div className="event-details">
                                <h1 className='font-black text-blue-900 gap-[15px]'>{event.title}</h1>
                                <p className="font-normal text-black-900 gap-[15px]">Date: {event.date}</p>
                                <p className="font-normal text-black-900 gap-[15px]">Location: {event.location}</p>
                                <p className="font-normal text-black-900 gap-[15px]">{event.description}</p>
                            </div>
                        </div>
                    // </List>
                ))}

            </div>
            <br></br>

            <div className="bg-white_A700 flex flex-col items-center justify-end mt-[20px] mx-auto p-[21px] sm:px-5 rounded-[5px] shadow-bs5 w-[64%] z-[1]">
                <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between mt-2 w-full">
                    {/* <Img
                  src="https://tse1.mm.bing.net/th?id=OIP.Yq43rP0ls_X_nCwFl7b7BAHaEW&pid=Api&P=0&h=180"
                  className="h-[215px] md:h-auto object-cover rounded-[5px]"
                  alt="RectangleThirtyNine"
                /> */}
                    <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-col gap-2.5 items-center justify-start mt-5 w-full">
                            <Text
                                className="font-bold font-merriweather italic text-gray_900 tracking-[0.12px] w-full"
                                as="h5"
                                variant="h5"
                            >
                                Ignite your passion, unleash your creativity, and bring your vision to life at our groundbreaking "Create New Event"!
                                Are you ready to unleash your creativity, make a lasting impact, and create an event that will leave a legacy? It's time to step into the spotlight and bring your vision to life!
                            </Text>
                            <Text
                                className="font-light font-publicsans leading-[25.00px] text-bluegray_600 w-full text-center"
                                variant="body1"
                            >
                                Organize an Event
                            </Text>
                            <button  onClick={fun3} style={{marginBottom:"10px" ,background:"yellow "}}>Click here</button>
                        </div>
                        <center>
                        <div className="flex flex-row gap-50 items-center justify-start mt-2.5 w-[42%] md:w-full">
                           
                        
                        {col && (
                    <center>
                        <div style={{ "border-radius": "3%", "background": "#647E68", "height": "500px", "width": "450px", "margin": "50px" }}>
                            <h1 style={{ "color": "white", "paddingTop": "30px" }}>ADD EVENT</h1>
                            <p style={{ "color": "#E3F2C1" }}>Please enter required details!</p>
                            <p>
                                <form>
                                    <input type='text' name='title' placeholder='Title' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                                    <input type='text' name='date' placeholder='Date' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                                    <input type='text' name='location' placeholder='Location' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                                    <input type='text' name='description' placeholder='Description' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>


                                </form>
                                <Button onClick={onregestering} style={{ "margin": "2px", "width": "83px", "height": "39px", "background": "none", "borderColor": "#E3F2C1", }}>Signup</Button>
                            </p>
                        </div>
                </center>
                )}
                
                        </div>
                        </center>
                    </div>
                </div>
            </div>

            <Text
                className="absolute  text-bluegray_900 text-center w-[100%] sm:w-50% flex flex-col gap-[20px] text-center mr-20px md:h-[120px] h-[153px] l items-center justify-center"
                as="h4"
                variant="h4"
            >
                Communities
            </Text>

            <List
                className="sm:flex-col flex-row gap-[27.39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1356px] mt-[150px] mx-auto md:px-5 rounded-[5px] w-full"
                orientation="horizontal"
            >
                <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[273px] items-start justify-end p-7 sm:px-5 rounded-[5px] w-full"
                    style={{ backgroundImage: "url('https://tse3.mm.bing.net/th?id=OIP.1yhprHJtYgbW88pJtZJD_wHaEK&pid=Api&P=0&h=180')" }}
                >
                    <div className="flex flex-col gap-[23px] items-start justify-start mb-[3px] mt-[126px]">
                        <Text
                            className="font-bold font-merriweather italic text-white_A700"
                            as="h4"
                            variant="h4"
                        >
                            Nazindia
                        </Text>
                        <a href="https://www.nazindia.org/lgbtqia/">
                            <Text
                                className="font-light font-publicsans text-white_A700"
                                as="h5"
                                variant="h5"
                            >
                                See Details
                            </Text>
                        </a>
                    </div>
                </div>
                <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[273px] items-start justify-end p-[25px] sm:px-5 rounded-[5px] w-full"
                    style={{ backgroundImage: "url('https://tse2.mm.bing.net/th?id=OIP.Eok1p6uWCetdScY1skW8ewHaE8&pid=Api&P=0&h=180')" }}
                >
                    <div className="flex flex-col gap-[23px] items-start justify-start mb-1.5 mt-32">
                        <Text
                            className="font-bold font-merriweather italic text-white_A700"
                            as="h4"
                            variant="h4"
                        >
                            Meer Foundation
                        </Text>
                        <a href="https://www.meerfoundation.org/about/">
                            <Text
                                className="font-light font-publicsans text-white_A700"
                                as="h5"
                                variant="h5"
                            >
                                See Details
                            </Text>
                        </a>
                    </div>
                </div>
                <div
                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[273px] items-start justify-end p-[25px] sm:px-5 rounded-[5px] w-full"
                    style={{ backgroundImage: "url('https://tse1.mm.bing.net/th?id=OIP.LbekC1GCKbR2CU2AV1-17QHaE7&pid=Api&P=0&h=180')" }}
                >
                    <div className="flex flex-col gap-[23px] items-start justify-start mb-1.5 mt-32">
                        <Text
                            className="font-bold font-merriweather italic text-white_A700"
                            as="h4"
                            variant="h4"
                        >
                            Shattering Silence
                        </Text>
                        <a href="https://www.shatteringthesilence.org/">
                            <Text
                                className="font-light font-publicsans text-white_A700"
                                as="h5"
                                variant="h5"
                            >
                                See Details
                            </Text>
                        </a>
                    </div>
                </div>
            </List>



            <Footer className="bg-gray_600 flex items-center justify-center mt-[97px] md:px-5 w-full" />

            {/* {col && (


                <div className="fixed top-0 left-0 w-600 h-400 bg-gray_600 bg-opacity-60 flex flex-col justify-center items-center m-32">

                    <h1 className="text-white pt-30">ADD EVENT</h1>
                    <p className="text-green-200">Please enter required details!</p>
                    <p>
                        <form>

                            <input type='text' name='title' placeholder='Title' onChange={handlechange} className="flex flex-col rounded-lg w-60 mx-auto my-15" variant="OutlineGray301"></input>
                            <input type='text' name='date' placeholder='Date' onChange={handlechange} className="flex flex-col rounded-lg w-60 mx-auto my-15" variant="OutlineGray301"></input>
                            <input type='text' name='location' placeholder='Location' onChange={handlechange} className="flex flex-col rounded-lg w-60 mx-auto my-15" variant="OutlineGray301"></input>
                            <input type='text' name='description' placeholder='Description' onChange={handlechange} className="flex flex-col rounded-lg w-60 mx-auto my-18 " variant="OutlineGray301"></input>


                        </form>
                        <Button onClick={onregestering} className="m-10 mt-10 cursor-pointer flex items-center justify-center min-w-[132px]"></Button>
                    </p>
                </div>
            )} */}

        </div>
    )
};

export default EventList;