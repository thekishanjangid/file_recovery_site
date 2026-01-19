import { Container } from "../ui/Container"
import { Button } from "../ui/Button"
import { Zap } from "lucide-react"
import { Link } from "react-router-dom"
import { navigation } from "../../config/navigation"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 select-none"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
            <Zap className="h-4 w-4 fill-current" />
          </div>
          <span className="text-lg font-bold tracking-tight text-text-primary">Acme.ai</span>
        </Link>

        <div className="hidden md:flex md:gap-x-8">
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button size="sm">Start for free</Button>
        </div>
      </Container>
    </nav>
  )
}
