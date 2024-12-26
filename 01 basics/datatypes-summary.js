<header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=32&width=32" alt="LeetCode Logo" className="w-8 h-8" />
            <nav className="hidden md:flex space-x-4">
              <Link className="text-sm font-medium hover:text-primary" href="#">
                Explore
              </Link>
              <Link className="text-sm font-medium hover:text-primary" href="#">
                Problems
              </Link>
              <Link className="text-sm font-medium hover:text-primary" href="#">
                Contest
              </Link>
              <Link className="text-sm font-medium hover:text-primary" href="#">
                Discuss
              </Link>
              <Link className="text-sm font-medium hover:text-primary" href="#">
                Interview
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Input className="w-64" placeholder="Search problems" type="search" />
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </header>