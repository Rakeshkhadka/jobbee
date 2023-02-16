import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'


import Layout from '../components/layout/Layout'
import Home from '../components/Home'
import JobItem from '../components/job/JobItem'
import axios from 'axios'

export default function Index({data}) {
  
  return (
    // <>hoe </>
    
    <Layout>
      <Home mydata={data}/>
      
    </Layout>
  )
}

export async function getServerSideProps({query}){
  const jobType = query.jobType || '';
  const education = query.education || '';
  const experience = query.experience || '';
  const keyword = query.keyword || '';
  const location = query.location || '';
  const page = query.page || 1;
  let queryStr = ''
  let min_salary = ''
  let max_salary = ''

  if(query.salary){
    const [min, max] = query.salary.split('-');
    min_salary = min;
    max_salary = max;
  }
  if(location) queryStr = `keyword=${keyword}&location=${location}&page=${page}&jobType=${jobType}&education=${education}&experience=${experience}&min_salary=${min_salary}&max_salary=${max_salary}`
  else queryStr = `keyword=${keyword}&page=${page}&jobType=${jobType}&education=${education}&experience=${experience}&min_salary=${min_salary}&max_salary=${max_salary}`
  // const res = await fetch(`${process.env.API_URL}/api/jobs`)
  const res = await axios.get(`${process.env.API_URL}/api/jobs?${queryStr}`)
  const data = res.data;

  return {
    props : {
      data
    }
  }
}
