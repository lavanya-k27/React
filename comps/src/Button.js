import PropTypes from "prop-types";


function Button ({children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded
  
}){
  return <button className="text-red-500">{children}</button>
}

Button.propTypes = {
  checkVariationValue: ({primary,secondary,success,danger,warning}) =>{

    const count= Number(
      !!primary + 
      !!secondary + 
      !!success + 
      !!danger + 
      !!warning
    );

    if(count > 1){
      return new Error(
        "Only one of primary, secondary, success, danger, warning can be true"
      );
    }
  }

 }


export default Button;