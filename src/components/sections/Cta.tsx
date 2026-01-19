import { Container } from "../ui/Container"
import { Button } from "../ui/Button"

export function Cta() {
  return (
    <section className="py-24 border-t border-border bg-surface/30">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl mb-6">
            Don't wait. The sooner you scan, the better.
          </h2>
          <p className="max-w-2xl text-lg text-text-secondary mb-10">
            Every minute you use your computer reduces the chance of a perfect recovery. Stop writing data and start your scan now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
             <Button size="lg">Download Windows File Recovery</Button>
             <Button variant="secondary" size="lg">See How It Works</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
