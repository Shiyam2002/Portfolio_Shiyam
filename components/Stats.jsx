"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";

const Stats = () => {
  const [githubCommits, setGithubCommits] = useState(0);
  const [leetcodeSolved, setLeetcodeSolved] = useState(0);
  const [devBlogs, setDevBlogs] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);

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
      num: 15, //leetcodeSolved,
      text: "Problem Solved",
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

    fetch('/api/github-stats')
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch GitHub stats');
      }
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

    // Fetch Dev.to blog count
    axios
      .get("https://dev.to/api/articles?username=ShiyamKS", {
        headers: {
          "User-Agent": "YourAppName",
        },
      })
      .then((response) => {
        setDevBlogs(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching Dev.to blogs:", error);
        setDevBlogs(0);
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
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
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