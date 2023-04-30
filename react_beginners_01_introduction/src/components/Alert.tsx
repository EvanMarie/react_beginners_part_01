/* Using ReactNode to allow any type of children to be 
passed to the component, which means more complext structures
can be used, in this case HTML code instead of just string text
in the alert. */

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

/* onClose is passed from the parent component, the App() function
  - the visibility settings are all within the parent component */
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible ">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
