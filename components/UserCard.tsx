import Image from 'next/image'

type userInterface = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    albums?: albumInterface[];
};

type albumInterface = {
    userId: number;
    id: number;
    title: string;
};


function UserCard({ user }: { user: userInterface }) {
    return (
        <div className='p-10'>
            <div className='h-80 min-w-[100px] bg-gray-500 p-5 hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out rounded-lg'>
                <div className='flex flex-col justify-center items-center'>
                    <Image 
                        src="/contacts.jfif"
                        alt=''
                        height={80} // Adjust the height accordingly
                        width={80}  // Adjust the width accordingly
                    />
                    <h5 className='text-sm text-center text-black border-b-2 border-yellow-500 lg:text-1xl'>
                        Name: {user.name}
                    </h5>
                    <p className='cursor-pointer text-black text-center'>
                        Mail 📧: {user.email}
                    </p>
                    <p className="cursor-pointer text-sm text-center text-black lg:text-1xl">
                        User 🧭: {user.username}
                    </p>
                    {user.albums && (
                        <p className="cursor-pointer text-sm text-center text-black lg:text-1xl">
                            Albums 📸: {user.albums.length}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
  

export default UserCard