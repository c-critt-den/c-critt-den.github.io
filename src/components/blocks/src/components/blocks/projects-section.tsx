"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Monitor, BarChart3, Database, Brain, Activity, Stethoscope, Heart, Shield } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Clinical Dashboard Development",
    description: "Real-time patient monitoring dashboard that reduces clinical response time by 40% and improves patient outcomes through actionable insights.",
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    icon: Monitor,
    healthImpact: "Improved patient response time by 40%"
  },
  {
    id: 2,
    title: "Population Health Analytics",
    description: "Comprehensive analytics platform identifying health trends across demographics, enabling proactive interventions for at-risk populations.",
    technologies: ["Python", "Pandas", "Plotly", "FastAPI", "MongoDB"],
    icon: BarChart3,
    healthImpact: "Identified risk factors for 50,000+ patients"
  },
  {
    id: 3,
    title: "EHR Integration Platform",
    description: "Seamless integration system connecting multiple EHR systems, improving data accessibility and reducing medical errors by 25%.",
    technologies: ["Java", "Spring Boot", "Apache Kafka", "Redis", "MySQL"],
    icon: Database,
    healthImpact: "Reduced medical errors by 25%"
  },
  {
    id: 4,
    title: "Predictive Modeling for Patient Outcomes",
    description: "Machine learning models predicting patient readmission risk with 92% accuracy, enabling targeted preventive care strategies.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Docker", "AWS"],
    icon: Brain,
    healthImpact: "92% accuracy in readmission prediction"
  }
]

const backgroundElements = [
  { icon: Activity, position: "top-20 left-10", size: "w-16 h-16", opacity: "opacity-5" },
  { icon: Stethoscope, position: "top-40 right-20", size: "w-20 h-20", opacity: "opacity-5" },
  { icon: Heart, position: "bottom-32 left-16", size: "w-12 h-12", opacity: "opacity-5" },
  { icon: Shield, position: "bottom-20 right-12", size: "w-14 h-14", opacity: "opacity-5" },
  { icon: Activity, position: "top-60 left-1/3", size: "w-10 h-10", opacity: "opacity-3" },
  { icon: Heart, position: "top-32 right-1/3", size: "w-8 h-8", opacity: "opacity-3" }
]

export default function ProjectsSection() {
  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      {/* Healthcare-themed background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {backgroundElements.map((element, index) => {
          const Icon = element.icon
          return (
            <Icon
              key={index}
              className={`absolute ${element.position} ${element.size} ${element.opacity} text-sage-green transform rotate-12`}
            />
          )
        })}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0f766e] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[#737373] max-w-3xl mx-auto">
            Transforming healthcare through innovative informatics solutions that improve patient outcomes, 
            enhance clinical workflows, and drive data-driven decision making.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <Card 
                key={project.id}
                className="group bg-white border-2 border-gray-100 hover:border-[#0f766e] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardHeader className="space-y-4">
                  {/* Project Icon/Mockup */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center border border-gray-200 group-hover:border-[#0f766e] transition-colors duration-300">
                    <Icon className="w-16 h-16 text-[#0f766e] opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-lg"></div>
                  </div>

                  {/* Project Title */}
                  <CardTitle className="text-xl font-semibold text-[#0f766e] group-hover:text-[#16a34a] transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Health Impact Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#16a34a]/10 text-[#16a34a] border border-[#16a34a]/20">
                    <Heart className="w-3 h-3 mr-2" />
                    {project.healthImpact}
                  </div>

                  {/* Project Description */}
                  <CardDescription className="text-[#374151] leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-[#374151]">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index}
                          variant="secondary"
                          className="bg-[#16a34a]/10 text-[#16a34a] border border-[#16a34a]/20 hover:bg-[#16a34a]/20 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button 
                    className="w-full bg-[#0f766e] hover:bg-[#16a34a] text-white transition-colors duration-300 group/btn"
                    size="sm"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#0f766e] text-[#0f766e] hover:bg-[#0f766e] hover:text-white transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
