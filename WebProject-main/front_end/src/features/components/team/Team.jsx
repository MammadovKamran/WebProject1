import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllMembers } from '../about/aboutSlice';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './team.module.css';

const Team = () => {
  const allMembers = useSelector(selectAllMembers);
 
  return (
   <div>

   </div>
  );
};

export default Team;
