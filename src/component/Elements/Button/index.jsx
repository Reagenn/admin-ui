import React from 'react'

const Button = () => {
  return (
    <div>
      Button
    </div>
  )
}

export default Buttonconst Button = (props) => {
    const { children, variant = "bg-black" } = props;
  
    return (
      <button className={`h-10 px-6 rounded-md text-sm ${variant}`} type="submit">
        {children}
      </button>
    );
  };
  
  export default Button;
