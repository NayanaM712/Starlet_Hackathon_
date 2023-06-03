import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const JobOpportunitiesPage = () => {
    const nav = useNavigate()
    
    const [jobs, setJobs] = useState([
        {
            id: 1,
            title: 'Fashion Designer',
            company: 'Global Technologies',
            location: 'Ernakulam',
            category: 'Design',
            description: 'Cindrebay is hiring graphic designers to join our creative team in creating engaging, industry-relevant, on-brand graphics for a variety of digital platforms such as the website, social media, & more. ',
            links:'https://www.naukri.com/job-listings-graphic-designer-cindrebay-school-of-fashion-interior-design-hyderabad-secunderabad-coimbatore-thodupuzha-trivandrum-thiruvananthapuram-kochi-cochin-kolkata-cannanore-kannur-indore-nagpur-pune-lucknow-calicut-1-to-4-years-101221500477?src=seo_srp&sid=16857712761527956&xp=3&px=1'
        },
        {
            id: 1,
            title: 'Event Manager',
            company: 'Zivaya Wellness Private Limited',
            location: 'Banglore',
            category: 'Marketing',
            description: 'The candidate should have excellent communication skills, ability to plan, organize, set-up & execute events, have a flair for sales of packages and memberships, guest engagements, promote events through various channels and should be familiar with how to pull the crowd. Should know the marketing techniques for event management, sound knowledge of whos who in the city, and ability to connect with groups to ultimately help in increasing sales at the wellness outlet.',
            links:'https://in.indeed.com/cmp/Zivaya-Wellness-Private-Limited-1?campaignid=mobvjcmp&from=mobviewjob&tk=1h1vu2id5jrgh800&fromjk=1864c5c334c8bc39'
        },
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'Futura Creations',
            location: 'Mumbai',
            category: 'Development',
            description: 'As a Frontend Developer at FFZ, you will be part of our core development team, and will have complete ownership of our frontend application. You will bring concepts / user stories to life with ReactJS/Next.JS, HTML and CSS and an opportunity to create highly responsive web designs that work across multiple platforms and browsers.',
            Links:'https://www.google.com/search?q=frontend+developer+job+vacancy&rlz=1C1ONGR_enIN977IN977&oq=frontend+developer+job+vacancy&aqs=chrome..69i57.41707j0j7&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwjqjuyFuqb_AhWVa2wGHXlZDBYQkd0GegQIExAB#fpstate=tldetail&htivrt=jobs&htiq=frontend+developer+job+vacancy&htidocid=zyrMnYCY7xAAAAAAAAAAAA%3D%3D'
        },
        {

        }
        // Other job objects...
    ]);

    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Development', 'Design', 'Marketing'];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredJobs = selectedCategory === 'All' ? jobs : jobs.filter(job => job.category === selectedCategory);

    const handleJobHover = (job) => {
        setJobs(prevJobs => {
            return prevJobs.map(prevJob => {
                if (prevJob.id === job.id) {
                    return { ...prevJob, isHovered: true };
                }
                return prevJob;
            });
        });
    };

    const handleJobLeave = (job) => {
        setJobs(prevJobs => {
            return prevJobs.map(prevJob => {
                if (prevJob.id === job.id) {
                    return { ...prevJob, isHovered: false };
                }
                return prevJob;
            });
        });
    };

    

    return (
        <div style={{ background: '#F7F7F7', padding: '40px' }}>
            <h1 style={{ fontSize: '32px', color: '#2A2F4F', textAlign: 'center', marginBottom: '40px' }}>Job Opportunities</h1>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '200px', marginRight: '20px' }}>
                    <h2 style={{ fontSize: '20px', color: '#333333', marginBottom: '20px' }}>Categories:</h2>
                    {categories.map(category => (
                        <div
                            key={category}
                            style={{
                                background: 'none',
                                color: '#333333',
                                padding: '10px',
                                borderRadius: '5px',
                                marginBottom: '10px',
                                cursor: 'pointer',
                                transition: 'background 0.3s ease',
                            }}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>
                <div style={{ flex: '1' }}>
                    {filteredJobs.map(job => (
                        <div
                            key={job.id}
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '5px',
                                padding: '20px',
                                marginBottom: '20px',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.3s ease pink',
                                boxShadow: '1px 2px 9px #7B8FA1'
                            }}
                            onMouseEnter={() => handleJobHover(job)}
                            onMouseLeave={() => handleJobLeave(job)}
                        >
                            <h2 style={{ fontSize: '20px', color: '#2A2F4F', marginBottom: '10px' }}>{job.title}</h2>
                            <p style={{ fontSize: '16px', color: '#666666', marginBottom: '10px' }}>Company: {job.company}</p>
                            <p style={{ fontSize: '16px', color: '#666666', marginBottom: '10px' }}>Location: {job.location}</p>
                            {job.isHovered && (
                                <div style={{ background: '#F7F7F7', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                                    <p style={{ fontSize: '16px', color: '#666666' }}>{job.description}</p>
                                </div>
                            )}
                            <Link to={job.links}>
                            <button 
                                style={{
                                    background: 'black',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s ease',
                                    marginTop: 'auto',
                                }}
                                
                            >
                                Apply Now
                               
                            </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobOpportunitiesPage;