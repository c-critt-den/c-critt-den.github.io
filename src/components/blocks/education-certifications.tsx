"use client"

import React from 'react'
import { GraduationCap, Award, Calendar } from 'lucide-react'

interface EducationItem {
  institution: string
  degree: string
  graduationYear: string
  coursework: string[]
}

interface CertificationItem {
  name: string
  organization: string
  validFrom: string
  validTo?: string
}

const EducationCertifications = () => {
  const education: EducationItem[] = [
    {
      institution: "University of Michigan",
      degree: "Master of Health Informatics (MHI)",
      graduationYear: "2025",
      coursework: ["Healthcare Data Management", "Exploratory Data Analysis for Health", "Knowledge Representation and Management in Health", "Population Health Informatics", "Evaluation Methods"]
    },
    {
      institution: "University of Michigan",
      degree: "Certificate in Innovation and Entrepreneurship",
      graduationYear: "2025",
      coursework: ["Project Management and Consulting", "Healthcare Startups", "Compensation, Funding, and Ownership"]
    },
    {
      institution: "University of Michigan",
      degree: "Bachelor of Arts in Sociology of Health and Medicine & German",
      graduationYear: "2023",
      coursework: ["Sociological Research Methods", "Statistics for Social Science", "Women's Health", "Health, Medicine, and Society"]
    },
  ]

  const certifications: CertificationItem[] = [
    {
      name: "Intercultural Leadership",
      organization: "University of Michigan",
      validFrom: "2023"
    },
    {
      name: "Overdose Rescue Training",
      organization: "AmeriCorps",
      validFrom: "2022"
    }
  ]

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Column */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f766e]/10">
                <GraduationCap className="h-5 w-5 text-[#0f766e]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#0f766e]">Education</h2>
            </div>
            
            {/* Timeline Line */}
            <div className="absolute left-5 top-16 bottom-0 w-0.5 bg-[#16a34a]/30" />
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-3 top-2 h-4 w-4 rounded-full bg-[#16a34a] ring-4 ring-white shadow-sm" />
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-[#374151] leading-tight">
                        {item.degree}
                      </h3>
                      <p className="text-base font-medium text-[#0f766e] mt-1">
                        {item.institution}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Calendar className="h-4 w-4 text-[#16a34a]" />
                        <span className="text-sm text-[#737373]">
                          Graduated {item.graduationYear}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-[#f5f5f5] rounded-lg p-4 border-l-4 border-[#16a34a]">
                      <p className="text-sm font-medium text-[#374151] mb-2">
                        Relevant Coursework:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {item.coursework.map((course, courseIndex) => (
                          <span key={courseIndex} className="text-sm text-[#737373]">
                            • {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f766e]/10">
                <Award className="h-5 w-5 text-[#0f766e]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#0f766e]">Certifications & Licenses</h2>
            </div>
            
            {/* Timeline Line */}
            <div className="absolute left-5 top-16 bottom-0 w-0.5 bg-[#16a34a]/30" />
            
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-3 top-2 h-4 w-4 rounded-full bg-[#16a34a] ring-4 ring-white shadow-sm" />
                  
                  <div className="bg-white border border-[#e5e5e5] rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h3 className="text-base font-semibold text-[#374151] leading-tight mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm font-medium text-[#0f766e] mb-3">
                      {item.organization}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#16a34a]" />
                        <span className="text-xs text-[#737373]">
                          Valid from {item.validFrom}
                        </span>
                      </div>
                      {item.validTo && (
                        <div className="px-2 py-1 bg-[#16a34a]/10 text-[#16a34a] text-xs font-medium rounded-md">
                          Expires {item.validTo}
                        </div>
                      )}
                      {!item.validTo && (
                        <div className="px-2 py-1 bg-[#0f766e]/10 text-[#0f766e] text-xs font-medium rounded-md">
                          Permanent
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationCertifications
