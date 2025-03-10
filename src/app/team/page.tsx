import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import siteContent from "@/data/site-content.json";

export default function TeamPage() {
  // Get team content from the site content
  const teamContent = siteContent.team;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{teamContent.title}</h2>
          <p className="text-muted-foreground mt-2">
            {teamContent.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamContent.members.map((member) => (
            <div key={member.name}>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar className="h-16 w-16">
                    <div className="flex h-full w-full items-center justify-center bg-muted text-xl font-medium">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </Avatar>
                  <div>
                    <CardTitle>{member.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
