export default function Hero() {
  return (
    <div className="min-h-[100vh] flex justify-center items-center" id="hero">
      <div className="hero-section text-center py-20 px-6">
        <h1 className="text-4xl font-mono font-bold tracking-tight mb-4 text-foreground">
          Hi, I’m Rahul
        </h1>
        <h2 className="text-2xl font-mono font-semibold mb-6 text-muted-foreground">
          Full-Stack Developer | DevOps Engineer | Problem Solver
        </h2>
        <p className="text-lg mb-4 text-muted-foreground">
          Building modern, scalable web solutions. Currently diving deep into
          DevOps & Cloud to create high-performance systems.
        </p>
        <p className="text-md mb-6 text-muted-foreground">
          I’m always learning, building, and solving problems. Let’s connect and
          turn your ideas into reality.
        </p>
      </div>
    </div>
  );
}
