import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Blog = () => {



    
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
            const data = await axios.post("http://localhost:4009/bloggen", value, config)
            console.log(data)
            nav("/See")
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
        axios.get("http://localhost:4009/getblog")
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);


    const hover = () => {
        <div style={{ background: "yellow" }}></div>
    }


    
        const [expandedEvent, setExpandedEvent] = useState(null);

        const handleExpand = (eventId) => {
            setExpandedEvent(eventId);
        };

        const handleCollapse = () => {
            setExpandedEvent(null);
        };
    return (

        <div>
            <center>
                <h1 style={{ color: "#1E5128", fontWeight: "bold", marginTop: "30px" }}>Stories of Strength and Healing</h1>
                
                <div style={{ height: "50px", marginTop: "20px",background:"" }}><p style={{ fontFamily: "unset",width:"900px" }} >Your story matters, and we value the diversity of perspectives and narratives that our community brings. By sharing your story, you become a catalyst for change, encouraging empathy, understanding, and connection among readers from all walks of life.</p>
                </div>
            </center>
            <center>

                <Button  onClick={fun3} style={{ margin: "10px",background:"black" }}>Share Your Story</Button>
            </center>
            {col && (
                <center>
                    <div style={{ "border-radius": "3%", "background": "white", "height": "350px", "width": "450px", "margin": "50px", boxShadow: '1px 2px 9px #7B8FA1' }}>
                        <h1 style={{ "color": "black", "paddingTop": "30px" }}></h1>
                        <p style={{ "color": "black" }}>Please enter required details!</p>
                        <p>
                            <form>
                                <input type='text' name='title' placeholder='Title' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                                <input type='text' name='date' placeholder='Date' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                                {/* <input type='text' name='location' placeholder='Location' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input> */}
                                <input type='text' name='description' placeholder='Description' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>


                            </form>
                            <Button onClick={onregestering} style={{ "margin": "2px", "width": "83px", "height": "39px", "background": "black", "borderColor": "black",color:"white" }}>Post</Button>
                        </p>
                    </div>
                </center>



            )
            }
            <center>
              
  

                
                <div className="event-list" style={{ display: 'block',  gap: '20px', justifyContent: 'center',width:"800px" }}>
                    {Events.map(event => (
                        <div key={event._id} className="event-card" style={{ boxShadow: '1px 2px 9px #7B8FA1', borderRadius: '10px', backgroundColor: 'white', padding: '20px', cursor: 'pointer', transition: 'transform 0.3s ease', margin:"20px"}}>
                            <div className="event-details">
                                <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'brown', fontSize: '20px', marginBottom: '10px' }}>{event.title}</h2>
                                {/* <p style={{ fontFamily: 'Arial, sans-serif', color: '#0C134F', fontSize: '16px', marginBottom: '5px' }}>Date: {event.date}</p> */}
                                {expandedEvent === event._id ? (
                                    <div>
                                        <p style={{ fontFamily: 'Arial, sans-serif', color: '#0C134F', fontSize: '16px', marginBottom: '10px' }}>{event.description}</p>
                                        <button
                                            style={{
                                                fontFamily: 'Arial, sans-serif',
                                                backgroundColor: 'black',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '5px',
                                                padding: '5px 10px',
                                                fontSize: '14px',
                                                cursor: 'pointer',
                                                marginBottom:"10px"
                                            }}
                                            onClick={handleCollapse}
                                        >
                                            Close
                                        </button>
                                    </div>
                                ) : (
                                    <p style={{ fontFamily: 'Arial, sans-serif', color: '#0C134F', fontSize: '16px', marginBottom: '10px', maxHeight: '60px', overflow: 'hidden' }}>
                                        {event.description}
                                    </p>
                                )}
                            </div>
                            <div style={{ borderTop: '1px solid #E0E0E0', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p style={{ fontFamily: 'Arial, sans-serif', color: '#777777', fontSize: '14px' }}>Posted on {event.date}</p>
                                {expandedEvent !== event._id && (
                                    <center>
                                    <button
                                        style={{
                                            fontFamily: 'Arial, sans-serif',
                                            backgroundColor: 'black',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '5px',
                                            padding: '5px 10px',
                                            fontSize: '14px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => handleExpand(event._id)}
                                    >
                                        Read More
                                    </button>
                                    </center>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                



            </center>

            
        </div>
    )
};

export default Blog;