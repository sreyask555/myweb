
export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sreyas
          </div>
          <div className="text-sm text-muted-foreground">
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
