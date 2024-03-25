import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localstorage";



const JobDetails = () => {
   
        const jobs = useLoaderData();
        const {id} = useParams();
        const idInt = parseInt(id);
        const job = jobs.find(job => job.id === idInt);
        console.log(job);

        const handleApplyjob = () => {
            saveJobApplication(job.id);
            toast('You have Applied Successfully');
        }
    
    return (
        <div>
            <h1>Job Details of : {job.job_title}</h1>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                    <h2>{job.company_name}</h2>
                </div>
                <div>
                    <button onClick={handleApplyjob} className="btn btn-primary">Apply now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;