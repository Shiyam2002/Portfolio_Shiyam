"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";

const Stats = () => {
  const [githubCommits, setGithubCommits] = useState(0);
  const [leetcodeSolved, setLeetcodeSolved] = useState(0);
  const [devBlogs, setDevBlogs] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);

  // Move stats here so it reads the latest state values
  const stats = [
    {
      num: experienceYears,
      text: "Years of Experience",
    },
    {
      num: devBlogs,
      text: "Blogs Posted",
    },
    {
      num: leetcodeSolved,
      text: "Problems Solved",
    },
    {
      num: githubCommits,
      text: "Code Commits",
    },
  ];

  useEffect(() => {
    // Calculate years of experience
    const startDate = new Date("2023-07-10");
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();
    const experience = months < 0 ? years - 1 : years;
    setExperienceYears(experience);

    // Github commits fetch (your existing code)
    fetch('/api/github-stats')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch GitHub stats');
        return res.json();
      })
      .then(data => {
        if (data.error) {
          console.error('Error from API:', data.error);
          setGithubCommits(0);
        } else {
          console.log('Received commit count:', data.commits);
          setGithubCommits(data.commits);
        }
      })
      .catch(error => {
        console.error("Error fetching GitHub stats:", error);
        setGithubCommits(0);
      });

    // Dev.to blog count
    axios
      .get("https://dev.to/api/articles?username=shiyam_ks_af0bee1eefbbdc", {
        headers: { "User-Agent": "portfolio-shiyam" },
      })
      .then((response) => {
        setDevBlogs(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching Dev.to blogs:", error);
        setDevBlogs(0);
      });

    // === LeetCode wrapper API ===
    // Replace "ShiyamKS" with your LeetCode username if needed
    const leetUsername = "ShiyamKS";
    const leetApiUrl = `https://leetcode-stats-api.herokuapp.com/${leetUsername}`;

    axios
      .get(leetApiUrl)
      .then((res) => {
        // sample response shape you provided:
        // {"status":"success",...,"totalSolved":12,...}
        if (res.data && typeof res.data.totalSolved === "number") {
          setLeetcodeSolved(res.data.totalSolved);
        } else {
          console.warn("Unexpected LeetCode API response:", res.data);
          setLeetcodeSolved(0);
        }
      })
      .catch((err) => {
        console.error("Error fetching LeetCode stats:", err);
        setLeetcodeSolved(0);
      });
  }, []);

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
