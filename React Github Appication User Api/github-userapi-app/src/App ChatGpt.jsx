import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from './styles/github.module.css'

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [userApi, setUserApi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchApi = async () => {
    if (!inputValue.trim()) {
      setError("⚠️ Please enter a username!");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await axios(`https://api.github.com/users/${inputValue}`);
      setUserApi(response.data);
    } catch {
      setUserApi(null);
      setError("❌ User not found!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.heading}
      >
        🔍 GitHub User Finder
      </motion.h1>

      {/* Input Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.inputSection}
      >
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Enter GitHub username..."
          className={styles.inputBox}
        />
        <button onClick={fetchApi} className={styles.btn}>
          {loading ? "Loading..." : "Search"}
        </button>
      </motion.div>

      {/* Error */}
      {error && <p className={styles.error}>{error}</p>}

      {/* Skeleton Loader */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.skeletonCard}
        >
          <div className={styles.skeletonAvatar}></div>
          <div className={styles.skeletonText}></div>
          <div className={styles.skeletonText}></div>
          <div className={styles.skeletonStats}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </motion.div>
      )}

      {/* User Card */}
      {userApi && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.card}
        >
          <motion.img
            src={userApi.avatar_url}
            alt={userApi.name}
            className={styles.avatar}
            whileHover={{ scale: 1.05 }}
          />

          <h2 className={styles.name}>{userApi.name || "No Name"}</h2>
          <p className={styles.username}>@{userApi.login}</p>
          <p className={styles.bio}>{userApi.bio || "No bio available"}</p>

          <div className={styles.stats}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h3>{userApi.followers}</h3>
              <p>Followers</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h3>{userApi.following}</h3>
              <p>Following</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <h3>{userApi.public_repos}</h3>
              <p>Repos</p>
            </motion.div>
          </div>

          <motion.a
            href={userApi.html_url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className={styles.profileBtn}
          >
            Visit Profile
          </motion.a>
        </motion.div>
      )}
    </div>
  );
}
