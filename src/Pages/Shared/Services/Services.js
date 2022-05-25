
import Service from '../Service/Service';
import './Services.css';
import useServices from '../../../CustomHooks/useServices';
import { Fade } from 'react-reveal';
import { useNavigate } from 'react-router-dom';

const Services = (props) => {

const six=props.val

    const [services,setServices]=useServices(six);
    const navigate = useNavigate();


    const navigateToAdd = () =>{
        navigate(`/addproducts`);
    }
    return (
        <Fade left>
        <div id="services"   style={{minHeight:'100vh'}}>
            <div className="row">
            <h1 className='text-primary text-6xl p-10'>Tools</h1>
            <button onClick={() => navigateToAdd()}  class="btn btn-outline btn-secondary mb-2  btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add more</button>
            <div className="services-container mx-5">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
       </Fade>
    );
};

export default Services;