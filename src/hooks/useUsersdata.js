import * as api from "@/store/api/messagesAPI";

import { useMemo, useEffect, useState } from "react";

export default function useUsersData() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getUserList();
        const { error, usersData } = response;

        if (error) {
          console.error("Error fetching users data:", error);
        } else {
          setUsersData(usersData);
        }
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };

    fetchData();
  }, []);

  const memoizedUsersData = useMemo(() => usersData, [usersData]);

  return memoizedUsersData;
}
