import errorImage from '../assets/images/404-error-1.png';
import  {useRouteError} from 'react-router-dom';

const Error = () => {

    const error = useRouteError();
    console.log(error);
    const {status, statusText} = error;

    return(
        <div className='w-full h-screen bg-[#C7EBE8] flex flex-col justify-center items-center'>
            <h1 className='text-xl font-bold'>Opps!!!</h1>
            <h2 className='text-lg font-bold'>Something went wrong!</h2>
            <h3 className='text-lg font-bold'>{status} - {statusText}</h3>
            <img src={errorImage} className='w-80'/>
        </div>
    )
}

export default Error;