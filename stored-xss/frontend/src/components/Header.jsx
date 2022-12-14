import { Link } from "react-router-dom";

function Header({ isSafe }) {
    return (
        <>
            <header className="bg-white shadow-md flex justify-between px-6 py-4 items-center fixed w-full">
                <h1 className="text-xl">
                    <Link to={isSafe ? "/safe" : "/"}>網路安全第七組期末 Demo - 儲存型 XSS</Link>
                </h1>
                <Link 
                    to={isSafe ? "/safe/user/new" : "/user/new"}
                    className="bg-indigo-400 text-white font-medium px-4 py-2 rounded-md"
                >
                    新增使用者
                </Link>
            </header>
            <div className="h-24"></div>
        </>
    );
}

export default Header;