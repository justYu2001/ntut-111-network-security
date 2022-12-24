function Header() {
    return (
        <>
            <header className="bg-white shadow-md flex justify-between px-6 py-4 items-center fixed w-full">
                <h1 className="text-xl">網路安全第七組期末 Demo - 儲存型 XSS</h1>
                <a href="/user/new" className="bg-indigo-400 text-white font-medium px-4 py-2 rounded-md">新增使用者</a>
            </header>
            <div className="h-24"></div>
        </>
    );
}

export default Header;