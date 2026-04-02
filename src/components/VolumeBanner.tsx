import React from 'react';

interface Props { text: string; }

const VolumeBanner: React.FC<Props> = ({ text }) => (
  <div className="vol-banner">{text}</div>
);

export default VolumeBanner;
