import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Benjamin Wilhelm
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Web Developer
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/projects">
                  <Button className="gap-1">
                    View My Work <MoveRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Contact Me</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Projects
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent work
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    E-commerce Platform
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    React, Node.js, MongoDB
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="E-commerce Platform"
                      className="object-cover w-full h-full"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      A full-featured e-commerce platform with payment
                      processing and inventory management.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Portfolio Dashboard
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Next.js, Tailwind CSS, Prisma
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Portfolio Dashboard"
                      className="object-cover w-full h-full"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      A dashboard for tracking investments and financial
                      portfolio performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/projects">
                <Button variant="outline">View All Projects</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
