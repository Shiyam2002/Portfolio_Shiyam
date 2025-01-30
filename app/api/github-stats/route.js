// app/api/github-stats/route.js
export async function GET() {
    try {
      // 1. First fetch repositories
      console.log("GitHub Access Token:", process.env.GITHUB_ACCESS ? "Exists" : "MISSING");
      const reposResponse = await fetch("https://api.github.com/users/Shiyam2002/repos", {
        headers: {
          Authorization:` Bearer ${process.env.GITHUB_ACCESS}`,
          'Accept': 'application/vnd.github.v3+json'
        },
      });
  
      if (!reposResponse.ok) {
        console.error('GitHub API Error:', await reposResponse.text());
        throw new Error('Failed to fetch repositories');
      }
  
      const repos = await reposResponse.json();
      console.log(`Found ${repos.length} repositories`);
  
      let totalCommits = 0;
  
      // 2. Fetch commits for each repository
      for (const repo of repos) {
        try {
          const commitsUrl = repo.commits_url.replace("{/sha}", "");
          console.log(`Fetching commits for ${repo.name} from ${commitsUrl}`);
          
          const commitsResponse = await fetch(commitsUrl, {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_ACCESS}`,
              'Accept': 'application/vnd.github.v3+json'
            },
          });
  
          if (commitsResponse.ok) {
            const commits = await commitsResponse.json();
            totalCommits += commits.length;
            console.log(`Repository ${repo.name} has ${commits.length} commits`);
          } else {
            console.error(`Failed to fetch commits for ${repo.name}:, await commitsResponse.text()`);
          }
        } catch (error) {
          console.error(`Error fetching commits for ${repo.name}:, error`);
        }
      }
  
      console.log('Total commits across all repositories:', totalCommits);
      return Response.json({ commits: totalCommits });
      
    } catch (error) {
      console.error('Error in GitHub stats API:', error);
      return Response.json({ error: error.message }, { status: 500 });
    }
  }