import Button from "./Button";

const Filterbar = () => {
    return (
        <div className="w-full py-3 px-3 flex  justify-between items-center overflow-auto gap-4 bg-white no-scrollbar fixed top-[3.7rem]">
            <Button name={"All"}/>
            <Button name={"Computer programming"}/>
            <Button name={"Web development"}/>
            <Button name={"Javascript"}/>
            <Button name={"Object-oriented programming"}/>
            <Button name={"Indian national cricket team"}/>
            <Button name={"information technology"}/>
            <Button name={"Feacture Phone"}/>
            <Button name={"Game Shows"}/>
            <Button name={"Test"}/>
            <Button name={"Comedy"}/>
            <Button name={"Information"}/>
            <Button name={"Recently uploaded"}/>
            <Button name={"Watched"}/>
            <Button name={"New to you"}/>
        </div>
    );
}
export default Filterbar;