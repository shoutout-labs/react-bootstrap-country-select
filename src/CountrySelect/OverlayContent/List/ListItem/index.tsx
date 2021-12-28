import React, { forwardRef, Ref, ReactNode } from 'react';
import ReactCountryFlag from "react-country-flag"
import { classNames } from '../../../util';

import ICountry from '../../../ICountry';

import './style.scss';

export interface ListItemProps {
  classPrefix: string;
  country: ICountry;
  active: boolean;
  countryLabelFormatter: (country: ICountry) => ReactNode;
  flags: boolean;
  onClick: () => void;
}

const ListItem = forwardRef(({
  classPrefix,
  country,
  country: {
    flag,
  },
  active,
  countryLabelFormatter,
  flags,
  onClick,
}: ListItemProps, ref: Ref<HTMLLIElement>) => {

  const className = classNames([
    `${classPrefix}__list-item`,
    active && 'active',
  ]);

  return (
    <li
      className={className}
      onClick={onClick}
      ref={ref}
    >
              
      {flags ? <span className={`${classPrefix}__flag`}><ReactCountryFlag countryCode={country.alpha2} svg /></span> : null}
  
      {countryLabelFormatter(country)}
  
    </li>
  );

});

export default ListItem;
