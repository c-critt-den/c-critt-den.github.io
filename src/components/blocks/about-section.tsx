"use client"

import { Users, Target, Building2 } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="bg-white py-24 px-4 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f766e' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Professional Headshot */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl shadow-black/10 flex items-center justify-center border border-gray-200 group-hover:shadow-2xl group-hover:shadow-black/15 transition-all duration-300">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-deep-teal)] to-[var(--color-sage-green)] flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-500 text-sm font-medium">Professional Photo</p>
                  <p className="text-gray-400 text-xs mt-1">Coming Soon</p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[var(--color-sage-green)] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[var(--color-deep-teal)] rounded-full opacity-15 group-hover:opacity-25 transition-opacity duration-300" />
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-8 font-[var(--font-display)] text-[var(--color-deep-teal)]">
                About Me
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-[var(--color-text-body)] font-[var(--font-body)]">
                  As a dedicated health informatics professional, I bridge the critical gap between healthcare delivery and technology innovation. With over a decade of experience in the field, I've witnessed firsthand how thoughtful implementation of digital solutions can transform patient outcomes and streamline clinical workflows.
                </p>
                
                <p className="text-[var(--color-text-body)] font-[var(--font-body)]">
                  My passion lies in developing and implementing technology solutions that genuinely improve healthcare accessibility, quality, and efficiency. I believe that the most impactful health informatics work happens when we deeply understand both the clinical environment and the technological possibilities.
                </p>
                
                <p className="text-[var(--color-text-body)] font-[var(--font-body)]">
                  My approach to problem-solving is rooted in collaboration, evidence-based decision making, and a commitment to user-centered design. Every project I undertake begins with understanding the real-world needs of healthcare providers and patients, ensuring that technology serves people rather than the other way around.
                </p>
              </div>
            </div>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="group">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--color-sage-green)]/20 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-[var(--color-deep-teal)]/10 rounded-lg group-hover:bg-[var(--color-deep-teal)]/15 transition-colors duration-300">
                      <Target className="w-5 h-5 text-[var(--color-deep-teal)]" />
                    </div>
                    <div className="w-px h-6 bg-[var(--color-sage-green)]/30" />
                  </div>
                  <div className="text-3xl font-bold text-[var(--color-deep-teal)] mb-1 font-[var(--font-display)]">10+</div>
                  <div className="text-sm font-medium text-gray-600 font-[var(--font-body)]">Years Experience</div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--color-sage-green)]/20 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-[var(--color-sage-green)]/10 rounded-lg group-hover:bg-[var(--color-sage-green)]/15 transition-colors duration-300">
                      <Users className="w-5 h-5 text-[var(--color-sage-green)]" />
                    </div>
                    <div className="w-px h-6 bg-[var(--color-deep-teal)]/30" />
                  </div>
                  <div className="text-3xl font-bold text-[var(--color-deep-teal)] mb-1 font-[var(--font-display)]">50+</div>
                  <div className="text-sm font-medium text-gray-600 font-[var(--font-body)]">Projects Completed</div>
                </div>
              </div>

              <div className="group">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--color-sage-green)]/20 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-gradient-to-br from-[var(--color-deep-teal)]/10 to-[var(--color-sage-green)]/10 rounded-lg group-hover:from-[var(--color-deep-teal)]/15 group-hover:to-[var(--color-sage-green)]/15 transition-colors duration-300">
                      <Building2 className="w-5 h-5 text-[var(--color-deep-teal)]" />
                    </div>
                    <div className="w-px h-6 bg-[var(--color-sage-green)]/30" />
                  </div>
                  <div className="text-3xl font-bold text-[var(--color-deep-teal)] mb-1 font-[var(--font-display)]">25+</div>
                  <div className="text-sm font-medium text-gray-600 font-[var(--font-body)]">Healthcare Organizations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
