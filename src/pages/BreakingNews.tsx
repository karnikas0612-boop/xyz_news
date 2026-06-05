import Header from "@/components/site/Header";

const BreakingNews = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      <section className="container py-20">
        <h1 className="text-5xl font-bold font-display">
          Breaking News Coverage
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Full news story, embedded video, photos and details go here.
        </p>

        <video
          controls
          className="w-full rounded-xl mt-8"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

      </section>
    </div>
  );
};

export default BreakingNews;