import { Container } from "../ui/Container"
import { Button } from "../ui/Button"
import { Badge } from "../ui/Badge"
import { ArrowRight, Download, ShieldCheck, Loader2 } from "lucide-react"

import { useDownload } from "../../hooks/useDownload"
import { useNavigate } from "react-router-dom"


export function Hero() {
  const { triggerDownload } = useDownload();
  const navigate = useNavigate();


  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface via-background to-background" />
      
      <Container className="flex flex-col items-center text-center">
        <Badge variant="outline" className="mb-6 animate-fade-in gap-1.5 py-1 px-3">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Compatible with Windows 11, 10, 8
        </Badge>
        
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-text-primary sm:text-7xl mb-6">
          Stop Panic. <br className="hidden sm:block" />
          <span className="text-text-secondary">Start Recovering.</span>
        </h1>
        
        <p className="max-w-2xl text-lg text-text-secondary mb-8 leading-relaxed">
          The professional tool to restore deleted photos, documents, and data from Windows PCs, hard drives, USBs, and SD cards. 100% safe and read-only.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
          <Button size="lg" className="h-12 px-8 text-base group" onClick={triggerDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download Free Version
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="h-12 px-8 text-base"
            onClick={() => navigate('/premium')}
          >
             <ShieldCheck className="mr-2 h-4 w-4 text-green-600" />
            Get Premium Software
          </Button>
        </div>

        {/* Abstract Product Visual Placeholder */}
        <div className="relative w-full max-w-5xl mx-auto rounded-xl border border-border bg-surface/50 p-2 sm:p-4 shadow-2xl shadow-brand/5">
          <div className="aspect-[16/9] w-full rounded-lg bg-background border border-border flex items-center justify-center overflow-hidden relative">
             {/* Fake UI: File List */}
             <div className="absolute inset-0 bg-background flex flex-col">
                <div className="h-12 border-b border-border flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 p-8">
                   <div className="flex justify-between items-center mb-6">
                      <div className="text-xl font-semibold">Deep Scan Results</div>
                      <Badge>2,405 Files Found</Badge>
                   </div>
{/* Animation Logic: Infinite vertical scroll with pause on hover */}
                   <style>{`
                     @keyframes scroll-vertical {
                       from { transform: translateY(0); }
                       to { transform: translateY(-50%); }
                     }
                     .animate-scroll-vertical {
                       animation: scroll-vertical 20s linear infinite;
                     }
                   `}</style>
                   
                   {/* Scroll Container */}
                   <div className="relative h-64 overflow-hidden group mask-linear-fade">
                      {/* Animated Wrapper */}
                      <div className="animate-scroll-vertical group-hover:[animation-play-state:paused] w-full flex flex-col space-y-3">
                          {/* File Data Definition */}
                          {(() => {
                            const scannedFiles = [
                              { name: "Invoice_2023_Q4.pdf", size: "1.2 MB", status: "Recoverable" },
                              { name: "IMG_1842.jpg", size: "4.8 MB", status: "Excellent" },
                              { name: "Project_Alpha_Backup.zip", size: "240 MB", status: "Good" },
                              { name: "Financial_Report.xlsx", size: "85 KB", status: "Recoverable" },
                              { name: "Vacation_Video_01.mp4", size: "450 MB", status: "Partial" },
                              { name: "Resume_Final.docx", size: "120 KB", status: "Excellent" },
                              { name: "System_Log.txt", size: "12 KB", status: "Good" },
                              { name: "Presentation_v2.pptx", size: "15 MB", status: "Recoverable" },
                            ];

                            const FileRow = ({ file }: { file: typeof scannedFiles[0] }) => (
                              <div className="h-12 w-full border border-border rounded flex items-center px-4 gap-4 shrink-0 bg-surface/40">
                                  {/* Icon Placeholder - Kept Structure */}
                                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center shrink-0">
                                    <div className="w-3 h-3 bg-blue-500/20 rounded-sm" />
                                  </div>
                                  
                                  {/* File Name */}
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-text-primary truncate font-mono sm:font-sans opacity-90">
                                      {file.name}
                                    </div>
                                  </div>
                                  
                                  {/* Metadata */}
                                  <div className="hidden sm:flex items-center gap-3 text-xs text-text-secondary whitespace-nowrap">
                                    <span>{file.size}</span>
                                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium border ${
                                      file.status === 'Excellent' ? 'bg-green-100 text-green-700 border-green-200' :
                                      file.status === 'Good' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                                      file.status === 'Recoverable' ? 'bg-gray-100 text-gray-700 border-gray-200' :
                                      'bg-yellow-50 text-yellow-700 border-yellow-100'
                                    }`}>
                                      {file.status}
                                    </span>
                                  </div>
                              </div>
                            );

                            return (
                              <>
                                {/* First Set */}
                                {scannedFiles.map((file, i) => (
                                  <FileRow key={`original-${i}`} file={file} />
                                ))}
                                {/* Duplicate Set */}
                                {scannedFiles.map((file, i) => (
                                  <FileRow key={`dupe-${i}`} file={file} />
                                ))}
                              </>
                            );
                          })()}
                      </div>
                      
                      {/* Gradient Masks for Premium Fade In/Out - Kept as structural requirement for infinite scroll illusion */}
                      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
                      <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
