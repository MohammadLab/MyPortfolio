
export default function ResumePage() {
  return (
    <div className="container space-y-6">
      <h1 className="text-4xl">Resume</h1>
      <a href="/Mohammad_Labak_Resume.pdf" download className="btn-primary w-fit">Download PDF</a>
      <div className="aspect-[1/1.4142] w-full border border-white/10 rounded-xl overflow-hidden">
        <iframe src="/Mohammad_Labak_Resume.pdf" className="w-full h-full" title="Resume" />
      </div>
    </div>
  );
}
