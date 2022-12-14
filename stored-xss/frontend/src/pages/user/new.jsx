import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Header from "@/components/Header";

const addUser = (requestBody) => {
    return axios.post("http://localhost:3000/users", requestBody);
};

const handleFormSubmit = (callback) => {
    return (event) => {
        event.preventDefault();

        const { name, personalWebsite } = event.target;

        callback({
            name: name.value,
            personalWebsite: personalWebsite.value,
        });
    };
};


function AddUser() {
    const navigate = useNavigate();

    const { isLoading, isSuccess, mutate } = useMutation({
        mutationFn: addUser,
        onSuccess: () => navigate("/"),
    });

    return (
        <>
            <Header />
            <div className="bg-white shadow-md py-4 px-10 rounded m-10">
                <h2 className="text-xl font-medium tracking-wide my-4">新增使用者</h2>
                <form action="http://localhost:3000/users" method="post" onSubmit={handleFormSubmit(mutate)}>
                    <Input id="f1" name="name" fieldName="使用者名稱" />
                    <Input id="f2" name="personalWebsite" fieldName="個人網站" />
                    <button 
                        type="submit"
                        disabled={isLoading || isSuccess}
                        className="disabled:bg-indigo-400/50 text-white font-medium px-4 py-1 rounded-md mt-4 float-right bg-indigo-400">新增</button>
                    <div className="clear-both"></div>
                </form>
            </div>
        </>
    );
}

export default AddUser;

function Input({ id, name, fieldName }) {
    return (
        <>
            <label htmlFor={id} className="text-slate-400 font-medium tracking-wide block my-2">{fieldName}</label>
            <input type="text" id={id} name={name} className="outline-none border-2 border-slate-300 rounded p-2 block w-72" />
        </>
    );
}