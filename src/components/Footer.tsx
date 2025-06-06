
export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sreyas S. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
