function Header() {
    return (
        <>
            <header className="bg-white shadow-md flex justify-between px-6 py-6 fixed w-full">
                <h1 className="text-xl">網路安全第七組期末 Demo - 儲存型 XSS</h1>
                <nav>
                    <ul className="flex items-center">
                        <li className="mr-4"><a href="/signin">登入</a></li>
                        <li className="bg-indigo-400 text-white font-medium px-4 py-1 rounded-md"><a href="/signup">註冊</a></li>
                    </ul>
                </nav>
            </header>
            <div className="h-24"></div>
        </>
    );
}

export default Header;