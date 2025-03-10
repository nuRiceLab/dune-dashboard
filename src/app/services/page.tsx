import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Database, BookOpen, Server, ExternalLink, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteContent from "@/data/site-content.json";
import { ReactNode } from "react";

// Define types for the JSON data
interface IconMapType {
  [key: string]: ReactNode;
}

// Icon mapping to dynamically render icons from the JSON data
const IconMap: IconMapType = {
  Database: <Database className="h-10 w-10 text-primary" />,
  Server: <Server className="h-10 w-10 text-primary" />,
  BookOpen: <BookOpen className="h-8 w-8 text-primary" />
};

export default function ServicesPage() {
  // Get services content from the site content
  const servicesContent = siteContent.services;

  // Helper function to get the icon component based on the icon name
  const getIcon = (iconName: string): ReactNode => {
    return IconMap[iconName] || null;
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{servicesContent.title}</h2>
          <p className="text-muted-foreground mt-2">
            {servicesContent.subtitle}
          </p>
        </div>

        {/* Main Services */}
        <div className="grid gap-8 md:grid-cols-2">
          {servicesContent.mainServices.map((service) => (
            <Card key={service.title} className="flex flex-col h-full overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  {getIcon(service.icon)}
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="mt-1">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center justify-center h-48 w-full mb-4 bg-muted rounded-md overflow-hidden">
                  <div className="flex flex-col items-center text-muted-foreground">
                    <ImageIcon className="h-12 w-12 mb-2" />
                    <span className="text-sm">{service.title} Interface</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{service.details}</p>
              </CardContent>
              <CardFooter className="pt-2">
                <Button className="w-full" asChild>
                  <a href={service.buttonLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    {service.buttonText}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {servicesContent.additionalServices.map((service) => (
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {getIcon(service.icon)}
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
