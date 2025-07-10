"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  Database, 
  BarChart3, 
  Code2, 
  Brain, 
  Shield, 
  Users, 
  FileText, 
  Activity,
  Cpu,
  Stethoscope,
  ChartSpline,
  Building
} from "lucide-react"

interface Skill {
  name: string
  proficiency: number
  icon: React.ComponentType<{ className?: string }>
  category: string
}

const skills: Skill[] = [
  // Healthcare-specific skills
  {
    name: "Project Management",
    proficiency: 92,
    icon: FileText,
    category: "Healthcare Technology"
  },
  {
    name: "Clinical Data Analysis",
    proficiency: 90,
    icon: Activity,
    category: "Healthcare Technology"
  },
  {
    name: "HL7/FHIR Standards",
    proficiency: 80,
    icon: Database,
    category: "Healthcare Technology"
  },
  {
    name: "Healthcare Operations",
    proficiency: 78,
    icon: Building,
    category: "Domain Knowledge"
  },
  {
    name: "HIPAA Compliance",
    proficiency: 100,
    icon: Shield,
    category: "Domain Knowledge"
  },
  {
    name: "Population Health",
    proficiency: 87,
    icon: Users,
    category: "Domain Knowledge"
  },
  // Technical skills
  {
    name: "Python",
    proficiency: 72,
    icon: Code2,
    category: "Technical Skills"
  },
  {
    name: "SQL",
    proficiency: 78,
    icon: Database,
    category: "Technical Skills"
  },
  {
    name: "Tableau",
    proficiency: 75,
    icon: BarChart3,
    category: "Technical Skills"
  },
  {
    name: "Predictive Analytics",
    proficiency: 75,
    icon: Brain,
    category: "Technical Skills"
  },
  {
    name: "Statistical Analysis",
    proficiency: 90,
    icon: ChartSpline,
    category: "Technical Skills"
  },
  {
    name: "Health Informatics",
    proficiency: 90,
    icon: Stethoscope,
    category: "Healthcare Technology"
  }
]

export default function SkillsSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-deep-teal)] sm:text-4xl">
            Technical Expertise
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--color-charcoal-gray)]">
            Specialized skills in healthcare informatics, data analytics, and technology implementation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <Card key={index} className="bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-deep-teal)] text-white group-hover:bg-[var(--color-sage-green)] transition-colors duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-[var(--color-charcoal-gray)] leading-tight">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-[var(--color-charcoal-gray)]">
                        Proficiency
                      </span>
                      <span className="text-xs font-semibold text-[var(--color-deep-teal)]">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <Progress 
                      value={skill.proficiency} 
                      className="h-2 bg-gray-200"
                      style={{
                        '--progress-foreground': 'var(--color-deep-teal)',
                      } as React.CSSProperties}
                    />
                  </div>
                  
                  <div className="mt-3">
                    <span className="inline-flex items-center rounded-full bg-[var(--color-sage-green)]/10 px-2 py-1 text-xs font-medium text-[var(--color-sage-green)]">
                      {skill.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
