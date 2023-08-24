import React, {ReactNode} from 'react';
import "./MyTitle.scss"

interface IMyTitle {
  children:ReactNode,
}

const MyTitle = ({children}:IMyTitle) => {
  return (
    <h1 className="my-title">
      {children}
    </h1>
  );
};

export default MyTitle;