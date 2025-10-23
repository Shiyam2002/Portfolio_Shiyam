export const fetchLeetCodeStats = async (): Promise<number> => {
    const response = await fetch('https://your-api-url.com/leetcode');
    if (!response.ok) throw new Error('Failed to fetch');

    const data = await response.json();
    return data.totalSolved; // Only return what you need
};
