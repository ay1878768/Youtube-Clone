const Button = ({name}) => {
    return (
        <div className="rounded-lg px-4 py-1 bg-slate-100 cursor-pointer hover:bg-slate-200 whitespace-nowrap  font-semibold">
            {name}
        </div>
    );
};

export default Button;
