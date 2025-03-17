"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileVideo, CheckCircle } from "lucide-react"

// Custom card styling for dark theme
const darkCard = "bg-black/40 border-indigo-700/50 backdrop-blur-sm"

export default function UploadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Upload Video</h2>
        <p className="text-muted-foreground">Upload your video footage for anomaly detection and event tracking.</p>
      </div>

      <Card className={darkCard}>
        <CardHeader>
          <CardTitle>Video Upload</CardTitle>
          <CardDescription>Supported formats: MP4, AVI, MOV, WMV (Max size: 500MB)</CardDescription>
        </CardHeader>
        <CardContent>
          <UploadForm />
        </CardContent>
      </Card>

      <Card className={darkCard}>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>Your most recent video uploads and their processing status.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Surveillance_Front_Door.mp4", status: "completed", date: "2023-03-15" },
              { name: "Warehouse_Camera_1.mp4", status: "processing", date: "2023-03-14" },
              { name: "Office_Entrance.mp4", status: "completed", date: "2023-03-12" },
            ].map((upload, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-indigo-700/50 bg-black/20 p-4"
              >
                <div className="flex items-center gap-4">
                  <FileVideo className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{upload.name}</p>
                    <p className="text-sm text-muted-foreground">Uploaded on {upload.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {upload.status === "completed" ? (
                    <div className="flex items-center gap-1 text-green-500">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Completed</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-amber-500">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span className="text-sm">Processing</span>
                    </div>
                  )}
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function UploadForm() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center rounded-lg border border-indigo-700/50 border-dashed bg-black/20 p-12">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Upload className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold">Drag & drop your video file</h3>
          <p className="text-sm text-muted-foreground">or click to browse files on your computer</p>
        </div>
        <Input type="file" className="hidden" id="video-upload" accept="video/mp4,video/x-m4v,video/*" />
        <Button className="mt-4" onClick={() => document.getElementById("video-upload")?.click()}>
          Select File
        </Button>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Video Title</Label>
          <Input id="title" placeholder="Enter a title for your video" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea id="description" placeholder="Add a description of the video content or location" rows={3} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location (Optional)</Label>
          <Input id="location" placeholder="e.g., Front Entrance, Warehouse, etc." />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tags">Tags (Optional)</Label>
          <Input id="tags" placeholder="e.g., surveillance, outdoor, night" />
          <p className="text-xs text-muted-foreground">Separate tags with commas</p>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Upload & Process</Button>
        </div>
      </div>
    </div>
  )
}

