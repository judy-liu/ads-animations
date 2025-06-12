import React from "react";

export const metadata = {
    title: "Atlassian Ads Animations",
    description: "Interactive Atlassian animations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
