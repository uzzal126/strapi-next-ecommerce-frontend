const Button = ({ className = "", children, clickHandler }) => {
    return (
        <button
            type="button"
            className={`font-medium rounded-md px-5 h-10 bg-primary text-white hover:text-white hover:bg-secondary transition-all ${className}`}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};

export default Button;
