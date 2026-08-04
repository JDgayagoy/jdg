import { NextResponse } from "next/server";



interface ContributionDay {
    color: string;
    contributionCount: number;
    contributionLevel: string;
    date: string;
}


const query = `
query {
  user(login: "JDgayagoy") {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            contributionLevel
            date
          }
        }
      }
    }
  }
}
`;

export async function GET() {
    const response = await fetch(
        "https://api.github.com/graphql",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
        }
    );

    const result = await response.json();

    const calendar =
        result.data.user.contributionsCollection.contributionCalendar;

    return Response.json({
        totalContributions: calendar.totalContributions,
        contributions: calendar.weeks.map(
            (week: { contributionDays: ContributionDay[] }) =>
                week.contributionDays
        ),
    });
}