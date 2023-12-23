const Boton = ({ children, className = "", onClick }) => {

    return (
      <button
          onClick={onClick}
        className={` rounded flex px-4 py-2 text-center my-4 bg-secondary text-white ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Boton;