import { Container } from "../ui/Container"
import { Search, FileImage, Eye, HardDrive, Filter, AlertOctagon } from "lucide-react"
import { cn } from "../../lib/utils"

const features = [
  {
    icon: Search,
    title: "Deep Scan Engine",
    description: "Locates 'invisible' files that have been deleted for weeks or longer.",
    className: "md:col-span-2"
  },
  {
    icon: FileImage,
    title: "Universal File Support",
    description: "Recover 1000+ formats including JPG, PNG, DOCX, XLXS, MP4, and ZIP.",
    className: "md:col-span-1"
  },
  {
    icon: Eye,
    title: "Preview Before Recovery",
    description: "Don't guess. View your photos and documents in full quality before you decide to save them.",
    className: "md:col-span-1"
  },
  {
    icon: HardDrive,
    title: "Partition Recovery",
    description: "Find data even if an entire drive letter or partition has vanished from 'My Computer'.",
    className: "md:col-span-2"
  },
  {
    icon: Filter,
    title: "Smart Filter",
    description: "Instantly sort thousands of found files by Date, Size, or File Type to find exactly what you need.",
    className: "md:col-span-1"
  },
  {
    icon: AlertOctagon,
    title: "Crash Recovery",
    description: "Create a bootable USB drive to rescue data from a PC that won't turn on (BSOD).",
    className: "md:col-span-2"
  }
]

export function Features() {
  return (
    <section className="py-24 sm:py-32" id="features">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-4">
            Powerful Recovery Under the Hood.
          </h2>
          <p className="text-lg text-text-secondary">
            Built for when failure is not an option. Recover your digital life in three clicks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div 
              key={feature.title} 
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-text-muted/20",
                feature.className
              )}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background border border-border shadow-sm">
                <feature.icon className="h-5 w-5 text-text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                {feature.title}
              </h3>
              <p className="text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
