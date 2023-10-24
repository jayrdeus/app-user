import Tables from "../components/Table";
import { useEffect, useState, useMemo } from "react";
import { getUsers } from "../services/api";
import debounce from "lodash.debounce";
import MainContainer from "../components/Container";
import SimpleBackdrop from "../components/SimpleBackdrop";
import Paper from "@mui/material/Paper";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let originalUsers = [];
  async function fetchData() {
    try {
      setIsLoading(true);
      const data = await getUsers();
      originalUsers = data;
      setUsers(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  const handleChange = (e, _users) => {
    const { value } = e.target;
    let filteredUser = _users.filter((user) =>
      user.name.toLowerCase().includes(value)
    );
    setUsers(value ? filteredUser : originalUsers);
  };
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => debouncedResults.cancel();
  });

  if (isLoading) {
    return <SimpleBackdrop open={isLoading} />;
  }
  return (
    <MainContainer>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Tables users={users} filterUser={debouncedResults} />
        </Paper>
    </MainContainer>
  );
}
