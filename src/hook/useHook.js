import axios from "axios";
import moment from "moment";
import { useState } from "react";

export default function UseHook() {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);
  const [showProjects, setShowProjects] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleUser = (e) => {
    setUser(e.target.value);
    setNotFound(false);
  };
  const fetchRepos = () => {
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((resposta) => {
        const formattedRepos = resposta.data.map((repo) => ({
          ...repo,
          created_at: moment(repo.created_at).format("YYYY-MM-DD HH:mm:ss"),
        }));

        setRepos(formattedRepos);
        setShowProjects(true);
        setUser("");
      })
      .catch((error) => {
        console.error(error);
        setNotFound(true);
        setUser("");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    user,
    repos,
    showProjects,
    loading,
    notFound,
    handleUser,
    fetchRepos,
  };
}
