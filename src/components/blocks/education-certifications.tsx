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
      institution: "Stanford University",
      degree: "Doctor of Medicine (M.D.)",
      graduationYear: "2019",
      coursework: ["Advanced Clinical Practice", "Medical Ethics", "Healthcare Leadership", "Research Methodology"]
    },
    {
      institution: "Harvard University",
      degree: "Bachelor of Science in Biology",
      graduationYear: "2015",
      coursework: ["Molecular Biology", "Organic Chemistry", "Biostatistics", "Human Anatomy"]
    },
    {
      institution: "Massachusetts Institute of Technology",
      degree: "Certificate in Healthcare Innovation",
      graduationYear: "2014",
      coursework: ["Digital Health Technologies", "Healthcare Systems", "Innovation Management"]
    }
  ]

  const certifications: CertificationItem[] = [
    {
      name: "Board Certified Internal Medicine",
      organization: "American Board of Internal Medicine",
      validFrom: "2020",
      validTo: "2030"
    },
    {
      name: "Advanced Cardiac Life Support (ACLS)",
      organization: "American Heart Association",
      validFrom: "2023",
      validTo: "2025"
    },
    {
      name: "Basic Life Support (BLS)",
      organization: "American Heart Association",
      validFrom: "2023",
      validTo: "2025"
    },
    {
      name: "Medical License - California",
      organization: "Medical Board of California",
      validFrom: "2020"
    },
    {
      name: "DEA Registration",
      organization: "Drug Enforcement Administration",
      validFrom: "2020",
      validTo: "2026"
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
