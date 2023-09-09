import React from 'react';
import { ResumeItem } from '@/components/ResumeItems/ResumeItem';
import { userData } from '@/data/constants';

export const ResumeItemsList = () => {
  return userData.experience.map((item) => {
    return (
      <ResumeItem
        key={item.id}
        companyName={item.companyName}
        jobTitle={item.jobTitle}
        tenure={item.tenure}
        description={item.description}
        imageURL={item.imageURL}
      />
    );
  });
};
