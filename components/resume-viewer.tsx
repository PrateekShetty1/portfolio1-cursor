"use client"

import { X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeViewer({ onClose }: { onClose: () => void }) {
  // Function to download the PDF
  const downloadResume = () => {
    // Create a link to download the PDF
    const link = document.createElement("a")
    link.href = "/Prateek_Shetty_Resume.pdf"
    link.download = "Prateek_Shetty_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-amber-50 rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-amber-200">
          <h2 className="text-xl font-bold text-amber-900">Resume</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="border-amber-300 text-amber-700 hover:bg-amber-100"
              onClick={downloadResume}
              aria-label="Download Resume"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-amber-300 text-amber-700 hover:bg-amber-100"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 w-full h-full min-h-[70vh] overflow-auto p-4">
          <iframe
            src="/Prateek_Shetty_Resume.pdf"
            className="w-full h-full min-h-[70vh] rounded-md border border-amber-200"
            title="Prateek Shetty Resume"
          />
        </div>

        <div className="p-4 border-t border-amber-200 flex justify-end items-center">
          <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
