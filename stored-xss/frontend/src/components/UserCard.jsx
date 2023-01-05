function UserCard({ user }) {
    return (
        <li
            className="bg-white shadow-md py-8 w-72 m-6 rounded-md text-center"
        >
            <img
                src={user.picture.medium}
                alt="avatar"
                className="rounded-full h-24 w-24 block mx-auto"
            />
            <p className="mt-4 mb-2 text-xl">
                {user.name.first
                    ? `${user.name.first} ${user.name.last}`
                    : user.name}
            </p>
            <a
                href={user.personalWebsite}
                className={`underline font-medium text-blue-500 cursor-pointer ${
                    user.personalWebsite ? "" : "invisible"
                }`}
            >
                My Website
            </a>
        </li>
    );
}

export default UserCard;