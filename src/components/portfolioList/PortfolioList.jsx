import "./portfolioList.scss";

import React from 'react'

const PortfolioList = ({id, title, active, setSelected}) => {
  return (
    <li className={"portfolioList " + (active ? ' active' : '')} onClick={() => setSelected(id)}>
        {title}
    </li>
  )
}

export default PortfolioList