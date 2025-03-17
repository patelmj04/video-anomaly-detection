import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Bell, BarChart3 } from "lucide-react";

export default function LandingPage() {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Start playing the video
      videoRef.current.muted = false; // Unmute the video (optional)
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-indigo-600 to-blue-900 text-white">
      {/* Header Section */}
      <header className="border-b border-indigo-700/50 bg-black/20 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Eye className="h-6 w-6" />
            <span className="text-xl font-bold">VADET</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#demo" className="text-sm font-medium hover:underline underline-offset-4">
              Demo
            </Link>
          </nav>
          <div className="flex items-center gap-4 text-black">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              
              {/* Text Content */}
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Advance Video Anomaly Detection & Event Tracking
                </h1>
                <p className="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Detect unusual activities, track events, and receive real-time alerts with our AI-powered video analysis platform.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button className="w-full min-[400px]:w-auto border-white text-white hover:bg-white hover:text-black">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="w-full min-[400px]:w-auto border-white text-blue-500 hover:bg-blue-500 hover:text-white"
                    onClick={handlePlayVideo} // Start video on click
                  >
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Video Container */}
              <div id="demo" className="relative aspect-video overflow-hidden rounded-xl shadow-[10px_20px_30px_rgba(0,0,0,0.3)] hover:shadow-[10px_25px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300">
                <video 
                  ref={videoRef} 
                  src="/videoplayback.mp4" 
                  loop 
                  autoPlay
                  muted 
                  className="object-cover w-full h-full"
                  onMouseEnter={(e) => e.target.play()} // Play on hover
                  onClick={(e) => e.target.play()} // Play on click
                />
              </div>

              {/* <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Video surveillance dashboard"
                  width={1280}
                  height={720}
                  className="object-cover"
                  priority
                />
              </div> */}
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-indigo-950/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers powerful tools to help you monitor and analyze video footage
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
  <div className="flex flex-col items-center space-y-4 rounded-lg border bg-gray-100 dark:bg-gray-900 p-6 shadow-lg transition-colors hover:bg-gray-300 dark:hover:bg-gray-900">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
      <Eye className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold text-black">Anomaly Detection</h3>
    <p className="text-center text-muted-foreground">
      Automatically identify unusual activities and behaviors in video footage using advanced AI algorithms.
    </p>
  </div>
  <div className="flex flex-col items-center space-y-4 rounded-lg border bg-gray-100 dark:bg-gray-800 p-6 shadow-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
      <Bell className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold text-black">Real-time Alerts</h3>
    <p className="text-center text-muted-foreground">
      Receive instant notifications when suspicious activities are detected, allowing for immediate response.
    </p>
  </div>
  <div className="flex flex-col items-center space-y-4 rounded-lg border bg-gray-100 dark:bg-gray-800 p-6 shadow-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
      <BarChart3 className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold text-black">Event Analytics</h3>
    <p className="text-center text-muted-foreground">
      Gain valuable insights with comprehensive analytics and reports on detected events and patterns.
    </p>
  </div>
</div>

          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes video analysis simple and effective
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Upload</h3>
                <p className="text-center text-white">
                  Upload your video footage through our secure platform.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Analyze</h3>
                <p className="text-center text-white">
                  Our AI algorithms analyze the footage to detect anomalies and track events.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Monitor</h3>
                <p className="text-center text-white">
                  Review results, receive alerts, and gain insights through our dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of organizations using our platform to enhance their video surveillance
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto border-white text-black hover:bg-black hover:text-white">
                    Sign Up Now
                  </Button>
                </Link>
                <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto border-white text-blue-500 hover:bg-blue-500 hover:text-white">
                  Contact Sales
                </Button>

                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-indigo-700/50 bg-black/20 backdrop-blur-sm">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
          <div className="flex flex-col gap-2 md:gap-4 lg:flex-1">
            <div className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              <span className="text-lg font-bold">VideoGuard</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Advanced video anomaly detection and event tracking platform.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#features" className="text-sm text-muted-foreground hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-sm text-muted-foreground hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#demo" className="text-sm text-muted-foreground hover:underline">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center justify-between gap-4 border-t py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} VideoGuard. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

