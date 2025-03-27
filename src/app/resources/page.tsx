import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Database, BookOpen, Server, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import siteContent from "@/data/site-content.json";

// Define types for the JSON data
interface IconMapType {
  [key: string]: ReactNode;
}

// Icon mapping to dynamically render icons from the JSON data
export default function ServicesPage() {
  // Get resources content from the site content
  const resourcesContent = siteContent.resources;

  return (
  <DashboardLayout>
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{resourcesContent.title}</h2>
        <p className="text-muted-foreground mt-2">
          {resourcesContent.subtitle}
        </p>
      </div>

      <ul className="space-y-6 text-muted-foreground">
        {resourcesContent.mainServices.map((service) => (
          <li key={service.title}>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-base text-foreground">{service.title}</span>
              <p className="text-sm text-muted-foreground">{service.description}</p>
              <Button size="sm" className="w-fit" asChild>
                <a
                  href={service.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  {service.buttonText}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </DashboardLayout>
);

}
