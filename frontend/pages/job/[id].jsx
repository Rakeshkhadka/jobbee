import React from 'react'
import axios from 'axios'
import Layout from '../../components/layout/Layout'
import JobDetails from '../../components/job/JobDetails';
import NotFound from '../../components/layout/NotFound';
export default function JobDetailsPage({job, candidates, error}) {
    console.log(job);
    if (error?.includes('Not Found')) return <NotFound />;
    // (
        // <Layout>
            // <NotFound />
        // </Layout>
    // )
  return (
    
    <Layout>
        <JobDetails job={job} candidates={candidates}/>
    </Layout>
  )
}

export async function getServerSideProps({params}) {
    try{
        const res = await axios.get(`${process.env.API_URL}/api/job/${params.id}/`);
        const job = res.data.job;
        const candidates = res.data.candidates
        return {
            props: {
                job,
                candidates,
            },
        };
    } catch(error){
        return {
            props: {
                error: error.response.data.detail
            } ,
        };
    }
}

