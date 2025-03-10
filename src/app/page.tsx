import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Server, BookOpen, Calendar, ExternalLink, Users, Atom, LucideIcon } from "lucide-react";
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
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 p-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{homeContent.hero.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">
              {homeContent.hero.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href={homeContent.about.officialWebsite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Learn About DUNE <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Access</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

        {/* Information Sections */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Latest Updates Section */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Latest Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {homeContent.latestUpdates.map((update, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4 py-2">
                    <p className="font-medium">{update.title}</p>
                    <p className="text-sm text-muted-foreground">{update.date}</p>
                    <p className="mt-1 text-sm">{update.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Resources Section */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {homeContent.resources.map((resource, index) => (
                  <div key={index} className="flex items-start gap-2">
                    {getIcon(resource.icon)}
                    <div>
                      <p className="font-medium">{resource.title}</p>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About DUNE */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>{homeContent.about.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {homeContent.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" asChild>
                <a href={homeContent.about.officialWebsite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Visit Official DUNE Website <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
