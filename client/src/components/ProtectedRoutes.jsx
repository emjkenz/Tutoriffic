import { Navigate, Outlet } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_LOGEDIN } from '../utils/queries';

const ProtectedRoute = () => {
    const { data, loading, error } = useQuery(QUERY_LOGEDIN);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const user = data?.loggedInUser;

    return user ? <Outlet /> : <Navigate to="/login" />

}

export default ProtectedRoute;