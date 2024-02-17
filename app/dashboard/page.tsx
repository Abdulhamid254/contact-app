import UserCard from '@/components/UserCard';
import { auth } from '@clerk/nextjs';


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

const getData = async (): Promise<userInterface[]> => {
    try {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users', {next:{revalidate:7200}});
        const users: userInterface[] = await usersResponse.json();

        const albumsResponse = await fetch('https://jsonplaceholder.typicode.com/albums', {next:{revalidate:7200}});
        const albums: albumInterface[] = await albumsResponse.json();

        users.forEach(user => {
            user.albums = albums.filter(album => album.userId === user.id);
        });

        return users;
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array or handle the error accordingly
    }
};

const Dashboard = async () => {
    const { userId } = auth();

    const users = await getData();
    
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {users.map((user:userInterface) => (
                <div key={user.id}>
                    <UserCard user={user}/>
                </div>
            ))}
        </div>
    );
};

export default Dashboard