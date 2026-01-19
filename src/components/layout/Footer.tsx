import { Container } from "../ui/Container"
import { Zap } from "lucide-react"

import { Link } from "react-router-dom"
import { navigation } from "../../config/navigation"

// ... imports

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:gap-12">
          {/* ... Brand Column ... */}
          
          {Object.entries(navigation.footer).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-text-primary mb-3 capitalize">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social icons placeholder */}
            <div className="h-5 w-5 bg-border/50 rounded" />
            <div className="h-5 w-5 bg-border/50 rounded" />
            <div className="h-5 w-5 bg-border/50 rounded" />
          </div>
        </div>
      </Container>
    </footer>
  )
}
