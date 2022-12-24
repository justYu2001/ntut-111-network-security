import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import Header from "@/components/Header";

const getUsers = async () => {
    const [fakeUsers, users] = await Promise.all([
        axios.get("https://randomuser.me/api/?results=10"),
        axios.get("http://localhost:3000/users")
    ]);

    return [...fakeUsers.data.results, ...users.data];
}

function Home() {
    const { data: users, isLoading } = useQuery(["user"], getUsers);

    if (isLoading) {
        return (
            <div className="h-screen flex flex-col">
                <Header />
                <div className="flex-1 flex justify-center items-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-indigo-400 border-t-transparent"></div>
                </div>
            </div>
        );
    }
    
    return (
        <>
            <Header />
            <ul className="grid grid-cols-4">
                {users.map((user) => (
                    <li key={user.login.uuid ?? user.id} className="bg-white shadow-md py-8 w-72 m-6 rounded-md text-center">
                        <img src={user.picture.medium} alt="avatar" className="rounded-full h-24 w-24 block mx-auto" />
                        <p className="mt-4 mb-2 text-xl">{user.name.first ? `${user.name.first} ${user.name.last}` : user.name}</p>
                        <a href={user.personalWebsite} className={`underline font-medium text-blue-500 cursor-pointer ${user.personalWebsite ? "" : "invisible"}`}>My Website</a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Home;