
export default function ResumePage() {
  return (
    <div className="container space-y-6">
      <h1 className="text-4xl">Resume</h1>
      <a href="/resume.pdf" download className="btn-primary w-fit">Download PDF</a>
      <div className="aspect-[1/1.4142] w-full border border-white/10 rounded-xl overflow-hidden">
        <iframe src="/resume.pdf" className="w-full h-full" title="Resume" />
      </div>
    </div>
  );
}
