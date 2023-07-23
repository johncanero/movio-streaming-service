
import { User, Movie } from '@/types';
import getCurrentUser from "../actions/getCurrentUser";
import getBillboard from "../actions/getBillboard";

import Navbar from "../components/navbar/Navbar";
import Billboard from "../components/Billboard";

const Users = async () => {
    const user = (await getCurrentUser()) as User;
    const randomMovie = (await getBillboard()) as Movie;

    return (
        <div>
            <Navbar />
            <Billboard movie={randomMovie} />
        </div>
    );
}

export default Users; 