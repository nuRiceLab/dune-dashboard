import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import siteContent from "@/data/site-content.json";

export default function AboutNeutrinosPage() {
  // Get about neutrinos content from the site content
  const neutrinosContent = siteContent.aboutNeutrinos;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{neutrinosContent.title}</h2>
          <p className="text-muted-foreground mt-2">
            {neutrinosContent.subtitle}
          </p>
        </div>

        <div className="prose max-w-none dark:prose-invert">
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {neutrinosContent.facts.map((fact) => (
            <div key={fact.title}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{fact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{fact.content}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>{neutrinosContent.research.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {neutrinosContent.research.paragraphs.map((paragraph, index) => (
                <p key={index} className={index > 0 ? "mt-4" : ""}>
                  {paragraph}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
