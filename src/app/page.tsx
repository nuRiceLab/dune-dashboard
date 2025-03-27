import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Server, BookOpen, Calendar, ExternalLink, Users, Atom } from "lucide-react";
import Link from "next/link";
import siteContent from "@/data/site-content.json";
import { ReactNode } from "react";

// Define types for the JSON data
interface IconMapType {
  [key: string]: ReactNode;
}

// Icon mapping to dynamically render icons from the JSON data
const IconMap: IconMapType = {
  Database: <Database className="h-8 w-8 text-primary" />,
  Server: <Server className="h-8 w-8 text-primary" />,
  Users: <Users className="h-8 w-8 text-primary" />,
  Atom: <Atom className="h-8 w-8 text-primary" />,
  BookOpen: <BookOpen className="h-5 w-5 text-primary mt-0.5" />,
  Calendar: <Calendar className="h-5 w-5 text-primary mt-0.5" />
};

export default function Home() {
  // Get home page content from the site content
  const homeContent = siteContent.home;

  // Helper function to get the icon component based on the icon name
  const getIcon = (iconName: string): ReactNode => {
    return IconMap[iconName] || null;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6 md:p-8">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">{homeContent.hero.title}</h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 md:mb-6 whitespace-pre-line">
              {homeContent.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button variant="outline" asChild className="sm:text-base text-sm py-1 sm:py-2 whitespace-pre-line">
                <a href={homeContent.about.officialWebsite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Learn more about the DUNE experiment <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-4">Quick Access</h2>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {homeContent.quickLinks.map((link) => (
              <Card key={link.title} className="transition-all hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    {getIcon(link.icon)}
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{link.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  {link.external ? (
                    <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Open <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
                      <Link href={link.href} className="flex items-center">
                        View <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
