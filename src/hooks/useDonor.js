import React from 'react';
import useAuth from "./useAuth";
import useAxios from "./useAxios";
import { useEffect, useState } from "react";

const useDonor = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxios();
    const [isDonor, setIsDonor] = useState(false);
    const [isDonorLoading, setIsDonorLoading] = useState(true);

    useEffect(() => {
        const fetchDonorStatus = async () => {
          try {
            const response = await axiosSecure.get(`/users/donor/${user?.email}`);
            console.log("Is Donor Response", response);
            setIsDonor(response.data.donor);
            setIsDonorLoading(false);
          } catch (error) {
            console.error("Error fetching donor status:", error);
            setIsDonor(false);
            setIsDonorLoading(false);
          }
        };
    
        fetchDonorStatus();
      }, [user, axiosSecure]);
    
      return [isDonor, isDonorLoading];
    };


export default useDonor;