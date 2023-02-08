import React from 'react';
import classNames from'classnames'
import PrivacyPolicy from './PrivacyPolicy';
import ImprintAddress from './ImprintAddress';
import './imprint.scss'

export const Imprint = ({
  data,
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'Privacy section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  );

  const innerClasses = classNames(
    'Privacy-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="Privacy-content">
            <ImprintAddress />
            <PrivacyPolicy />
          </div>
        </div>
      </div>
    </section>
  );
}

