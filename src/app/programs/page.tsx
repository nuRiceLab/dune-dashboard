import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteContent from "@/data/site-content.json";
import { ReactNode } from "react";

export default function ServicesPage() {
  // Get services content from the site content
  const servicesContent = siteContent.programs;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{servicesContent.title}</h2>
          <p className="text-muted-foreground mt-2">
            {servicesContent.subtitle}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {servicesContent.mainServices.map((service) => (
            <Card key={service.title} className="flex flex-col h-full overflow-hidden">
  <CardHeader className="pb-4">
    <div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription className="mt-1">{service.description}</CardDescription>
    </div>
  </CardHeader>
  <CardContent className="flex-grow">
    <p className="text-sm text-muted-foreground">{service.details}</p>
  </CardContent>
  <CardFooter className="pt-2">
    <Button className="w-full" asChild>
      <a
        href={service.buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2"
      >
        {service.buttonText}
        <ExternalLink className="h-4 w-4" />
      </a>
    </Button>
  </CardFooter>
</Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
