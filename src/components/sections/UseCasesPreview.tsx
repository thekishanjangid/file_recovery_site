import { Container } from "../ui/Container"
import { Trash2, HardDrive, RefreshCcw } from "lucide-react"

const cases = [
  {
    icon: Trash2,
    title: "Accidentally Deleted",
    desc: "Recover files you accidentally deleted or Shift+Deleted."
  },
  {
    icon: RefreshCcw,
    title: "Emptied Recycle Bin",
    desc: "Restores files even after you've emptied the bin."
  },
  {
    icon: HardDrive,
    title: "Formatted Drive",
    desc: "Scans formatted partitions to find original data structures."
  }
]

export function UseCasesPreview() {
  return (
    <section className="py-24 border-b border-border/40">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">We've Seen It All</h2>
          <p className="text-text-secondary">Common scenarios we handle every day.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div key={item.title} className="bg-surface border border-border p-6 rounded-2xl flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
