'use client';

import React from 'react';
import useSWR from 'swr';
import { fetchLeetCodeStats } from '../../lib/fetchLeetCodeStats';

export default function LeetCodeStats() {
    const { data: totalSolved, error, isLoading } = useSWR(
        'leetcode/totalSolved',     // Unique cache key
        fetchLeetCodeStats,         // Fetcher function
        {
            revalidateOnFocus: false, // Won’t refetch on window refocus
            revalidateIfStale: true,  // Will refetch if stale
            revalidateOnReconnect: true,
            dedupingInterval: 60000   // Prevent repeated calls for 60s
        }
    );

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data</p>;

    return (
        <div>
            <h2>Total Solved Problems</h2>
            <p>{totalSolved}</p>
        </div>
    );
}
