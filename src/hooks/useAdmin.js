import useAuth from "./useAuth";
import useAxios from "./useAxios";
import { useEffect, useState } from "react";

const useAdmin = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxios();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      try {
        const response = await axiosSecure.get(`/api/users/admin/${user?.email}`);
        console.log("Is Admin Response", response); 
        setIsAdmin(response.data.admin);
        setIsAdminLoading(false);
      } catch (error) {
        console.error("Error fetching admin status:", error);
        setIsAdmin(false);
        setIsAdminLoading(false);
      }
    };

    fetchAdminStatus();
  }, [user, axiosSecure]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
