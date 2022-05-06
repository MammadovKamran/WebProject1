// @ts-nocheck
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './biznis.module.css';

const BusinessModel = ({ renderedIndustries }) => {


    const navigate = useNavigate()

    const handleRouting = (paramsIndustryLink) => {
        navigate(paramsIndustryLink)
    }



  const rendered = renderedIndustries.map((industry) => {
    return (
      <div className={`${styles.services_item} p-4 text-center`} key={industry.id}>
        <h3
          style={{
            color: 'white',
            fontSize: '1.5rem',
            marginBottom:"20px"
          }}
        >
          {' '}
          {industry.name}
        </h3>
        <button className='btn btn-warning btn-lg text-dark' onClick={() => handleRouting(industry.link)}>Daha çox</button>
      </div>
    );
  });

  return (
    <div className={`${styles.background}`}>
      <div className={`${styles.services_container}`}>
        <h4 className="text-white text-center h3">Sizin biznes istiqamətiniz?</h4>
        <div className={`${styles.services_parent_overflow_container} d-flex justify-content-center flex-wrap`}>
          {rendered}
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
