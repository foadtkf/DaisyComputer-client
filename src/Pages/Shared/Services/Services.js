
import Service from '../Service/Service';
import './Services.css';
import useServices from '../../../CustomHooks/useServices';

const Services = (props) => {

    // const [services, setServices] = useState([]);
const six=props.val

    const [services,setServices]=useServices(six);

    return (
        <div id="services"   style={{minHeight:'100vh'}}>
            <div className="row">
            <h1 className='text-primary text-6xl p-10'>Tools</h1>
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
    );
};

export default Services;