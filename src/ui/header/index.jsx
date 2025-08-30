import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderContent({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex items-center justify-center gap-2">
        {Icon && <Icon className="w-5 h-5 text-[#ECB476]" aria-hidden="true" />}
        <h1 className="text-base">{title}</h1>
      </div>
      <h1 className="font-bold text-[22px]">{subtitle}</h1>
    </div>
  );
}

HeaderContent.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
