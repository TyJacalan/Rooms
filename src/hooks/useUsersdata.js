import * as api from "@/store/api/messagesAPI";
import * as types from "@/store/constants/messagesConstants";
import { useMemo, useEffect, useState } from "react";

export function useUsersData() {
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

// export async function getUserListAction() {
//   try {
//     const response = await api.getUserList();

//     const { error, usersData } = response;

//     if (error) {
//       return {
//         type: types.ACTION_FAIL,
//         payload: error,
//       };
//     } else {
//       return usersData;
//     }
//   } catch (error) {
//     return {
//       type: types.ACTION_FAIL,
//       payload: types.ERROR_MESSAGE,
//     };
//   }
// }
